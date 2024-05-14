"use client";
import { useState } from "react";
import "./Login.scss"; // Import the SCSS file
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement signup logic here
    if (email && password) {
      router.push("/library");
    }
  };
  return (
    <div className="main-container">
      <div className="image-container"></div>
      <div className="login-container">
        <div className="login-form">
          <h1 className="login-title">Login to BluOcean</h1>{" "}
          <form onSubmit={handleSubmit} className="">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group pass">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="forgot-pass">Forgot password</p>
            <button
              type="submit"
              className="submit-button"
              onClick={(e) => handleSubmit(e)}
            >
              Login
            </button>
          </form>
          <p className="signup-link">
            Don&apos;t have an account{" "}
            <a href="/" className="">
              SIGNUP
            </a>{" "}
            {/* Removed inline class */}
          </p>
        </div>
      </div>
    </div>
  );
}
