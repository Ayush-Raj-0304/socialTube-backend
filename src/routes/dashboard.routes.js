import { Router } from 'express';
import {
    getChannelStats,
    getChannelVideos,
} from "../controllers/dashboard.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();

router.use(verifyJWT); // Applies verifyJWT  to all routes in current file

router.route("/stats").get(getChannelStats);
router.route("/videos").get(getChannelVideos);

export default router