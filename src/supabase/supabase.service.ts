import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
	private supabase: SupabaseClient;

	constructor() {
		this.supabase = createClient(
			process.env.SUPABASE_URL!,
			process.env.SUPABASE_ANON_KEY!,
		);
	}

	getClient(): SupabaseClient {
		return this.supabase;
	}
}
