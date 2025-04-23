

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

// Backend API URL
const API = "http://127.0.0.1:8000/api";

// Login function
export const login = async (email: string, password: string) => {
  const res = await axios.post(
    `${API}/login`,
    { email, password },
    {
      headers: {
        Accept: "application/json", // Ensure that the backend understands it's a JSON request
      },
    }
  );
  const { token, user } = res.data;
  
  // Check if we're in the browser environment
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token); // Store token in localStorage
  }
  return user;
};

// Get current logged-in user
export const getMe = async () => {
  // Ensure we're in the browser before accessing localStorage
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      const res = await axios.get(`${API}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    }
  }
  return null;
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset previous errors

    try {
      const user = await login(email, password);
      console.log("Logged in successfully", user);

      // Fetch current user data
      const me = await getMe();
      console.log("User data:", me);
      setLoading(false); // Stop loading
    } catch (err) {
      console.error("Error during login:", err);
      setLoading(false);
      setError("Failed to login. Please check your credentials.");
    }
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: 'url("/log.jpg")' }}
    >
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-10">
        <div className="flex items-center justify-center gap-2 text-primary mb-6">
          <Link href="/login" passHref>
            <div className="cursor-pointer flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="CALL Logo"
                width={48}
                height={48}
                className="w-20 h-20"
              />
            </div>
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-center mb-8">Se connecter</h1>

        {error && (
          <div className="text-red-500 text-center mb-4">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xl">
              Email<span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-xl">
              Mot de passe<span className="text-red-500">*</span>
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-lg"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-xl"
            disabled={loading}
          >
            {loading ? "Chargement..." : "Se connecter"}
          </Button>

          <p className="text-center text-lg">
            Vous n’avez pas de compte ?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Créer un compte
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
