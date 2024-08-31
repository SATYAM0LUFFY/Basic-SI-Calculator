function ReturnValue(){

    document.querySelector(".output").innerHTML= ""

    const P = document.querySelectorAll("input")[0].value;
    const T = document.querySelectorAll("input")[1].value;
    const I = document.querySelectorAll("input")[2].value;
    
    const ans  = P*T*I /100;

    const newDiv = document.createElement("div") ;
    newDiv.innerHTML= "Your Return is "+ans;
    document.querySelector(".output").appendChild(newDiv);

    
}