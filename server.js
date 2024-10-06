const express = require('express');
const path = require('path');
const app = express();

// Middleware for parsing JSON data
app.use(express.json());

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for the views (EJS templates)
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// In-memory log storage
let logs = [];

// Generate a random note ID for each session
function generateNoteId() {
    return Math.random().toString(36).substring(2, 10); // Random string for noteId
}

// Endpoint to render the index page
app.get('/', (req, res) => {
    const noteId = generateNoteId();
    res.render('index', { noteId }); // Pass noteId to the EJS template
});

// Endpoint to fetch logs for display on the dashboard
app.get('/api/logs', (req, res) => {
    console.log('Fetching logs:', logs);
    if (logs.length === 0) {
        res.status(404).json({ message: 'No logs found' }); // If no logs, return 404
    } else {
        res.json(logs); // Send logs to the client
    }
});

// Endpoint to log client data (location, IP, browser info)
app.post('/log-client-data', (req, res) => {
    const { latitude, longitude, publicIP, browserInfo } = req.body;

    // Add a log entry to the in-memory logs array
    logs.push({
        timestamp: new Date(),
        publicIP,
        latitude,
        longitude,
        browserInfo
    });

    console.log('Logs updated:', logs); // For debugging

    res.json({ message: 'Client data logged successfully' });
});

// API to clear logs
app.post('/api/clear-logs', (req, res) => {
    logs = []; // Clear logs array
    res.json({ success: true, message: 'Logs cleared' });
});

// Start the server and make it listen on all network interfaces (for local access)
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running. Access it on your local network at http://<your-local-ip>:${PORT}`);
});
