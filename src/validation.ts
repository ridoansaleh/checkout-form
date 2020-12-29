const isEmailValid = (val: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
};

const isPostalCodeValid = (val: string) => {
  return val.length === 4;
};

const isPhoneNumberValid = (val: string) => {
  return /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(val);
};

const isCreditCardValid = (val: string) => {
  return /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/.test(val);
};

const isSecurityCodeValid = (val: string) => {
  return val.length === 3;
};

const isExpirationDateValid = (val: string) => {
  return (
    /^[0-9]{2}\s\/\s[0-9]{2}$/.test(val) &&
    val.slice(0, 2) !== "00" &&
    val.slice(5, 7) !== "00"
  );
};

export {
  isEmailValid,
  isPostalCodeValid,
  isPhoneNumberValid,
  isCreditCardValid,
  isSecurityCodeValid,
  isExpirationDateValid,
};
