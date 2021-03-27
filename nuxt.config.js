var fs = require('fs');
var path = require('path');

let ENV_DEV = false;

//Development Environment
let port = 3000;
let host = 'localhost';
let https = false;

//Production Environment
if(ENV_DEV==false)
{
  port = 80; // jag bara gissar här, kolla över detta
  host = 'www.intresso.se'; // antar att detta är något som passas in
/*   https =  {
    key: fs.readFileSync(path.resolve(__dirname,
        './../../ssl/keys/<ssl-key-file-name>.key')),
    cert: fs.readFileSync(path.resolve(__dirname,
        './../../ssl/certs/<ssl-crt-file-name>.crt'))
  }; lägg till senare */
}

export default {
  mode: 'universal',
  server: {
    port: port,
    host: host,
    timing: false,
/*     https: https lägg till senare */
  },
  /*
  ** Headers of the page
  */
  // or
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/layouts/global.css',
    '@/assets/main.css'
    // 'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  
}
