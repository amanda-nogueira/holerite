/*
* @link https://github.com/amanda-nogueira/holerite.git
*/

function calcularHolerite() {
    const salarioBruto = parseFloat(document.getElementById("salarioBruto").value);
    const horasExtras = parseFloat(document.getElementById("horasExtras").value) || 0;
    const adicionalNoturno = parseFloat(document.getElementById("adicionalNoturno").value) || 0;
    const adicionalPericulosidade = parseFloat(document.getElementById("adicionalPericulosidade").value) || 0;
    const adiantamento = parseFloat(document.getElementById("adiantamento").value) || 0;
    const atrasos = parseFloat(document.getElementById("atrasos").value) || 0;
    const faltas = parseFloat(document.getElementById("faltas").value) || 0;
    const valeTransporte = parseFloat(document.getElementById("valeTransporte").value) / 100;
    const planoSaude = parseFloat(document.getElementById("planoSaude").value) || 0;
    const planoOdonto = parseFloat(document.getElementById("planoOdonto").value) || 0;
    const seguroVida = parseFloat(document.getElementById("seguroVida").value) || 0;
    const descontoINSSPercent = parseFloat(document.getElementById("descontoINSS").value) / 100;
    const descontoINSS = salarioBruto * descontoINSSPercent;
    const valeAlimentacao = parseFloat(document.getElementById("valeAlimentacao").value) || 0;

    if(salarioLiquido < 1412.01){
        
    }
    const totalAdicionais = horasExtras + adicionalNoturno + adicionalPericulosidade;
    const totalDescontos = adiantamento + atrasos + faltas + (salarioBruto * valeTransporte) + planoSaude + planoOdonto + seguroVida + valeAlimentacao + descontoINSS;
    const salarioLiquido = (salarioBruto + totalAdicionais) - totalDescontos;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h3>Salário Líquido: R$ ${salarioLiquido.toFixed(2)}</h3>`;

    const nomeColaborador = document.getElementById("nomeColaborador").value;
    const cnpj = document.getElementById("cnpj").value;

    const holeriteInfo = `
        Nome do Colaborador: ${nomeColaborador}
        CPF: ${cpf}
        Salário Bruto: R$ ${salarioBruto.toFixed(2)}
        Total Adicionais: R$ ${totalAdicionais.toFixed(2)}
        Total Descontos: R$ ${totalDescontos.toFixed(2)}
        Salário Líquido: R$ ${salarioLiquido.toFixed(2)}
    `;
    document.getElementById("holeriteInfo").textContent = holeriteInfo.trim();
    document.getElementById("imprimirHolerite").style.display = 'block';
}

function imprimirHolerite() {
    window.print();
}
