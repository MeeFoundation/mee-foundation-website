import { parseISO } from 'date-fns';

export const fromISOStr = (dateStr: string): Date => {
  try {
    return parseISO(dateStr);
  } catch {
    throw new Error(`Invalid date format: ${dateStr}`);
  }
};
