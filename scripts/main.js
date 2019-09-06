/*
var iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}
*/

/*
var myHeading = document.querySelector('h2');
myHeading.textContent = 'Hello world!';
*/

/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'media/pic1.png') {
      myImage.setAttribute ('src','media/pic2.png');
    } else {
      myImage.setAttribute ('src','media/pic1.png');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'You entered: ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML ='Your name has been stored: '+storedName;
}

myButton.onclick = function() {
  setUserName();
}








