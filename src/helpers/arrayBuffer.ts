export function ab2str(buf: ArrayBuffer): string {
  return String.fromCharCode.apply(null, new Uint8Array(buf) as unknown as number[]);
}

export function str2ab(str: string): ArrayBuffer {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i += 1) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}
