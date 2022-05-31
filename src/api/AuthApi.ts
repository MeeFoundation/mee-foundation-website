import { AuthRequest, AuthResponse } from './to/auth';

export interface AuthApi {
  authWithGoogle(data: AuthRequest): Promise<AuthResponse>;
}
