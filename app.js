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
    const valeAlimentacao = parseFloat(document.getElementById("valeAlimentacao").value) || 0;


    const totalAdicionais = horasExtras + adicionalNoturno + adicionalPericulosidade;

    const totalDescontos = adiantamento + atrasos + faltas + (salarioBruto * valeTransporte) + planoSaude + planoOdonto + seguroVida + valeAlimentacao;

    const salarioLiquido = salarioBruto + totalAdicionais - totalDescontos;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h3>Salário Líquido: R$ ${salarioLiquido.toFixed(2)}</h3>`;
}
