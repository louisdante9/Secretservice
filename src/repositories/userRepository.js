import User from "../models/user";
import {conflict, unauthorized} from '../utilities/helpers/response'

 const signup = async (res, userDetails) => {
  try {
  const userExists = await User.findOne({ email: userDetails.email.trim().toLowerCase() });
   if (userExists) {
     return [null, conflict(res, "sorry email already exist")];
   }
   const instance = new User(userDetails);
   const user = await instance.save();
   return [user, null];
  } catch (error) {
    return [null, error]
  }
}

 const signin = async (res, userDetails) => {
   try {
     const user = await User.findOne({
       email: userDetails.email.trim().toLowerCase(),
     });
      if (!user && !user.validPassword(password)) {
        return unauthorized(res, "Failed to authenticate user");
      }
    return [user, null]
    
   } catch (error) {
     return [null, error];
   }
 };

export {signup, signin}