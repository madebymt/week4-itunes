/*
  Here is a rough idea for the steps you could take:
*/
// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
let form = document.querySelector(".search-form")
let resultShow = document.querySelector(".result-show")
let button = document.querySelector(".search")
let input = document.querySelector(".searchname")
let audio = document.querySelector("audio")


console.log(audio)
// text value need to storage when the submit button action happen
form.addEventListener("submit", function(event) {
    event.preventDefault()

    let searchText = document.querySelector("#searchname").value

    console.log("searchText", searchText)

    resultShow.textContent = ""

fetch(`https://itunes.apple.com/search?term=${searchText}`)  /// fetch pattern
.then (function (data){
    return data.json()
})
.then (function(json) {
    console.log(json)   /// fetch pattern

    for (var i = 0; i < json.results.length; i++) {
        let name = json.results[i].artistName
        let img = json.results[i].artworkUrl100
        let songName = json.results[i].collectionName
        let audio2 = json.results[i].previewUrl

        let show = `
        <div class = "song">
            <img src="${img}" value= "${audio2}" alt="">
            <h3> ${name} </h3>
            <h2> ${songName} </h2>
            <audio controls class = "play">
            <source value="" src="${audio2}" type="audio/mpeg">
        </div>
        `
        ///img scr tag, then add new value tag, so I can call it later
        ///when other event happend///
        resultShow.insertAdjacentHTML("beforeEnd", show)
    }
})
})

resultShow.addEventListener("click", function (click) {
    let img = document.querySelectorAll("img")
    if (click.target && click.target.nodeName === "IMG") // capital img tag
    audio.src = click.target.getAttribute("value")
    console.log("audio", audio.src)
    // click.target.getAttribute("value")

})
