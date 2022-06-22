/* eslint-disable class-methods-use-this */
import { AuthApiInterface } from './AuthApi';
import { AuthResponse } from './to/Auth';

export class AuthMockApi implements AuthApiInterface {
  async auth(): Promise<AuthResponse | null> {
    const data = { token: 'yyewshjdSHGDAJHG8ew78r6', exp: new Date() };
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  }
}
