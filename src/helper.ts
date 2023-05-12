
export const parseMatrix = (matrix: string): string[] => {
  const matrixPattern = /^\w*\((((-?\d+)|(-?\d*\.\d+)),\s*)*((-?\d+)|(-?\d*\.\d+))\)/i;
  let matrixValue: string[] = [];
  if (matrixPattern.test(matrix)) {
      const matrixCopy = matrix.replace(/^\w*\(/, '').replace(')', '');
      matrixValue = matrixCopy.split(/\s*,\s*/);
  }
  return matrixValue
}