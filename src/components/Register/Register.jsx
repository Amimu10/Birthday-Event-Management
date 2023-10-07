import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);


  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password, name);
    createUser(email, password)
    .then(result => {
        console.log(result.user); 
    })
    .catch(error =>{
        console.error(error);
    })
  };
  return (
    <div>
      <div className="hero h-[80vh] bg-base-200 mb-24">
        <div className="hero-content flex-col">
          <h1 className="text-4xl font-semibold font-young text-[#A3A3A3]">
            Register now!
          </h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#ABCE4E]">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input border-[#FDBF05] border-1 focus-border-none"
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
                  className="input border-[#FDBF05] border-1 focus-border-none"
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
                  className="input border-[#FDBF05]"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="bg-[#FDBF05] font-thin font-young text-white p-2 rounded-md">
                  Register
                </button>
              </div>
              <p>
                Already have an acoount?{" "}
                <Link className=" text-orange-600 font-semibold" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
