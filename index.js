
function clicking(val) {

    document.getElementById("screen").value += val;
    
}

const clear = document.getElementById("clear");

clear.addEventListener('click',clearing);

function clearing() {

    document.getElementById("screen").value = "";
    
}



function equalclick() {

    let screenvalue = document.getElementById("screen").value;
    let result = eval(screenvalue);

   document.getElementById("screen").value = result;
    
}

