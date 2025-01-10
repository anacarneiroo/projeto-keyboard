var inputCorFundo = document.getElementById('input1')
var inputCorTecla = document.getElementById('input2')
var body = document.getElementById('body')

function clicar(a,cor) {
    a.style.backgroundColor = cor
}

inputCorFundo.addEventListener('input', function(){
    clicar(body,inputCorFundo.value)
})



