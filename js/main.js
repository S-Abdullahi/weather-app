
document.querySelector('#weatherDetails').addEventListener('click', weatherDetails)

// onloading API 
fetch(`https://weatherdbi.herokuapp.com/data/weather/lagos`)
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)
  console.log(data.currentConditions)
  document.querySelector('#location').textContent = data.region
  document.querySelector('#date').textContent  = data.currentConditions.dayhour
  document.querySelector('.currentDay img').src = data.next_days[0].iconURL
  document.querySelector('#temp').textContent = `${data.currentConditions.temp.c} °C`
  document.querySelector('#humidity').textContent = data.currentConditions.humidity


      document.querySelector('#day-con1').textContent = data.next_days[0].day
      document.querySelector('#day-con2').textContent = data.next_days[1].day
      document.querySelector('#day-con3').textContent = data.next_days[2].day
      document.querySelector('#day-con4').textContent = data.next_days[3].day
      document.querySelector('#day-con5').textContent = data.next_days[4].day
      document.querySelector('#day-con6').textContent = data.next_days[5].day

      document.querySelector('#comment-con1').textContent = data.next_days[0].comment
      document.querySelector('#comment-con2').textContent = data.next_days[1].comment
      document.querySelector('#comment-con3').textContent = data.next_days[2].comment
      document.querySelector('#comment-con4').textContent = data.next_days[3].comment
      document.querySelector('#comment-con5').textContent = data.next_days[4].comment
      document.querySelector('#comment-con6').textContent = data.next_days[5].comment


      document.querySelector('#temp-con1').textContent = `${data.next_days[0].max_temp.c}°C`
      document.querySelector('#temp-con2').textContent = `${data.next_days[1].max_temp.c}°C`
      document.querySelector('#temp-con3').textContent = `${data.next_days[2].max_temp.c}°C`
      document.querySelector('#temp-con4').textContent = `${data.next_days[3].max_temp.c}°C`
      document.querySelector('#temp-con5').textContent = `${data.next_days[4].max_temp.c}°C`
      document.querySelector('#temp-con6').textContent = `${data.next_days[5].max_temp.c}°C`

      document.querySelector('#image1 > img').src = data.next_days[0].iconURL
      document.querySelector('#image2 > img').src = data.next_days[1].iconURL
      document.querySelector('#image3 > img').src = data.next_days[2].iconURL
      document.querySelector('#image4 > img').src = data.next_days[3].iconURL
      document.querySelector('#image5 > img').src = data.next_days[4].iconURL
      document.querySelector('#image6 > img').src = data.next_days[5].iconURL
})
.catch(err => {
    console.log(`error ${err}`)
});



// SPECIFIC LOCATION WEATHER
function weatherDetails(){

    let userInput = document.querySelector('#quote').value
    console.log(userInput)


    fetch(`https://weatherdbi.herokuapp.com/data/weather/${userInput}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          console.log(data.currentConditions)


            document.querySelector('#location').textContent = data.region
            document.querySelector('#date').textContent  = data.currentConditions.dayhour
            document.querySelector('.currentDay img').src = data.next_days[0].iconURL
            document.querySelector('#temp').textContent = `${data.currentConditions.temp.c}°C`
            document.querySelector('#humidity').textContent = data.currentConditions.humidity
       
  
            
        document.querySelector('#day-con1').textContent = data.next_days[0].day
        document.querySelector('#day-con2').textContent = data.next_days[1].day
        document.querySelector('#day-con3').textContent = data.next_days[2].day
        document.querySelector('#day-con4').textContent = data.next_days[3].day
        document.querySelector('#day-con5').textContent = data.next_days[4].day
        document.querySelector('#day-con6').textContent = data.next_days[5].day
  
        document.querySelector('#comment-con1').textContent = data.next_days[0].comment
        document.querySelector('#comment-con2').textContent = data.next_days[1].comment
        document.querySelector('#comment-con3').textContent = data.next_days[2].comment
        document.querySelector('#comment-con4').textContent = data.next_days[3].comment
        document.querySelector('#comment-con5').textContent = data.next_days[4].comment
        document.querySelector('#comment-con6').textContent = data.next_days[5].comment
  
  
        document.querySelector('#temp-con1').textContent = `${data.next_days[0].max_temp.c}°C`
        document.querySelector('#temp-con2').textContent = `${data.next_days[1].max_temp.c}°C`
        document.querySelector('#temp-con3').textContent = `${data.next_days[2].max_temp.c}°C`
        document.querySelector('#temp-con4').textContent = `${data.next_days[3].max_temp.c}°C`
        document.querySelector('#temp-con5').textContent = `${data.next_days[4].max_temp.c}°C`
        document.querySelector('#temp-con6').textContent = `${data.next_days[5].max_temp.c}°C`
  
        document.querySelector('#image1 > img').src = data.next_days[0].iconURL
        document.querySelector('#image2 > img').src = data.next_days[1].iconURL
        document.querySelector('#image3 > img').src = data.next_days[2].iconURL
        document.querySelector('#image4 > img').src = data.next_days[3].iconURL
        document.querySelector('#image5 > img').src = data.next_days[4].iconURL
        document.querySelector('#image6 > img').src = data.next_days[5].iconURL
      
    
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}



    

    
       





