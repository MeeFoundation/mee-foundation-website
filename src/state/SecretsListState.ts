// import { SecretApi } from 'src/api/common';
import { atomFamily } from 'jotai/utils';
import { atom } from 'jotai';
import { mockAllSecretsArray } from 'src/api/SecretMockApi';
import { Secret } from 'src/model/Secret';

// export const SecretsListState = atomFamily((id?: string) => atom(async () => {
//   if (typeof id === 'undefined') return undefined;
//   const response = await SecretApi.getSecretsByCollectionId(id);
//   return response;
// }));

// export const SecretByIdState = atomFamily((id?: string) => atom(async () => {
//   if (typeof id === 'undefined') return undefined;
//   const response = await SecretApi.getSecretById(id);
//   return response;
// }));

const AllSecretsListState = atom(mockAllSecretsArray);

export const SecretsListState = atomFamily((id?: string) => atom(async (get) => {
  if (typeof id === 'undefined') return undefined;
  const all = get(AllSecretsListState);
  return all.filter((item) => item.collection_id === id);
}));

export const SecretByIdState = atomFamily((id?: string) => atom(
  async (get) => {
    if (typeof id === 'undefined') return undefined;
    const all = get(AllSecretsListState);
    const secret = all.find((item) => item.id === id);
    return secret;
  },
  (get, set, newValue: Secret) => {
    const all = get(AllSecretsListState);
    const newAll = typeof id === 'undefined'
      ? [...all, newValue]
      : [...all.filter((item) => item.id !== id), newValue];
    set(AllSecretsListState, newAll);
  },
));
