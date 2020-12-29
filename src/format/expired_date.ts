const isFormatValid = (val: string[]) => {
  if (val.length <= 2) {
    return /^[0-9]{0,2}$/.test(val.join(""));
  }
  if (val.length === 3) {
    return /^[0-9]{2}\s$/.test(val.join(""));
  }
  if (val.length === 4) {
    return /^[0-9]{2}\s\/$/.test(val.join(""));
  }
  if (val.length === 5) {
    return /^[0-9]{2}\s\/\s$/.test(val.join(""));
  }
  if (val.length <= 7) {
    return /^[0-9]{2}\s\/\s[0-9]{1,2}$/.test(val.join(""));
  }
};

export default isFormatValid;
