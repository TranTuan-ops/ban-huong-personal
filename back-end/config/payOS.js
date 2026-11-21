// config/payOS.js
import { PayOS } from "@payos/node";
import dotenv from "dotenv";

dotenv.config();

const isConfigured = (value) =>
  typeof value === "string" &&
  value.trim() !== "" &&
  !value.trim().toLowerCase().startsWith("your_");

export const payOSConfigured =
  isConfigured(process.env.PAYOS_CLIENT_ID) &&
  isConfigured(process.env.PAYOS_API_KEY) &&
  isConfigured(process.env.PAYOS_CHECKSUM_KEY);

export const payOS = payOSConfigured
  ? new PayOS({
      clientId: process.env.PAYOS_CLIENT_ID,
      apiKey: process.env.PAYOS_API_KEY,
      checksumKey: process.env.PAYOS_CHECKSUM_KEY,
    })
  : null;

if (payOSConfigured) {
  console.log("✅ PayOS initialized successfully");
} else {
  console.warn("⚠️ PayOS is not configured; payment endpoints will be disabled");
}
