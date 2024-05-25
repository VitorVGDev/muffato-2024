function inicio() {
    let div = document.getElementById("divergencia").value;
    let resultado = document.getElementById("resultado");
    resultado.textContent = ""; // Clear previous result

    setTimeout(() => {
        if (div === "confirmações de uso" || div === "confirmação de uso" || div === "quantidade") {
            resultado.textContent = "Por ser uma divergência que afetará a quantidade, você deve colocar QUANTIDADE nas observações da nota.";
        } else if (div === "ifop" || div === "icms" || div === "ipi" || div === "valor fcp") {
            resultado.textContent = "Por ser uma divergência tributária, coloque TRIBUTAÇÃO (e o horário) nas observações. Se o caminhão estiver no pátio, acrescente T01, exemplo: a78; tributação T01 (horário).";
        } else if (div === "remessa final") {
            resultado.textContent = "Coloque RF nas observações.";
        } else if (div === "valor outro" || div === "valor outr") {
            resultado.textContent = "Coloque ZDAV nas observações.";
        } else if (div === "associação manual" || div === "associação" || div === "associacao manual") {
            resultado.textContent = "Coloque CAD nas observações.";
        } else if (div === "emissor da fatura") {
            resultado.textContent = "Coloque EF nas observações.";
        } else {
            resultado.textContent = "Divergência não reconhecida.";
        }

        // Add typing effect
        let i = 0;
        const text = resultado.textContent;
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
