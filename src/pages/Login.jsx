import React, { use, useState } from "react";
import hobbyImg from "../assets/orkid.png";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import Swal from "sweetalert2";
import Spinner from "../components/ui/Spinner";

const Login = () => {
  // const { logIn, loader, setLoader, googleLogIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [err, setErr] = useState("");
  const { logIn, loader, setLoader } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // firebase sign in send
    logIn(email, password)
      .then((result) => {
        const singInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        // update last sign in to the database
        fetch("http://localhost:3000/employee", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(singInInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.matchedCount) {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Your account is created.",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode);
        setLoader(false);
        Swal.fire({
          position: "top",
          icon: "error",
          title: errorCode,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-base-100">
      {/* Left side - Illustration + Description */}
      <div className="flex flex-col justify-center items-center p-10">
        <img src={hobbyImg} alt="Orkid Employee" className="w-3/4 md:w-2/4" />
        <div className="text-center mt-6">
          <h2 className="text-2xl font-semibold">Orkid Employee</h2>
          <p className="text-sm text-base-content mt-2 max-w-xs mx-auto">
            Make sure your presence
          </p>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex flex-col justify-center items-center p-8">
        {/* Logo */}
        <h1 className="text-3xl font-semibold mb-4">
          <span className="inline-block mr-1">⚽</span>
          <span className="font-bold">Orkid</span>
          <span className="text-success font-light"> Employee</span>
        </h1>

        {/* Form */}
        <form onSubmit={handleSignIn} className="max-w-md md:w-4/6">
          <label className="form-control w-full mb-4">
            <span className="label-text mb-1">Email</span>
            <input
              type="text"
              name="email"
              required
              placeholder="hamad.ismail.gub@gmail.com"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full mb-2">
            <span className="label-text mb-1">Password</span>
            <input
              type="password"
              name="password"
              required
              className="input input-bordered w-full"
            />
          </label>

          <div className="mb-4 flex items-center justify-between">
            <a className="text-sm text-success hover:underline cursor-pointer">
              Forgot password?
            </a>
            {err && <p className="text-sm text-error">{err}</p>}
          </div>

          <button type="submit" className="btn btn-neutral w-full mb-4">
            Sign in
          </button>

          <div className="divider">or</div>

          <p className="text-sm text-ce1nter text-base-content">
            Are you new?{" "}
            <Link to="/auth/signup" className="text-success hover:underline">
              Create an Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
