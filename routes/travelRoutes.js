const express = require('express');
const router = express.Router();

let tours = [
    { id: 1, name: 'Explore Machu Picchu', cost: 1500, destination: 'Machu', dates: '2024-03-01', adults: 2, children: 1},
    { id: 2, name: 'Safari Adventure in Serengeti', cost: 2000, destination: 'Ngorongoro', dates: '2024-05-15', adults: 1, children: 0},
    { id: 3, name: 'Cruise the Greek Islands', cost: 2500, destination: 'Crete', dates: '2024-02-01', adults: 3, children: 0},
    { id: 4, name: 'Trekking in the Himalayas', cost: 1800, destination: 'Himalaya', dates: '2024-09-25', adults: 2, children: 3},
    { id: 5, name: 'Cultural Tour of Kyoto', cost: 1200, destination: 'Kyoto', dates: '2024-03-09', adults: 4, children: 0},
];



router.get('/', (req, res) => {
    res.json(tours);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tour = tours.find(tour => tour.id === id);
    if (tour) {
        res.json(tour);
    } else {
        res.status(404).json({ message: 'Tour not found' });
    }
});

router.post('/', (req, res) => {
    const newTour = req.body;
    newTour.id = tours.length + 1;
    tours.push(newTour);
    res.json({ success: true, message: 'Tour added successfully', result: newTour });
});


router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTour = req.body;
    const index = tours.findIndex(tour => tour.id === id);
    if (index !== -1) {
        tours[index] = { ...tours[index], ...updatedTour };
        res.json({ success: true, message: 'Tour updated successfully', result: tours[index] });
    } else {
        res.status(404).json({ success: false, message: 'Tour not found' });
    }
});


router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tours.findIndex(tour => tour.id === id);
    if (index !== -1) {
        const deletedTour = tours.splice(index, 1);
        res.json({ success: true, message: 'Tour deleted successfully', result: deletedTour });
    } else {
        res.status(404).json({ success: false, message: 'Tour not found' });
    }
});

module.exports = router;
