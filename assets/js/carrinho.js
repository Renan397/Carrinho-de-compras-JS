$(document).ready(function(){
  var carrinho = Array (
    [ /* Matriz Código */
        //Código do produto.
    ],

    [ /* Matriz Nome */
        //Nome do produto.
    ],

    [	/* Matriz Preço */
        //Preço do produto.
    ]
    );

    //Jordan I 990
    $("#bttn_carrinho_mostrar1").click(function(){
      alert("Produto adicionado ao carrinho com sucesso!");
      id_produto1 = document.getElementById("990").id;
      nome_produto1 = document.getElementById("jordan_990").textContent;
      preco_produto1 = document.getElementById("preco_990").textContent;
      carrinho[0].push(id_produto1);
      carrinho[1].push(nome_produto1);
      carrinho[2].push(preco_produto1);

        $("#bttn_carrinho_mostrar1").hide();
        $("#bttn_carrinho_esconder1").fadeToggle();
        $("#imgTenis1").hide();
        $("#preco_990").hide();
        $("#titulo_return1").fadeToggle();
        $("#txt_return1").fadeToggle();
        $("#txt_return1").append("<b>Códigos: </b>" + carrinho[0] + "<br><br><b>Produtos: </b>" + carrinho[1] + "<br><br><b>Preços: </b>" + carrinho[2] + "<br><br>");
      });
      $("#bttn_carrinho_esconder1").click(function(){
      alert("Produto removido do carrinho.");
      index_id_produto1 = carrinho[0].indexOf(id_produto1);
      index_nome_produto1 = carrinho[1].indexOf(nome_produto1);
      index_preco_produto1 = carrinho[2].indexOf(preco_produto1);
      carrinho[0].splice(index_id_produto1, 1);
      carrinho[1].splice(index_nome_produto1, 1);
      carrinho[2].splice(index_preco_produto1, 1);

        $("#titulo_return1").fadeToggle();
        $("#txt_return1").fadeToggle();
        $("#bttn_carrinho_esconder1").hide();
        $("#bttn_carrinho_mostrar1").fadeToggle();
        $("#imgTenis1").fadeToggle();
        $("#preco_990").fadeToggle();
        // Esvaziar a div de retorno (carrinho), para evitar repetições de conteúdo.
        $("#txt_return1").empty();
      });
      //

      //Jordan IV 991
      $("#bttn_carrinho_mostrar2").click(function(){
        alert("Produto adicionado ao carrinho com sucesso!");
        id_produto2 = document.getElementById("991").id;
        nome_produto2 = document.getElementById("jordan_991").textContent;
        preco_produto2 = document.getElementById("preco_991").textContent;
        carrinho[0].push(id_produto2);
        carrinho[1].push(nome_produto2);
        carrinho[2].push(preco_produto2);

        $("#bttn_carrinho_mostrar2").hide();
          $("#bttn_carrinho_esconder2").fadeToggle();
          $("#imgTenis2").hide();
          $("#preco_991").hide();
          $("#titulo_return2").fadeToggle();
          $("#txt_return2").fadeToggle();
          $("#txt_return2").append("<b>Códigos: </b>" + carrinho[0] + "<br><b>Produtos: </b>" + carrinho[1] + "<br><b>Preços: </b>" + carrinho[2] + "<br><br>");
        });
        $("#bttn_carrinho_esconder2").click(function(){
          alert("Produto removido do carrinho.");
          index_id_produto2 = carrinho[0].indexOf(id_produto2);
          index_nome_produto2 = carrinho[1].indexOf(nome_produto2);
          index_preco_produto2 = carrinho[2].indexOf(preco_produto2);
          carrinho[0].splice(index_id_produto2, 1);
          carrinho[1].splice(index_nome_produto2, 1);
          carrinho[2].splice(index_preco_produto2, 1);

          
          $("#titulo_return2").fadeToggle();
          $("#txt_return2").fadeToggle();
          $("#bttn_carrinho_esconder2").hide();
          $("#bttn_carrinho_mostrar2").fadeToggle();
          $("#imgTenis2").fadeToggle();
          $("#preco_991").fadeToggle();
          // Esvaziar a div de retorno (carrinho), para evitar repetições de conteúdo.
          $("#txt_return2").empty();
        });
        //

        //Jordan V 992
      $("#bttn_carrinho_mostrar3").click(function(){
        alert("Produto adicionado ao carrinho com sucesso!");
        id_produto3 = document.getElementById("992").id;
        nome_produto3 = document.getElementById("jordan_992").textContent;
        preco_produto3 = document.getElementById("preco_992").textContent;
        carrinho[0].push(id_produto3);
        carrinho[1].push(nome_produto3);
        carrinho[2].push(preco_produto3);

        $("#bttn_carrinho_mostrar3").hide();
          $("#bttn_carrinho_esconder3").fadeToggle();
          $("#imgTenis3").hide();
          $("#preco_992").hide();
          $("#titulo_return3").fadeToggle();
          $("#txt_return3").fadeToggle();
          $("#txt_return3").append("<b>Códigos: </b>" + carrinho[0] + "<br><b>Produtos: </b>" + carrinho[1] + "<br><b>Preços: </b>" + carrinho[2] + "<br><br>");
        });
        $("#bttn_carrinho_esconder3").click(function(){
          alert("Produto removido do carrinho.");
          index_id_produto3 = carrinho[0].indexOf(id_produto3);
          index_nome_produto3 = carrinho[1].indexOf(nome_produto3);
          index_preco_produto3 = carrinho[2].indexOf(preco_produto3);
          carrinho[0].splice(index_id_produto3, 1);
          carrinho[1].splice(index_nome_produto3, 1);
          carrinho[2].splice(index_preco_produto3, 1);

          
          $("#titulo_return3").fadeToggle();
          $("#txt_return3").fadeToggle();
          $("#bttn_carrinho_esconder3").hide();
          $("#bttn_carrinho_mostrar3").fadeToggle();
          $("#imgTenis3").fadeToggle();
          $("#preco_992").fadeToggle();
          // Esvaziar a div de retorno (carrinho), para evitar repetições de conteúdo.
          $("#txt_return3").empty();
        });
        //

        //Jordan IX 993
      $("#bttn_carrinho_mostrar4").click(function(){
        alert("Produto adicionado ao carrinho com sucesso!");
        id_produto4 = document.getElementById("993").id;
        nome_produto4 = document.getElementById("jordan_993").textContent;
        preco_produto4 = document.getElementById("preco_993").textContent;
        carrinho[0].push(id_produto4);
        carrinho[1].push(nome_produto4);
        carrinho[2].push(preco_produto4);

        $("#bttn_carrinho_mostrar4").hide();
          $("#bttn_carrinho_esconder4").fadeToggle();
          $("#imgTenis4").hide();
          $("#preco_993").hide();
          $("#titulo_return4").fadeToggle();
          $("#txt_return4").fadeToggle();
          $("#txt_return4").append("<b>Códigos: </b>" + carrinho[0] + "<br><b>Produtos: </b>" + carrinho[1] + "<br><b>Preços: </b>" + carrinho[2] + "<br><br>");
        });
        $("#bttn_carrinho_esconder4").click(function(){
          alert("Produto removido do carrinho.");
          index_id_produto4 = carrinho[0].indexOf(id_produto4);
          index_nome_produto4 = carrinho[1].indexOf(nome_produto4);
          index_preco_produto4 = carrinho[2].indexOf(preco_produto4);
          carrinho[0].splice(index_id_produto4, 1);
          carrinho[1].splice(index_nome_produto4, 1);
          carrinho[2].splice(index_preco_produto4, 1);

          
          $("#titulo_return4").fadeToggle();
          $("#txt_return4").fadeToggle();
          $("#bttn_carrinho_esconder4").hide();
          $("#bttn_carrinho_mostrar4").fadeToggle();
          $("#imgTenis4").fadeToggle();
          $("#preco_993").fadeToggle();
          // Esvaziar a div de retorno (carrinho), para evitar repetições de conteúdo.
          $("#txt_return4").empty();
        });
        //
        
        //Carrinho do Menu
        $("#bttn_carrinho_menu").click(function(){
          $("#bttn_carrinho_menu").hide();
          $("#bttn_carrinho_menu_esconder").show();
          $("#titulo_carrinho_menu").fadeToggle();
          $("#carrinho_menu").fadeToggle();
          // Verifica se o carrinho está vazio ou não.
          if (carrinho[0].length == 0 && carrinho[1].length == 0 && carrinho[2].length == 0) {
          $("#carrinho_menu").append("Seu carrinho está vazio.");
          }
          else {
          $("#carrinho_menu").append("<b>Códigos: </b>" + carrinho[0] + "<br><br><b>Produtos: </b>" + carrinho[1] + "<br><br><b>Preços: </b>" + carrinho[2] + "<br><br>");
          };
          //
        });
        $("#bttn_carrinho_menu_esconder").click(function(){
          $("#bttn_carrinho_menu_esconder").hide();
          $("#bttn_carrinho_menu").fadeToggle();
          $("#titulo_carrinho_menu").fadeToggle();
          $("#carrinho_menu").fadeToggle();
          // Esvaziar a div de retorno (carrinho do menu), para evitar repetições de conteúdo.
          $("#carrinho_menu").empty();
        });
        //

});

