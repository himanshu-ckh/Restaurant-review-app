/**
*Service worker registration
*/
if ('serviceWorker' in navigator) {
	window.addEventListener('load', function () {
		navigator.serviceWorker.register('sw.js').then(function (registration) {
			console.log('Service Worker registration successful');
		}, function (error) {
			console.log('Service Worker registration fail');
		});
	});
}