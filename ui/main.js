//counter code 
var button=document.getElementById("counter");
var counter =0;

button.onclick = function() {
    //make a request to counter end point 
    
    //capture the rsponse and store to a variable 
    
    //render the varible in a correct span
    
    counter=counter+1;
    var span=document.getElmentById("count");
    span.InnerHTML=counter.toString();
    
};