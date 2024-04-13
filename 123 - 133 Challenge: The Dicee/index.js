var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

if(randomNumber1 == 1){
    document.querySelector("img").setAttribute("src", "./images/dice1.png");
}
else if(randomNumber1 == 2){
    document.querySelector("img").setAttribute("src", "./images/dice2.png");
}
else if(randomNumber1 == 3){
    document.querySelector("img").setAttribute("src", "./images/dice3.png");
}
else if(randomNumber1 == 4){
    document.querySelector("img").setAttribute("src", "./images/dice4.png");
}
else if(randomNumber1 == 5){
    document.querySelector("img").setAttribute("src", "./images/dice5.png");
}
else {
    document.querySelector("img").setAttribute("src", "./images/dice6.png");
}

/*
allright to change the picture on html page using javascript we got to go to chrome console and play around with the code 
first we need to locate the image by 

1. document.querySelectorAll("img");  ====> result ===> NodeList(2) [img.img1, img.img2]​

Now we need to get the img attribute

2. document.querySelector("img").getAttribute("src");  ===> result ===> './images/dice1.png'

Now we need to change the picture of the image 

3. document.querySelector("img").setAttribute("src", ./images/dice1,2,3,4,5,6.png);
*/

// =================================================1===================================================================


var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

if(randomNumber2 == 1){
    document.querySelectorAll("img")[1].setAttribute("src","./images/dice1.png");
}
else if(randomNumber2 == 2){
    document.querySelectorAll("img")[1].setAttribute("src","./images/dice2.png");
}
else if(randomNumber2 == 3){
    document.querySelectorAll("img")[1].setAttribute("src","./images/dice3.png");
}
else if(randomNumber2 == 4){
    document.querySelectorAll("img")[1].setAttribute("src","./images/dice4.png");
}
else if(randomNumber2 == 5){
    document.querySelectorAll("img")[1].setAttribute("src","./images/dice5.png");
}
else {
    document.querySelectorAll("img")[1].setAttribute("src","./images/dice6.png");
}

/* 
to get the second image it's a bit different we need to use querySelectorAll
1. document.querySelectorAll("img");  ==>result==> NodeList(2) [img.img1, img.img2] 
        0 img.img1
        1 img.img2

Now we need to select img2 soo
2. document.querySelectorAll("img").[1];

Now we can get the attribute from it
3. document.querySelectorAll("img")[1].getAttribute("src"); ==> result ==> './images/dice6.png'

Now we need to change that attribute
4. document.querySelectorAll("img")[1].setAttribute("src","./images/dice1,2,3,4,5,6.png");

*/

// ======================================================2==============================================================


/*
so we need to alter the refresh me to player 1 win or player 2 win, so basically change the H1
1. document.querySelector("h1"); ====result==== <h1>​Refresh Me​</h1>​

and now we need to change the <h1> refresh me to player 1 win or player 2 win

2.  document.querySelector("h1").innerHTML="player 1 win";    or
    document.querySelector("h1").innerHTML="player 2 win";
    document.querySelector("h1").innerHTML="Draw";

*/

    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML="Dante win";
    }
    else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML="Anh win";
    }else{
        document.querySelector("h1").innerHTML="Draw";
    }
    
