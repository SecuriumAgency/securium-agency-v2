"use client";

import dynamic from "next/dynamic";

// Fond 3D (Three.js/postprocessing) exclu du bundle serveur/initial : chargé côté client, hors du chemin critique.
const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
  ssr: false,
});

export default ParticleBackground;
