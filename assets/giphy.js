
"use strict"

//array for buttons 
let topics = ["Manchester United", "The Room", "Music", "Minnesota"];

$(document).ready(function () {

    for (let i = 0; i < topics.length; i++) {

        $("#topic-buttons").append(`<button class="button-select" data-topic="${topics[i]}">${topics[i]}`)
    }

});



//function to create new button
let bunttonMaker = function () {
    event.preventDefault();
    $("#topic-buttons").empty();

    let newbutton = $("#topic").val()

    topics.push(newbutton)

    for (let i = 0; i < topics.length; i++) {

        $("#topic-buttons").append(`<button class="button-select" data-topic="${topics[i]}">${topics[i]}`)
    }

}

$("#add-topic").on("click", bunttonMaker)


//Ajax call and display giphs on click
$("#topic-buttons").on("click", ".button-select", function () {
    console.log($(event.target).data("topic"))

    let topic = $(event.target).data("topic")

    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=M7AxqOfDelpmvVXbJ7uItpRQhwv0Qh30&limit=10";

    console.log(queryURL);


    $.ajax({

        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        for (let i = 0; i < response.data.length; i++) {

            $("#giphs").append(`<div><img src="${response.data[i].images.original.url}"><br><span>${response.data[i].rating}</span></div>`)

        };
    });

});




