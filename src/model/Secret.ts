import { SecretKey } from 'src/api/to/Secret';

export interface NewCollection {
  name: string,
  note: string,
}

export interface Collection extends NewCollection {
  id: string,
  created: Date,
  modified: Date,
}

export interface NewSecret {
  collection_id: string;
  name: string;
  secret: SecretKey;
  note: string;
  url: string;
  username: string;
}

export interface Secret extends NewSecret {
  id: string;
  created: Date;
  modified: Date;
}
