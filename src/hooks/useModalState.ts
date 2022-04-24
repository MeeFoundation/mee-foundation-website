import React from 'react';

interface ModalCtrlObj { isOpened: boolean; open: () => void; close: () => void }

export const useModalState = (defaultState = false): ModalCtrlObj => {
  const [state, setState] = React.useState<boolean>(defaultState);
  const open = () => setState(true);
  const close = () => setState(false);

  return { isOpened: state, open, close };
};
