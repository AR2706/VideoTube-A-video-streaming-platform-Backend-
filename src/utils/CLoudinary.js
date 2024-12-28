import {v2 as cloudinary} from "cloudinary"
import fs from "fs" //file system


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAM,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRE,
});

const uploadOnCLoudinary = async(localFilePath)=>{
    try {
        if(!localFilePath) return null
        //upload file in cloudinary
        const response = await cloudinary.uploader.upload("localFilePath",{
            resource_type:"auto"
        })
        //file has been uploaded successfully
        console.log("file is uploaded on cloudinary",response.url)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)//remove the locally saved temp file as the upload operation is failed
        return null
    }
}

export {uploadOnCLoudinary}