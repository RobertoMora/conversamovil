self.addEventListener('install', function(event) {
// Instalar de inmediato
if (self.skipWaiting) { self.skipWaiting(); }
  event.waitUntil(
    caches.open('cache01').then(function(cache) {
      return cache.addAll([
        './',
  'http://10.129.128.22/Embajador/Captura2019MovilRespX.aspx',
  'http://10.129.128.22/Embajador/Control de Acceso.html',
  'http://10.129.128.22/Embajador/images/Conversaciones.jpg',
  'http://10.129.128.22/Embajador/images/webicon144.png',
  'http://10.129.128.22/Embajador/images/ConversaIcon.png'
      ]);
    })
  );
});
// Cache, falling back to network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
 // Elimina archivos de cache viejos
  var cacheWhitelist = ['cache01'];
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    });
	caches.keys().then(function(cacheKeys) {
	// Muestra en la consola la cache instalada 
	console.log('Versión SW: '+cacheKeys);
}); 
