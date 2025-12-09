"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type UserRole = "customer" | "manager" | "waiter";

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole && email && password) {
      if (selectedRole === "customer") router.push("/");
      if (selectedRole === "manager") router.push("/manager/dashboard");
      if (selectedRole === "waiter") router.push("/waiter/dashboard");
    }
  };

  const roles = [
    {
      id: "customer" as UserRole,
      title: "CUSTOMER", // Changed to uppercase for style consistency
      icon: "person",
      color: "bg-primary",
    },
    {
      id: "manager" as UserRole,
      title: "MANAGER", // Changed to uppercase for style consistency
      icon: "admin_panel_settings",
      color: "bg-highlight",
    },
    {
      id: "waiter" as UserRole,
      title: "WAITER", // Changed to uppercase for style consistency
      icon: "room_service",
      color: "bg-accent",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-background-light via-white to-background-light dark:from-background-dark dark:via-black dark:to-background-dark">
      <div className="w-full max-w-4xl px-6 py-12">
        <div className="mx-auto w-full max-w-lg rounded-3xl bg-white/70 p-10 shadow-2xl backdrop-blur-xl dark:bg-gray-900/60">
          {/* Logo */}
          <Link
            href="/"
            className="mb-8 flex items-center justify-center gap-3"
          >
            <svg
              className="h-14 w-14 text-primary dark:text-highlight"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-4xl font-black uppercase tracking-tight text-heading dark:text-white">
              Gourmet
            </h1>
          </Link>

          {/* Title */}
          <h2 className="mb-2 text-center text-3xl font-extrabold text-heading dark:text-white">
            Welcome Back
          </h2>
          <p className="mb-10 text-center text-body dark:text-gray-300">
            Sign in to continue to your account
          </p>

          {/* Role Selection */}
          <div className="mb-10">
            <label className="mb-4 block text-sm font-bold tracking-wide text-heading dark:text-gray-200">
              Select Your Role
            </label>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 ">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => handleRoleSelect(role.id)}
                  // 1. Changed alignment to `items-center` for horizontal centering
                  // 2. Added `justify-center` for vertical centering (though `flex-col` dominates)
                  // 3. Set a more generous, uniform **`h-[150px]`** to make the card smaller
                  // 4. Added `text-center` to align all text within the card
                  className={`group relative flex flex-col items-center justify-center rounded-2xl border-2 p-6 shadow-sm transition-all hover:shadow-lg **h-[150px]** text-center
                    ${
                      selectedRole === role.id
                        ? "border-primary bg-primary/10 dark:border-highlight dark:bg-highlight/20"
                        : "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
                    }
                  `}
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-all
                      ${
                        selectedRole === role.id
                          ? `${role.color} text-white scale-110`
                          : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                      }
                    `}
                  >
                    <span className="material-symbols-outlined text-2xl">
                      {role.icon}
                    </span>
                  </div>

                  <h3
                    className={`mb-1 text-lg font-extrabold uppercase tracking-widest transition-colors
                      ${
                        selectedRole === role.id
                          ? "text-primary dark:text-highlight"
                          : "text-heading dark:text-white"
                      }
                    `}
                  >
                    {role.title}
                  </h3>

                  {selectedRole === role.id && (
                    // 6. Styled the checkmark icon to look cleaner
                    <span className="absolute right-3 top-3 material-symbols-outlined text-xl text-primary dark:text-highlight">
                      check_circle
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-heading dark:text-gray-200"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 transition-all focus:border-primary focus:ring-2 focus:ring-primary/40 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-highlight dark:focus:ring-highlight/40"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-heading dark:text-gray-200"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 transition-all focus:border-primary focus:ring-2 focus:ring-primary/40 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-highlight dark:focus:ring-highlight/40"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:focus:ring-highlight"
                />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Remember me
                </span>
              </label>

              <Link
                href="/forgot-password"
                className="text-sm font-bold text-primary hover:opacity-80 dark:text-highlight"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={!selectedRole}
              className="w-full rounded-full bg-primary px-8 py-4 text-center text-base font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50 dark:bg-highlight dark:text-gray-900"
            >
              Sign In
            </button>
          </form>

          {/* Sign up */}
          <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-bold text-primary hover:opacity-80 dark:text-highlight"
            >
              Sign Up
            </Link>
          </p>

          {/* Back */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-highlight"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}