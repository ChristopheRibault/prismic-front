import Prismic from '@prismicio/client';

console.log(process.env);

const client = Prismic.client(process.env.NEXT_PUBLIC_API_ENDPOINT || '');

export default client;
