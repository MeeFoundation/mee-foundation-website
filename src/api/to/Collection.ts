export interface CollectionTO {
  id: string,
  name: string,
  note: string,
  created: string,
  modified: string
}

export type GetAllCollectionsResponse = CollectionTO[];

export interface CreateNewCollectionRequest {
  name: string,
  note: string,
}

export interface UpdateCollectionRequest {
  // collection id is missing?
  name: string,
  note: string,
}
