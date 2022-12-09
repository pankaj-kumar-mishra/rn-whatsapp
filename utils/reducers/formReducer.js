export const validationFormTypes = {
  VALIDATION_RESULT: "VALIDATION_RESULT",
};

export const validationReducer = (state, action) => {
  const {
    type,
    payload: { id, value, validationResult },
  } = action;

  switch (type) {
    case validationFormTypes.VALIDATION_RESULT: {
      const updatedValidities = {
        ...state.inputValidities,
        [id]: validationResult,
      };
      const updatedValues = {
        ...state.inputValues,
        [id]: value,
      };

      let updatedFormIsValid = true;
      for (const key in updatedValidities) {
        if (updatedValidities[key] !== undefined) {
          updatedFormIsValid = false;
          break;
        }
      }

      return {
        // though no extra property so i commented "...state"
        // ...state,
        formIsValid: updatedFormIsValid,
        inputValidities: updatedValidities,
        inputValues: updatedValues,
      };
    }

    default:
      return state;
  }
};
