NotePhish




---

Overview

NotePhish is a Privnote-style phishing project created for educational purposes and ethical hacking demonstrations. It simulates a phishing attack using social engineering techniques. The project displays a professional-looking note (similar to Privnote) that self-destructs once accessed by the user. When the note is accessed, the client-side geolocation, public IP address, and browser information are captured and sent to the server for logging.

Note: This project is for ethical purposes only and should be used with proper authorization.


---

Key Features

Client-Side Simulation: Displays a Privnote-like self-destructing note with minimal interaction required from the user.

Data Collection: Automatically logs geolocation, IP address, and browser information when the note is accessed.

In-Memory Logging: Stores the collected data in-memory (no persistent storage).

Extensibility: Designed for future additions like more advanced phishing techniques, improved UI/UX, and better analytics.



---

Project Structure

NotePhish/
├── node_modules/                     # Dependencies
├── public/                           # Static assets (JS/CSS for the front-end)
│   └── ...
├── views/                            # EJS templates for rendering web pages
│   └── ...
├── server.js                         # Main server file for handling requests
├── package.json                      # Project metadata and dependencies
└── README.md                         # Project description and setup


---

Prerequisites

1. Node.js: Ensure you have Node.js installed on your machine. You can check your installation by running:

node -v

If Node.js isn't installed, download and install it from the official website.


2. npm: npm comes with Node.js, but verify it's installed:

npm -v


3. Manual Installation of Dependencies: If dependencies aren't installed automatically, run:

npm install express ejs body-parser




---

Installation

1. Clone the repository:

git clone https://github.com/4lp1ne/NotePhish.git
cd NotePhish


2. Install dependencies:

npm install


3. Start the server:

npm start


4. Access the app: Open a browser and navigate to http://localhost:3000 to interact with the note.



Sample Logged Data Format

{
  "timestamp": "xxxx-xx-xxTxx:xx:xx.xxxZ",
  "publicIP": "xxx.xx.xxx.xx",
  "latitude": "xx.xxxxxxxxxxxxxxx",
  "longitude": "x.xxxxxxxxxxxxxxx",
  "browserInfo": {
    "userAgent": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "platform": "xxxxxxxxxxxx",
    "language": "xx-XX"
  }
}


---

Making It Public with Localtonet

To expose your local NotePhish instance to the public, you can use localtonet:

1. Install Localtonet on your machine:

curl -O https://localtonet.com/download.sh && sh download.sh


2. Run Localtonet with your local Node.js port:

./localtonet tcp --port 3000


3. Localtonet will provide a public URL that others can access to see the phishing note interface:

Public URL: https://your-localtonet-url




---

Future Enhancements

Persistent Logging: Introduce database storage (MongoDB or MySQL) to persist logs over multiple sessions.

Admin Dashboard: Reintroduce a dashboard to display collected logs, provide analytics, and allow for log management.

Enhanced Phishing Techniques: Add more sophisticated features like fake login forms, password collection simulations, or fake email attachments.

Security Measures: Include tools for demonstrating countermeasures, such as anti-phishing and safe browsing practices.



---

License

This project is licensed under the ISC License. Use it responsibly and ethically.

By using this project, you agree to use it only in legal and authorized settings for educational or ethical hacking purposes.


