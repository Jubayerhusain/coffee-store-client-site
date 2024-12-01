import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function Register() {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const hundleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(name, photo, email, password);
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate('/')
      })
      .catch((error) => {
        console.log("ERROR", error);
      });

      // Post the user data to database 
      const user = {name, email, photo}
      fetch(`http://localhost:5000/users`,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(user)
      })
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
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
              <div className="space-y-2 relative form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-12 text-orange-400 hover:text-teal-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
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
