# NotePhish - Privnote Phishing Simulation

---
![Screenshot 2024-10-06 191539](https://github.com/user-attachments/assets/86ea9c15-da8f-4386-991f-86b80a09b1f9)

---

## Overview

**NotePhish** is a Privnote-style phishing project created for educational purposes and ethical hacking demonstrations. It simulates a phishing attack using social engineering techniques. The project displays a professional-looking note (similar to Privnote) that self-destructs once accessed by the user. When the note is accessed, the client-side geolocation, public IP address, and browser information are captured and sent to the server for logging.

**Note**: This project is for **ethical purposes only** and should be used with proper authorization.

---

## Key Features

- **Client-Side Simulation**: Displays a Privnote-like self-destructing note with minimal interaction required from the user.
- **Data Collection**: Automatically logs geolocation, IP address, and browser information when the note is accessed.
- **In-Memory Logging**: Stores the collected data in-memory (no persistent storage).
- **Extensibility**: Designed for future additions like more advanced phishing techniques, improved UI/UX, and better analytics.

---

### Example of Logged Output Template:

```json
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
```

This template illustrates the structure of the data that will be logged when the user interacts with the phishing note. The `timestamp` field logs the exact time, while `publicIP`, `latitude`, and `longitude` capture geolocation data, and `browserInfo` holds user-agent details like platform and language.

---

## Project Structure

```
NotePhish/
├── node_modules/
├── public/
│   └── (static assets such as JS/CSS for the front-end)
├── views/
│   └── (EJS templates for rendering web pages)
├── server.js (Main server file for handling requests)
├── package.json (Project metadata and dependencies)
└── README.md (Project description and setup)
```

---

## Prerequisites

1. **Node.js**: Ensure you have [Node.js](https://nodejs.org/en/download/) installed on your machine. You can check your installation by running:
   ```bash
   node -v
   ```
   If Node.js isn't installed, download and install it from the official website.

2. **npm**: `npm` comes with Node.js, but verify it's installed:
   ```bash
   npm -v
   ```

3. **Manual Installation of Dependencies**: If dependencies aren't installed automatically:
   ```bash
   npm install express ejs body-parser
   ```

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/4lp1ne/NotePhish.git
   cd NotePhish
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```
   or
   ```bash
   node server.js
   ```

5. **Access the app**: 
   Open a browser and navigate to `http://localhost:3000` to interact with the note interface.

---

## Making It Public with Localtonet

To expose your local **NotePhish** instance to the public, you can use [localtonet](https://localtonet.com/):

1. Install Localtonet on your machine:
   ```bash
   curl -O https://localtonet.com/download.sh && sh download.sh
   ```

2. Run Localtonet with your local Node.js port:
   ```bash
   ./localtonet tcp --port 3000
   ```

3. Localtonet will provide a public URL that others can access to see the phishing note interface:
   ```bash
   Public URL: https://your-localtonet-url
   ```

---

## Future Enhancements

- **Persistent Logging**: Introduce database storage (MongoDB or MySQL) to persist logs over multiple sessions.
- **Admin Dashboard**: Reintroduce a dashboard to display collected logs, provide analytics, and allow for log management.
- **Enhanced Phishing Techniques**: Add more sophisticated features like fake login forms, password collection simulations, or fake email attachments.
- **Security Measures**: Include tools for demonstrating countermeasures, such as anti-phishing and safe browsing practices.

---

### MIT License

```text
MIT License

Copyright (c) 2024 4lp1ne

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
