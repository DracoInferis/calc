$(document).ready(() => {
    const $button = $('.button');
    const $right = $('.right');
    const $monto = $('#monto');
    window.onkeydown = function(event) {
        monto = document.getElementById("monto").value;
        if (monto <= 0 || ""){
            $button.prop("disabled", true);
        } else {$button.removeAttr('disabled')}
        
    $button.on('click', () => {
        $right.slideDown(1000);
        var monto = document.getElementById("monto").value;
        var tarjeta = document.getElementById("tarjetaCredito").value;
        var cuotas = document.getElementById("numCuotas").value;
        var montoVisa = monto*1.25;
        var montoMaster = monto*1.22;
        var cuotasVisa = montoVisa/cuotas;
        var cuotasMaster = montoMaster/cuotas;
        cuotasVisa = cuotasVisa.toFixed(2);
        cuotasMaster = cuotasMaster.toFixed(2);
        if (tarjeta == "visa") {
            document.getElementById("mtf").innerHTML = "$" + montoVisa;
            document.getElementById("mcf").innerHTML = "$" + cuotasVisa;
        }
        if (tarjeta == "master") {
            document.getElementById("mtf").innerHTML = "$" + montoMaster;
            document.getElementById("mcf").innerHTML = "$" + cuotasMaster; 
        }
        if (tarjeta == "") {
            document.getElementById("mtf").innerHTML = "Especifique tarjeta";
            document.getElementById("mcf").innerHTML = "Error";     
        }
        if (cuotas == "") {
            document.getElementById("mtf").innerHTML = "Error";
            document.getElementById("mcf").innerHTML = "Especifique cuotas"; 
        }
        if (tarjeta == "" && cuotas == "") {
            document.getElementById("mtf").innerHTML = "Especifique tarjeta";
            document.getElementById("mcf").innerHTML = "Especifique cuotas";  
        }
    })
    
    if ( event.keyCode == 13 ) {
        document.getElementsByTagName('button')[0].click();
    }
    if ( event.keyCode == 27 ) {
        $right.slideUp(1000);
        $monto.val("");
        document.forms["calcuMon"].reset();
    }};
})