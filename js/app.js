

const gato = document.getElementById('gato')
const cachorro = document.getElementById('cachorro')
const fox = document.getElementById('fox')
const buttonGato = document.querySelectorAll(".subtitulo")[0]
const buttonCachorro = document.querySelectorAll(".subtitulo")[1]
const buttonFox = document.querySelectorAll(".subtitulo")[2]
console.log(buttonGato)
console.log(buttonCachorro)
const urlGato = 'https://aws.random.cat/meow'
const urlCachorro = 'https://random.dog/woof.json'
const urlFox = 'https://randomfox.ca/floof/'


let fGato = () => {
    fetch(urlGato)
        .then((res) => res.json()
        )
        .then(data => {
            gato.innerHTML = `<img src="${data.file}"     />`
            console.log(data)
        })
}

let fCachorro = () => {
    fetch(urlCachorro)
        .then((res) => res.json())
        .then(data => {

            if (data.url.includes('.mp4')) {
                fCachorro()
            } else {
                cachorro.innerHTML = `<img src="${data.url}"     />`
            }

            console.log(data.url)
        })
}
let fFox = () => {
    fetch(urlFox)
        .then((res) => res.json()
        )
        .then(data => {
            fox.innerHTML = `<img src="${data.image}"     />`
            console.log(data)
        })
}




buttonGato.addEventListener('click', fGato)
buttonCachorro.addEventListener('click', fCachorro)
buttonFox.addEventListener('click', fFox)

