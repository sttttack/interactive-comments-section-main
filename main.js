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

    const repliesDiv = secondDiv.replies[0];

    var repliesSection = document.createElement('div')
    repliesSection.className = "div_sections"
    repliesSection.innerHTML = `
    <div id="first-element">
    <img id="profile_picture" src="${repliesDiv.user.image.png}">
    <p id="user-name">${repliesDiv.user.username}</p>
    <p id="timePosted">${repliesDiv.createdAt}</p>
    </div> 
    <p id="paragraph_3">@${repliesDiv.replyingTo} ${repliesDiv.content}</p> 
    <div id="last-element"> 
    <div id="score">
    <img src="./images/icon-plus.svg">
    <p id="score-number">${repliesDiv.score}</p> 
    <img src="./images/icon-minus.svg">  
    </div>
    <span>
    <img src="./images/icon-reply.svg">
    <p id="reply-">Reply</p>
    <span>
    </div> 
    `

    mainDiv.appendChild(repliesSection)

    const repliesDivSecond = secondDiv.replies[1];
    
    var repliesSectionUser = document.createElement('div')
    repliesSectionUser.className = "div_sections"
    repliesSectionUser.innerHTML = `
    <div id="first-element">
    <img id="profile_picture" src="${repliesDivSecond.user.image.png}">
    <p id="user-name">${repliesDivSecond.user.username}</p>
    <p id="timePosted">${repliesDivSecond.createdAt}</p>
    </div> 
    <p id="paragraph_3">@${repliesDivSecond.replyingTo} ${repliesDivSecond.content}</p> 
    <div id="last-element-child"> 
    <div id="score">
    <img src="./images/icon-plus.svg">
    <p id="score-number">${repliesDivSecond.score}</p> 
    <img src="./images/icon-minus.svg">  
    </div>
    <span>
    <img src="./images/icon-delete.svg">
    <p id="reply-">Delete</p>
    <img src="./images/icon-reply.svg">
    <p id="reply-">Reply</p>
    <span>
    </div> 
    `

    mainDiv.appendChild(repliesSectionUser)

    var userComment = document.createElement('div')
    userComment.className = "userCommentDiv"
    userComment.innerHTML = `<input type="text" placeholder="Add a comment..." id="comment-area">
    <div class="profile_send">
    <img id="profile_picture" src="${repliesDivSecond.user.image.png}">
    <button id="send_btn">SEND</button>
    </div>
    `

    mainDiv.appendChild(userComment)

  })

    



