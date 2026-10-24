// admin/sw.js
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // Requerido por Chrome Android
});
