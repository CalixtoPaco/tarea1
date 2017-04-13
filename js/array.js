Array.prototype.borrar = function(element){
	for (var i = 0; i < this.length; i++) {
		if(this[i] === element )
		{
			this.splice(i,1);
		}
	}
}

jQuery(document).ready(function($) {
	var datos =["gato","perro","gallo","gallo","asno","asno","perro","gato"];;
	datos.borrar("gallo");
	//console.log(datos);
	document.write(datos);
});