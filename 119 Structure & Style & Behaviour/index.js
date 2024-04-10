// HTML is for content onplay. CSS is there to style Website. Javascript is there for behaviour
//beside querySelector to find a class. We can also use classList
// document.querySelector.classList.add("invisible")
/*we can pre-make a class in CSS and don't have to use it right away but we can activate it later on using classList.add or 
deactivate using classList.remove
*/
/*exercise:     
document.querySelector("button").classList  ---> DOMTokenList ['btn', value: 'btn']
we can then add class .invisible we make but didn't use by ----> document.querySelector("button").classList.add("invisible");
so now the button is invisible.
or we can add it back or toggle it back and forward between visible and invisible.

document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible");
*/

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dante DOM  Document Object Model</title>
    <link rel="stylesheet" href="./style.css">

</head>
<body>
    <h1> Hello </h1>

    <input type="checkbox">     

    <button class="btn"> Click me </button>
    
    <ul>
        <li class="list">
            <a href="https://google.com"> Google </a>
        </li>

        <li class="list"> Second </li>
        <li class="list"> Third </li>
    </ul>

    <script src="./index.js" charset="UTF-8"> </script>
</body>
</html>