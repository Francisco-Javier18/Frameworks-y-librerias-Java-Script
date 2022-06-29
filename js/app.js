//metodos setInterval
setInterval('amarillo()',3000);
setInterval('white()',5000);
//funciones para el cambio de color
function amarillo(){
  $(".main-titulo").css("color","yellow")
}

function white(){
  $(".main-titulo").css("color","white")
}

//funcion que sirve para rellenar todos los espacios
function reinsertar() {
  var columna1=$(".col-1").children();
  var columna2=$(".col-2").children();
  var columna3=$(".col-3").children();
  var columna4=$(".col-4").children();
  var columna5=$(".col-5").children();
  var columna6=$(".col-6").children();
  var columna7=$(".col-7").children();
  if (columna1.length<=6) {
    const dulces = Math.floor((Math.random() * 4) + 1);
    $(".col-1").prepend("<img src='image/"+dulces+".png' class='ui-draggable ui-droppable ui-draggable-handle'/>");
  };
  if (columna2.length<=6) {
    const dulces = Math.floor((Math.random() * 4) + 1);
    $(".col-2").prepend("<img src='image/"+dulces+".png' class='ui-draggable ui-droppable ui-draggable-handle'/>");
  };
  if (columna3.length<=6) {
    const dulces = Math.floor((Math.random() * 4) + 1);
    $(".col-3").prepend("<img src='image/"+dulces+".png' class='ui-draggable ui-droppable ui-draggable-handle'/>");
  };
  if (columna4.length<=6) {
    const dulces = Math.floor((Math.random() * 4) + 1);
    $(".col-4").prepend("<img src='image/"+dulces+".png' class='ui-draggable ui-droppable ui-draggable-handle'/>");
  };
  if (columna5.length<=6) {
    const dulces = Math.floor((Math.random() * 4) + 1);
    $(".col-5").prepend("<img src='image/"+dulces+".png' class='ui-draggable ui-droppable ui-draggable-handle'/>");
  };
  if (columna6.length<=6) {
    const dulces = Math.floor((Math.random() * 4) + 1);
    $(".col-6").prepend("<img src='image/"+dulces+".png' class='ui-draggable ui-droppable ui-draggable-handle'/>");
  };
  if (columna7.length<=6) {
    const dulces = Math.floor((Math.random() * 4) + 1);
    $(".col-7").prepend("<img src='image/"+dulces+".png' class='ui-draggable ui-droppable ui-draggable-handle'/>");
  };
}

var mov=0;
var score=0;
var minuto=2;
var segundo=0;
var temporizador=0;
var matriz=0;

//boton de Inicio y de reinicio
$(function() {
  $(".btn-reinicio").click(function () {
    clearInterval(temporizador);
    $(".panel-score").css("width","25%");
  	$(".panel-tablero").show();
    mov=0;
    score=0;
    var a=1;
    while (a<=7) {
      $(".col-"+a).empty();
      a++;
    };
    temporizador=setInterval('tiempo()',1000);
    $(".time").show();
    setInterval('reinsertar()',500);
    $(this).text("Reiniciar");
    minuto=2;
    segundo=0;
    $("#movimientos-text").html(mov)
    $("#score-text").html(score);
  });
});

//Temporizador
//Temporizador
function tiempo(){
  if(segundo!=-1){
		segundo--
  }

	if(segundo==-1){
    segundo=59;
		if(minuto==0){
			$(".panel-tablero").hide("drop","slow",marcadores);
			$(".time").hide();
    }
    minuto--
  }
  if (segundo<=9) {
    $("#timer").html("0"+minuto+":"+"0"+segundo);
  }else{
    $("#timer").html("0"+minuto+":"+segundo);
  }
};

//funcion para poner el marcador en pantalla completa
function marcadores(){
	$( ".panel-score" ).animate({width:'100%'},3000);
};
