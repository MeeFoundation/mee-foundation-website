// import { SecretApi } from 'src/api/common';
import { atomFamily } from 'jotai/utils';
import { atom } from 'jotai';
import { mockCollectionsArray } from 'src/api/SecretMockApi';
import { Collection } from 'src/model/Secret';

// export const CollectionsListState = atomFamily(() => atom(async () => {
//   const response = await SecretApi.getAllCollections();
//   return response;
// }));

// export const CollectionByIdState = atomFamily((id?: string) => atom(async () => {
//   if (typeof id === 'undefined') return undefined;
//   const response = await SecretApi.getCollectionById(id);
//   return response;
// }));

export const CollectionsListState = atom(mockCollectionsArray);

export const CollectionByIdState = atomFamily((id?: string) => atom(async (get) => {
  if (typeof id === 'undefined') return undefined;
  const collectionsArray = get(CollectionsListState);
  return collectionsArray.find((item) => item.id === id);
}, (get, set, newValue: Collection) => {
  const collectionsArray = get(CollectionsListState);
  if (typeof id === 'undefined') {
    set(CollectionsListState, [...collectionsArray, newValue]);
  } else {
    const newCollectionsArray = collectionsArray.map((item) => {
      if (item.id === id) return newValue;
      return item;
    });
    set(CollectionsListState, newCollectionsArray);
  }
}));
