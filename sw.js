/**
*Adapted from https://www.sitepoint.com/getting-started-with-service-workers/
*Cahe name
*/
const CACHENAME = 'restaurant-cache';
/**
*All the local urls which we want to add to the cache
*/
const CACHENAME_URLS = [
'/',
'/index.html',
'/restaurant.html',
'/css/styles.css',
'/js/dbhelper.js',
'/js/main.js',
'/js/restaurant_info.js',
'/data/restaurants.json',
'/img/1.jpg',
'/img/2.jpg',
'/img/3.jpg',
'/img/4.jpg',
'/img/5.jpg',
'/img/6.jpg',
'/img/7.jpg',
'/img/8.jpg',
'/img/9.jpg',
'/img/10.jpg'
];

/**
*Install service worker to take care of all the resources of the need
*/
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHENAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(CACHENAME_URLS);
            })
    );
});

/**
*Fetch files from cache
*/
self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request) .then(function(response){
    return response || fetch(event.request);
  }));
});