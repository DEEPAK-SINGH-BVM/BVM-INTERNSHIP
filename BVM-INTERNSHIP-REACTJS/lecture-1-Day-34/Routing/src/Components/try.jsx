const isAuthenticated = false;

// Pages
// const Home = () => <h1>Home Page</h1>;
// const Signup = () => <h1>Signup Page</h1>;
// const Login = () => <h1>Login Page</h1>;
// const Contact = () => <h1>Contact Page</h1>;
// const Welcome = () => <h1>Welcome to the Dashboard</h1>;

// Private Route Component
const PrivateRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/signup" />;
};

// Main App
function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/welcome" element={<PrivateRoute><Welcome /></PrivateRoute>}/>
      </Routes>
    </Router>
  );
}

export default App;
