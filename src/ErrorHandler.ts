import { Dictionary } from 'lodash';

export default class ErrorHandler extends Error {
  statusCode?: number;
  fieldErrors?: Dictionary<{ id: string; message: string }[]>;

  constructor(statusCode: number, message: string, fieldErrors: Dictionary<{ id: string; message: string }[]> = {}) {
    super(message);
    this.statusCode = statusCode;
    this.fieldErrors = fieldErrors;
  }
}
