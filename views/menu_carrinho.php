<?php
    include_once "config/config.php";
  $img_files = array();
  $img_files[1] = $img."logo.png";
  $img_files[2] = $img."img_menu_split.png";
  $img_files[3] = $img."carrinho.png";
?>
<style>
  .nav-link {
    color: white;
  }
  .nav-link:hover {
    color: #dbdbdb;
    border-bottom: solid 1px #dbdbdb;  
  }
  .nav-link:focus {
    color: #dbdbdb;
  };
</style>
<nav class="navbar navbar-expand-sm navbar-dar" style=" background-color: #940094; position: fixed; width: 100%; z-index: 3;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="<?=$img_files[1]?>" style="height: 50px; width: 50px;"></a>
    
    <div class="form-inline my-2 my-lg-0">
    <h4 id="titulo_carrinho_menu" style="display: none; color: white;">Carrinho:</h4>  
    <p id="carrinho_menu" style="display: none; color: white; padding-top: 10px;"></p>
    <button style="background-color: black; display: none;" id="bttn_carrinho_menu_esconder" class="btn btn-primary">Voltar</button>

    <button id="bttn_carrinho_menu" style="outline: none; border: none; background-color: #940094;"><img src="<?=$img_files[3]?>" style="height: 50px; width: 50px;"></button>
    
    </div>
  </div>
</nav>