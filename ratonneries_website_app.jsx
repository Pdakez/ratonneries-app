// Ratonneries Website + App - React + Tailwind UI

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Download, LogIn } from "lucide-react";
import { motion } from "framer-motion";

export default function RatonneriesApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white font-sans">
      {/* Header */}
      <header className="p-4 flex justify-between items-center bg-black/70 backdrop-blur">
        <div className="flex items-center gap-3">
          <img
            src="/raccoon-logo-luxe.png"
            alt="Logo Ratonneries"
            className="w-12 h-12 rounded-full border-2 border-white shadow-md"
          />
          <h1 className="text-3xl font-bold tracking-widest italic text-yellow-400">
            Ratonneries
          </h1>
        </div>
        {!isLoggedIn ? (
          <Button variant="outline" onClick={handleLogin}>
            <LogIn className="mr-2" /> Se connecter
          </Button>
        ) : (
          <span className="text-green-400">Bienvenue, utilisateur 🚗</span>
        )}
      </header>

      {/* Tabs Section */}
      <main className="p-6 max-w-6xl mx-auto">
        <Tabs defaultValue="cars">
          <TabsList className="flex justify-around">
            <TabsTrigger value="cars">RatoCar</TabsTrigger>
            <TabsTrigger value="garage">RatoGarage</TabsTrigger>
            <TabsTrigger value="parts">RatoParts</TabsTrigger>
          </TabsList>

          <TabsContent value="cars">
            <h2 className="text-2xl font-semibold my-4">Véhicules disponibles</h2>
            <Card>
              <CardContent className="p-4">Catalogue à venir...</CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="garage">
            <h2 className="text-2xl font-semibold my-4">Rendez-vous Garage</h2>
            <Card>
              <CardContent className="p-4">Prise de RDV bientôt disponible.</CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="parts">
            <h2 className="text-2xl font-semibold my-4">Pièces détachées</h2>
            <Card>
              <CardContent className="p-4">Rechercher vos pièces ici bientôt.</CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Download App Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Télécharge l'application</h2>
          <p className="mb-6">Disponible bientôt sur iOS et Android</p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary">
              <Download className="mr-2" /> Télécharger iOS
            </Button>
            <Button variant="secondary">
              <Download className="mr-2" /> Télécharger Android
            </Button>
          </div>
        </section>

        {/* Login form if not logged in */}
        {!isLoggedIn && (
          <section className="mt-16 max-w-md mx-auto bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl mb-4 font-semibold">Créer un compte ou se connecter</h3>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-2"
            />
            <Input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4"
            />
            <Button onClick={handleLogin} className="w-full">
              <LogIn className="mr-2" /> Se connecter
            </Button>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center p-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Ratonneries — Tous droits réservés.
      </footer>
    </div>
  );
}
