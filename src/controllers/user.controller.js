import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/APIError.js"
import {User} from "../models/user.models.js"
import {uploadOnCLoudinary} from "../utils/Cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"

const registerUser = asyncHandler(async (req,res)=>{
    // get user details from frontend 
    // validation - not empty
    //check if user already exists
    // check for images, check for avatar
    // upload them to cloudinary,avatar
    //create user object - create entry in db
    // remove password and refresh token from response
    //check for user creation
    //return response

    const {fullName,email,username,password}= req.body//accessing from the frontend
    console.log("email:",email);
    console.log("fullname:",fullName);
    console.log("password",password); // accessing the response 

    if (
        [fullName,email,username,password].some((field)=>
            field?.trim()===""
        )
    ){
        throw new ApiError(400,"All fields are required")
    }                                                     //validation if any field is empty
     /*if (fullName===""){
        throw new ApiError(400,"Fullname is required")
    }*/
   
    const existedUser = User.findOne({
        $or: [{ username },{ email }]    
    })//or operator 
    if (existedUser){
        throw new ApiError(409,"Username or email already exists") // if the user already exist
    }
    const avatarLocalPath = req.files?.avatar[0]?.path; //check fo image
    const coverImageLocalPath = req.files?.coverImage[0]?.path;//check avatar
     if (!avatarLocalPath){
        throw new ApiError(400,"Avatar File is required")
     }

    const avatar = await uploadOnCLoudinary(avatarLocalPath) //upload on cloudinary 
    const coverImage = await uploadOnCLoudinary(coverImageLocalPath)

    if (!avatar){
        throw new ApiError(400,"Avatar File is required")
    }
    const user = await User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage.url || "",
        email,
        password,
        username: username.toLowerCase()
         
    })// creating user

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser){
        throw new ApiError(500,"Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Registered Successfullty")
    )

})

export  {
    registerUser,
}