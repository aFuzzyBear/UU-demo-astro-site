import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite:{
        fs:{
            strict:false,
        },
        assetsInclude: ['/content/**/*'],
        resolve:{
            preserveSymlinks:true
        }
    }
});
