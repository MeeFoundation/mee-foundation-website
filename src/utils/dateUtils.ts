import { format, parseISO } from 'date-fns';

const ViewDateFormat = 'dd/MM/yyyy';
const ViewDateTimeFormat = 'dd/MM/yyyy H:mm ';

export const fromISOStr = (dateStr: string): Date => {
  try {
    return parseISO(dateStr);
  } catch {
    throw new Error(`Invalid date format: ${dateStr}`);
  }
};

export const dateToView = (date?: Date | null): string => {
  if (typeof date === 'undefined' || date === null) return 'N/A';
  return format(date, ViewDateFormat);
};

export const dateTimeToView = (date?: Date | null): string => {
  if (typeof date === 'undefined' || date === null) return 'N/A';
  return format(date, ViewDateTimeFormat);
};
