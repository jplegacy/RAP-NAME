var malePre = ["El "," "];
var femPre = ["La "," "];

var maleMiddle = [" Gabriel "," Adam "," Raphael "," Paul "," Louis "," Arthur "," Alexandre "," Victor "," Léo "," Armand "," Marco ", " Alessandro ", " Giuseppe ", " Flavio ", " Luca ", " Giovanni ", " Roberto ", " Andrea ", " Stefano ", " Angelo ", " Francesco ", " Mario ", " Luigi "," "];
var femMiddle = [" Adalene ", " Adele ", " Adrianna ", " Alison ", " Amélie ", " Antoinette ", " Anna ", " Maria ", " Sara ", " Laura ", " Aurora ", " Valentina ", " Giulia ", " Rosa ", " Gianna ", " Giuseppina ", " Angela ", " Giovanna ", " Sofia ", " Stella "," "];

var suf=[""," Jr."," II"," III"];

var reg=["a", "e", "i", "o", "u", "n"];
var accent=["á", "é", "í", "ó", "ú", "ñ"];

var str;

console.log(femMiddle.length);

function getNewName() {
    
    var genInput = document.getElementById("gender").value;

    switch (genInput) {
        case "male":       
            document.getElementById("button").addEventListener("click", function(){
                str = document.getElementById("nameInt").value;
                var splitStr = str.split(" ");
                var middle = maleMiddle[Math.round(Math.random() * 23)];
                var pre = malePre[Math.round(Math.random() * 1)];
                var suff = suf[Math.round(Math.random() * 3)];
                var x = Math.round(Math.random() * 5);
                
                splitStr.splice(1,0,middle);
                splitStr = pre + splitStr.join("") + suff;
                var end = splitStr.replace(reg[x], accent[x]);
            
                if(middle === " Mario " || middle === " Luigi "){
                     document.querySelector("body").style.backgroundImage = "none";
                     document.querySelector("body").style.backgroundColor="maroon";
                    }
                
                document.getElementById("result").innerHTML ="Your New Name is " + end.toUpperCase();
                
            });
        break;
        case "female":       
            document.getElementById("button").addEventListener("click", function(){
                str = document.getElementById("nameInt").value;
                var splitStr = str.split(" ");
                var middle = femMiddle[Math.round(Math.random() * 20)];
                var pre = femPre[Math.round(Math.random() * 1)];
                var suff = suf[Math.round(Math.random() * 3)];
                var x = Math.round(Math.random() * 5);
                
                splitStr.splice(1,0,middle);
                splitStr = pre + splitStr.join("") + suff;
                var end = splitStr.replace(reg[x], accent[x]);
            
            switch (middle){
                case " Maria " || " Sara ":
                     document.querySelector("body").style.backgroundImage = "none";
                     document.querySelector("body").style.backgroundColor="lightpink";
                    
                    break;
                
                }
                
                document.getElementById("result").innerHTML = "Your New Name is " + end.toUpperCase();
            });
        break;
    }
    
    
    
}