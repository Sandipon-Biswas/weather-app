var input =document.querySelector("#input");
var button =document.querySelector("#button");
var city =document.querySelector("#city");

//addevenlistener




//
fetch('https:api.openweathermap.org/data/2.5/forecast?q=london&appid=b65989e90fc4ad90a1b707dc9c7726bd')
.then(response => response.json())
.then(data => {
    for (let x = 1; x < 6; x++) {
        document.getElementById("daymin"+x).innerHTML= "Min Temp: " + Math.round(data.list[x].main.temp_min - 273)+ "°C";
    }
    for (let x = 1; x < 6; x++) {
        document.getElementById("daymax"+x).innerHTML= "Max Temp: " + Math.round(data.list[x].main.temp_max - 273)+ "°C";
    }  
    for(x = 1; x<6; x++){
        document.getElementById("img" + (x)).src = "http://openweathermap.org/img/wn/"+
        data.list[x].weather[0].icon
        +".png";
    } 
})
//














button.addEventListener("click",function (e) {
    e.preventDefault;
    city.innerHTML=input.value;
    ///
    fetch('https:api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid=b65989e90fc4ad90a1b707dc9c7726bd')
    .then(response => response.json())
    .then(data => {
        for (let x = 1; x < 6; x++) {
            document.getElementById("daymin"+x).innerHTML= "Min Temp: " + Math.round(data.list[x].main.temp_min - 273)+ "°C";
        }
        for (let x = 1; x < 6; x++) {
            document.getElementById("daymax"+x).innerHTML= "Max Temp: " + Math.round(data.list[x].main.temp_max - 273)+ "°C";
        }  
        for(x = 1; x<6; x++){
            document.getElementById("img" + (x)).src = "http://openweathermap.org/img/wn/"+
            data.list[x].weather[0].icon
            +".png";
        } 
    }).catch(err => alert("Give a valid city Name"))

})






function DefaultScreen(){
    document.getElementById("input").defaultValue = "canada";
    
}
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];


function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(x = 1; x<6; x++){
        document.getElementById("day" + (x)).innerHTML = weekday[CheckDay(x)];
    }