# api-project

# Weather App

This is a simple web application that fetches and displays weather information for a given city using the OpenWeatherMap API. Users can enter a city name, click the "Get Weather" button, and view the current temperature and weather description.

## Technologies Used

- HTML
- CSS
- JavaScript

## How It Works

1. **HTML and CSS Setup**: The main interface is built using HTML and styled using CSS. The interface includes an input field to enter the city name, a button to trigger the API request, and a container to display the weather data.

2. **JavaScript and API Integration**: The JavaScript code handles user interaction and API integration. When the user clicks the "Get Weather" button, the code retrieves the city name from the input field and constructs a URL for the OpenWeatherMap API. The API key is used for authentication. The `fetch` function is used to make the API request.

3. **Data Parsing**: The response from the API is in JSON format. The JavaScript code uses the `response.json()` method to parse the JSON data. The temperature data is converted from Kelvin to Celsius for a more user-friendly display.

4. **Displaying Data**: The parsed data is used to populate the weather data container. The city name, temperature, and weather description are displayed in a formatted manner on the webpage.

5. **Error Handling**: If there's an issue with the API request, the JavaScript code catches the error and logs it to the console. This ensures that the application gracefully handles errors and provides feedback to the user.


## Credits

This project was created as a learning exercise and is based on a tutorial. The OpenWeatherMap API is used to fetch weather data.
