/* eslint-disable class-methods-use-this */
import { svcUrl } from 'src/config';
import { fromISOStr } from 'src/utils/dateUtils';
import { AuthApiInterface } from './AuthApi';
import { BaseRestClient } from './BaseRestClient';
import { AuthResponse, AuthResponseTO } from './to/Auth';

const client = new BaseRestClient({
  baseURL: svcUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf8',
  },
});

const auth = '/auth';

export class AuthLiveApi implements AuthApiInterface {
  async auth(): Promise<AuthResponse | null> {
    const url = auth;
    const r = await client.apiPost<AuthResponseTO | null>(url);
    if (r === null) return null;
    return {
      ...r, exp: fromISOStr(r.exp),
    };
  }
}
