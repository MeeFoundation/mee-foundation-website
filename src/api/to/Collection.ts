export interface NewCollectionTO {
  name: string,
  note: string,
}

export interface CollectionTO extends NewCollectionTO {
  id: string,
  created: string,
  modified: string
}
