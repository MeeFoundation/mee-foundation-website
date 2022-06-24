/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import {
  Collection, NewCollection, NewSecret, Secret,
} from 'src/model/Secret';
import { SecretApiInterface } from './SecretApi';
import { SecretContentType, SecretKey } from './to/Secret';

export const mockCollectionsArray: Collection[] = [
  {
    id: '1', created: new Date(), modified: new Date(), name: 'mock collection 1', note: 'mock note 1',
  },
  {
    id: '2', created: new Date(), modified: new Date(), name: 'mock collection 2', note: 'mock note 2',
  },
  {
    id: '3', created: new Date(), modified: new Date(), name: 'mock collection 3', note: 'mock note 3',
  },
  {
    id: '4', created: new Date(), modified: new Date(), name: 'mock collection 4', note: 'mock note 4',
  },
  {
    id: '5', created: new Date(), modified: new Date(), name: 'mock collection 5', note: 'mock note 5',
  },
];

export const mockAllSecretsArray: Secret[] = [{
  id: '1', created: new Date(), modified: new Date(), collection_id: '1', name: 'mock secret 1', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 1', url: 'https://google.com', username: 'mock username',
},
{
  id: '2', created: new Date(), modified: new Date(), collection_id: '1', name: 'mock secret 2', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 2', url: 'https://google.com', username: 'mock username',
},
{
  id: '3', created: new Date(), modified: new Date(), collection_id: '2', name: 'mock secret 3', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 3', url: 'https://google.com', username: 'mock username',
},
{
  id: '4', created: new Date(), modified: new Date(), collection_id: '2', name: 'mock secret 4', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 4', url: 'https://google.com', username: 'mock username',
},
{
  id: '5', created: new Date(), modified: new Date(), collection_id: '2', name: 'mock secret 5', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 5', url: 'https://google.com', username: 'mock username',
},
{
  id: '6', created: new Date(), modified: new Date(), collection_id: '3', name: 'mock secret 6', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 6', url: 'https://google.com', username: 'mock username',
},
{
  id: '7', created: new Date(), modified: new Date(), collection_id: '4', name: 'mock secret 7', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 7', url: 'https://google.com', username: 'mock username',
},
{
  id: '8', created: new Date(), modified: new Date(), collection_id: '4', name: 'mock secret 8', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 8', url: 'https://google.com', username: 'mock username',
},
{
  id: '9', created: new Date(), modified: new Date(), collection_id: '4', name: 'mock secret 9', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 9', url: 'https://google.com', username: 'mock username',
},
{
  id: '10', created: new Date(), modified: new Date(), collection_id: '4', name: 'mock secret 10', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 10', url: 'https://google.com', username: 'mock username',
},
{
  id: '11', created: new Date(), modified: new Date(), collection_id: '4', name: 'mock secret 11', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 11', url: 'https://google.com', username: 'mock username',
},
{
  id: '12', created: new Date(), modified: new Date(), collection_id: '5', name: 'mock secret 12', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 12', url: 'https://google.com', username: 'mock username',
},
{
  id: '13', created: new Date(), modified: new Date(), collection_id: '5', name: 'mock secret 13', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 13', url: 'https://google.com', username: 'mock username',
},
{
  id: '14', created: new Date(), modified: new Date(), collection_id: '5', name: 'mock secret 14', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 14', url: 'https://google.com', username: 'mock username',
},
{
  id: '15', created: new Date(), modified: new Date(), collection_id: '5', name: 'mock secret 15', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 15', url: 'https://google.com', username: 'mock username',
},
{
  id: '16', created: new Date(), modified: new Date(), collection_id: '5', name: 'mock secret 16', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 16', url: 'https://google.com', username: 'mock username',
},
{
  id: '17', created: new Date(), modified: new Date(), collection_id: '5', name: 'mock secret 17', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 17', url: 'https://google.com', username: 'mock username',
},
];
export class SecretMockApi implements SecretApiInterface {
  async getAllCollections(): Promise<Collection[]> {
    const collectionsMockList: Collection[] = mockCollectionsArray;
    console.log('getAllCollections');
    return new Promise((resolve) => {
      setTimeout(() => resolve(collectionsMockList), 500);
    });
  }

  createNewCollection(data: NewCollection): Promise<void> {
    console.log('newCollection: ', data);
    return new Promise((resolve) => {
      setTimeout(() => resolve(undefined), 500);
    });
  }

  updateCollection(data: NewCollection): Promise<void> {
    console.log('updateCollection: ', data);
    return new Promise((resolve) => {
      setTimeout(() => resolve(undefined), 500);
    });
  }

  async getCollectionById(collectionId: string): Promise<Collection> {
    console.log('getCollectionById: ', collectionId);
    const mockCollection = {
      id: '1', created: new Date(), modified: new Date(), name: 'mock collection 1', note: 'mock note 1',
    };
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockCollection), 500);
    });
  }

  async getSecretsByCollectionId(collectionId: string): Promise<Secret[]> {
    console.log('getSecretsCollectionById: ', collectionId);
    const secrets = mockAllSecretsArray;

    return new Promise((resolve) => {
      setTimeout(() => resolve(secrets), 500);
    });
  }

  getSecretValueById(secretId: string): Promise<string> {
    console.log('getSecretValueById: ', secretId);
    return new Promise((resolve) => {
      setTimeout(() => resolve('hcsjhgfjsdhgewd'), 500);
    });
  }

  updateSecretById(id: string, data: SecretKey): Promise<void> {
    console.log('updateSecretById: ', id, data);
    return new Promise((resolve) => {
      setTimeout(() => resolve(undefined), 500);
    });
  }

  getSecretById(secretId: string): Promise<Secret> {
    console.log('getSecretById: ', secretId);
    const secret = {
      id: '1', created: new Date(), modified: new Date(), collection_id: '1', name: 'mock secret 1', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 1', url: 'https://google.com', username: 'mock username',
    };

    return new Promise((resolve) => {
      setTimeout(() => resolve(secret), 500);
    });
  }

  async createNewSecret(data: NewSecret): Promise<Secret> {
    console.log('createNewSecret: ', data);
    const secret = ({
      id: '1', created: new Date(), modified: new Date(), collection_id: '1', name: 'mock secret 1', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 1', url: 'https://google.com', username: 'mock username',
    } as Secret);
    return new Promise((resolve) => {
      setTimeout(() => resolve(secret), 500);
    });
  }

  async updateSecret(data: NewSecret): Promise<Secret> {
    console.log('createNewSecret: ', data);
    const secret = ({
      id: '1', created: new Date(), modified: new Date(), collection_id: '1', name: 'mock secret 1', secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: 'mock note 1', url: 'https://google.com', username: 'mock username',
    } as Secret);
    return new Promise((resolve) => {
      setTimeout(() => resolve(secret), 500);
    });
  }
}
