import { atom } from 'jotai';
import { MeeResponse } from 'mee-js-sdk';

export const MeeAuthState = atom<MeeResponse | null>(null);
