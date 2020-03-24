eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);
    document.getElementById("language").onchange=function(){

        ui.changeUI();
    }
}
var translate=new Translate(document.getElementById("word").value, document.getElementById("language").value);
var ui=new UI();
function translateWord(e){

    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value);
    translate.translateWord(function(error,response){
        if(error){
             this.outputWord=``
        }
        else{
            ui.displayTranslate(response);
        }

    });
    e.preventDefault();
}