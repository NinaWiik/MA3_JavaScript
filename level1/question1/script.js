document.getElementById("submit").addEventListener("click", function(){
    var inputFields = document.getElementsByTagName("input");
    
    for(var i=0; i < inputFields.length; i++) {
        var theInput = inputFields[i].value;
        var thePattern = new RegExp(inputFields[i].pattern);
        var theValidation = thePattern.test(theInput);
        
        if(theValidation === false){
            console.log(inputFields[i].name + " is not valid") 
        }
    }
})
