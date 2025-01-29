type AssertError = string;

function handleError(
  defaultMessage: string,
  errorMessage?: AssertError
): never {
  throw new Error(errorMessage ?? defaultMessage);
}

/**
 * Use this in case blocks where a default: should never be accessed
 */
export function assertNever(value: never, error?: AssertError): never {
  handleError(`"${value}" should never happen in this context`, error);
}
