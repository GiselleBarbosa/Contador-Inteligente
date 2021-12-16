-----------------------------------------------------------------------------------
CONTADOR INTELIGENTE
-----------------------------------------------------------------------------------
***  Este pequeno projeto foi construído utilizando um pouco de Javascript e HTML5.

-   Baseado no Curso em Vídeo do Professor Gustavo Guanabara - Curso de JavaScript (https://www.cursoemvideo.com/curso/javascript/) 

-    Uma página simples e com pequenas formatações em css e para mim têm um grande valor sentimental, pois é um dos meus primeiros passos em meus estudos na área da programação. 

-----------------------------------------------------------------------------------
Autora:      Giselle da Silva Barbosa
Data:        16/12/2021
LinkedIn:  	https://www.linkedin.com/in/gisellebarb/
-----------------------------------------------------------------------------------
CONTADOR INTELIGENTE.

- Informe um número ínicial
- Informe um número fínal
- Informe o intervalor de números desejados.
- Clique em START e confirá abaixo o resultado da contagem.
-----------------------------------------------------------------------------------

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Giselle da Silva Barbosa">
    <title>Contador Inteligente</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>
    <header>
        <h1>CONTADOR INTELIGENTE</h1>
    </header>

    <section>
        <div class="content">
            <h2>INFORME OS VALORES</h2>
<hr>
            <p>Início: <input type="number" name="ini" id="txti" title="Informe o número inicial da contagem"></p>
            <p>Final : <input type="number" name="fim" id="txtf" title="Informe o último número da contagem"></p>
            <p>Pular    :   <input type="number" name="passo" id="txtp" title="Informe o intervalo desejado"></p>
            
            <p><input id="botton" type="button" value="START" onclick="contar()"></p>
        </div>
        
        <div id="res">
            Preparando a contagem ...</div>
    </section>

    <footer>
        <p>Giselle da Silva Barbosa - Baseado em Curso em Video</p>
    </footer>

    <script src="script.js"></script>

</body>

</html>
--------------------------------------------------------------------
function contar() {
  let ini = document.querySelector('input#txti')
  let fim = document.querySelector('input#txtf')
  let passo = document.querySelector('input#txtp')
  let res = document.querySelector('div#res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert('[ERRO] Verifique os dados digitados.')
  }

  else {
    res.innerHTML = `Contando... \u{1F469}` /* Colocar Emoji usa-se o cod. universal = \u{}*/

    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`
      }
    } else {
      for (let c = i; c >= f; c -= p) {

        res.innerHTML += ` ${c} \u{1F449}`
      }

    }

  }

}
--------------------------------------------------------------------
body {
    background: #7a6a91;
    
}

header {
    color: white;
    text-align: center;
}

h1{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 32px;
    text-decoration: none;
    font-weight: none;
    padding-bottom: 2%;
    padding-top: 2%;
    
}
h2 {
    font-size: 20px;
    text-align: center;
  
}
p {
    font-size: 18px;
}
.content{
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;

}

section {
    background: #ffffff;
    border-radius: 10px;
    padding: 14px;
    width: 500px;
    margin: auto;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.534);
    padding-bottom: 3%;
}

footer {
    padding-top: 2%;
    color: white;
    font: normal 10pt;
    text-align: center;
    font-family: montserrat;
}

#res {
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
  
}

input  {
    width:40px;
    height: 16px;
    font-size: 14px;
    
}
#botton {
    width:80px;
    height:25px;
    text-align: center;
    margin-left: 40%;
    
}
