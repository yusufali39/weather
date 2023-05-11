    // Access the response data and update the DOM elements
    const nameElement = document.getElementById('name');
    const weatherDescriptionElement = document.getElementById('weatherDescription');
    const cityElement = document.getElementById('city');
    const temperatureElement = document.getElementById('temperature');
    const weatherIconElement = document.getElementById('weatherIcon');
    
    const name = "{{name}}";
    const weatherDescription = "{{weatherDescription}}";
    const city = "{{city}}";
    const temperature = "{{temperature}}";
    const weatherIconURL = "{{weatherIconURL}}";
    
    nameElement.textContent = name;
    weatherDescriptionElement.textContent = weatherDescription;
    cityElement.textContent = city;
    temperatureElement.textContent = temperature;
    weatherIconElement.src = weatherIconURL;
