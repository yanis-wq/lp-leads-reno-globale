import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import "../styles.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "KRNO — Leads Rénovation Globale" },
      { name: "description", content: "Des leads Réno Globale 100% qualifiés, exclusifs et en temps réel." },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => (
    <div style={{ padding: 32 }}>
      <h1>404 — Page introuvable</h1>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  ),
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        {children}
        <Scripts />
      </body>
    </html>
  );
}
