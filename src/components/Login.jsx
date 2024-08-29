import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [staffId, setStaffId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const staffData = [
    { staffId: "st1", password: "pw1" },
    { staffId: "st2", password: "pw2" },
    { staffId: "st3", password: "pw3" },
    { staffId: "st4", password: "pw4" },
    { staffId: "st5", password: "pw5" },
    { staffId: "st6", password: "pw5" },
     
  ];

  // Handle login logic
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const staff = staffData.find(
      (s) => s.staffId === staffId && s.password === password
    );

    if (staff) {
      // If the credentials match, navigate to another page (e.g., dashboard)
      navigate("/checkinoutform");
    } else {
      // If the credentials don't match, display an error message
      setError("Invalid Staff ID or Password");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAR_t8mZATSXcynVXzbIR9-oQJkrSH0GacjA&s"
            className="mx-auto h-28 w-auto"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in as a staff
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Display error */}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="staffId"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Staff ID
              </label>
              <div className="mt-2">
                <input
                  id="staffId"
                  name="staffId"
                  type="text"
                  required
                  value={staffId}
                  onChange={(e) => setStaffId(e.target.value)}
                  autoComplete="off"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-cyan px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="https://wa.me/233530135583"
              className="font-semibold leading-6 text-cyan hover:text-indigo-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Admin
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
