import { Router } from "express";
import { 
    changeCurrentPassword, 
    getCurrentUser, 
    getUserChannelProfile, 
    getWatchHistory, 
    loginUser, 
    logoutUser, 
    refreshAccessToken, 
    registerUser, 
    updateUserAvatar, 
    updateUserCoverImage, 
    updateUserDetails 
    } from "../controllers/user.controller.js";
import {upload} from '../middlewares/multer.middleware.js'
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]) ,
    registerUser
);

router.route("/login").post(upload.none(), loginUser); //upload.none() is used when you only expect text fields (form data) in the request and no file uploads. It tells Multer to parse the request body but reject any files.
// Why Use Multer Even When No Files Are Uploaded?
// Handling multipart/form-data requests

// Some forms (especially in frontend frameworks) send data as multipart/form-data, even if no files are included.
// express.json() and express.urlencoded() do not parse multipart/form-data, so without Multer, req.body would be empty.
// upload.none() ensures the form fields are correctly parsed and accessible in req.body.

//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(upload.none(), verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);

router.route("/update-user").patch(upload.none(), verifyJWT, updateUserDetails);
router.route("/update-avatar").patch(verifyJWT, upload.single('avatar'), updateUserAvatar);
router.route("/update-coverImg").patch(verifyJWT, upload.single('coverImage'), updateUserCoverImage);

router.route("/c/:username").get(verifyJWT, getUserChannelProfile);
router.route("/watch-history").get(verifyJWT, getWatchHistory);

export default router