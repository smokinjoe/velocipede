interface IVelocipedeError extends Error {
  statusCode: number;
  innerError?: Error;
}

export type ErrorOptions = {
  statusCode?: number;
  innerError?: Error;
};

export class VelocipedeError extends Error implements IVelocipedeError {
  errorType = "VelocipedeError";
  innerError?: Error;
  statusCode = 500;

  constructor(message: string, options?: ErrorOptions) {
    super(message);

    this.name = "VelocipedeError";
    this.innerError = options?.innerError;
    this.statusCode = options?.statusCode ?? 500;
  }
}

export class ValidationError extends VelocipedeError {
  constructor(message: string, options: ErrorOptions = {}) {
    super(message, options);
    this.name = "ValidationError";
    this.statusCode = 400;
  }
}

export class NotFoundError extends VelocipedeError {
  constructor(message: string, options: ErrorOptions = {}) {
    super(message, options);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}

export class UnauthorizedError extends VelocipedeError {
  constructor(message: string, options: ErrorOptions = {}) {
    super(message, options);
    this.name = "UnauthorizedError";
    this.statusCode = 401;
  }
}

export const errorMap = new Map<number, typeof VelocipedeError>([
  [500, VelocipedeError],
  [400, ValidationError],
  [404, NotFoundError],
  [401, UnauthorizedError],
]);
