<!DOCTYPE html>
<html lang="PT-BR">
<?php
    include_once "config/config.php";
  $css_file = $css."carrinho.css";
  $js_file = $js."carrinho.js";
  $img_files = array();
  $img_files[0] = $img."logo.png";
  ?>
<head>
    <meta charset="UTF-8">
    <!-- jQuery e CSS Bootstrap 5 -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <!-- jQuery Google -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="imagex/png" href="<?=$img_files[0]?>">
    <!-- Arquivos locais -->
    <link rel="stylesheet" href="<?=$css_file?>">
    <script src="<?=$js_file?>"></script>
    <title>Ofertas - Tênis</title>
</head>

<body>
<?php
include_once "menu_carrinho.php";
?>

<div class="container" id="entrada">
<h3 id="titulo_entrada">Bem-Vindo!</h3>
<p class="txt_entrada">Você está na página de ofertas.</p>
</div>

<div id="info_redirect" style="height: 5px;"></div><br>
<center>
<div class="container" id="tenis">
  <h3><span style="color: black;">✱</span> Air Jordan <span style="color: black;">✱</span></h3><br>
  <div class="row">
    <div class="col-6" id="990"> 
    <h4 class="titulos" id="jordan_990" >Air Jordan I Chicago Black/Red</h4><br>
    
    <h4 id="titulo_return1" style="display: none;">Seu carrinho:</h4>  
    <p id="txt_return1" style="display: none; padding-top: 10px;"></p>   
    <button style="background-color: red; display:none;" id="bttn_carrinho_esconder1" class="btn btn-primary">Remover do carrinho</button>

      <img class="imgs_intro" id="imgTenis1" src="assets/img/jordan 1.png"><br><br>
      <span class="txt_intro"><p id="preco_990">R$ 259,99</p></span>

     <button style="background-color: #940094;" id="bttn_carrinho_mostrar1" class="btn btn-primary">Adicionar ao carrinho</button>
     </div>

     <div class="col-6" id="991"> 
    <h4 class="titulos" id="jordan_991">Air Jordan IV Black/White/Red</h4><br>
    
    <h4 id="titulo_return2" style="display: none;">Seu carrinho:</h4>  
    <p id="txt_return2" style="display: none; padding-top: 10px;"></p>   
    <button style="background-color: red; display:none;" id="bttn_carrinho_esconder2" class="btn btn-primary">Remover do carrinho</button>

      <img class="imgs_intro" id="imgTenis2" src="assets/img/jordan 4.png"><br><br>
      <span class="txt_intro"><p id="preco_991">R$ 299,99</p></span>

     <button style="background-color: #940094;" id="bttn_carrinho_mostrar2" class="btn btn-primary">Adicionar ao carrinho</button>
     </div>

     <div class="row">
     
     <div class="col-6" style="padding-top: 50px;" id="992"> 
    <h4 class="titulos" id="jordan_992">Air Jordan V Grape Purple (Fresh Prince version)</h4><br>
    
    <h4 id="titulo_return3" style="display: none;">Seu carrinho:</h4>  
    <p id="txt_return3" style="display: none; padding-top: 10px;"></p>   
    <button style="background-color: red; display:none;" id="bttn_carrinho_esconder3" class="btn btn-primary">Remover do carrinho</button>

      <img class="imgs_intro" id="imgTenis3" src="assets/img/jordan 5 grape.png"><br><br>
      <span class="txt_intro"><p id="preco_992">R$ 749,99</p></span>

     <button style="background-color: #940094;" id="bttn_carrinho_mostrar3" class="btn btn-primary">Adicionar ao carrinho</button>
     </div>

     <div class="col-6" style="padding-top: 50px;" id="993"> 
    <h4 class="titulos" id="jordan_993">Air Jordan IX Black/White (Space Jam version)</h4><br>
    
    <h4 id="titulo_return4" style="display: none;">Seu carrinho:</h4>  
    <p id="txt_return4" style="display: none; padding-top: 10px;"></p>   
    <button style="background-color: red; display:none;" id="bttn_carrinho_esconder4" class="btn btn-primary">Remover do carrinho</button>

      <img class="imgs_intro" id="imgTenis4" src="assets/img/jordan 9.png"><br><br>
      <span class="txt_intro"><p id="preco_993">R$ 649,99</p></span>

     <button style="background-color: #940094;" id="bttn_carrinho_mostrar4" class="btn btn-primary">Adicionar ao carrinho</button>
     </div>

     </div>
  </div>
  <!-- -->
</div><br><br>
</center>

<?php
  include_once "footer_carrinho.php";
  ?>
</body>
</html>