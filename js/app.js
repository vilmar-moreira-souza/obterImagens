

const gato = document.getElementById('gato')
const cachorro = document.getElementById('cachorro')

const buttonGato = document.querySelectorAll(".subtitulo")[0]
const buttonCachorro = document.querySelectorAll(".subtitulo")[1]
console.log(buttonGato)
console.log(buttonCachorro)
const urlGato = 'https://aws.random.cat/meow'
const urlCachorro = 'https://random.dog/woof.json'

buttonGato.addEventListener('click',()=>{
fetch(urlGato)
    .then((res)=>res.json()    
    )
    .then(data=>{
        gato.innerHTML = `<img src="${data.file}"     />`
        console.log(data)
})
})


buttonCachorro.addEventListener('click',()=>{
    fetch(urlCachorro)
    .then((res) => res.json())
    .then(data => {
        cachorro.innerHTML =`<img src="${data.url}"     />`
        //cachorro.style.backgroundImage = "url('//')"
        console.log(data.url)
    })
})