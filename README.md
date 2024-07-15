# VideoPlayer App

Hi everyone! This is a simple VideoPlayer app, created on the React framework, it was my introduction to this tool. In the app you can add new playlists, add videos by link from youtube. You can also generate ready-made playlists.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [Authors](#authors)

## Tech Stack

- React, React-router-dom
- Node.js
- JavaScript
- CSS
- HTML

## Installation

Follow these steps to install and set up the application:

```bash
# Clone the repository
git clone https://github.com/Khatep/VideoPlayer.git

# Download node.js if you don't have it.
link for it: https://nodejs.org/en/download/package-manager

# Navigate to the project directory
cd video-player-project

# Install dependencies
npm install
```

## Usage

Follow these steps to run the application:

```bash
# Run project
npm start

# Run local server
./video-player-project/server> node index.mjs
```

## Project Structure

```bash
VideoPlayer/
├── video-player-project/
│   ├── node_modules/...
│   ├── public/
│   │   └── index.html
│   ├── server/
│   │   └── index.mjs
│   ├── src/
│   │   ├── API/
│   │   │   └── PlaylistService.js
│   │   ├── components/
│   │   │   ├── app/
│   │   │   │   ├── App.css
│   │   │   │   └── App.js
│   │   │   ├── generator/
│   │   │   │   ├── Generator.css
│   │   │   │   └── Generator.jsx
│   │   │   ├── main-page/
│   │   │   │   ├── MainPage.css
│   │   │   │   └── MainPage.jsx
│   │   │   ├── playlist-boxes/
│   │   │   │   ├── PlaylistBoxes.css
│   │   │   │   └── PlaylistBoxes.jsx
│   │   │   ├── playlist-form/
│   │   │   │   ├── PlaylistForm.css
│   │   │   │   └── PlaylistForm.jsx
│   │   │   ├── playlist-item/
│   │   │   │   ├── PlaylistItem.css
│   │   │   │   └── PlaylistItem.jsx
│   │   │   ├── playlist-page/
│   │   │   │   ├── PlaylistPage.css
│   │   │   │   └── PlaylistPage.jsx
│   │   │   ├── playlist-search/
│   │   │   │   ├── PlaylistSearch.css
│   │   │   │   └── PlaylistSearch.jsx
│   │   │   ├── video-boxes/
│   │   │   │   ├── VideoBoxes.css
│   │   │   │   └── VideoBoxes.jsx
│   │   │   ├── video-form/
│   │   │   │   ├── VideoForm.css
│   │   │   │   └── VideoForm.jsx
│   │   ├── images/
│   │   │   ├── CSGO.jpg
│   │   │   ├── degImg.jpg
│   │   │   ├── englishl.jpg
│   │   │   ├── FBI.jpg
│   │   │   ├── get-back-to-code-km-1920x1080
│   │   │   ├── GTA-VI/jpg
│   │   │   ├── index.js
│   │   │   ├── samurai-anime-girl-thumb.jpg
│   │   │   ├── Sportcar.jpg
│   │   │   ├── sunset.jpg
│   │   │   ├── valorant-computer-cartoon-style.jpg
│   │   │   ├── Valorant1.jpg
│   │   ├── index.css
│   │   ├── index.js
│   │   └── reportWebVitals.js
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
└── README.md
```

## Roadmap

Here are some features and improvements planned for future releases:

- Security: add authentication and authorization via tokens with firebase.
- Database: Make nosql real-time database using firebase, some entities: User, Admin, Playlist, Video etc.
- Copy playlists from Youtube: User can enter a playlist URL from YouTube, and the app will automatically create that playlist with video from the user.
- Multilanguage support: Add support for multiple interface languages.
- Share your playlist: User can send the link of their playlists to their friends.

Do you have ideas or suggestions for other features? Feel free to [open an issue](https://github.com/your-username/your-project/issues) or submit a pull request! or send me email nurgali.khatep@gmail.com 


## Authors

### Khatep Nurgali, Student of IITU
