import { atom } from 'jotai';
import { AuthResponse } from 'src/api/to/Auth';
// import { AuthApi } from 'src/api/common';

// export const AuthState = atom(async () => {
//   const response = await AuthApi.auth();
//   return response;
// });

export const AuthState = atom<AuthResponse | null>(null);
