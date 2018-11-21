// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


function openmodal(){
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function setmodal_off(){
	localStorage.setItem("modalshow", "no");
}

function open_modal_st(){
	if (typeof(Storage) !== "undefined") {
    // browser supports
    if(localStorage.getItem("modalshow")!="no"){
    	openmodal();
    }
    else if(localStorage.getItem("modalshow")=="no"){
    	//do nothing
    }
    else{
    	openmodal();
    }
} else {
	// browser doesn't support
    document.getElementById('msg_show_modal').style.display="none";
    openmodal();
}
}



