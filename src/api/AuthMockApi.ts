/* eslint-disable class-methods-use-this */
import { AuthApiInterface } from './AuthApi';
import { AuthResponse } from './to/Auth';

export const fakeAuthToken = { token: 'yyewshjdSHGDAJHG8ew78r6', exp: new Date() };

export class AuthMockApi implements AuthApiInterface {
  async auth(): Promise<AuthResponse | null> {
    const data = null;
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 500);
    });
  }
}
