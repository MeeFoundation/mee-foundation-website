/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import {
  Collection, NewCollection, NewSecret, Secret,
} from 'src/model/Secret';
import { SecretApiInterface } from './SecretApi';
import { SecretContentType, SecretKey } from './to/Secret';

export class SecretMockApi implements SecretApiInterface {
  async getAllCollections(): Promise<Collection[]> {
    const collectionsMockList: Collection[] = [
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
    const secrets = ['1', '2', '3', '4', '5'].map((item) => ({
      id: `${item}`, created: new Date(), modified: new Date(), collection_id: '1', name: `mock secret ${item}`, secret: { content_type: SecretContentType.PlainText, data: 'jkhkjhasdewuir' }, note: `mock note ${item}`, url: 'https://google.com', username: 'mock username',
    } as Secret));

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
