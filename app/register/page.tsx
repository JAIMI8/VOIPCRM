




"use client";  

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";  

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "agent",
  });

  const [error, setError] = useState<string | null>(null);  // State pour gérer les messages d'erreur
  const [loading, setLoading] = useState(false);  // State pour gérer le chargement
  const router = useRouter(); // Utilisation du hook useRouter de 'next/navigation'

  // Gérer les changements dans les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true); // Démarre le chargement
    setError(null); // Réinitialise l'erreur

    // Validation simple côté client
    if (!form.name || !form.email || !form.password) {
      setError("Veuillez remplir tous les champs.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token); // Stocke le token dans localStorage
        console.log("Utilisateur inscrit", data.user);
        router.push("/dashboard"); // Utilise router.push pour la navigation
      } else {
        setError(data.message || "Erreur inconnue"); // Affiche le message d'erreur en cas d'échec
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      setError("Erreur réseau, veuillez réessayer plus tard.");
    } finally {
      setLoading(false); // Arrête le chargement
    }
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: 'url("/log.jpg")' }}
    >
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-10">
        <div className="flex items-center justify-center gap-2 text-primary mb-6">
          <Link href="/" passHref>
            <Image
              src="/logo.png"
              alt="CALL Logo"
              width={48}
              height={48}
              className="w-20 h-20"
            />
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-center mb-8">Créer un compte</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="text-red-600 mb-4 text-center">
              <p>{error}</p>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="name">Nom complet</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Votre nom complet"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Mot de passe"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Sélection du rôle */}
          <RadioGroup
            value={form.role}
            onValueChange={(val) => setForm({ ...form, role: val })}
            className="flex justify-between"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="administrateur" id="admin" />
              <Label htmlFor="admin">Administrateur</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="supervisor" id="supervisor" />
              <Label htmlFor="supervisor">Supervisor</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="agent" id="agent" />
              <Label htmlFor="agent">Agent</Label>
            </div>
          </RadioGroup>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-lg"
            disabled={loading} // Désactive le bouton pendant le chargement
          >
            {loading ? "Création en cours..." : "Créer un compte"}
          </Button>

          <p className="text-center text-lg">
            Vous avez déjà un compte ?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Se connecter
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
