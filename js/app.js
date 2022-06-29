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
