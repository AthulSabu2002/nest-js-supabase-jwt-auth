import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SupabaseService } from '../supabase/supabase.service';
import { SupabaseAuthGuard } from '../supabase/supabase-auth.guard';

@Module({
	imports: [],
	controllers: [AuthController],
	providers: [AuthService, SupabaseAuthGuard, SupabaseService],
	exports: [AuthService],
})
export class AuthModule {}
