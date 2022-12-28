import { validate } from "validate.js";
// Reference => https://validatejs.org/

// "message" for custom message and it is optional

export const validateString = (id, value) => {
  const constraints = {
    presence: { allowEmpty: false, message: "Can't be empty!" },
  };
  if (value) {
    constraints.format = {
      pattern: "[a-z]+",
      flags: "i",
      message: "Value can only contains letters",
    };
  }

  const result = validate({ [id]: value }, { [id]: constraints });
  return result?.[id]?.[0];
};

export const validateEmail = (id, value) => {
  const constraints = {
    presence: { allowEmpty: false, message: "Can't be empty!" },
  };
  if (value) {
    constraints.email = true;
  }

  const result = validate({ [id]: value }, { [id]: constraints });
  return result?.[id]?.[0];
};

export const validatePassword = (id, value) => {
  const constraints = {
    presence: { allowEmpty: false, message: "Can't be empty!" },
  };
  if (value) {
    constraints.length = {
      minimum: 6,
      maximum: 10,
    };
  }

  const result = validate({ [id]: value }, { [id]: constraints });
  return result?.[id]?.[0];
};

export const validateLength = ({
  id,
  value,
  allowEmpty,
  minLength,
  maxLength,
}) => {
  const constraints = {
    presence: { allowEmpty, message: "Can't be empty!" },
  };
  if (!allowEmpty || value) {
    constraints.length = {};
    if (minLength != null) {
      constraints.length.minimum = minLength;
    }
    if (maxLength != null) {
      constraints.length.maximum = maxLength;
    }
  }

  const result = validate({ [id]: value }, { [id]: constraints });
  return result?.[id]?.[0];
};
