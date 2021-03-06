const isCreditCardFormatReliable = (val: string[]) => {
  const text = val.join("");
  if (val.length <= 4) {
    return /^[0-9]{0,4}$/.test(text);
  }
  if (val.length === 5) {
    return /^[0-9]{1,4}-$/.test(text);
  }
  if (val.length <= 9) {
    return /^[0-9]{4}-[0-9]{1,4}$/.test(text);
  }
  if (val.length === 10) {
    return /^[0-9]{4}-[0-9]{4}-$/.test(text);
  }
  if (val.length <= 14) {
    return /^[0-9]{4}-[0-9]{4}-[0-9]{1,4}$/.test(text);
  }
  if (val.length === 15) {
    return /^[0-9]{4}-[0-9]{4}-[0-9]{4}-$/.test(text);
  }
  if (val.length <= 19) {
    return /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{1,4}$/.test(text);
  }
};

export default isCreditCardFormatReliable;
