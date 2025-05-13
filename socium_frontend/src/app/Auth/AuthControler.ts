export interface VerificationError {
  status: string;
  errorCode?: string;
  message: string;
  statusCode?: number;
  name?: string;
}

export const handleVerificationError = (error: VerificationError): string => {
  if (error.name === "KnownError<VERIFICATION_CODE_ALREADY_USED>") {
    return "This verification link has already been used. Please request a new one.";
  }

  switch (error.statusCode) {
    case 400:
      return "Invalid verification code. Please check and try again.";
    case 401:
      return "Unauthorized. Please request a new verification link.";
    case 404:
      return "Verification code not found. Please request a new one.";
    case 409:
      return "This verification link has expired or already been used.";
    case 429:
      return "Too many attempts. Please wait a few minutes and try again.";
    default:
      return "An error occurred during verification. Please try again later.";
  }
};
