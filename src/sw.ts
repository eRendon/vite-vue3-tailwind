import { precacheAndRoute } from 'workbox-precaching'
console.log('service wordek')
declare let self: ServiceWorkerGlobalScope
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
})
// self.__WB_MANIFEST is default injection point
const manifest = self.__WB_MANIFEST;
console.log('manifest', self)
if (process.env.NODE_ENV === 'production') {
  precacheAndRoute(manifest);
}