"use strict";

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {

    
    const objects = data;
    const mainDiv = document.querySelector('.main_div')

    
    const firstDiv = objects.comments[0];
 
    var firstSection = document.createElement('div')
    firstSection.className = "div_sections"
    firstSection.innerHTML = `
    <div id="first-element">
    <img id="profile_picture" src="${firstDiv.user.image.png}">
    <p id="user-name">${firstDiv.user.username}</p>
    <p id="timePosted">${firstDiv.createdAt}</p>
    </div> 
    <p id="paragraph">${firstDiv.content}</p> 
    <div id="last-element"> 
    <div id="score">
    <img src="./images/icon-plus.svg">
    <p id="score-number">${firstDiv.score}</p> 
    <img src="./images/icon-minus.svg">  
    </div>
    <span>
    <img src="./images/icon-reply.svg">
    <p id="reply-">Reply</p>
    <span>
    </div> 
    `
    
    mainDiv.appendChild(firstSection)

    const secondDiv = objects.comments[1];
    console.log(secondDiv)

    var secondSection = document.createElement('div')
    secondSection.className = "div_sections"
    secondSection.innerHTML = `
    <div id="first-element">
    <img id="profile_picture" src="${secondDiv.user.image.png}">
    <p id="user-name">${secondDiv.user.username}</p>
    <p id="timePosted">${secondDiv.createdAt}</p>
    </div> 
    <p id="paragraph">${secondDiv.content}</p> 
    <div id="last-element"> 
    <div id="score">
    <img src="./images/icon-plus.svg">
    <p id="score-number">${secondDiv.score}</p> 
    <img src="./images/icon-minus.svg">  
    </div>
    <span>
    <img src="./images/icon-reply.svg">
    <p id="reply-">Reply</p>
    <span>
    </div> 
    `

    mainDiv.appendChild(secondSection)

  })

    



