function calcularHolerite() {
    let salarioBruto = parseFloat(document.getElementById("salarioBruto").value)
    let horasExtras = parseFloat(document.getElementById("horasExtras").value) || 0
    let adicionalNoturno = parseFloat(document.getElementById("adicionalNoturno").value) || 0
    let adicionalPericulosidade = parseFloat(document.getElementById("adicionalPericulosidade").value) || 0
    let adiantamento = parseFloat(document.getElementById("adiantamento").value) || 0
    let atrasos = parseFloat(document.getElementById("atrasos").value) || 0
    let faltas = parseFloat(document.getElementById("faltas").value) || 0
    let valeTransporte = parseFloat(document.getElementById("valeTransporte").value) / 100;
    let planoSaude = parseFloat(document.getElementById("planoSaude").value) || 0
    let planoOdonto = parseFloat(document.getElementById("planoOdonto").value) || 0
    let seguroVida = parseFloat(document.getElementById("seguroVida").value) || 0
    let descontoINSSPercent = parseFloat(document.getElementById("descontoINSS").value) / 100
    let valeAlimentacao = parseFloat(document.getElementById("valeAlimentacao").value) || 0

    // Cálculo do desconto INSS
    let descontoINSS = salarioBruto
    if (salarioBruto < 1412.01) {
        descontoINSS = salarioBruto * 0.075
    } else if (salarioBruto < 2666.69) {
        descontoINSS = salarioBruto * 0.09
    } else if (salarioBruto < 4000.04) {
        descontoINSS = salarioBruto * 0.12
    } else if (salarioBruto < 7786.03) {
        descontoINSS = salarioBruto * 0.14
    }

    let totalAdicionais = horasExtras + adicionalNoturno + adicionalPericulosidade
    let totalDescontos = adiantamento + atrasos + faltas + (salarioBruto * valeTransporte) + planoSaude + planoOdonto + seguroVida + valeAlimentacao + descontoINSS
    let salarioLiquido = salarioBruto + totalAdicionais - totalDescontos

    let resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML = `<h3>Salário Líquido: R$ ${salarioLiquido.toFixed(2)}</h3>`

    let nomeColaborador = document.getElementById("nomeColaborador").value
    let cpf = document.getElementById("cpf").value
    const holeriteInfo = `
        Nome do Colaborador: ${nomeColaborador}
        CPF: ${cpf}
        Salário Bruto: R$ ${salarioBruto.toFixed(2)}
        Total Adicionais: R$ ${totalAdicionais.toFixed(2)}
        Total Descontos: R$ ${totalDescontos.toFixed(2)}
        Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`
    document.getElementById("holeriteInfo").textContent = holeriteInfo.trim()
    document.getElementById("imprimirHolerite").style.display = 'block'
}

function imprimirHolerite() {
    window.print()
}
