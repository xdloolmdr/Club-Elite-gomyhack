import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/endpoints/auth";
import { useUser } from "../hooks";

const EliteClubLanding = () => {
    const { setUser } = useUser();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

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
                    toast.success(`Logged in successfully : Welcome ${firstName} ${lastName}`);
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
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black to-gray-900 p-4 text-white">
            <div className="card w-full max-w-xs rounded-xl border border-gray-700 bg-gray-900 p-4 shadow-lg">
                <div className="card-body text-center">
                    <img
                        src="/Clubelite Logo - BigCommerce Store Logo with Transparent Background (2).png"
                        alt="Club-elite Logo"
                        className="mx-auto mb-6 w-60 opacity-90 brightness-90 contrast-110 invert filter"
                    />
                    <p className="mb-3 text-xs text-gray-400">
                        Join the ultimate football team dashboard and stay ahead of the game.
                    </p>
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            LoginAction(form);
                        }}
                        className="space-y-3"
                    >
                        <div>
                            <label className="mb-1 block text-xs font-semibold text-gray-300">
                                E-mail
                            </label>
                            <input
                                type="email"
                                className="input input-bordered w-full rounded-lg border-gray-700 bg-gray-800 px-3 py-2 text-xs text-gray-200 focus:ring-2 focus:ring-blue-500"
                                required
                                value={form.email}
                                onChange={HandleChange("email")}
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-xs font-semibold text-gray-300">
                                Password
                            </label>
                            <input
                                type="password"
                                className="input input-bordered w-full rounded-lg border-gray-700 bg-gray-800 px-3 py-2 text-xs text-gray-200 focus:ring-2 focus:ring-blue-500"
                                required
                                onChange={HandleChange("password")}
                                value={form.password}
                            />
                        </div>
                        <button
                            disabled={isPending}
                            type="submit"
                            className="btn w-24 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 py-2 text-xs font-bold text-white shadow-md hover:from-blue-700 hover:to-blue-900"
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
