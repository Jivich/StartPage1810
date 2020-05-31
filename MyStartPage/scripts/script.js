function ejecutarAJAX(pagina){
	var ajaxRequest=new XMLHttpRequest();

	if (pagina=='uno') {
/*return alert('Hola numero uno');*/
/*Se va encargar de procesar la peticion enviada por el servidor*/
		ajaxRequest.onreadystatechange= function(){
/*si la peticion ha sido finalizada y exitosa*/
			if(ajaxRequest.readyState === 4 && ajaxRequest.status ===200){
				document.getElementById("contenido").innerHTML = ajaxRequest.responseText;
			}
		}
/*true significa que la peticion sera asincrona(la pantalla no sera recargada)*/
			ajaxRequest.open("GET", "link1.html", true);
			ajaxRequest.send();
	}else if(pagina=='dos'){
/*return alert('Hola numero dos');*/
/*Se va encargar de procesar la peticion enviada por el servidor*/
		ajaxRequest.onreadystatechange= function(){
/*si la peticion ha sido finalizada y exitosa*/
			if(ajaxRequest.readyState === 4 && ajaxRequest.status ===200){
				document.getElementById("contenido").innerHTML = ajaxRequest.responseText;
			}
		}
/*true significa que la peticion sera asincrona(la pantalla no sera recargada)*/
		ajaxRequest.open("GET", "link2.html", true);
		ajaxRequest.send();
	}
	else{
		alert('error');
	}
}



