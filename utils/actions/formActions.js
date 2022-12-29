import {
  validateString,
  validateEmail,
  validatePassword,
  validateLength,
} from "../validationConstraints";

export const validateInput = (id, value) => {
  if (id === "firstName" || id === "lastName") {
    return validateString(id, value);
  } else if (id === "email") {
    return validateEmail(id, value);
  } else if (id === "password") {
    return validatePassword(id, value);
  } else if (id === "about") {
    return validateLength({
      id,
      value,
      allowEmpty: true,
      minLength: 0,
      maxLength: 150,
    });
  }
};
