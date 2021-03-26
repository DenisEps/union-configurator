export const formatNumber = (value: number | string): string => {
  return parseFloat(String(value))
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ')
    .replace('.', ',');
};
