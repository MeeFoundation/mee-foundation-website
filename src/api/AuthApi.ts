import { AuthResponse } from './to/Auth';

export interface AuthApiInterface {
  auth(): Promise<AuthResponse | null>;
}
