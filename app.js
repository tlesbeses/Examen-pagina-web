function calcular(){
    var Salario = document.getElementById("salario").value

    var SalarioB = document.getElementById("resultado_bruto")
    SalarioB.innerHTML = Salario

    var INNS = Salario*0.07
    var INNS_variable  = document.getElementById("resultado_INSS")
    INNS_variable.innerHTML = INNS.toFixed(2)

    var SalarioN = Salario-INNS
    var SalarioNeto = document.getElementById("salario_neto")
    SalarioNeto.innerHTML = SalarioN;

    var salarioAnual = SalarioN*12
    var InpuestoSR = document.getElementById("resultado_IR")
    var salarioTCD = document.getElementById("resultado_deduccioens")
    var calculo
    if (salarioAnual<=100000) {
        calculo = 0
        salarioTCD.innerHTML = SalarioN-calculo.toFixed(2)
    }  else if(salarioAnual>100000 && salarioAnual<=200000 ) {
        calculo = ((salarioAnual-100000)*0.15)/12
        InpuestoSR.innerHTML = calculo.toFixed(2);
        salarioTCD.innerHTML = SalarioN-calculo.toFixed(2)

    }else if(salarioAnual>200000 && salarioAnual<=350000){
        calculo = (((salarioAnual-200000)*0.2)+15000)/12
        InpuestoSR.innerHTML = calculo.toFixed(2);
        salarioTCD.innerHTML = SalarioN-calculo.toFixed(2)

    }else if (salarioAnual>350000 && salarioAnual<=500000) {
        calculo = (((salarioAnual-350000)*0.25)+45000)/12
        InpuestoSR.innerHTML = calculo.toFixed(2);
        salarioTCD.innerHTML = SalarioN-calculo.toFixed(2)

    } else if (salarioAnual>500000) {
        calculo = (((salarioAnual-500000)*0.3)+82500)/12
        InpuestoSR.innerHTML = calculo.toFixed(2);
        salarioTCD.innerHTML = SalarioN-calculo.toFixed(2)
    } else {
        
    }


}