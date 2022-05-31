export enum SecretContentType {
  PlainText = 'PlainText',
  Encrypted = 'Encrypted',
}

export interface SecretKey {
  content_type: SecretContentType;
  data: string;
}

export interface NewSecretTO {
  collection_id: string;
  name: string;
  secret: SecretContentType;
  note: string;
  url: string;
  username: string;
}

export interface SecretTO extends NewSecretTO {
  id: string;
  created: string;
  modified: string;
}

export type GetSecretsByCollectionIdTO = SecretTO[];

export interface UpdateSecretByIdTO {
  id: string;
  data: SecretKey;
}
