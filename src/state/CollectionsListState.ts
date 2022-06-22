import { SecretApi } from 'src/api/common';
import { atomFamily } from 'jotai/utils';
import { atom } from 'jotai';

export const CollectionsListState = atomFamily(() => atom(async () => {
  const response = await SecretApi.getAllCollections();
  return response;
}));

export const CollectionByIdState = atomFamily((id?: string) => atom(async () => {
  if (typeof id === 'undefined') return undefined;
  const response = await SecretApi.getCollectionById(id);
  return response;
}));
