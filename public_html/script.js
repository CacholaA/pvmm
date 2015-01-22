//colors//
$("document").ready(function(){

$(".yeah").css("background-color", "Grey");

$(".projectColor").css("background-color", "purple");

$(".k").css("color", "orange");




//logo options//

$('#slideAway').bind('click', slideTheImage);

$('#showLogo').bind('click', showTheImage);

$('#hideLogo').bind('click', hideTheImage);

$('#showLogov2').bind('click', showTheImagev2);

$('#hideLogov2').bind('click', hideTheImagev2);


//accordion//

$('#superHumans').accordion({header: "h3"});

});
//functions//
function slideTheImage() {
$('#logo').slideUp(2500);
}

function showTheImage() {
$('#logo').show('fold', {},2500);
}

function hideTheImage() {
$('#logo').hide('fold', {},2500);
}

function showTheImagev2() {
$('#logo').show('explode', {},2500);
}

function hideTheImagev2() {
$('#logo').hide('explode', {},2500);
}
//ready functions//
$("document").ready(function(){
$(".red").css("background-color", "DarkBlue");
});

$("document").ready(function(){
$(".yeah").css("color", "white");
});


$("document").ready(function(){

$("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

$('h1').bind('click', mouseClick);
});

function mouseOverMe() {
$("h1").html("or Portfolio 3");
}

