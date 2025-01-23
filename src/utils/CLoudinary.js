import {v2 as cloudinary} from "cloudinary"
import fs from "fs" //file system


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath) return null
        //upload file in cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been uploaded successfully
        console.log("file is uploaded on cloudinary",response.url)
        console.log(response);
        return response;
        //unlinking files
        fs.unlinkSync(localFilePath)
    
         
        
    } catch (error) {
        fs.unlinkSync(localFilePath)//remove the locally saved temp file as the upload operation is failed
        return null
    }
}

export {uploadOnCloudinary}