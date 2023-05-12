import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import type { MeeResponse } from 'mee-js-sdk';

export const SubscribedState = atom<boolean>(false);
