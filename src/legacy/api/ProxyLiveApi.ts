/* eslint-disable class-methods-use-this */
import type { ProxyApiInterface } from './ProxyApi';
import { BaseRestClient } from './BaseRestClient';
import { svcUrl } from '../../config';

const client = new BaseRestClient({
  baseURL: svcUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf8',
  },
});

const get = '/get';

export class ProxyLiveApi implements ProxyApiInterface {
  async poll(id: string): Promise<string> {
    const url = get;
    return client.apiPost<string>(url, { session_id: id });
  }
}
