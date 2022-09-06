let oText = document.querySelector("#originalText")
let tText = document.querySelector("#translatedText")
let mBtn = document.querySelector("#minion")
let yBtn = document.querySelector("#yoda")

let url1 = "https://api.funtranslations.com/translate/minion.json?text=Hello%2C%20I%20am%20hungry%21"
let url2 = "https://api.funtranslations.com/translate/yoda.json?text=Master%20Obiwan%20has%20lost%20a%20planet."


mBtn.addEventListener('click', function(){
    fetch(url1)
    .then(resp => resp.json())
    .then(data =>{
        console.log(data)
        let inputValue = oText.value
        newUrl = `${url1}=${inputValue}`
        tText.innerHTML = data.contents.translated 
    }) 
})


yBtn.addEventListener('click', function(){
    fetch(url2)
    .then(resp => resp.json())
    .then(data =>{
        console.log(data)
        let inputValue = oText.value
        newUrl = `${url2}=${inputValue}`
        tText.innerHTML = data.contents.translated 
    }) 
})


// function translateM(){
//     fetch(url1)
//     .then(resp => resp.json())
//     .then(data =>{
//         console.log(data)
//         let inputValue = oText.value
//         newUrl = `${url1}=${inputValue}`
//         tText.innerHTML = data.contents.translated 
//     }) 
// }

// function translateY(){
//     fetch(url2)
//     .then(resp => resp.json())
//     .then(data =>{
//         console.log(data)
//         let inputValue = oText.value
//         newUrl = `${url2}=${inputValue}`
//         tText.innerHTML = data.contents.translated 
//     }) 
// }