import { eq } from "drizzle-orm";
import { db } from "../config/db.js"
import { usersTable } from "../db/schema.js";


// Add New user
const createUserService = async (name, age, email) => {
    console.log(name, age, email);
    const userCreated = await db.insert(usersTable).values({ name, age, email });
    return userCreated;
}


// Get all Users
const getAllUserService = async () => {
    const usersList = await db.select().from(usersTable);
    return usersList;
}

// Get single User
const getUserByIdService = async (id) => {
    const user = await db.select().from(usersTable).where(eq(usersTable.id, id));
    return user;
}



// Update User
const updateUserService = async (id, name, age, email) => {
    const isUpdated = await db.update(usersTable).set({ name, age, email }).where(eq(usersTable.id, id));
    return isUpdated;
}


const deleteUserService = async (id) => {
    const isDeleted = await db.delete(usersTable).where(eq(usersTable.id, id));
    return isDeleted;
}

export {createUserService, getAllUserService, getUserByIdService, updateUserService, deleteUserService}
