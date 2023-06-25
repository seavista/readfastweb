'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c1ee2059ee798cea68b3bf6ea903233f",
"splash/img/light-2x.png": "225caec00b754919fcba7767012f59f6",
"splash/img/dark-4x.png": "9a2b0ff3a7eb3394101d4eaea3fec61c",
"splash/img/light-3x.png": "db1157b84b19e093f16077437789faff",
"splash/img/dark-3x.png": "db1157b84b19e093f16077437789faff",
"splash/img/light-4x.png": "9a2b0ff3a7eb3394101d4eaea3fec61c",
"splash/img/dark-2x.png": "225caec00b754919fcba7767012f59f6",
"splash/img/dark-1x.png": "3cda8875428c1b8177e90cfc1e42df42",
"splash/img/light-1x.png": "3cda8875428c1b8177e90cfc1e42df42",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "3c5b591b97a34727f13387f4e2637359",
"index.html": "bd9262998a44835a46f0374e274d5cbb",
"/": "bd9262998a44835a46f0374e274d5cbb",
"main.dart.js": "50ceb3de560f21f76263cf5909a3502c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "84d807c7b91defba0470eefe5b17a789",
"icons/Icon-192.png": "1ed2150588d9a718fe194909608abff1",
"icons/Icon-maskable-192.png": "6264bd1a5c1762e09da21ed695c4dd0d",
"icons/Icon-maskable-512.png": "0335a85f7246d8372478b6d7a29f54c7",
"icons/Icon-512.png": "07c2169121ca96306a9eedc16a391b98",
"manifest.json": "4e81f4281785bf4138c87439195eb8ea",
"assets/AssetManifest.json": "42a6baa43abf076fba95abe4b6312a19",
"assets/NOTICES": "d80803ff10b14b0af5ec7933eb336843",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "9ad44d2cd0e4da7a17a737ba2db3b1e9",
"assets/fonts/MaterialIcons-Regular.otf": "caf5a6ec938d15c14eca38426c5c70ee",
"assets/assets/Images/signup2.jpeg": "07b5eb5d031d09ecc9809ba196b2392e",
"assets/assets/Images/plants2.png": "2bc125ac21a31b5d7345c7e776b08837",
"assets/assets/Images/icon.png": "fb6e9a56c6d23f760816a992dba0f7b6",
"assets/assets/Images/book.png": "b261caee6c5e810110b263e544dd09e0",
"assets/assets/Images/signup3.jpeg": "cbb304a107c4e10845910021863feafb",
"assets/assets/Images/bookstack640.png": "5d9ce67f0553366d0b643eaaf13221ad",
"assets/assets/Images/signup.jpeg": "cb2f147b0967cf8f89b37fa7635f1669",
"assets/assets/Images/girl.jpg": "d674a249b86d961c2111b4565dba3150",
"assets/assets/Images/numbers.png": "855c3d7e16ce707a70712e43504a8d4f",
"assets/assets/Images/speedtest.png": "4e6121d8805799525bc40b1e8773aa24",
"assets/assets/Images/plants.png": "bc79dc3f7e4b1a5492ac01a47c6039a6",
"assets/assets/Images/Schulte.png": "310746bd3cb0f1a7f9342e84409264e1",
"assets/assets/Images/logo.png": "98284612a4ef273ce713207c73cb1856",
"assets/assets/Images/wordsearch.png": "1900eb753bcc4f89a279eceef9e790cd",
"assets/assets/audio/pop.mp3": "6efff02d13632ac6557a6ffb8a7c83a5",
"assets/assets/audio/chill3.mp3": "22fbb0c4eb5157d9fe3aac8caaa0cf6f",
"assets/assets/audio/chill2.mp3": "03754135689694e5ad4e3c4ed494b17c",
"assets/assets/audio/wrong.mp3": "f1b45ec780e34be31bd836d4c19b4df2",
"assets/assets/audio/chill.mp3": "8a481eb107854611454e2b1111b0ed68",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
