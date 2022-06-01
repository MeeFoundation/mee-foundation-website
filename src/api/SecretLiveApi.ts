/* eslint-disable class-methods-use-this */
import { svcUrl } from 'src/config';
import {
  Collection, NewCollection, NewSecret, Secret,
} from 'src/model/Secret';
import { fromISOStr } from 'src/utils/dateUtils';
import { BaseRestClient } from './BaseRestClient';
import { SecretApi } from './SecretApi';
import { CollectionTO } from './to/Collection';
import { SecretKey, SecretTO } from './to/Secret';

const client = new BaseRestClient({
  baseURL: svcUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf8',
  },
});

const collection = '/collection';
const collections = '/collections';
const secret = '/secret';
const secrets = '/secrets';

export class SecretLiveApi implements SecretApi {
  async getAllCollections(): Promise<Collection[]> {
    const url = collections;
    const r = await client.apiGet<CollectionTO[]>(url);
    return r.map((item) => ({
      ...item, created: fromISOStr(item.created), modified: fromISOStr(item.modified),
    }));
  }

  createNewCollection(data: NewCollection): Promise<void> {
    const url = collection;
    return client.apiPost<void>(url, data);
  }

  updateCollection(data: NewCollection): Promise<void> {
    const url = collection;
    return client.apiPut<void>(url, data);
  }

  async getCollectionById(collectionId: string): Promise<Collection> {
    const url = `${collections}/${collectionId}`;
    const to = await client.apiGet<CollectionTO>(url);
    return { ...to, created: fromISOStr(to.created), modified: fromISOStr(to.modified) };
  }

  async getSecretsByCollectionId(collectionId: string): Promise<Secret[]> {
    const url = `${collection}/${collectionId}${secrets}`;
    const to = await client.apiGet<SecretTO[]>(url);
    return to.map((item) => ({
      ...item, created: fromISOStr(item.created), modified: fromISOStr(item.modified),
    }));
  }

  getSecretValueById(secretId: string): Promise<string> {
    const url = `${secret}/${secretId}/value`;
    return client.apiGet<string>(url);
  }

  updateSecretById(id: string, data: SecretKey): Promise<void> {
    const url = `${secret}/${id}/value`;
    return client.apiPost(url, data);
  }

  getSecretById(secretId: string): Promise<SecretKey> {
    const url = `${secret}/${secretId}`;
    return client.apiGet<SecretKey>(url);
  }

  async createNewSecret(data: NewSecret): Promise<Secret> {
    const url = secret;
    const to = await client.apiPost<SecretTO>(url, data);
    return { ...to, created: fromISOStr(to.created), modified: fromISOStr(to.modified) };
  }

  async updateSecret(data: NewSecret): Promise<Secret> {
    const url = secret;
    const to = await client.apiPut<SecretTO>(url, data);
    return { ...to, created: fromISOStr(to.created), modified: fromISOStr(to.modified) };
  }
}
