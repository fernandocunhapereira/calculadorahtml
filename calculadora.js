var resultado = '';
var a = '';
var b = '';
var operador = '';

function inserir(elemento){
    if(resultado === ''){ //se não ha resultado anterior
        if((elemento !== '+' && elemento !== '-' && elemento !== '*' && elemento !== '/') && operador === ''){
            a = a + elemento;
            console.log("valor de a " + a);
        }
        if(elemento === '+' || elemento === '-' || elemento === '*' || elemento === '/'){
            operador = elemento;
            console.log("valor de operador " + operador);
        }
        if((elemento !== '+' && elemento !== '-' && elemento !== '*' && elemento !== '/') && operador !== ''){
            b = b + elemento;
            console.log("valor de b " + b);
        }
        document.getElementById("idDisplay").innerHTML = a + operador + b;
    }else{ //usando resultado anterior
        a = resultado;
        console.log("valor de a " + a);
        if(elemento === '+' || elemento === '-' || elemento === '*' || elemento === '/'){
            operador = elemento;
            console.log("valor de operador " + operador);
        }
        if((elemento !== '+' && elemento !== '-' && elemento !== '*' && elemento !== '/') && operador !== ''){
            b = b + elemento;
            console.log("valor de b " + b);
        }
        document.getElementById("idDisplay").innerHTML = a + operador + b;
    }
}

function limpar(){
    resultado = '';
    a = '';
    b = '';
    operador = '';
    document.getElementById("idDisplay").innerHTML = '';
}

function calcular(){
    if(operador == '+'){
        document.getElementById("idDisplay").innerHTML = Number(a) + Number(b);
        resultado = Number(a) + Number(b);
    }
    if(operador == '-'){
        document.getElementById("idDisplay").innerHTML = Number(a) - Number(b);
        resultado = Number(a) - Number(b);
    }
    if(operador == '*'){
        document.getElementById("idDisplay").innerHTML = Number(a) * Number(b);
        resultado = Number(a) * Number(b);
    }
    if(operador == '/'){
        document.getElementById("idDisplay").innerHTML = Number(a) / Number(b);
        resultado = Number(a) + Number(b);
    }
    a = '';
    b = '';
    operador = '';
}