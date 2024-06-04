let centroFilial = '';

function mostrarPagina(paginaId) {
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => {
        if (pagina.id === paginaId) {
            pagina.classList.add('active');
        } else {
            pagina.classList.remove('active');
        }
    });
}

function voltarPaginaInicial() {
    limparCampos();
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => {
        if (pagina.id === 'paginaInicial') {
            pagina.classList.add('active');
        } else {
            pagina.classList.remove('active');
        }
    });
}

function verificarCentroFilial() {
    centroFilial = document.getElementById("centroFilial").value;
    if (centroFilial) {
        mostrarPagina('paginaMarcar');
    } else {
        alert("Por favor, informe o Centro/Filial da nota.");
    }
}

function verificarItem() {
    let item = document.getElementById("itemNota").value.toLowerCase();
    let resultado = document.getElementById("resultadoMarcar");
    let gestor = document.getElementById("resultadoGestor");
    resultado.textContent = ""; // Clear previous result
    gestor.textContent = ""; // Clear previous result

    setTimeout(() => {
        let resposta = "";
        let gestorResposta = "";
        
        const centrosFiliaisSP = [
            "1036", "1050", "1069", "1071", "1073", "1078", "1080", "1084",
            "1097", "1098", "1099", "1100", "1105", "1106", "1107", "1108",
            "1117", "1126", "1127", "1128", "1129", "1131", "1132", "1133",
            "1134", "1135", "1136", "1137", "1138", "1139", "1140", "1141",
            "1142", "1143"
        ];

        const centrosFiliais2 = [
            "1110", "1060", "1082", "1114", "1055", "1061", "1074", "1037",
            "1028", "1047", "1035", "1048", "1031", "1085", "1064", "1049",
            "1125", "1004", "1081", "1104", "1059", "1044", "1072", "1065",
            "1030", "1046", "1093", "1123", "1083"
        ];

         const frutas = ["banana", "maçã", "uva", "morango", "laranja", "mamão", "abacaxi", "melancia", "limão",
                         "manga", "flv", "pera", "kiwi", "abacate", "cereja", "framboesa", "amora", "ameixa",
                         "figo", "uva-passa", "pêssego", "nectarina", "melão", "carambola", "pitanga", "jabuticaba",
                         "caqui", "tangerina", "graviola", "goiaba", "maracujá", "abiu", "jaca", "caju", "acerola",
                         "guaraná", "cupuaçu", "umbu", "bacaba", "murici", "cambuci", "pupunha", "pequi", "jujuba",
                         "tamarindo", "sapoti", "atemoia", "cagaita", "cabeludinha", "cereja-do-rio-grande",
                         "cereja-do-mato", "cereja-do-nordeste"
         ];

        const legumes = ["cenoura", "batata", "tomate", "abobrinha", "pepino", "beterraba", "berinjela", "alho",
                         "cebola", "pimentão", "espargos", "abóbora", "quiabo", "ervilha", "milho", "feijão",
                         "vagem", "nabo", "rabanete", "mandioca", "inhame", "batata-doce", "chuchu", "pupunha",
                         "jiló", "maxixe", "cará", "jerimum", "mandioquinha", "cenoura-roxa", "cenoura-amarela",
                         "cenoura-branca"
        ];

        const verduras = ["alface", "couve", "espinafre", "rúcula", "agrião", "brócolis", "couve-flor", "repolho",
                          "salsa", "coentro", "pimenta", "açafrão", "almeirão", "acelga", "alho-poró", "mostarda",
                          "alface-romana", "alface-americana", "alface-crespa", "alface-lisa", "alface-roxa",
                          "alface-frisada", "alface-iceberg", "alface-radichio", "alface-tatsoi", "alface-mâche"
       ];

        const pas = ["leite", "iogurte", "queijo", "margarina", "yakult", "manteiga", "requeijão", "creme de leite", "leite condensado", "nata", "pas"];
        const carnes = ["carne bovina", "carne suína", "frango", "peixe", "carne de cordeiro", "carne moída", "filé mignon", "picanha", "costela", "linguiça", "açougue", "carne"];
        const bazar = ["cigarro", "tecido", "papel higiênico", "utensílios domésticos", "brinquedos", "ferramentas", "itens de papelaria", "decoração", "malas", "eletrodomésticos", "bazar"];
        const perfumaria = ["shampoo", "condicionador", "sabonete", "creme dental", "desodorante", "perfume", "creme hidratante", "protetor solar", "maquiagem", "perfumaria"];
        const limpeza = ["detergente", "desinfetante", "sabão em pó", "amaciante", "alvejante", "limpa vidros", "multiuso", "esponjas", "vassouras", "panos de chão", "limpeza"];
        const saudaveis = ["suplemento", "vitamina", "proteína", "suplemento alimentar", "barra de proteína", "whey protein", "creatina", "glutamina", "BCAA", "colágeno", "saudaveis"];
        const mercearia = ["arroz", "feijão", "lentilha", "grão-de-bico", "milho", "macarrão", "lasanha", "espaguete", "penne", "talharim",
                           "óleo de soja", "óleo de girassol", "azeite de oliva", "manteiga", "banha",
                           "milho em conserva", "ervilhas em conserva", "sardinha em lata", "atum enlatado", "palmito em conserva",
                           "ketchup", "mostarda", "maionese", "molho de tomate", "vinagre",
                           "sal", "farinha de trigo", "farinha de mandioca", "farinha de milho", "mistura para bolo", "massa para pão",
                           "pão de forma", "torrada", "biscoitos", "bolachas", "pães integrais",
                           "chocolate", "gelatina", "pudim", "sorvete", "doce de leite",
                           "suco de caixinha", "refrigerante", "água mineral", "água com gás", "água de coco",
                           "café em pó", "café solúvel", "chá preto", "chá verde", "chá de ervas",
                           "açúcar refinado", "açúcar mascavo", "adoçante em pó", "adoçante líquido","água","grãos", "cereais", "pão", "biscoito", "bolacha", "massa", "mercearia"];

        if (frutas.includes(item) || legumes.includes(item) || verduras.includes(item) || item.includes("flv")) {
            if (["1036", "1050", "1105", "1106", "1142", "1135", "1138"].includes(centroFilial)) {
                resposta = "Marque o @FLV_SP_PR";
                gestorResposta = "@Jully Radassa ou @Marcos";
            } else if (["1073", "1078", "1084", "1097", "1107", "1069", "1071", "1080", "1098", "1099", "1100", "1108", "1117"].includes(centroFilial)) {
                resposta = "Marque o @FLV_SP_MIRASSOL";
                gestorResposta = "@Vania Kenia";
            } else if (["1126", "1127", "1128", "1129", "1131", "1132", "1133", "1134", "1136", "1137", "1139", "1140", "1141", "1143"].includes(centroFilial)) {
                resposta = "Marque o @FLV_SP_SAOPAULO";
                gestorResposta = "@Misrael ou @Thalita";
            } else if (centrosFiliais2.includes(centroFilial)) {
                resposta = "Marque o @FLV_norte";
                gestorResposta = "@Jully Radassa ou @Marcos Gomes";
            } else {
                resposta = "Centro/Filial não reconhecido para FLV.";
            }
        } else if (pas.includes(item)) {
            if (centrosFiliaisSP.includes(centroFilial)) {
                resposta = "Marque o @PAS_saopaulo";
                gestorResposta = "@Noemy Rodrigues ou @João Victor Queiroz";
            } else if (centrosFiliais2.includes(centroFilial)) {
                resposta = "Marque o @PAS_norte_cash ou @PAS_norte_varejo";
                gestorResposta = "@David Renan";
            }
        } else if (carnes.includes(item)) {
            resposta = "Marque o @Açougue";
            gestorResposta = "Marque o @Vitor Portela ou @Jessica Priscila Bertocco"
        } else if (bazar.includes(item)) {
            resposta = "Crie a tratativa no canal do Bazar.";
        } else if (perfumaria.includes(item) || limpeza.includes(item)) {
            if (centrosFiliaisSP.includes(centroFilial)) {
                resposta = "Marque o @Perfumaria_Limpeza_SP";
                gestorResposta = "@Lucas Tavares";
            }
        } else if (saudaveis.includes(item)) {
            resposta = "Marque o @Saudaveis";
            gestorResposta = "@Ana Flávia Vicente";
        } else if (mercearia.includes(item)) {
            resposta = "Item pertence à Mercearia";
            gestorResposta = "Marque o @Nicolas Lucas Belem"
        } else {
            resposta = "Item não reconhecido.";
        }

        // Add typing effect
        let i = 0;
        const text = resposta;
        resultado.textContent = "";
        const speed = 50; // Speed of typing effect

        function typeWriter() {
            if (i < text.length) {
                resultado.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        typeWriter();

        if (gestorResposta) {
            let j = 0;
            const gestorText = gestorResposta;
            gestor.textContent = "";

            function typeWriterGestor() {
                if (j < gestorText.length) {
                    gestor.textContent += gestorText.charAt(j);
                    j++;
                    setTimeout(typeWriterGestor, speed);
                }
            }

            typeWriterGestor();
        }
    }, 500); // Delay to simulate processing time
}

function inicio() {
    let div = document.getElementById("divergencia").value;
    let resultado = document.getElementById("resultado");
    resultado.textContent = ""; // Clear previous result

    setTimeout(() => {
        let resposta = "";
        
        if (div === "confirmações de uso" || div === "confirmação de uso" || div === "quantidade") {
            resposta = "Por ser uma divergência que afetará a quantidade, coloque QUANTIDADE nas observações da nota.";
        } else if (div.includes("icms") || div.includes("ipi") || div.includes("ifop")) {
            resposta = "Por ser uma divergência de imposto, coloque IMPOSTO nas observações da nota.";
        } else if (div === "valor" || div === "valor fcp") {
            resposta = "Por ser uma divergência de valor, coloque VALOR nas observações da nota.";
        } else if (div === "peso") {
            resposta = "Por ser uma divergência que afetará o peso, coloque PESO nas observações da nota.";
        } else {
            resposta = "Divergência não reconhecida.";
        }

        // Add typing effect
        let i = 0;
        const text = resposta;
        resultado.textContent = "";
        const speed = 50; // Speed of typing effect

        function typeWriter() {
            if (i < text.length) {
                resultado.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        typeWriter();
    }, 500); // Delay to simulate processing time
}

function limparCampos() {
    document.getElementById("centroFilial").value = "";
    document.getElementById("itemNota").value = "";
    document.getElementById("divergencia").value = "";
    document.getElementById("resultadoMarcar").textContent = "";
    document.getElementById("resultadoGestor").textContent = "";
    document.getElementById("resultado").textContent = "";
}

// Adiciona um evento de clique ao ícone da casinha
document.querySelector('.home-icon').addEventListener('click', voltarPaginaInicial);

function voltarPaginaInicial() {
    const container = document.querySelector('.container');
    container.classList.add('fade-out');
    setTimeout(() => {
        limparCampos();
        const paginas = document.querySelectorAll('.pagina');
        paginas.forEach(pagina => {
            if (pagina.id === 'paginaInicial') {
                pagina.classList.add('active');
            } else {
                pagina.classList.remove('active');
            }
        });
        container.classList.remove('fade-out');
    }, 500); // O tempo deve corresponder à duração da animação de fade-out
}
