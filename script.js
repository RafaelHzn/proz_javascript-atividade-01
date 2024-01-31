const prozEduc = [
{
    titulo: "Primeira Lista",
    menu: <li>"01"</li>;<li>"02"</li>;<li>"03"</li>,
    link: "www.facebook.com",
    lista: <li href="www.facebook.com"></li>;<li href="www.instagram.com"></li>;<li href="www.linkedin.com"></li>
},
]

for(let i = 0; i < prozEduc.length; i++){

    let main = document.createElement("main")

    main.id = `post-${i+1}`

    main.innerHTML =`
    <h1>${prozEduc[i].titulo}</h1>
    <ul>${prozEduc[i].menu}</ul>
    <a>${prozEduc[i].link}</a>
    <ol>${prozEduc[i].lista}</ol>
    `

    let body = document.querySelector("body")
    body.appendChild(main)