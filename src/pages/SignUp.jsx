import React, { use, useState } from "react";
import hobbyImg from "../assets/orkid.png";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthContext";
// import Swal from "sweetalert2";
import Spinner from "../components/ui/Spinner";
import Swal from "sweetalert2";

const SignUp = () => {
  const [err, setErr] = useState("");
  const { user, setUser, loader, setLoader, signUp } = use(AuthContext);
  const navigate = useNavigate();

  const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    if (!regex.test(password)) {
      setErr(
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, and be at least 6 characters long."
      );
      return;
    } else {
      setErr("");
    }

    // create user in the firebase
    signUp(email, password)
      .then((result) => {
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        // save profile info in the db
        fetch("http://localhost:3000/employee", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Your account is created.",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        navigate("/");
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

  if (loader) return <Spinner />;

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-base-100">
      {/* Left side - Illustration + Description */}
      <div className="flex flex-col justify-center items-center p-10">
        <img
          src={hobbyImg}
          alt="Hobby Illustration"
          className="w-3/4 md:w-2/4"
        />
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
        <form onSubmit={handleSignUp} className="max-w-md md:w-4/6">
          <label className="form-control w-full mb-4">
            <span className="label-text mb-1">Name</span>
            <input
              type="text"
              placeholder="Hamad Ismail"
              name="name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full mb-4">
            <span className="label-text mb-1">Email</span>
            <input
              type="email"
              placeholder="hamad.ismail.gub@gmail.com"
              name="email"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full mb-2">
            <span className="label-text mb-1">Password</span>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full mb-4"
              required
            />
          </label>

          {err && <label className="text-error mb-8">{err}</label>}

          <button type="submit" className="btn btn-neutral w-full my-4">
            Sign Up
          </button>

          <p className="text-sm text-ce1nter text-base-content">
            Already have and account?{" "}
            <Link to="/auth/login" className="text-success hover:underline">
              Login Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
