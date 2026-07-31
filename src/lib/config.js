export const PHONE_RAW = process.env.NEXT_PUBLIC_PHONE_NUMBER || "4252802915";

export const PHONE_CLEAN = PHONE_RAW.replace(/\D/g, "");

export const PHONE_DISPLAY =
  process.env.NEXT_PUBLIC_PHONE_DISPLAY ||
  (PHONE_CLEAN.length === 10
    ? `(${PHONE_CLEAN.slice(0, 3)}) ${PHONE_CLEAN.slice(3, 6)}-${PHONE_CLEAN.slice(6)}`
    : PHONE_RAW);

export const TEL_HREF = `tel:${PHONE_CLEAN}`;

export const WHATSAPP_NUMBER =
  PHONE_CLEAN.length === 10 ? `1${PHONE_CLEAN}` : PHONE_CLEAN;
