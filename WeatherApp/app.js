


const searchBox = document.querySelector('.search input')
const buttonClick = document.querySelector('.search button')

const getWeather = async (city)=>{

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c46b6868f76da113c1232a31b4bf16dc&units=metric`
    const response = await fetch(apiUrl)
    const data = await response.json()
    const humidity = data.main.humidity
    const wind = data.wind.speed
    console.log(data)

    document.querySelector('.country').innerHTML = data.sys.country
    document.querySelector('.city').innerHTML= data.name
    document.querySelector('.temp').innerHTML =Math.ceil(data.main.temp)
    document.querySelector('.humidity').innerHTML = humidity
    document.querySelector('.wind').innerHTML =  Math.ceil(wind)
    


}



buttonClick.addEventListener('click', ()=>{

    getWeather(searchBox.value)

})

searchBox.addEventListener('keyup', function(event) {
    
    if (event.key === 'Enter') {
     
      buttonClick.click();
    }
  });


getWeather()