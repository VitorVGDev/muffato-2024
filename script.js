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
        ]; // Filiais de São Paulo

        const centrosFiliaisNOR = [
            "1110", "1060", "1082", "1114", "1055", "1061", "1074", "1037",
            "1028", "1047", "1035", "1048", "1031", "1085", "1064", "1049",
            "1125", "1004", "1081", "1104", "1059", "1044", "1072", "1065",
            "1030", "1046", "1093", "1123", "1083"
        ]; // Filiais da regional Norte

        const centrosFiliaisOeste = [
            "1001", "1007", "1018", "1023", "1025", "1026", "1027", "1033", "1040", "1051",
            "1054", "1057", "1063", "1066", "1086", "1094", "1102", "1109", "1112", "1119",
            "1120", "1144"
        ] // Filiais da regional Oeste
        
        const centrosFiliaisSul = [
            "1006", "1032", "1038", "1039", "1042", "1045", "1053", "1056", "1067", "1068",
            "1070", "1075", "1076", "1079", "1089", "1090", "1091", "1092", "1096", "1101",
            "1111", "1113", "1115", "1116", "1121", "1122", "1145", "1146"
        ] // Filiais da regional Sul
        
        const frutas = ["banana", "maçã", "uva", "morango", "laranja", "mamão", "abacaxi", "melancia", "limão",
                        "manga", "flv", "pera", "kiwi", "abacate", "cereja", "framboesa", "amora", "ameixa",
                        "figo", "uva-passa", "pêssego", "nectarina", "melão", "carambola", "pitanga", "jabuticaba",
                        "caqui", "tangerina", "graviola", "goiaba", "maracujá", "abiu", "jaca", "caju", "acerola",
                        "guaraná", "cupuaçu", "umbu", "bacaba", "murici", "cambuci", "pupunha", "pequi", "jujuba",
                        "tamarindo", "sapoti", "atemoia", "cagaita", "cabeludinha", "cereja-do-rio-grande",
                        "cereja-do-mato", "cereja-do-nordeste"
        ]; // Variável com dados de frutas

        const legumes = ["cenoura", "batata", "tomate", "abobrinha", "pepino", "beterraba", "berinjela", "alho",
                        "cebola", "pimentão", "espargos", "abóbora", "quiabo", "ervilha", "milho","vagem", 
                        "nabo", "rabanete", "mandioca", "inhame", "batata-doce", "chuchu", "pupunha",
                        "jiló", "maxixe", "cará", "jerimum", "mandioquinha", "cenoura-roxa", "cenoura-amarela",
                        "cenoura-branca"
        ]; // Variável com dados de legumes

        const verduras = ["alface", "couve", "espinafre", "rúcula", "agrião", "brócolis", "couve-flor", "repolho",
                        "salsa", "coentro", "pimenta", "açafrão", "almeirão", "acelga", "alho-poró",
                        "alface-romana", "alface-americana", "alface-crespa", "alface-lisa", "alface-roxa",
                        "alface-frisada", "alface-iceberg", "alface-radichio", "alface-tatsoi", "alface-mâche"
        ]; // Variável com dados de verduras

        const flores = ["flores", "planta", "rosa", "orquidea"]; // Variável com flores
        
        const pas = ["leite", "presunto", "queijo prato", "queijo coalho", "brownie", "lasanha", "bacon", "pizza", "salame", "iogurte", "queijo", "margarina", "yakult", "manteiga", "requeijão", "creme de leite", "leite condensado", "nata", "pas", "salsicha"]; // variável com dados de PAS

        const carnes = ["carne bovina", "carne suína", "frango", "peixe", "carne de cordeiro", "carne moída", "filé mignon", "picanha", "costela", "linguiça", "açougue", "carne"]; // Variável com dados de carnes

        const bazar = ["cigarro", "tecido", "papel higiênico", "utensílios domésticos", "brinquedos", "ferramentas", "itens de papelaria", "decoração", "malas", "eletrodomésticos", "bazar"]; // Variável com dados de Bazar

        const perfumaria = ["shampoo", "condicionador", "sabonete", "creme dental", "desodorante", "perfume", "creme hidratante", "protetor solar", "maquiagem", "perfumaria"]; // Variável com dados de perfumaria

        const limpeza = ["detergente", "desinfetante", "sabão em pó", "amaciante", "alvejante", "limpa vidros", "multiuso", "esponjas", "vassouras", "panos de chão", "limpeza"]; // Variável com dados de limpeza

        const saudaveis = ["suplemento", "granola", "barra de cereal", "brownie sem gluten", "brownie s/ glúten", "brownie sem glúten", "vitamina", "proteína", "suplemento alimentar", "barra de proteína", "whey protein", "creatina", "glutamina", "BCAA", "colágeno", "saudaveis"]; // Variável com dados de produtos saudáveis

        const mercearia = ["arroz", "brownie sem gluten", "brownie s/ glúten", "feijão", "lentilha", "grão-de-bico", "macarrão", "lasanha", "espaguete", "penne", "talharim",
                            "óleo de soja", "óleo de girassol", "azeite de oliva",
                            "milho em conserva", "ervilhas em conserva", "sardinha em lata", "atum enlatado", "palmito em conserva",
                            "ketchup", "mostarda", "maionese", "molho de tomate", "vinagre",
                            "sal", "farinha de trigo", "farinha de mandioca", "farinha de milho", "mistura para bolo", "massa para pão",
                            "pão de forma", "torrada", "biscoitos", "bolachas", "pães integrais",
                            "chocolate", "gelatina", "pudim", "sorvete", "doce de leite",
                            "suco de caixinha",
                            "café em pó", "café solúvel", "chá preto", "chá verde", "chá de ervas", "café",
                            "açúcar refinado", "açúcar mascavo", "adoçante em pó", "adoçante líquido","água","grãos", "cereais", "pão", "biscoito", "bolacha", "massa", "mercearia"]; // Variável com dados de itens da mercearia

        const bebidas = ["bebida","bebidas", "cerveja", "refrigerante",]; // Adicionando as bebidas à lista

        if (frutas.includes(item) || legumes.includes(item) || verduras.includes(item) || flores.includes(item) || item.includes("flv")) {
            if (["1036", "1050", "1105", "1106", "1142", "1135", "1138"].includes(centroFilial)) {
                resposta = "Se tiver COMP no pedido, marque o responsável da LOJA. Se não, Marque o @FLV_SP_PR";
                gestorResposta = "@Jully Radassa ou @Marcos Gomes";
            } else if (["1073", "1078", "1084", "1097", "1107", "1069", "1071", "1080", "1098", "1099", "1100", "1108", "1117"].includes(centroFilial)) {
                resposta = "Marque o @FLV_SP_MIRASSOL";
                gestorResposta = "@Vania Kenia ou @George Jonathan";
            } else if (["1126", "1127", "1128", "1129", "1131", "1132", "1133", "1134", "1136", "1137", "1139", "1140", "1141", "1143"].includes(centroFilial)) {
                resposta = "Marque o @FLV_SP_SAOPAULO";
                gestorResposta = "@Alice Alves ou @Thalita Aparecida";
            } else if (centrosFiliaisNOR.includes(centroFilial)) {
                resposta = "Marque o @FLV_norte";
                gestorResposta = "@Jully Radassa ou @Marcos Gomes";
            } else if(centrosFiliaisOeste.includes(centroFilial)){
                resposta = "Verifique se o pedido é da loja. Para isso, abra a me23n, olhe se o pedido foi criado por COMP."
            } else if(centrosFiliaisSul.includes(centroFilial)){
                resposta = "@FLV_SUL_FLORES para pedidos de flores ou @FLV_SUL."
                gestorResposta = "@Jully Radassa ou @Joao Batista da Silva"
            }
            else {
                resposta = "Centro/Filial não reconhecido. Verifique e tente novamente.";
            }

        } // fim seção FLV
        
        else if (pas.includes(item)) {
            if (centrosFiliaisSP.includes(centroFilial)) {
                resposta = "Marque o @PAS_saopaulo";
                gestorResposta = "@Noemy Nunes Rodrigues ou @Marcio Rogerio da Silva";
            } else if (["1037", "1060", "1065", "1074", "1085", "1093", "1110", "1114", "1123"].includes(centroFilial)) {
                resposta = "Marque o @PAS_norte_cash";
                gestorResposta = "@David Renan ou @Marcelo Martins";
            } else if(["1004", "1028", "1029", "1030", "1035", "1044", "1047", "1048", "1049", "1055", "1059", "1061", "1064", "1072", "1081", "1082", "1083", "1104", "1147"].includes(centroFilial)){
                resposta = "Marque o @PAS_norte_varejo";
                gestorResposta = "@David Renan da Silva ou @Marcelo Martins";
            } else if(centrosFiliaisSul.includes(centroFilial)){
                resposta = "Marque o @PAS_SUL";
                gestorResposta = "@Julia Bueno ou @Jorge Ricardo Castro.";
            } else if(centrosFiliaisOeste.includes(centroFilial)){
                resposta = "Marque o @Pas_e_Salsicharia"
                gestorResposta = "@Franciele Silva de lima ou @Micaela Antônia"
            }   

        }// Fim da seção PAS

        else if (carnes.includes(item)) {
            resposta = "Marque o @Açougue";
            gestorResposta = "Marque o @Douglas Osni ou @Gabriel Vitor Molina"
        } else if (bazar.includes(item)) {
            resposta = "Crie a tratativa no canal do Bazar.";
        } else if (perfumaria.includes(item) || limpeza.includes(item)) {
            if (centrosFiliaisSP.includes(centroFilial)) {
                resposta = "Marque o @Perfumaria_Limpeza_SP";
                gestorResposta = "@Lucas Tavares";
            }
        } else if (saudaveis.includes(item)) {
            resposta = "Marque o @Saudaveis";
            gestorResposta = "@Ana Flávia Vicente ou @Rony Pereira";
        } else if (mercearia.includes(item)) {
            resposta = "Item pertence à Mercearia";
            gestorResposta = "Marque o @Nicolas Lucas Belem ou @Lucas Batista Melo"
        } else if (bebidas.includes(item)) { // Verifica se o item é uma bebida
            if (centrosFiliaisSP.includes(centroFilial)) {
                resposta = "Marque o @Edilson Luiz ou use as TAGs:";
                gestorResposta = "@bebidas_saopaulo_varejo (se a loja for varejo) ou @bebidas_saopaulo_cash (se a loja for cash ou atacarejo)";
            }
        } else {
            resposta = "Item não reconhecido.";
        }

        // Add typing effect
        let i = 0;
        const text = resposta;
        resultado.textContent = "";
        const speed = 30; // Speed of typing effect

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
    } ,100); // Delay to simulate processing time
}

function inicio() {
    let div = document.getElementById("divergencia").value;
    let resultado = document.getElementById("resultado");
    resultado.textContent = ""; // Clear previous result

    setTimeout(() => {
        let resposta = "";
        
        if (div === "confirmações de uso" || div === "confirmação de uso" || div === "quantidade") {
            resposta = "Coloque QUANTIDADE nas observações da nota. Ex: a78; quantidade";
        } else if (div === "valor ipi" || div === "valor fcp" || div === "ipi" || div === "fcp" || div === "ipi taxa"){
            resposta = "Coloque TRIBUTAÇÃO e o horário. Se o caminhão estiver no pátio, acrescente T01. Ex: a78; tributação T01 (horário)";
        } else if (div === "valor bruto" || div === "vlr bruto" || div === "valor") {
            resposta = "Coloque preço nas observações.";
        } else if (div === "associacao manual" || div === "associação manual" || div === "associação") {
            resposta = "Coloque CAD nas observações.";
        }else {
            resposta = "Divergência não reconhecida.";
        }

        // Add typing effect
        let i = 0;
        const text = resposta;
        resultado.textContent = "";
        const speed = 30; // Speed of typing effect

        function typeWriter() {
            if (i < text.length) {
                resultado.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        typeWriter();
    }, 100); // Delay to simulate processing time
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
    }, 10); // O tempo deve corresponder à duração da animação de fade-out
}
