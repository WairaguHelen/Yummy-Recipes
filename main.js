//SLIDESHOW
var i = 0;
var images = [];
var time = 2000;

//Images List
images[0] = 'images/burrito.jpg';
images[1] = 'images/pancakes.jpg';
images[2] = 'images/recipe.jpg';
images[3] = 'images/salad.jpg';

//Change Image
function changeImg(){
    document.slide.src = images[i];

    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;