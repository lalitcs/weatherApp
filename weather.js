let cityname = document.getElementById('ciname')
let cityvalue = document.getElementById('cityvalue')
let countryname = document.getElementById('coname')
let temprature = document.getElementById('temp')
let search = async()=>{
    if(cityvalue.value.length==0){
        alert('please enter a city name')
    } else{
        try{
            let url ="http://api.openweathermap.org/data/2.5/weather?q="+cityvalue.value+"&units=metric&appid=1cb6532aea3c298a830a71380eace21e"
            let response = await fetch(url)
            let data = await response.json()
            cityname.textContent = data.name
            countryname.textContent = data.sys.country
            temprature.textContent = data.main.temp
            console.log(temprature.textContent)
            if(temprature.textContent<25){
                console.log("winter")
               // document.getElementById("weatherinfo").src = "astronomy-1867616_1280.jpg";
                document.getElementById("weatherinfo").style.backgroundImage = "url('winter.jpg')";
            }else{
                console.log("summer")
                //document.getElementById("weatherinfo").src = "astronomy-1867616_1280.jpg";
                document.getElementById("weatherinfo").style.backgroundImage = "url('summer.jpg')";

            }

        }
        catch{
            alert("please enter a valid city")
        }

    }
}