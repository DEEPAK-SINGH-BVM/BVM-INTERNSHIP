export const signup = (user) => ({
  type: "SIGNUP",
  payload: user,
});

export const login = (credentials) => ({
  type: "LOGIN",
  payload: credentials,
});

export const logout = () => ({
  type: "LOGOUT",
});
