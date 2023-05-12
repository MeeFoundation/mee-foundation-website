/* eslint-disable class-methods-use-this */

import { svcUrl } from "../config";
import { BaseRestClient } from "../legacy/api/BaseRestClient";
import type { ProxyApiInterface } from "../legacy/api/ProxyApi";


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
