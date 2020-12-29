const isPhoneNumberFormatReliable = (val: string[]) => {
  const text = val.join("");
  if (val.length === 0) {
    return true;
  }
  if (val.length === 1) {
    return val[0] === "(";
  }
  if (val.length <= 4) {
    return /^\([0-9]{1,3}$/.test(text);
  }
  if (val.length === 5) {
    return /^\([0-9]{3}\)$/.test(text);
  }
  if (val.length === 6) {
    return /^\([0-9]{3}\)\s$/.test(text);
  }
  if (val.length <= 9) {
    return /^\([0-9]{3}\)\s[0-9]{1,3}$/.test(text);
  }
  if (val.length === 10) {
    return /^\([0-9]{3}\)\s[0-9]{3}-$/.test(text);
  }
  if (val.length <= 12) {
    return /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{1,2}$/.test(text);
  }
  if (val.length === 13) {
    return /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-$/.test(text);
  }
  if (val.length <= 15) {
    return /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{1,2}$/.test(text);
  }
};

export default isPhoneNumberFormatReliable;
