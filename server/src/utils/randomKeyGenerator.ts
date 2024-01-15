// Import crypto for Node.js environments
import * as crypto from "crypto";

export function generateRandomKey(): string {
  // Check for crypto.getRandomValues() availability in browsers
  if (
    typeof window !== "undefined" &&
    window.crypto &&
    window.crypto.getRandomValues
  ) {
    const buffer = new Uint8Array(128);
    window.crypto.getRandomValues(buffer);
    return Array.from(buffer, (byte) =>
      byte.toString(128).padStart(2, "0")
    ).join("");
  }

  // Use crypto.randomBytes() for Node.js or environments without crypto.getRandomValues()
  return crypto.randomBytes(128).toString("hex");
}
