import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { Request } from 'express';

@Injectable()
export class SupabaseAuthGuard implements CanActivate {
	constructor(private supabaseService: SupabaseService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request: Request = context.switchToHttp().getRequest();
		const authHeader = request.headers.authorization;

		if (!authHeader || !authHeader.startsWith('Bearer ')) {
			throw new UnauthorizedException('Missing or invalid token');
		}

		const token = authHeader.split(' ')[1];
		const { data, error } = await this.supabaseService
			.getClient()
			.auth.getUser(token);

		if (error || !data.user) {
			throw new UnauthorizedException('Invalid token');
		}

		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		(request as any).user = {
			userId: data.user.id,
			email: data.user.email,
		};

		return true;
	}
}
