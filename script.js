const prozEduc = [
{
    titulo:" ",
    lista desordenada:" ",
    link:" ",
    lista ordenada:" "
},
]

for(let i = 0; i < prozEduc.length; i++){
    let lista = document.createElement("body")
    article.innerText =`<a>${prozEduc[i].link}</a>`
    article.innerHTML =`<ul>
    ${prozEduc[i].link}
    ${prozEduc[i].link}
    ${prozEduc[i].link}</ul>`
    article.innerText =`<a>${prozEduc[i].link}</a>`
    article.innerHTML =`<ol>
    ${prozEduc[i].link}
    ${prozEduc[i].link}
    ${prozEduc[i].link}</ol>`

    let body = document.querySelector("body")
    body.appendChild(lista)