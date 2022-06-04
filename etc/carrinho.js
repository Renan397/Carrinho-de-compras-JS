var carrinho = Array (
    [ /* Matriz Código */
     "Oi",
     "Renan",
     "Jamilton"   //Código do produto.
    ],

    [ /* Matriz Nome */
        //Nome do produto.
    ],

    [	/* Matriz Preço */
        //Preço do produto.
    ]
    );
index_codigo = carrinho[0].indexOf("Renan");
carrinho[0].splice(index_codigo, 1);
document.write(carrinho[0]);