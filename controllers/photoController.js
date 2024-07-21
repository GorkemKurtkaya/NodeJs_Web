import Photo from "../models/photomodel.js";


const createPhoto = async (req,res) => {
    try{
        const photo=await Photo.create(req.body);
        res.status(201).json({
            success:true,
            photo
        });
    }catch(error){
        res.status(400).json({
            success:false,
            error:error.message
        });
    }
}

const getAllPhotos = async (req,res) => {
    try{
        const photos=await Photo.find();
        res.status(200).json({
            success:true,
            photos
        });
    }catch(error){
        res.status(400).json({
            success:false,
            error:error.message
        });
    }
}

export{createPhoto,getAllPhotos};