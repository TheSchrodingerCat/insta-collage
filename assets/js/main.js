
//validación formulario

document.getElementById("send").addEventListener("click",validate);

function validate(){
	function formularioDom(dato,clase,n){
		var spanElement = document.createElement("span");
		var spanText = document.createTextNode("Campo inválido. Ingrese nuevamente su " + dato + ".");
		var spanFather = document.getElementsByClassName(clase + " input-box")[n];
		spanElement.appendChild(spanText);
		spanFather.appendChild(spanElement);
	}

	function name(){
		var idNombre = document.getElementById("input-name").value;
		if (!(/^[A-Z][a-z]{3,19}\s[A-Z][a-z]{3,19}$/).test(idNombre)){
			formularioDom("nombre","name-container",0);
		}
	}
	name();

	function contrasena(){
		var idContrasena = document.getElementById("input-password").value;
		if (idContrasena=="123456" || idContrasena.length<6){
			formularioDom("contraseña","form-group",0);
		}
	}
	contrasena();
}
