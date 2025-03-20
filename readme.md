# SocialTube Backend 

## Introduction

Welcome to the SocialTube backend project! This backend system brings together key YouTube functionalities while incorporating Twitter-style tweets, creating a unique platform for video sharing and social interactions. For more details, check out the documentation links below.

## Important links

| Content            | Link                                                                        |
| -------------------| ----------------------------------------------------------------------------|
| API Documentation  | [click here](https://documenter.getpostman.com/view/43220209/2sAYkGJdwu)    |
| Model              | [click here ](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)         |

## Features

### User Management:

- Register, log in, log out, and reset passwords
- Customize profiles with avatars, cover images, and personal details
- Track watch history


### Video Management:

- Upload and publish videos
- Search, sort, and paginate videos
- Edit and delete videos
- Control video visibility (publish/unpublish)

### Tweet Management:

- Create and publish tweets
- View user tweets
- Update and delete tweets

### Subscription Management:

- Subscribe to channels
- View subscriber lists and subscribed channels

### Playlist Management:

- Create, update, and delete playlists
- Add and remove videos from playlists
- View user playlists

### Like Management:

- Like and unlike videos, comments, and tweets
- View liked videos

### Comment Management:

- Add, update, and delete comments on videos

### Dashboard:

- View channel statistics (views, subscribers, videos, likes)
- Access uploaded videos

### Health Check:

- Endpoint to verify backend health status

## Technologies Used

- Backend Framework: Node.js, Express.js
- Database: MongoDB
- Media Storage: Cloudinary (requires an account)

## Installation and Setup

1. **Clone the repository:**

    ```bash
    git clone 
    ```

2. **Install dependencies:**

    ```bash
    cd youtube-twitter
    npm install
    ```

3. **Set up environment variables:**
    Create a .env in root of project and fill in the required values in the .env file using .env.sample file

4. **Start the server:**

    ```bash
    npm run dev
    ```

## 🔗 Contributing
Contributions are welcome! If you'd like to improve the project, please fork the repository and submit a pull request.

## 🤝 License
This project is open for contributions. Feel free to contribute and enhance its features!

---

Enjoy using **SocialTube**
