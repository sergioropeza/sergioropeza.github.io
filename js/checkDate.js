function checkDate(){
    
    var inputDate = document.getElementById("date-input").valueAsDate;
    var dTarget= new Date("November 06, 2015 00:00:00");
    var divVideo = document.getElementById('divVideo');
    var divDate = document.getElementById('divDate');
    
    if (inputDate!==null){
        var dInput = convertDateToUTC(inputDate);
        if (dTarget.getTime()===dInput.getTime()){       
            divVideo.style.visibility = 'visible';
            divDate.style.visibility = 'hidden';
        }else{
            alert("Fecha incorrecta");
        }
    }else {
        alert("Ingrese una fecha");
    }
} 

function convertDateToUTC(date) { 
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); 
}
