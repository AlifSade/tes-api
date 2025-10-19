export function formatPhoneNumber(input: string): string {
  const cleaned = input.replace(/[\s\-()]/g, "");

  let formatted: string;

  if (cleaned.startsWith("+62")) {
    formatted = cleaned;
  } else if (cleaned.startsWith("62")) {
    formatted = `+${cleaned}`;
  } else if (cleaned.startsWith("0")) {
    formatted = `+62${cleaned.slice(1)}`;
  } else if (cleaned.match(/^8[1-9][0-9]{7,10}$/)) {
    // Valid mobile format but missing code
    formatted = `+62${cleaned}`;
  } else {
    throw new Error("Invalid phone number format");
  }

  return formatted;
}