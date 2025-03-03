"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", { email, password, redirect: false });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg">
        <input className="p-2 border rounded w-full mb-2"
          type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <input className="p-2 border rounded w-full mb-2"
          type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white p-2 rounded w-full">
          Login
        </button>
      </form>
    </div>
  );
}
