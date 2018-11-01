$(document).ready(function(){
//TV show array
var topics = ["The  Office", "Rick and Morty", "Game of Thrones", "The Simpsons", "Bob's Burgers", "Friends"];

//Adds Buttons with TV show names to page
function renderTvShowButtons() { 
    $("#gif-buttons").empty();   
    for (var i = 0; i < topics.length; i++) {
      var tvshow = $("<button>");
      tvshow.addClass("btn btn-primary gif");
      tvshow.attr("data-name", topics[i]);
      tvshow.text(topics[i]);
      $("#gif-buttons").append(tvshow);
    }
  }

renderTvShowButtons();

//Creates buttons based on user search
$("#find-gif").on("click", function(event){
    event.preventDefault();
    var userInput=$("#user-input").val().trim();
    topics.push(userInput);
    renderTvShowButtons();
});


//Accesses GIPHY and searches for GIF
$(".gif").on("click", function(){
    var tvshowName = $(this).attr("data-name");

    var queryURL="https://api.giphy.com/v1/gifs/search?q=" + tvshowName + "&api_key=0iivG3ShYLcHPcMcZvDuiNwUWr39pErO&limit=10";
    $.ajax({
        url:queryURL,
        method:"GET",
    })
    .then(function (response){
        displayGif(response);
    })
        var results=response.data;
        var gifImg = $("<img>").attr(results.url);
        $("#tvshowGifs").append(gifImg);

        for(var i=0; i < results.length; i++){
            var p = $("<p>")
            p.text(results[i].rating);
            $("img").append(p);
        
            gifImg.addClass("tvshowGifs col-md-4");
            gifImg.attr("src", results[i].url);
            gifImg.attr("data-still", results[i].images.fixed_height_still.url);
            gifImg.attr("data-animate", results[i].images.fixed_height.url).attr("data-state", "still");

            showGifs.append(gifImg);
            showGifs.append(p);
            $("#tvshowGifs").append(gifImg);       
            showGifs.addClass("gif-img");
            showGifs
        }

});
//------------------

});





