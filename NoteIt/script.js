const notesContainer = document.querySelector(".notes-container");
const creatBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

function showNotes() {
    const notesData = JSON.parse(localStorage.getItem("notes")) || [];
    notesContainer.innerHTML = "";

    notesData.forEach((noteText) => {
        createNoteElement(noteText);
    });
}
function createNoteElement(text) {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    // Replace newline characters with <br> tags
    text = text.replace(/\n/g, "<br>");

    // Set the HTML content instead of text content
    inputBox.innerHTML = text;

    // inputBox.textContent = text;

    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
}

function updateStorage() {
    const notesData = Array.from(notesContainer.children).map(
        (note) => note.textContent
    );
    localStorage.setItem("notes", JSON.stringify(notesData));
}
creatBtn.addEventListener("click" , () =>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable" , "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach((nt) =>{
            nt.onkeyup = function(){
                updateStorage();
            };
        });
    }
});

document.addEventListener("keydown" , event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})





showNotes();





