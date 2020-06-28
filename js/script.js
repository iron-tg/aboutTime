$(document).ready(function() {
    // adding a js is Enable Body class
    $("body").addClass("js");
    $(".second_level").hide(100).show(1000);
    $(".image_section").slideUp(1000).delay(1000).slideDown(1000);
    $("#book").slideUp(10).delay(1000).slideDown(1000);
    $("#image_section").hide(10).show(2000);
    $(".qlist").slideUp(10).delay(1000).slideDown(1000);
    $("#character").slideUp(10).delay(1000).slideDown(1000);
});

// go back to the top
$("#images").click(function(){
    $("body , html").animate({scrollTop:0},300);
        });


var readytag = document.getElementById("readytag");
var enter = document.getElementById ("enter");

$("#readytag").click(function(){
    if (enter.className === "hide") {
        enter.className = "";
    }else{
        enter.className = "hide";
    }
});

$("#submit").click(function(){
    alert( "You have completed all the questions.");
});

