export const API_KEY = "AIzaSyCSRTssarUffqqMh_5vpwdaBZmd_quX4T0";

export const valueConverter = (value) => {
  if (value > 1000000) return Math.floor(value / 1000000) + "M";
  if (value >= 1000) return Math.floor(value / 1000) + "K";
  if (value < 1000) return value;
};
