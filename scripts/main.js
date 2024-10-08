let myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/fox-logo.png") {
        myImage.setAttribute("src", "images/chrome-logo.png");
    } else {
        myImage.setAttribute("src", "images/fox-logo.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let h1 = "Hello World!，";
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = h1 + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = h1 + storedName;
}

myButton.onclick = function () {
    setUserName();
};
