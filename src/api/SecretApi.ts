import {
  Collection, NewCollection, NewSecret, Secret,
} from 'src/model/Secret';
import { SecretKey } from './to/Secret';

export interface SecretApiInterface {
  getAllCollections(): Promise<Collection[]>;
  createNewCollection(data: NewCollection): Promise<void>;
  updateCollection(data: NewCollection): Promise<void>;
  getCollectionById(collectionId: string): Promise<Collection>;
  getSecretsByCollectionId(collectionId: string): Promise<Secret[]>;
  getSecretValueById(secretId: string): Promise<string>;
  updateSecretById(id: string, data: SecretKey): Promise<void>;
  getSecretById(secretId: string): Promise<Secret>;
  createNewSecret(data: NewSecret): Promise<Secret>;
  updateSecret(data: NewSecret): Promise<Secret>;
}
