// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === '/exercise/resource/jd图片1.png') {
//       myImage.setAttribute('src', '/exercise/resource/jd图片2.png');
//     } else {
//       myImage.setAttribute('src', '/exercise/resource/jd图片1.png');
//     }
// }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = '欢迎回来，' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎回来，' + storedName;
}

myButton.onclick = function () {
    setUserName();
}


