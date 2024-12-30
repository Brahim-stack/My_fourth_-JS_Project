let theInput = document.getElementById("the-input");
let allSpansButtons = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span")

allSpansButtons.forEach(span => {

    span.addEventListener("click", (e) => {

        if(e.target.classList.contains("check")){

            checkItem();

        }else if(e.target.classList.contains("add")){

            addItem();

        }else if(e.target.classList.contains("delete")){

            deleteItem();

        } else {

            showItem();

        }
    })
})

function checkItem(){
    
    if(theInput.value !== ""){

        if(localStorage.getItem(theInput.value)){
            results.innerHTML = `Found Local Storage Item Called <span>${theInput.value}</span>`
        }else{
            results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span> Found`
        }

        theInput.value = "";

    }else{

        showMessage();
    }
    theInput.value = "";
    theInput.focus();
};
function addItem(){

    if(theInput.value !== ""){

        localStorage.setItem(theInput.value, "test");
        results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`
        theInput.value = "";

    }else{

        showMessage();
    }

    theInput.value = "";
    theInput.focus();

};
function deleteItem(){
    
    if(theInput.value !== ""){

        if(localStorage.getItem(theInput.value)){

            localStorage.removeItem(theInput.value)
            results.innerHTML = `Local Storage Item Called <span>${theInput.value}</span> Deleted`
        }else{
            results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span> Found`
        }

    }else{

        showMessage();
        theInput.focus();
    }
    theInput.value = "";
    theInput.focus();
};
function showItem(){
    if(localStorage.length){

        results.innerHTML = "";

        for (let [key, value] of Object.entries(localStorage)){

            results.innerHTML += `<span class="keys"> ${key} </span>`
        }

    }else{

        results.innerHTML = `Local Storage Item Is Empty`;

    }
};

function showMessage(){

    if (theInput.value === ""){

        results.innerHTML = "Input Cant be empty";
        
}
}