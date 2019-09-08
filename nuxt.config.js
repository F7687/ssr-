<<<<<<< HEAD
import pkg from './package'

export default {
  mode: 'universal',

=======

export default {
  mode: 'universal',
>>>>>>> 8dddb3caf24c2d919bacfd3f1edae5f735452243
  /*
  ** Headers of the page
  */
  head: {
<<<<<<< HEAD
    title: "闲云旅游网", // 修改title
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '//at.alicdn.com/t/font_1168872_ehvuah8v57g.css'} // 新增全局字体样式
    ],
    script: [
      {src: "/font_rag6czyto8p/iconfont.js"}
    ]
  },

=======
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
>>>>>>> 8dddb3caf24c2d919bacfd3f1edae5f735452243
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
<<<<<<< HEAD

=======
>>>>>>> 8dddb3caf24c2d919bacfd3f1edae5f735452243
  /*
  ** Global CSS
  */
  css: [
<<<<<<< HEAD
    'element-ui/lib/theme-chalk/index.css',
    'assets/main.css', // 新增自定义的页面过渡样式（文件来自3.4.1）
    'assets/font-awesome-4.7.0/css/font-awesome.min.css',
    // 'assets/font_rag6czyto8p/iconfont.css'
  ],

=======
    'element-ui/lib/theme-chalk/index.css'
  ],
>>>>>>> 8dddb3caf24c2d919bacfd3f1edae5f735452243
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
<<<<<<< HEAD
    '@/plugins/element-ui',
    '@/plugins/axios',
    { src: '~/plugins/localStorage.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // https://axios.nuxtjs.org/setup
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // baseURL: "http://157.122.54.189:9095" // 新增备用地址
    baseURL: "http://127.0.0.1:1337" // 新增axios默认请求路径 		  
  },

=======
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
>>>>>>> 8dddb3caf24c2d919bacfd3f1edae5f735452243
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
<<<<<<< HEAD

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
}
=======
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
>>>>>>> 8dddb3caf24c2d919bacfd3f1edae5f735452243
