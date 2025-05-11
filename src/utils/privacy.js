// utils/privacyUtils.js
export const maskData = (value, privacy) => 
  privacy ? value.replace(/./g, '•') : value;