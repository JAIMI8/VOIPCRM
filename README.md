
VOIPCRM
=======

Un système CRM moderne pour la gestion des appels, construit avec Next.js, React, Tailwind CSS et TypeScript.

🚀 Fonctionnalités principales
------------------------------
- Application basée sur Next.js (framework React moderne)
- Composants modulaires et réutilisables avec React
- Design réactif avec Tailwind CSS
- Préparé pour l'intégration de services VOIP et CRM

⚙️ Prérequis
------------
Avant de commencer, assurez-vous d'avoir installé :
- Node.js (v18 ou plus récent)
- pnpm (ou npm / yarn si vous préférez)

📦 Installation
---------------
1. Cloner le dépôt :
   git clone https://github.com/JAIMI8/VOIPCRM.git
   cd VOIPCRM

2. Installer les dépendances :
   pnpm install

🧪 Démarrage en mode développement
----------------------------------
pnpm dev

Puis ouvrez le navigateur à l'adresse : http://localhost:3000

🛠️ Scripts utiles
------------------
- pnpm dev : démarre le serveur de développement
- pnpm build : compile l’application pour la production
- pnpm start : démarre le serveur après compilation
- pnpm lint : analyse le code pour détecter les erreurs

📁 Structure du projet
----------------------
app/         → Pages et routes de l’application (App Router)
components/  → Composants React réutilisables
hooks/       → Hooks personnalisés
lib/         → Fonctions utilitaires
public/      → Fichiers statiques
services/    → Services et appels API
styles/      → Feuilles de style globales
utils/       → Fonctions utilitaires
tailwind.config.ts → Configuration de Tailwind CSS
tsconfig.json      → Configuration de TypeScript
next.config.mjs    → Configuration de Next.js


