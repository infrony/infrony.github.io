importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/365f41d1ece3c2d56f71.js",
    "revision": "de6343c0b0779e3643e140165925707c"
  },
  {
    "url": "/_nuxt/42f420226b83465fb5a0.js",
    "revision": "09ddead49bc479a544d2b81cb60160d5"
  },
  {
    "url": "/_nuxt/4424d9f19adc363fcf82.js",
    "revision": "ce89a1b4cad6f98d17c941393023d53d"
  },
  {
    "url": "/_nuxt/63f4cde5ac858c3fbe0d.js",
    "revision": "d2a6d42d8ebcf8f57eb51df8b6eb6f4c"
  },
  {
    "url": "/_nuxt/7b51c4c823f46d2c172a.js",
    "revision": "36699c1bcf728fd38cb9b115337ccdb8"
  },
  {
    "url": "/_nuxt/a8f690faa4fd8cd9a298.js",
    "revision": "be64cad8616680e23ed1e971c7e27753"
  },
  {
    "url": "/_nuxt/b00bfea554571671c196.js",
    "revision": "dd1bb880426346144d73d50a030b3986"
  },
  {
    "url": "/_nuxt/ca4d0fdcae4cfddff4f1.js",
    "revision": "141a9ed06744e2c20bf56e27e235d388"
  }
], {
  "cacheId": "my-cv",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
