"use strict";

const btnSend = document.querySelector("#sendBtn");
const comentInput = document.querySelector("#comentIn");
const commentHolder = document.querySelector("#commentHolder");
const commentSection = document.querySelector("#comentSection");

btnSend.addEventListener("click", function () {
  const commentText = comentInput.value;
  if (commentText !== "") {
    const newComentDiv = document.createElement("div");
    newComentDiv.classList.add("comment");
    newComentDiv.textContent = commentText;
    commentSection.appendChild(newComentDiv);
    comentInput.value = "";
  } else {
    alert("please, put a valid comment");
  }
});
