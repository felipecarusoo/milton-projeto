const custoPorMetroQuadrado = 10; 

function calcularAreaECusto(larguraId, comprimentoId, resultadoId) {
    var largura = parseFloat(document.getElementById(larguraId).value) || 0;
    var comprimento = parseFloat(document.getElementById(comprimentoId).value) || 0;
    var area = largura * comprimento;
    var custoTotal = area * custoPorMetroQuadrado;

    document.getElementById(resultadoId).textContent = 'Área: ' + area + ' m². Custo: R$ ' + custoTotal.toFixed(2);
    calcularTotais(); 
}

function calcularTotais() {
    const areas = document.querySelectorAll('[id^="resultado"]');
    let areaTotal = 0;
    let custoTotal = 0;

    areas.forEach(resultado => {
        const texto = resultado.textContent;
        const areaMatch = texto.match(/Área: (\d+(\.\d+)?) m²/);
        const custoMatch = texto.match(/Custo: R\$ (\d+(\.\d+)?)/);

        if (areaMatch) areaTotal += parseFloat(areaMatch[1]);
        if (custoMatch) custoTotal += parseFloat(custoMatch[1]);
    });

    document.getElementById('resultadoTotal').textContent = 'Área Total: ' + areaTotal.toFixed(2) + ' m². Custo Total: R$ ' + custoTotal.toFixed(2);
}
