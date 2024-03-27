export const FieldValidationErrorCodes = {
  SomethingWentWrong: 10001,
} as const;

export const TagsApiErrorCodes = {
  BadParameter: 10001,
  ThrottleViolation: 10002,
  Generic: 10003,
} as const;

export class FieldValidationError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

export class TagsApiError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}
