if ('serviceWorker' in navigator && 'Notification' in window){
	window.onload = function(){
		navigator.serviceWorker.register('/pwa/sw.js')
			.then(function(){
				console.log("ServiceWorker registrado.");
			}, function(e){
				console.log("ServiceWorker não registrado."+e);
			});

		Notification.requestPermission(function(permission){
			if (permission == 'granted') {
				console.log("PERMITIDO");
			}else{
				console.log("NEGADO");
			}
		});
	}
}