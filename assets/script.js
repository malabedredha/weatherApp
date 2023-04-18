fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid")
    .then(response => response.json())
    .then(location => {

        let firstLocation = location[0]
        console.log(firstLocation);

    })

fetch("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid")
    .then(response => response.json())
    .then(data => {

        console.log(data);

    })