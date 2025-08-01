const PrivateRoute = ({ children }) => {
  const isAuthenticated = true;

  return isAuthenticated ? children : <Navigate to="/signup" />;
};
export default PrivateRoute;
