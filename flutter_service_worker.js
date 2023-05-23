'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a08299cd61781259ea657033f8659c22",
"assets/AssetManifest.json": "ee0bbdd415cdff3092ae313ffd88b449",
"assets/assets/svg/api-logo2.png": "6cc9aa4a19bd51386599b6994876b5b8",
"assets/assets/svg/apiTesterApp.png": "463e364851b37736f9cd5954c7cd93b1",
"assets/assets/svg/dart-logo.svg": "c253911f8cb353c69ffcb6992f997e01",
"assets/assets/svg/dart-logo2.png": "6822073b3db0b1e3a1737fda9154b3a3",
"assets/assets/svg/event-booking.png": "b8070256889b522d7a60d28b256e13c8",
"assets/assets/svg/externalLink.svg": "8192b9938a05ad4951f40457d563d947",
"assets/assets/svg/figma-logo.svg": "bfc8530d272f878aca3645d0faf615a4",
"assets/assets/svg/figma-logo2.png": "fc112e58bcd30d3e158923591cb8ae79",
"assets/assets/svg/fire-fighter.png": "e0a4ca6d47d482bee3271f2d1618dadb",
"assets/assets/svg/firebase-logo.svg": "92ed4416ef316b0a25440b0222573da7",
"assets/assets/svg/firebase-logo2.png": "4a0746fe33d43aca6ac1b91939fa68bc",
"assets/assets/svg/flutter-logo.svg": "c0b33b0fb08e38ae8ada0b1127b6857a",
"assets/assets/svg/flutter-logo2.png": "5c030bca1741485521cc112f47bdedc9",
"assets/assets/svg/folder.svg": "21d06f307775812c56fbdaffae58576b",
"assets/assets/svg/github.svg": "d1baddb890c4751b001ae93bf9c5ce7a",
"assets/assets/svg/HRM-App.png": "7845ec3540ce8653f413057ba013c232",
"assets/assets/svg/instagram.svg": "a5740599830b320c560d589a6ac0eb80",
"assets/assets/svg/java.png": "4eb1819dc863ef386e09d86e9f482a9f",
"assets/assets/svg/kotlin.png": "0b6f0a06c681e1bb4572b1a37d8bc6a3",
"assets/assets/svg/linkedIn.svg": "b031a1bad55a5f7c3bdb7e343f9bf159",
"assets/assets/svg/logo.png": "1a65dac7bf9a50a07ab893862692b9dd",
"assets/assets/svg/logo.svg": "41f3c40d1613ed08b0ff77047ca7efb9",
"assets/assets/svg/note-khata.png": "af6cc68c381869ba505ab442b8daa0ce",
"assets/assets/svg/NotePadApp.png": "26523f9b6cd37fdb2e05febf97391517",
"assets/assets/svg/picture.png": "7662690049a5a0bb9152de3438e808e3",
"assets/assets/svg/picture2.png": "7385c394550212d4d72e97d9cfe2054f",
"assets/assets/svg/quizzy.png": "128d648affaf0a04fbd6164c83790241",
"assets/assets/svg/rain.gif": "d536c25d65a7adcb113fee3d1c5a22ad",
"assets/assets/svg/smartWalletApp.png": "0bad65f2dfb54a2eb8abd9899aabeb68",
"assets/assets/svg/sqlite-logo.svg": "6a7290c66b4cc4b87166bf1cf08ffc04",
"assets/assets/svg/sqlite-logo2.png": "67fdfef369a946c4f0d56c0a4d5df67f",
"assets/assets/svg/stackoverflow.svg": "102e007518addc36ad4b780e2158286f",
"assets/assets/svg/ToDoApp.png": "9da38911ed86d189058365c5ebf75508",
"assets/assets/svg/twitter.svg": "7c3b9ed87796d5f03c6b6c9ee913d1da",
"assets/assets/svg/WeatherApp.png": "9ac7f0953723a2a362e0076ea109985b",
"assets/FontManifest.json": "40c4014ec2943a1dadf744c0001bb0c9",
"assets/fonts/MaterialIcons-Regular.otf": "22512548f79f44d9f1bd0745218d7b36",
"assets/fonts/sfmono.otf": "f28892de5e5d3e75a4247d62be1e6cf0",
"assets/NOTICES": "a4522be2f687d2aeee868271866b41bd",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "dd74f11e425603c7adb66100f161b2a5",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "75f7828d6eac714e9f5911f0e7d145bf",
"/": "75f7828d6eac714e9f5911f0e7d145bf",
"main.dart.js": "5fb7e495c57435f0542104d06c2fe7bc",
"manifest.json": "80c6628e4d47d17652f0f4d98099b5d8",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
