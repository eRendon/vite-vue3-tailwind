import { precacheAndRoute } from 'workbox-precaching'
console.log('service wordek')
declare let self: ServiceWorkerGlobalScope
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
})
// self.__WB_MANIFEST is default injection point
if (process.env.NODE_ENV === 'production') {
  precacheAndRoute(self.__WB_MANIFEST);
}