import {
  CollectionTO, CreateNewCollectionRequest, GetAllCollectionsResponse, UpdateCollectionRequest,
} from './to/Collection';
import {
  GetSecretsByCollectionIdTO, NewSecretTO, SecretKey, SecretTO, UpdateSecretByIdTO,
} from './to/Secret';

export interface SecretApi {
  getAllCollections(): Promise<GetAllCollectionsResponse>;
  createNewCollection(data: CreateNewCollectionRequest): Promise<void>;
  updateCollection(data: UpdateCollectionRequest): Promise<void>;
  getCollectionById(collectionId: string): Promise<CollectionTO>;
  getSecretsByCollectionId(collectionId: string): Promise<GetSecretsByCollectionIdTO>;
  getSecretValueById(secretId: string): Promise<string>;
  updateSecretById(data: UpdateSecretByIdTO): Promise<void>;
  getSecretById(secretId: string): Promise<SecretKey>;
  createNewSecret(data: NewSecretTO): Promise<SecretTO>;
  updateSecret(data: NewSecretTO): Promise<SecretTO>;
}
