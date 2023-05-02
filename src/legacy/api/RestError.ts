import type { AxiosError } from 'axios';
import { gNumber, gObject, gString } from '../../utils/guards';

export class RestError extends Error {
  public constructor(
    readonly code: number,
    readonly msg: string,
  ) {
    super(msg);
  }
}

export const isNoResponseError = (e: AxiosError): boolean => e.isAxiosError && !e.response;

export const isNetworkDisconnectedError = (e: AxiosError): boolean => isNoResponseError(e) && !e.code;

export const isNetworkTimeoutError = (e: AxiosError): boolean => isNoResponseError(e) && e.code === 'ECONNABORTED';

export const isNetworkError = (e: AxiosError): boolean => isNetworkDisconnectedError(e) || isNetworkTimeoutError(e);

export const isRestError = (e: unknown): e is RestError => {
  const isRest = gObject({
    code: gNumber,
    msg: gString,
  });
  return isRest(e);
};

export const toRestError = (e: AxiosError): RestError => {
  if (isNetworkError(e)) {
    return new RestError(0, 'NoConnection');
  }

  const rep: unknown = e.response?.data;
  if (isRestError(rep)) {
    return new RestError(rep.code, rep.msg);
  }

  return new RestError(0, 'UnknownError');
};
