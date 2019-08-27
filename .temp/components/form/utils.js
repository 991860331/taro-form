export const isNumberString = str => {
  if (!str) return false;
  if (str === '') return false;
  if (str.includes && str.includes(" ")) return false;
  if (Number.isNaN(Number(str))) {
    return false;
  }
  return true;
};
export const formatLayoutFields = () => {};
export const formatSubmitData = () => {};