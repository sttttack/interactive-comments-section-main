"use strict";

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const objects = data;
    const mainDiv = document.querySelector(".main_div");
    const date = new Date();
    let day = date.getMinutes();

    const firstDiv = objects.comments[0];

    let firstSection = document.createElement("div");
    firstSection.className += " div_sections anotherclass";
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
    `;

    mainDiv.appendChild(firstSection);

    const secondDiv = objects.comments[1];

    let secondSection = document.createElement("div");

    secondSection.className += " div_sections_2 anotherclass";
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
    `;

    mainDiv.appendChild(secondSection);

    const repliesDiv = secondDiv.replies[0];
    let repliesSection = document.createElement("div");
    repliesSection.className += " div_sections_1 anotherclass";
    repliesDiv.replyingTo;
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
    
    `;

    mainDiv.appendChild(repliesSection);

    const repliesDivSecond = secondDiv.replies[1];
    let repliesSectionUser = document.createElement("div");
    repliesSectionUser.className = "div_sections_1";
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
    <p id="edit-">Edit</p>
    <span>
    </div> 
    `;

    mainDiv.appendChild(repliesSectionUser);

    let userComment = document.createElement("div");
    userComment.className = "userCommentDiv";
    userComment.innerHTML = `<input type="text" maxlength="200" placeholder="Add a comment..." id="comment-area">
    <div class="profile_send">
    <img id="profile_picture-comment" src="${repliesDivSecond.user.image.png}">
    <button id="send_btn">SEND</button>
    </div>
    `;

    mainDiv.appendChild(userComment);

    const deleteBtn = document.querySelector("#delete");
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const escBtn = document.getElementById("cancel_modal");
    const removeBtn = document.querySelectorAll(".delete_modal");

    deleteBtn.addEventListener("click", (e) => {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    });

    escBtn.addEventListener("click", (esc) => {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    });

    for (let y = 0; y < removeBtn.length; y++)
      removeBtn[y].addEventListener("click", (removeComment) => {
        repliesSectionUser.remove();
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
      });

    const sendBtn = document.querySelector("#send_btn");

    sendBtn.addEventListener("click", (addComment) => {
      let createElement = document.createElement("div");
      let userCommentNew = document.querySelector("#comment-area").value;
      createElement.className = "div_sections-comment";
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
        <p id="edit-">Edit</p>
        </div>
        </div>
        </div>
        `;

      mainDiv.insertBefore(createElement, mainDiv.lastElementChild);

      const del = document.querySelectorAll("#delete-user-comment");

      for (var i = 0; i < del.length; i++)
        del[i].addEventListener("click", (remove) => {
          modal.classList.remove("hidden");
          overlay.classList.remove("hidden");

          escBtn.addEventListener("click", (esc) => {
            modal.classList.add("hidden");
            overlay.classList.add("hidden");
          });

          const removeBtn2 = document.querySelectorAll(".delete_modal2");

          document.querySelector(".delete_modal").style.display = "none";
          document.querySelector(".delete_modal2").style.display = "block";
          const commentDiv = event.target.closest(".div_sections-comment");
          for (let y = 0; y < removeBtn.length; y++)
            removeBtn2[y].addEventListener("click", (aaa) => {
              if (
                (document.querySelector(".delete_modal2").style.display =
                  "block")
              ) {
                document.querySelector(".delete_modal").style.display = "block";
                document.querySelector(".delete_modal2").style.display = "none";
                commentDiv.remove();
                modal.classList.add("hidden");
                overlay.classList.add("hidden");
              }
            });
        });

      const editBtn = document.querySelectorAll("#edit-");
      const focus = document.querySelectorAll("#paragraph");
      editBtn.forEach(function (elem) {
        elem.addEventListener("click", () => {
          let edit = document.querySelectorAll("[contenteditable=false]");
          for (let i = 0; i < edit.length; i++)
            edit[i].setAttribute("contenteditable", true);

          focus.forEach((element) => {
            element.focus();
          });
        });
      });

      document.querySelector("#comment-area").value = "";
    });

    const replyBtn = document.querySelectorAll("#reply-");
    console.log(replyBtn[1]);

    replyBtn.forEach((item) => {
      item.addEventListener(
        "click",
        (j) => {
          const closestDiv = event.target.closest(".anotherclass");
          let nextSibling = closestDiv.nextSibling;
          let userReply = document.createElement("div");
          userReply.className = "userReplyDiv";
          userReply.innerHTML = `
            <input type="text" maxlength="200" placeholder="Reply to..." id="reply-comment">
            <div class="profile_send">
            
            <img id="profile_picture-comment" src="${repliesDivSecond.user.image.png}">
            <button id="reply_btn">REPLY</button>
            </div>
            `;

          mainDiv.insertBefore(userReply, nextSibling);

          // Comment section needs to be fixed, delete button is not working, edit either.

          const innerReplyBtn = document.querySelectorAll("#reply_btn");
          console.log(innerReplyBtn);

          for (let h = 0; h < innerReplyBtn.length; h++) {
            innerReplyBtn[h].addEventListener("click", (s) => {
              console.log("you clicked me");

              let replyComment = document.querySelectorAll("#reply-comment");
              replyComment.forEach((element) => {
                if (closestDiv.classList.contains("div_sections")) {
                  element.value = "@amyrobson " + element.value;
                } else if (closestDiv.classList.contains("div_sections_2")) {
                  element.value = "@maxblagun " + element.value;
                } else if (closestDiv.classList.contains("div_sections_1")) {
                  element.value = "@ramsesmiron " + element.value;
                }

                let createElement = document.createElement("div");
                createElement.className = "div_sections-comment";

                createElement.innerHTML = `<div id="first-element">
                        <img id="profile_picture" src="${repliesDivSecond.user.image.png}">
                        <p id="user-name">${repliesDivSecond.user.username}</p>
                        <div id="target">you</div>
                        <p id="timePosted">${day} minutes ago</p>
                        </div>
                        <div>         
                        <p id="paragraph" contenteditable="false">${element.value} </p>
                        </div>
                        <div id="last-element-child-comment-section">
                        <div id="score-number-1">
                        <img src="./images/icon-plus.svg">
                        <p id="score-number">1</p> 
                        <img src="./images/icon-minus.svg">  
                        </div>
                        <div id="mms">
                        <img src="./images/icon-delete.svg">
                        <p id="delete-user-comment-1">Delete</p>
                        <img src="./images/icon-reply.svg">
                        <p id="edit-">Edit</p>
                        </div>
                        </div>
                        </div>
                        `;

                mainDiv.insertBefore(createElement, nextSibling);
                userReply.remove();

                const editBtn = document.querySelectorAll("#edit-");
                editBtn.forEach(function (elem) {
                  elem.addEventListener("click", () => {
                    let edit = document.querySelectorAll("[contenteditable=false]");
                    for (let i = 0; i < edit.length; i++)
                      edit[i].setAttribute("contenteditable", true);
          
                    focus.forEach((element) => {
                      element.focus();
                    });
                  });
                });
                

                const deleteUsrComment = document.querySelectorAll(
                  "#delete-user-comment-1"
                );
                for (let i = 0; i < deleteUsrComment.length; i++)
                  deleteUsrComment[i].addEventListener("click", () => {
                    const deleteBtn = document.querySelector("#delete1");
                    const modal = document.querySelector(".modal1");
                    const overlay1 = document.querySelector(".overlay1");
                    const escBtn = document.getElementById("cancel_modal1");
                    const removeBtn =
                      document.querySelectorAll(".delete_modal1");

                    modal.classList.remove("hidden1");
                    overlay1.classList.remove("hidden1");

                    escBtn.addEventListener("click", () => {
                      modal.classList.add("hidden1");
                      overlay1.classList.add("hidden1");
                    });

                    const commentDiv = event.target.closest(
                      ".div_sections-comment"
                    );
                    for (let y = 0; y < removeBtn.length; y++)
                      removeBtn[y].addEventListener("click", (remove) => {
                        commentDiv.remove();
                        modal.classList.add("hidden1");
                        overlay1.classList.add("hidden1");
                      });
                  });
              });
            });
          }
        },
        { once: true }
      );
    });
  });
