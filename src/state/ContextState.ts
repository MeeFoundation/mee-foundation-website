/* eslint-disable no-console */
import { atom } from 'jotai';
import { AppContextData } from 'src/model/appContext';

const LOCAL_STORAGE_KEY = 'appContext';

const setLocalStorageEntry = (value: AppContextData) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
  } catch {
    // eslint-disable-next-line no-console
    console.log('Error while setting up local storage value');
  }
};

const ConsentStateAtom = atom<AppContextData>({});

ConsentStateAtom.onMount = (setAtom) => {
  try {
    const appContextString = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (appContextString === null) return;
    const appContext = JSON.parse(appContextString);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setAtom(appContext);
  } catch {
    console.log('No item in local storage');
  }
};

export const ContextState = atom<AppContextData, AppContextData>(
  (get) => get(ConsentStateAtom),
  (_get, set, newValue) => {
    setLocalStorageEntry(newValue);
    set(ConsentStateAtom, newValue);
  },
);
