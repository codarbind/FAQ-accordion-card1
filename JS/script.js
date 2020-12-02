function toggleFunction(clickedId){
    let x=document.getElementById("answer"+clickedId);
    if(x.style.display === "none" ){
        x.style.display = "block";
    }

    else{
        x.style.display = "none";
    }
}

