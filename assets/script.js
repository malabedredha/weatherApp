

fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid")
    .then(response => response.json())
    .then(data => {

        console.log(data);
    })

fetch("http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid")
    .then(response => response.json())
    .then(data => {

        console.log(data);

    })