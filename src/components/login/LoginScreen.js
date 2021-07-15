import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
      const { dispatch } = useContext(AuthContext);

      const handleLogin = () => {
            // history.push('/');

            const lastPath = localStorage.getItem('lastPath') || '/';
            console.log(lastPath);

            const action = {
                  type: types.login,
                  payload: {
                        name: 'Jean',
                  },
            };
            dispatch(action);
            history.replace(lastPath);
      };
      return (
            <div className="container mt-5">
                  <h1>Login</h1>
                  <hr />
                  <button className="btn btn-primary" onClick={handleLogin}>
                        Login
                  </button>
            </div>
      );
};
