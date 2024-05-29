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
        
        if (item.includes("frutas") || item.includes("legumes") || item.includes("verduras") || item.includes("flv")) {
            if (["1036", "1050", "1105", "1106", "1142", "1135", "1138"].includes(centroFilial)) {
                resposta = "Marque o @FLV_SP_PR";
                gestorResposta = "@Jully Radassa ou @Marcos  ";
            } else if (["1073", "1078", "1084", "1097", "1107", "1069", "1071", "1080", "1098", "1099", "1100", "1108", "1117"].includes(centroFilial)) {
                resposta = "Marque o @FLV_SP_MIRASSOL";
                gestorResposta = "@Vania Kenia";
            } else if (["1126", "1127", "1128", "1129", "1131", "1132", "1133", "1134", "1136", "1137", "1139", "1140", "1141", "1143"].includes(centroFilial)) {
                resposta = "Marque o @FLV_SP_SAOPAULO";
                gestorResposta = "@Misrael ou @Thalita";
            } else {
                resposta = "Centro/Filial não reconhecido para FLV.";
            }
        } else if (item.includes("leite") || item.includes("margarina") || item.includes("queijo")) {
            resposta = "Marque o @PAS";
        } else if (item.includes("carne")) {
            resposta = "Marque o @Açougue";
        } else if (item.includes("cigarro") || item.includes("tecido") || item.includes("papel higiênico")) {
            resposta = "Crie a tratativa no canal do Bazar.";
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
        } else if (div === "ifop" || div === "icms" || div === "ipi" || div === "valor fcp" || div === "ICMS Valor XML" || div ==="ICMS Base XML" || div === "ICMS Base Pedido" || div ==="ICMS Taxa XML" || div === "ICMS ST Va") {
            resposta = "Coloque TRIBUTAÇÃO (e o horário) nas observações. Se o caminhão estiver no pátio, acrescente T01. Exemplo: a78; tributação T01 (horário).";
        } else if (div === "remessa final") {
            resposta = "Coloque RF nas observações.";
        } else if (div === "valor outro" || div === "valor outr") {
            resposta = "Coloque ZDAV nas observações.";
        } else if (div === "associação manual" || div === "associação" || div === "associacao manual") {
            resposta = "Coloque CAD nas observações.";
        } else if (div === "emissor da fatura") {
            resposta = "Coloque EF nas observações.";
        } else if (div === "conversão" || div === "conversao" || div === "Qtde Conve") {
            resposta = "Coloque CONV nas observações.";
        } else if (div === "frete xml" || div === "frete XML" || div === "Frete XML" || div === "Frete Pedido") {
            resposta = "Coloque FRETE nas observações.";
        } else if (div === "tipo" || div === "tipo do pedido" || div === "Tipo do pe") {
            resposta = "Se estiver ZB no campo, peça para o responsável informar um pedido bonificado. Coloque SEM PEDIDO nas observações.";  
        } else if(div === "valor desconto" || div === "Valor Desconto XML" || div === "Valor Desconto Ped"){      
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
    }, 400); // Delay to simulate processing time
}

function limparCampos() {
    document.getElementById("centroFilial").value = '';
    document.getElementById("itemNota").value = '';
    document.getElementById("divergencia").value = '';
    document.getElementById("resultadoMarcar").textContent = '';
    document.getElementById("resultadoGestor").textContent = '';
    document.getElementById("resultado").textContent = '';
}

// Adiciona um evento de clique ao ícone da casinha
document.querySelector('.home-icon').addEventListener('click', voltarPaginaInicial);
