
# NotePhish - Privnote Phishing Simulation

---
![Screenshot](https://github.com/user-attachments/assets/86ea9c15-da8f-4386-991f-86b80a09b1f9)

---

## Overview

**NotePhish** is a Privnote-style phishing project created for educational purposes and ethical hacking demonstrations. It simulates a phishing attack using social engineering techniques. The project displays a professional-looking note (similar to Privnote) that self-destructs once accessed by the user. When the note is accessed, the client-side geolocation, public IP address, and browser information are captured and sent to the server for logging. Additionally, a camera capture feature can be triggered to collect an image from the user's device.

**Note**: This project is for **ethical purposes only** and should be used with proper authorization.

---

## Key Features

- **Client-Side Simulation**: Displays a Privnote-like self-destructing note with minimal interaction required from the user.
- **Data Collection**: Automatically logs geolocation, IP address, and browser information when the note is accessed.
- **Background Logging**: Continuously sends logs (e.g., geolocation, IP, browser info) every minute once triggered.
- **Camera Capture**: Captures an image from the user's device using the camera and sends it to the server.
- **In-Memory Logging**: Stores the collected data in-memory (no persistent storage).
- **Extensibility**: Designed for future additions like more advanced phishing techniques, improved UI/UX, and better analytics.

---

## How It Works with Two Servers

The project is split into two servers running on different ports (3000 and 3001) for different purposes. This separation helps avoid overwhelming the user with multiple permission requests all at once, which could raise suspicion.

- **Server 1 (Port 3000)**: Handles geolocation, IP, and browser information logging.
- **Server 2 (Port 3001)**: Handles camera capture.

### Why Two Servers?

Using two servers allows you to present different notes depending on your goal:

- **Note 1 (Geolocation Only)**: Displays a note that gathers **geolocation** data when accessed (e.g., "Hello ca va?").
- **Note 2 (Camera Only)**: Displays a note that triggers the **camera** capture when accessed (e.g., "Dis moi, tu saurais p?").
- **Both Notes**: You can send both notes to the user if you need both geolocation and camera data. By using separate servers, the system reduces the likelihood of raising security alarms on the client side.

### Example Use Cases

- **Need GPS/Geolocation Only**: Send the link to the note served by **Server 1** (`http://localhost:3000`).
- **Need Camera Image Only**: Send the link to the note served by **Server 2** (`http://localhost:3001`).
- **Need Both**: Send links to both notes.

---

## Changing the Displayed Message in the Notes

Each note displayed to the user contains a customizable message. To change the message, modify the following files:

1. **Server 1 (Geolocation)**: 
   - Open the **`server1.js`** file.
   - Modify the `noteContent` value in the `/` route:
     ```js
     const noteContent = "Your new message for geolocation data here.";  // Example note content
     ```

2. **Server 2 (Camera Capture)**:
   - Open the **`server2.js`** file.
   - Modify the `noteContent` value in the `/` route:
     ```js
     const noteContent = "Your new message for camera capture here.";  // Example note content
     ```

### Example of Displayed Messages:

- **Server 1 (Geolocation)**: 
   ```js
   const noteContent = "Hello ca va?";  // Message for Note 1
   ```
- **Server 2 (Camera Capture)**: 
   ```js
   const noteContent = "Dis moi, tu saurais p?";  // Message for Note 2
   ```

You can adapt these messages based on your scenario and what kind of interaction you're simulating.

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
├── public/uploads/
│   └── (logs and images stored in the uploads folder)
├── server1.js (Handles geolocation, IP tracking)
├── server2.js (Handles camera capture)
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

---

## Running the Project with `run.bat`

You can use the provided **run.bat** script to start the servers and access the phishing note pages. The script will ask you which server(s) you want to run.

   ```bash
   ./run.bat
   ```
### Options:

1. **Option A**: Runs only **Server 1** (for geolocation, IP, and browser info logging).
2. **Option B**: Runs only **Server 2** (for camera capture).
3. **Option C**: Runs **both Server 1 and Server 2** (for geolocation, IP logging, and camera capture).

### How to Run:

1. **Double-click the `run.bat` script** to start the project.
2. **Choose an option**:
   - Enter **A** to run only the geolocation logging.
   - Enter **B** to run only the camera capture.
   - Enter **C** to run both servers.

3. **Access the app**:
   - The script will automatically open the browser for the selected servers:
     - For **Server 1** (Geolocation and logging): `http://localhost:3000`
     - For **Server 2** (Camera capture): `http://localhost:3001`

4. **Logs and Images**:
   - The collected data (logs and camera captures) are saved in the `public/uploads` directory:
     - **Geolocation logs** are saved in `log.txt`.
     - **Captured images** are saved in `.png` format.

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
   ./localtonet tcp --port 3001
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
in the Software

 without restriction, including without limitation the rights
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
```
