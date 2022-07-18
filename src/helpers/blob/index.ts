export const getBlobFromUrl = async (url: string) => {
  return fetch(url).then(response => response.blob());
};
