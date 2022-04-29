function calcular(){
    var Salario = document.getElementById("salario").value

    var SalarioB = document.getElementById("resultado_bruto")
    SalarioB.innerHTML = Salario

    var INNS = Salario*0.07
    var INNS_variable  = document.getElementById("resultado_INSS")
    INNS_variable.innerHTML = INNS

    var SalarioN = Salario-INNS
    var SalarioNeto = document.getElementById("salario_neto")
    SalarioNeto.innerHTML = SalarioN;

    var salarioAnual = Salario*12


}