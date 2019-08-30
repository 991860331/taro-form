export const isNumberString = str => {
  if (!str) return false;
  if (str.includes && str.includes(" ")) return false;
  if (Number.isNaN(Number(str))) {
    return false;
  }
  return true;
};
export const isAvailableValue = value => {
  return value !== null && value !== undefined && value !== '';
};
export const formatLayoutFields = () => {};
export const formatSubmitData = () => {};