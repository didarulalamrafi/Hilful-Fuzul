// contract page 
// contract form 
count=0;
document.getElementById("writeMesseg").addEventListener("keypress", function(event){
    count++;
    var textcount= event.key;
    document.getElementById("textCount").innerHTML= "You types " + count + " words."
})