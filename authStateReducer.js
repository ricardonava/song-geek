/* eslint-disable default-case */
import React from 'react';

export default function authStateReducer() {
  return React.useReducer(
    // eslint-disable-next-line consistent-return
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.payload.token,
            isLoading: false
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.payload.token
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null
    }
  );
}
