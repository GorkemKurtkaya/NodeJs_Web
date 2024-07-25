import Photo from "../models/photomodel.js";


const createPhoto = async (req,res) => {
    try{
        await Photo.create({
            name:req.body.name,
            description:req.body.description,
            user:res.locals.user._id
        });
        res.redirect("users/dashboard");
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
        res.status(200).render("photos",{
            photos,
            link:"photos"
        })
    }catch(error){
        res.status(400).json({
            success:false,
            error:error.message
        });
    }
}

const getAPhoto = async (req,res) => {
    try{
        const photo=await Photo.findById({_id : req.params.id});
        res.status(200).render("photo",{
            photo,
            link:"photo"
        })
    }catch(error){
        res.status(400).json({
            success:false,
            error:error.message
        });
    }
}

export{createPhoto,getAllPhotos,getAPhoto};