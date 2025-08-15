import "./Login.css";
// import { Link } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const handelSubmit =(e)=>{
    e.preventDefault()
    dispatch(
      login({
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  }
  return (
    <div>
      <div className="flex justify-center pt-25 ">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={(e)=>handelSubmit(e)}>
            <div className="">
              <h4 className="text-3xl font-medium text-gray-900 dark:text-white">
                Login
              </h4>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter email Address..."
              />
              <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                {/* <span class="font-medium">Email  !</span>  */}
              </p>
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
              <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                {/* <span class="font-medium">Password  !</span> */}
              </p>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <a
                href="#"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                {/* <Link to="/">Create account</Link> */}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
