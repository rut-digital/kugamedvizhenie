import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'docs'}),
    paths: {
      base: '/kugame2',
    },
  },
};

export default config;