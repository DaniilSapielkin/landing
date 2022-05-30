export const initialState = {
  isLoading: true,
  notification: false,
  flag: false
};

export const projects = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    //
    case 'ADD_PROJECT_REQUEST':
      return {
        ...state,
        isLoading: true,
        flag: false
      };

    case 'ADD_PROJECT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        notification: true,
        flag: true
      };

    default:
      return state;
  }
};
