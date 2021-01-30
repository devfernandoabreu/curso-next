import Prismic from 'prismic-javascript';

export const apiEndpoint = 'https://devcommerce2901.cdn.prismic.io/api/v2';
export const accessToken = '';

// Client method to query documents from the Prismic repo
export const client = (req = null) => {
  const options = req ? { req } : null;

  return Prismic.client(apiEndpoint, options);
};
