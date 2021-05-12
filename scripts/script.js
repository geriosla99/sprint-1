var cantidad= 0;
var cantidad_total = 0; 
var descuento_total = 0;
var valor_total  = 0;
const computador = 820000;

function Calcular(){

    //reiniciando variables
    cantidad= 0;
    cantidad_total = 0; 
    descuento_total = 0;
    valor_total  = 0;

    //reiniciando input en cero
    document.getElementById('compra').value = 0;
    document.getElementById('descuento').value = 0 ;
    document.getElementById('total').value = 0;

    cantidad = document.getElementById('cantidad').value;
    cantidad_total = parseInt(cantidad) * computador;
    document.getElementById('compra').value = cantidad_total;
    //console.log(cantidad_total);
    if (cantidad_total >= 1640000 && cantidad_total <= 3280000)  {
       descuento_total = cantidad_total * 0.15 ;
       document.getElementById('descuento').value = descuento_total ;
       console.log("15%");
    }  else if (cantidad_total > 3280000 && cantidad_total <= 6560000) {

        descuento_total = cantidad_total * 0.25 ;
        document.getElementById('descuento').value = descuento_total ;
        console.log("25%");
    } else if (cantidad_total > 6560000 && cantidad_total <= 9840000 ) {

        descuento_total = cantidad_total * 0.35 ;
        document.getElementById('descuento').value = descuento_total ;
        console.log("35%");
    } else {


        console.log("sin descuentos");
    }

    valor_total = cantidad_total - descuento_total;
    document.getElementById('total').value = valor_total;
     //console.log(total);


}