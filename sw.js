self.addEventListener('install', event => {
	console.log("Evento de instalação");
	self.skipWaiting();
});

self.addEventListener('activate', event => {
	console.log("Evento de ativação");
});

self.addEventListener('push', event => {
	event.waitUntil(
		self.registration.showNotification(
			'Meu título',
			{
				body:event.data.text()
			}
		)
	);
});