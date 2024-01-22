// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
// 		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
// 		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
// 		adapter: adapter()
// 	}
// };

// export default config;

import adapter from '@sveltejs/adapter-node';
// ... other imports ...

const config = {
  kit: {
    // ... other configurations ...
    adapter: adapter({
      // default options are shown
      out: 'build',
      precompress: false,
      env: {
        host: 'HOST',
        port: 'PORT'
      }
    })
  }
};

export default config;
