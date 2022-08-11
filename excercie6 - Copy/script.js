var images=[
"images/1.png",
"images/2.png" ,
"images/10.png" ,
"images/11.png",
 "images/9.png" ,
"images/12.png"];

 var index =0;

function changeImages(){
   imageSlideShow.src="images/5.png";
imageSlideShow.src=images[4]

    imageSlideShow.src= images[index];
    if (index< images.length -1){
        index++;

    }else{
        index=0;
    }

    setTimeout("changeImages()",1000);
}


