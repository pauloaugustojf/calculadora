let divout = document.getElementById('divoutput')
let txtbox = document.getElementById('txtbox')
let btncalc = document.getElementById('btn-calc')
let calc = false
console.log(divout)

function clicou(tecla)
{
    console.log(tecla)
    divout.innerHTML += tecla
}

function calcular()
{
    divout.innerHTML = eval(divout.innerHTML)
}

function limpar()
{
    divout.innerHTML = ""
}

function mudacalc()
{
    if(calc == false)
    {
        calc = true
        btncalc.style.left = '18px'
        btncalc.style.backgroundColor = 'green'
    }
    else
    {
        calc = false
        btncalc.style.left = '2px'
        btncalc.style.backgroundColor = 'red'
    }
    console.log('mudar calculadora')
}