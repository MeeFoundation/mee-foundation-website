import { RefObject, useEffect } from 'react';

export const useClickOutside = (ref: RefObject<HTMLDivElement>, onClose: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClose]);
};
