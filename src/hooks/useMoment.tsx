import { DateFormatEnum } from 'enums/DateFormatEnum';
import moment from 'moment';

export const useMoment = (format: DateFormatEnum, date?: Date | string) => {
  if (date) return moment(date).format(format);
  return moment().format(format);
};
