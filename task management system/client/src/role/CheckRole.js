import { UserToken } from "../UserToken";

export const Role = (roles = []) => {
  let role = UserToken()?.role;
  if (roles.includes(role)) {
    return true;
  } else {
    return false;
  }
};
