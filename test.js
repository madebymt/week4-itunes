fetch(result)
.then(
      function(response){
          if (response.status !==200) {
              console.log(response.status);
              return;
          }
      response.json()
      .then (function(data){
          console.log("Data I need", data );
      result2.textContent = " ";

//// make all search result to show up screen /////
      for (let i = 0 ; i < data.results.length ; i++) {

          let string = `
          <div class = "food">
          <h3>Title: ${data.results[i].title} </h3>
          <a href="${data.results[i].href}"> </a>
          <h3>Ingredients:${data.results[i].ingredients} </h3>
          <img src="${data.results[i].thumbnail}" alt="">
          </div>
          `
          result2.insertAdjacentHTML("beforeEnd",string)

      }

      })

  })
.catch(function(err) {
    console.log("Fetch problem: - S", err);
});

}
})
