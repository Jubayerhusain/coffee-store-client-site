import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Register() {
//   const { createUser, user} = useContext(AuthContext);

  const hundleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(name, email, password);
    // createUser(email, password)
    //   .then((res) => {
    //     console.log(res.user);
    //   })
    //   .catch((error) => {
    //     console.log("ERROR", error);
    //   });
  };
  return (
    <>
      <div className="hero mt-32">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-[800px] max-w-lg shrink-0 shadow-2xl">
            <form onSubmit={hundleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-center text-yellow-500 py-3">
              If you have an Account Please{" "}
              <Link to="/login">
                <u className="text-green-500">Login</u>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
