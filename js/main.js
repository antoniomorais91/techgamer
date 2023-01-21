// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
});


//Lightbox JQuery

// global variable
const images = $('.image');

// each images loop
images.each((index,image) => {
  $(image).click(function() {
    const imageData = $(this).attr('data-full');
    const imageTitle = $(this).attr('alt');
    fullImage(imageData,imageTitle)
  })
})

// function for full images
const fullImage = (imagedata, imagetitle) => {
  // full image container added class open for dark bg
  $('.full-image-container').addClass('open');
  // full image src is function fullimage's first parameter
  $('.full-image-container .full-image').attr(`src`,imagedata);
  // full iamge text content is secont parameter 
  $('.full-image-container .image-title').html(imagetitle);
  // event for remove full image container
  $('.full-image-container').click(function() {
      $(this).removeClass('open');
  })
}

function validarlogin(){
  var user = document.getElementById("username")

  if(user.value == "") {
    alert("Login não informado. Por favor insira o login.");
    user.focus();
  }
}

function validarsenha(){
  var pass = document.getElementById("password")

  if(pass.value == "") {
    alert("Senha não informada. Por favor insira a senha.");
    pass.focus();
  }
}

function login() {

  var logged = 0;
  var user = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if(user == 'admin' && password == '123456'){
    window.location = "index.html";
    logged = 1;
  }

  if(logged == 0){
    alert("Acesso negado, dados incorretos.")
  }
}

function signIn(){
  alert("Cadastrado com sucesso!");
  window.location.href = "index.html";
}




