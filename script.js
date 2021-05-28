const divout = document.getElementById('divoutput')
const txtbox = document.getElementById('txtbox')
const btncalc = document.getElementById('btn-calc')
let saidaAtual = divout
let algoritimo = ''
let calc = false

function clicou(tecla)
{
    tecla === '^' ? exp():''
    
    function exp (){
        saidaAtual.innerHTML += '<sup id = "exp" contenteditable = "true"> </sup> '
        
        var listaExp = document.querySelectorAll('sup#exp')
        saidaAtual = [...listaExp].pop()
        tecla = ''
    }
    saidaAtual.innerHTML += tecla
}


function calcular()
{
    var X = 10;
    saidaAtual.innerHTML = eval(saidaAtual.innerHTML)
}

function limpar()
{
    divout.innerHTML = null
}
