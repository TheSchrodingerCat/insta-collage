
//validación formulario

document.getElementById("send").addEventListener("click",validate);

function validate(){
	function formularioDom(dato,n){
		document.getElementById("send").setAttribute("data-toggle","collapse");
		document.getElementById("send").setAttribute("data-target","#mycollapse");
		document.getElementById("send").setAttribute("aria-expanded","true");
		document.getElementById("send").setAttribute("aria-controls","mycollapse");

		var divElement = document.createElement("div");
		var divText = document.createTextNode("Campo inválido o vacío. Ingrese nuevamente su " + dato + ".");
		var divFather = document.getElementsByClassName("contenedor-collapse")[n];
		divElement.appendChild(divText);
		divFather.appendChild(divElement);	
	}

	function data(){
		var idNombre = document.getElementById("input-name").value;
		var idContrasena = document.getElementById("input-password").value;

		if (!(/^[A-Z][a-z]{3,19}\s[A-Z][a-z]{3,19}$/).test(idNombre) && (idContrasena=="123456" || idContrasena.length<6)){
			formularioDom("nombre",0);
			formularioDom("contraseña",1);
		} else if (!(/^[A-Z][a-z]{3,19}\s[A-Z][a-z]{3,19}$/).test(idNombre)){
			formularioDom("nombre",0);
		} else if (idContrasena=="123456" || idContrasena.length<6){
			formularioDom("contraseña",1);
		} else {
			document.getElementById("send").setAttribute("href","index2.html");
		}
	}
	data();
}