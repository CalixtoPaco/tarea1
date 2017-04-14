//1.crear una extencion remove para el objeto array
//2.crear una extencion buscar para el objeto array

//3.eliminar todos los elementos repetidos de un array

//eliminando elementos repetidos
//una forma
var cadena1 = [ 'mario','luis','paco','mario','paco','paco'];
Array.prototype.unique=function(a){
  return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});
console.log( cadena1.unique() );

//otra forma
/*Array.prototype.borrar = function(element){
	for (var i = 0; i < this.length; i++) {
		if(this[i] === element )
		{
			this.splice(i,1);
		}
	}
}

jQuery(document).ready(function($) {
	var datos =["gato","perro","gallo","gallo","gato","asno","asno","gallo","perro","gato"];;
	datos.borrar("gallo");
	//console.log(datos);
	console.log(datos);
});*/
