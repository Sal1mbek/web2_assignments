const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const travelRoutes = require('./routes/travelRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


let tours = [
    { id: 1, name: 'Explore Machu Picchu', cost: 1500, destination: 'Machu', dates: '2024-03-01', adults: 2, children: 1},
    { id: 2, name: 'Safari Adventure in Serengeti', cost: 2000, destination: 'Ngorongoro', dates: '2024-05-15', adults: 1, children: 0},
    { id: 3, name: 'Cruise the Greek Islands', cost: 2500, destination: 'Crete', dates: '2024-02-01', adults: 3, children: 0},
    { id: 4, name: 'Trekking in the Himalayas', cost: 1800, destination: 'Himalaya', dates: '2024-09-25', adults: 2, children: 3},
    { id: 5, name: 'Cultural Tour of Kyoto', cost: 1200, destination: 'Kyoto', dates: '2024-03-09', adults: 4, children: 0},
];

app.use('/travelagency', travelRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Weather route
app.get('/weather', async (req, res) => {
    try {
        const apiKey2 = '636ebfe4679db2ade2ee5f3673e5333a';
        const city2 = req.query.city;

        const response1 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apiKey2}`);

        const weatherData2 = {
            location: response1.data.name,
            temperature: response1.data.main.temp - 273.15,
            condition: response1.data.weather[0].description,
            clouds: response1.data.clouds.all,
        };

        res.json(weatherData2);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
});


app.get('/tours', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tours.html'));
})  

// Tours route (POST)
app.post('/tours', (req, res) => {
    const newTour = req.body;
    newTour.id = tours.length + 1;
    tours.push(newTour);
    res.json({ success: true, message: 'Tour added successfully', result: newTour });
});

// API to get the list of tours
app.get('/api/tours', (req, res) => {
    res.json(tours);
});

// Sample server-side code for fetching tour details by ID
app.get('/api/tours/:id', (req, res) => {
    const tourId = parseInt(req.params.id);
    const tour = tours.find(tour => tour.id === tourId);

    if (tour) {
        res.json(tour);
    } else {
        res.status(404).json({ error: 'Tour not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 
