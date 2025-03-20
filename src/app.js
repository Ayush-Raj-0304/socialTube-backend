import express from "express"; 
import cors from "cors"; //to handle whitlisiting etc
import cookieParser from "cookie-parser"; 
import morgan from "morgan"; //this is a new addition 
// You're using Morgan (morgan("dev")) as an HTTP request logger middleware to log incoming requests in a structured and readable format.

// Why Use Morgan?
// Logs HTTP Requests

// Morgan logs request details like method, URL, status code, response time, and content length, which helps in debugging and monitoring API activity.
// Example log in "dev" mode:
// GET /api/v1/users 200 12.345 ms - 1234
// POST /api/v1/login 401 3.567 ms - 89
// we can see this activity in the terminal while testing with Postman

const app = new express(); //this transfers all the express functionalities into app variable, as you know in JS variable can be very powerful

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev")); //HTTP request logger middleware for node.js 



//routes import

import userRouter from "./routes/user.routes.js";
import commentRouter from "./routes/comment.routes.js";
import likeRouter from "./routes/like.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import tweetRouter from "./routes/tweet.routes.js";
import videoRouter from "./routes/video.routes.js";
import healthcheckRouter from "./routes/healthcheck.routes.js";
import playlistRouter from "./routes/playlist.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/comment", commentRouter);
app.use("/api/v1/likes", likeRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/tweet", tweetRouter);
app.use("/api/v1/video", videoRouter);
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/playlist", playlistRouter);
app.use("/api/v1/dashboard", dashboardRouter);


export default app;
