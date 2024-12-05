import {v2 as cloudinary} from "cloudinary"
import fs from "fs" //file system


cloudinary.config({
    cloud_name:peocess.env.CLOUDINARY_CLOUD_NAM,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRE,
});



