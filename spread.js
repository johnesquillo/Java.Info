const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";
document.body.appendChild(redText);

const blueText = document.createElement("h3");
blueText.textContent = "I'm a blue h3!";
blueText.style.color = "blue";
document.body.appendChild(blueText);


const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";
document.body.appendChild(div);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";
document.appendChild(h1);


const paragraph = document.createElement("p");
paragraph.textContent = "ME TOO!";
document.appendChild(paragraph);


let btn = document.querySelector('#btn');

btn.onclick = (event) => {
    console.log('clicked');
};




