
//

$(document).ready(function(){

    $("#btn-sign").click(function(){
      $("#section-login").slideToggle("slow");
      $("#section-sign").slideToggle("slow")
    })
    $("#btn-login").click(function(){
      validarlogin();
      validarsenha();
      login()
    })
  
  })