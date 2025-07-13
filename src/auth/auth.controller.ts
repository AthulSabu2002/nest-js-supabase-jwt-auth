import {
	Controller,
	Post,
	Body,
	Get,
	UseGuards,
	Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SupabaseAuthGuard } from '../supabase/supabase-auth.guard';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('signup')
	async signUp(@Body() body: { email: string; password: string }) {
		return this.authService.signUp(body.email, body.password);
	}

	@Post('signin')
	async signIn(@Body() body: { email: string; password: string }) {
		return this.authService.signIn(body.email, body.password);
	}

	@UseGuards(SupabaseAuthGuard)
	@Get('profile')
	async getProfile(@Request() req: { user: { userId: string } }) {
		return this.authService.getProfile(req.user.userId);
	}
}
