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
