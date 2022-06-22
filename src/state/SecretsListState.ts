import { SecretApi } from 'src/api/common';
import { atomFamily } from 'jotai/utils';
import { atom } from 'jotai';

export const SecretsListState = atomFamily((id?: string) => atom(async () => {
  if (typeof id === 'undefined') return undefined;
  const response = await SecretApi.getSecretsByCollectionId(id);
  return response;
}));

export const SecretByIdState = atomFamily((id?: string) => atom(async () => {
  if (typeof id === 'undefined') return undefined;
  const response = await SecretApi.getSecretById(id);
  return response;
}));
