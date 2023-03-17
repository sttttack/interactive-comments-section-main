"use strict";

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {

    
    const objects = data;
    const mainDiv = document.querySelector('.main_div')
    const date = new Date();
    let day = date.getMinutes();
    
    
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
    <span id="span_1">
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
    <div id="target">you</div>
    <p id="timePosted">${repliesDivSecond.createdAt}</p>
    </div> 
    <p id="paragraph_3" contenteditable="true">@${repliesDivSecond.replyingTo} ${repliesDivSecond.content}</p> 
    <div id="last-element-child"> 
    <div id="score-1">
    <img src="./images/icon-plus.svg">
    <p id="score-number">${repliesDivSecond.score}</p> 
    <img src="./images/icon-minus.svg">  
    </div>
    <span id="span_2">
    <img src="./images/icon-delete.svg">
    <p id="delete">Delete</p>
    <img src="./images/icon-reply.svg">
    <p id="reply-">Edit</p>
    <span>
    </div> 
    `

    mainDiv.appendChild(repliesSectionUser)

    var userComment = document.createElement('div')
    userComment.className = "userCommentDiv"
    userComment.innerHTML = `<input type="text" maxlength="200" placeholder="Add a comment..." id="comment-area">
    <div class="profile_send">
    <img id="profile_picture-comment" src="${repliesDivSecond.user.image.png}">
    <button id="send_btn">SEND</button>
    </div>
    `

    mainDiv.appendChild(userComment)

    
    const deleteBtn = document.querySelector('#delete')
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const escBtn = document.getElementById('cancel_modal')
    const removeBtn = document.getElementById('delete_modal')

    deleteBtn.addEventListener('click', (e) => {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    
    })

    escBtn.addEventListener('click', (esc) => {
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    })

    removeBtn.addEventListener('click', (removeComment) => {
        repliesSectionUser.remove();
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    })


    const sendBtn = document.querySelector('#send_btn')
    
    sendBtn.addEventListener('click', (addComment) => {
        var createElement = document.createElement('div')
        var userCommentNew = document.querySelector('#comment-area').value
        createElement.className = "div_sections"
        createElement.innerHTML = `<div id="first-element">
        <img id="profile_picture" src="${repliesDivSecond.user.image.png}">
        <p id="user-name">${repliesDivSecond.user.username}</p>
        <div id="target">you</div>
        <p id="timePosted">${day} minutes ago</p>
        </div>
        <div>
        <p id="paragraph" contenteditable="false">${userCommentNew}</p>
        </div>
        <div id="last-element-child-comment-section">
        <div id="score-number-1">
        <img src="./images/icon-plus.svg">
        <p id="score-number">1</p> 
        <img src="./images/icon-minus.svg">  
        </div>
        <div id="mms">
        <img src="./images/icon-delete.svg">
        <p id="delete-user-comment">Delete</p>
        <img src="./images/icon-reply.svg">
        <p id="reply-">Edit</p>
        </div>
        </div>
        </div>
        `

        mainDiv.insertBefore(createElement, mainDiv.lastElementChild)

        const del = document.querySelectorAll('#delete-user-comment')
        
            for (var i = 0; i < del.length; i++)
            del[i].addEventListener('click', (remove) => {

                const commentDiv = event.target.closest('.div_sections');

                commentDiv.remove();
    
        })

        const editBtn = document.querySelectorAll('#reply-')
        const focus = document.querySelectorAll('#paragraph');
        editBtn.forEach(function(elem) {
            elem.addEventListener("click", () => {       
                
                var edit = document.querySelectorAll("[contenteditable=false]");
                    for(var i=0; i< edit.length; i++)
                    edit[i].setAttribute("contenteditable", true);
                    
                    focus.forEach(element => {

                        element.focus();
                    });
                    console.log()            
            });
        });

        document.querySelector('#comment-area').value = '';
        
    }) 


  })


    



