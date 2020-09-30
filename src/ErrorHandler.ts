import { Dictionary } from 'lodash';

export default class ErrorHandler extends Error {
  statusCode?: number;
  message: string;
  fieldErrors?: Dictionary<{ id: string; message: string }[]>;
  nonFieldErrors: Array<string>;

  constructor(
    statusCode: number,
    message: string,
    fieldErrors: Dictionary<{ id: string; message: string }[]> = {},
    nonFieldErrors: Array<string> = [],
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.fieldErrors = fieldErrors;
    this.nonFieldErrors = nonFieldErrors;
  }
}
