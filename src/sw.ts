/// <reference lib="webworker" />
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'
declare let self: ServiceWorkerGlobalScope

const manifest = self.__WB_MANIFEST

console.log(manifest)

precacheAndRoute(manifest)

self.skipWaiting()
clientsClaim()

cleanupOutdatedCaches()

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING')
    self.skipWaiting()
})