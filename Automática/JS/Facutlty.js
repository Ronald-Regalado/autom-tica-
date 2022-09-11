if(typeof jQuery=="undefined"){
    alert("jQuey was not install");
}



/*código para selecionar botones*/
$(".boton").click(function(){
   if($(this).hasClass("botonMarcado")==false){
      $(".boton").toggleClass("botonMarcado");
      $(".panel").toggleClass("panelOculto");
   }
});



