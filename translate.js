function Translate(word, language){
    this.apikey="trnsl.1.1.20200323T153438Z.4a45a1da83cae510.996b724846cf28732969d024f51517ec174a8819"
    this.word=word;
    this.language=language;

    this.xhr=new XMLHttpRequest();
}

Translate.prototype.translateWord=function(callback){

    var endpoint=`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`

    this.xhr.open("GET",endpoint);

    this.xhr.onload=()=>{

        if(this.xhr.status===200){

            var json=JSON.parse(this.xhr.responseText);
            var text= json.text[0];
            
            
            callback(null,text);
        }
        else{
            callback("hata var", null);
        }
    }

    this.xhr.send();
};

Translate.prototype.changeParameters=function(newWord,newLanguage){
    this.word=newWord;
    this.language=newLanguage;
}