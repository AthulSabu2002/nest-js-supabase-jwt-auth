import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class AuthService {
	constructor(private supabaseService: SupabaseService) {}

	async signUp(email: string, password: string) {
		const { data, error } = await this.supabaseService
			.getClient()
			.auth.signUp({ email, password });

		if (error) {
			throw new UnauthorizedException(error.message);
		}

		return data;
	}

	async signIn(email: string, password: string) {
		const { data, error } = await this.supabaseService
			.getClient()
			.auth.signInWithPassword({ email, password });

		if (error) {
			throw new UnauthorizedException(error.message);
		}

		return {
			user: data.user,
			session: data.session,
		};
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async getProfile(userId: string) {
		const supabase = this.supabaseService.getClient();
		const { data, error } = await supabase.auth.getUser();
		if (error) {
			throw new UnauthorizedException(error.message);
		}
		return data.user;
	}
}
