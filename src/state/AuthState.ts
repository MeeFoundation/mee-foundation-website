import { atom } from 'jotai';
import { AuthApi } from 'src/api/common';

export const AuthState = atom(async () => {
  const response = await AuthApi.auth();
  return response;
});
