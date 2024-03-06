function Fazercalculo(){
   // alert ("funcionando");
    let valueF01 =document.getElementById('faixa01').value;

    let valueF02 =document.getElementById('faixa02').value;
    
    let valueF03 =document.getElementById('faixa03').value;
    
    let multiplicador =parseFloat(document.getElementById('mult').value);

    let tolerancia =parseFloat(document.getElementById('Tol').value);

    let concat = parseFloat(valueF01 + valueF02 + valueF03);
    document.getElementById("concatenação").value = concat;
    //alert(concat)

    let result = concat * multiplicador;
    
   // alert(result);

    let tol =  result * tolerancia;
    document.getElementById("tolerância").value = tol;
    //alert(tol);

    let tol01 = result - tol;
    //alert(tol01)
    let tol02 = result + tol;
    //alert(tol02)
    

    tol01 = tol01.toFixed(1);
    tol02 = tol02.toFixed(1);

    if(result >= 10**3 && result < 10**6){
        result = (result/10**3)+"k";
        tol01 = (tol01/10**3)+"k";
        tol02 = (tol02/10**3)+"k";
    }else if(result >= 10**6 && result < 10**9){
        result = (result/10**6)+"M";
        tol01 = (tol01/10**6)+"M";
        tol02 = (tol02/10**6)+"M";
    }else if(result >= 10**9 && result < 10**12){
        result = (result/10**9)+"G";
        tol01 = (tol01/10**9)+"G";
        tol02 = (tol02/10**9)+"G";
    }else if(result >= 10**12 && result < 10**15){
        result = (result/10**12)+"T";
        tol01 = (tol01/10**12)+"T";
        tol02 = (tol02/10**12)+"T";
    }

    document.getElementById("resultado").value = result+"Ω";
    document.getElementById("var01").value = tol01+"Ω";
    document.getElementById("var02").value = tol02+"Ω";
}
