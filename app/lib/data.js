import { Users } from "./models";
import { conntectToDB } from "./utils";

export async function fetchUsers() {
  try {
    conntectToDB();
    const users = await Users.find();
    return users;
  } catch (error) {
    console.error("Error fetching users", error);
  }
}

export async function fetchUser(userId) {
  try {
    conntectToDB();
    const user = await Users.findById(userId);
    return user;
  } catch (error) {
    console.error("Error fetching user", error);
  }
}
