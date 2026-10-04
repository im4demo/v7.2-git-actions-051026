import { createUserService, deleteUserService, getAllUserService, getUserByIdService, updateUserService } from "../models/userModel.js";


const reponseHandler = (res, status, message, data = null) => {
    res.status(status).json({ status, message, data });
}


const createUser = async (req, res, next) => {
    const { name, age, email } = req.body;

    try{
        const newUser = await createUserService(name, age, email)
        return reponseHandler(res, 201, "User created successfully", newUser);
    }catch(err){
        next(err)
    }    
}


const getAllUsers = async (req, res, next) => {

    try{
        const usersList = await getAllUserService();
        return reponseHandler(res, 200, "Users fetched successfully", usersList);        
    }catch(err){
        next(err)
    }
}

const getUserById = async (req, res, next) => {

    const { id } = req.params;

    try{
        const user = await getUserByIdService(id);
        return reponseHandler(res, 200, "User fetched successfully", user);
    }catch(err){
        next(err)
    }
}
    

const updateUser = async (req, res, next) => {

    const { id } = req.params;
    const { name, age, email } = req.body;

    try{
        const isUpdated = await updateUserService(id, name, age, email);
        return reponseHandler(res, 200, "User updated successfully", isUpdated);
    }catch(err){
        next(err)
    }
}


const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    
    try{
        const isDeleted = await deleteUserService(id);
        return reponseHandler(res, 200, "User deleted successfully", isDeleted);
    }catch(err){
        next(err)
    }
}


export { createUser, getAllUsers, getUserById, updateUser, deleteUser }


