"use client";
import { login } from "@/api/endpoints/auth";
import { useUser } from "@/hooks";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const EliteClubLanding = () => {
  const { setUser } = useUser();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const {
    mutate: LoginAction,

    isPending,
  } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      try {
        console.log(response);
        if (response.status === 200) {
          const { token, user } = response.data;
          localStorage.setItem("token", token);
          const { firstName, lastName } = user;
          toast.success(
            `Logged in successfully : Welcome ${firstName} ${lastName}`
          );
          router.push("/dashboard");
          setUser(user);
        }
      } catch (e) {
        console.log(e);
      }
    },
    onError: (err) => {
      const { error } = err.response.data;
      console.log(err);
      toast.error("Login failed: " + error);
    },
  });
  function HandleChange(inputName) {
    return (e) => {
      setForm((prev) => ({ ...prev, [inputName]: e.target.value }));
    };
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 text-white p-4">
      <div className="card w-full max-w-xs p-4 bg-gray-900 rounded-xl shadow-lg border border-gray-700">
        <div className="card-body text-center">
          <img
            src="/Clubelite Logo - BigCommerce Store Logo with Transparent Background (2).png"
            alt="Club-elite Logo"
            className="mx-auto mb-6 w-60 filter invert brightness-90 contrast-110 opacity-90"
          />
          <p className="mb-3 text-gray-400 text-xs">
            Join the ultimate football team dashboard and stay ahead of the
            game.
          </p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              LoginAction(form);
            }}
            className="space-y-3"
          >
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-300">
                E-mail
              </label>
              <input
                type="email"
                className="input input-bordered w-full bg-gray-800 border-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 rounded-lg px-3 py-2 text-xs"
                required
                value={form.email}
                onChange={HandleChange("email")}
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-300">
                Password
              </label>
              <input
                type="password"
                className="input input-bordered w-full bg-gray-800 border-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 rounded-lg px-3 py-2 text-xs"
                required
                onChange={HandleChange("password")}
                value={form.password}
              />
            </div>
            <button
              disabled={isPending}
              type="submit"
              className="btn w-24 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 rounded-lg shadow-md text-xs"
            >
              Login
            </button>
          </form>
          <div className="mt-3 text-xs">
            <a href="#" className="text-blue-400 hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EliteClubLanding;
