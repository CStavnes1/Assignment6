
"use strict"

//array for buttons 

let topics = ["Manchester United", "The Room", "Music", "Minnesota"];

let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=M7AxqOfDelpmvVXbJ7uItpRQhwv0Qh30&limit=10";


//function getAjax() {


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
    for (let i = 0; i < topics.length; i++) {
    
        $("#topic-buttons").append(`<button id="${topics[i]}">${topics[i]}`)

        $().click(function() {
            console.log(`value="${topics[i]}"`)
        });



    }

});


//};

