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

//Creates buttons based on user search
$("#find-gif").on("click", function(event){
    event.preventDefault();
    var userInput=$("#user-input").val().trim();
    topics.push(userInput);
    renderTvShowButtons();
    displayGif();
});

renderTvShowButtons();

//Accesses GIPHY and searches for GIF
function displayGif(){

}
$(".gif").on("click", function(){
    $("#tvshowGifs").empty();
    var tvshowName = $(this).attr("data-name");

    var queryURL="https://api.giphy.com/v1/gifs/search?q=" + tvshowName + "&api_key=0iivG3ShYLcHPcMcZvDuiNwUWr39pErO&limit=10";
    $.ajax({
        url:queryURL,
        method:"GET",
    })
    .then(function (response){
        var result = response.data;
        for(var i=0; i < result.length; i++){
            var gifDiv=$("<div>");
            var p = $("<p>");
            var rating=p.text(result[i].rating);
        
            var gifImg = $("<img>");
            gifImg.addClass("tvshowGifs col-md-4 animate");
            gifImg.attr("src", result[i].images.fixed_height_still.url);
            var still = result[i].images.fixed_height_still.url;
            var animate = result[i].images.fixed_height.url;
            // gifImg.attr("src", still);
            // gifImg.attr("src", animate);
            $(".animate").on("click", function(){
                if(gifImg.attr("src", still)){
                    gifImg.attr("src", animate);
                }

            });
            

            gifImg.append(rating);
            $("#tvshowGifs").append(gifImg);
            // $('.animate').on('click', function() {
            //     var state = $(gifImg).attr('src');
            //     if (state == 'still') {
            //         $(this).attr('src', $(this).attr("src",animate));
            //     } else {
            //         $(this).attr('src', $(this).attr("data-still",result[i].images.fixed_height_still.url));
            //     }
        
            // });
        }  
    }); 
    
});

//------------------

});





