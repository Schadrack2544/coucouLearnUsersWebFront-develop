export const toThousands = (number: number) => {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const ucFirst = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};
