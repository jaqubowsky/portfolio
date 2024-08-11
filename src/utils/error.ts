const BASE_ERROR_MSG = "An error occurred. Please try again later.";

export const getErrorMessage = (
  error: unknown | string,
  fallback = BASE_ERROR_MSG
) => {
  if (error instanceof Error) {
    return error.message || fallback;
  }

  return fallback;
};
