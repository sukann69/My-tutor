self.addEventListener("install", e => {
  console.log("PWA installed");
});

self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request));
});