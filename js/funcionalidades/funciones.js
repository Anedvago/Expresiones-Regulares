  
$(function(){
  var expReg = /^[A-Z]{1}[0-9]{3}[a-z]{3}[!-/:-@[-`{-■]{3}$/;
  $("#aceptar").on("click",function(e){
    var texto = $("#contraseña").val();
    if(expReg.test(texto)){
      $("#resultado").val("Contraseña aceptada");
    }else{
      $("#resultado").val("Contraseña rechazada");
    }
  });

});