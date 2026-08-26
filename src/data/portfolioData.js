/**
 * ────────────────────────────────────────────────────────────────
 * SOURCE UNIQUE DE VÉRITÉ DU PORTFOLIO
 * ────────────────────────────────────────────────────────────────
 * Toutes les informations "répétitives" ou amenées à changer vivent ici.
 * Les composants ne contiennent aucun texte en dur : ils reçoivent ces
 * données en props et les affichent avec .map().
 *
 * ➜ Pour mettre à jour le site (nouveau projet, nouvelle compétence,
 *   changement de coordonnées...), modifiez uniquement ce fichier.
 * ────────────────────────────────────────────────────────────────
 */

import {
  Code2,
  Smartphone,
  Palette,
  Server,
  Database,
  Layers,
  Rocket,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ShoppingCart,
  KanbanSquare,
  Braces,
  Wrench,
  PenTool,
  MonitorSmartphone,
  Globe,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "../components/ui/BrandIcons.jsx";

/* ------------------------------------------------------------------ */
/*  Identité                                                          */
/* ------------------------------------------------------------------ */

export const personalInfo = {
  name: "Ange-Cédric N'Goran",
  initials: "Drico-Dev",
  role: "Développeur Web & Mobile",
  tagline: "Je construis des sites et applications rapides, soignés et pensés pour convertir.",
  location: "Abidjan, Côte d'Ivoire",
  bio:
    "Développeur web & mobile freelance basé à Abidjan, je conçois des sites vitrines, des applications sur mesure et des outils métier (React, Tailwind CSS, Node.js) pour des restaurants, cliniques, boutiques et entreprises. Mon approche : du code propre, des interfaces rapides, et des livrables réellement fonctionnels — pas de simples maquettes.",
  email: "angecedric766@gmail.com",
  phone: "+225 01 40 58 64 40",
  availability: "Disponible pour de nouvelles missions",
  avatar: "/assets/images/profil/profile.jpeg",
  cvFile: "/assets/documents/CV ange-cedric.pdf",
};

export const socialLinks = [
  { id: "github", label: "GitHub", href: "https://github.com/drico-dev", icon: GithubIcon },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/ange-cedric-n-goran-374236404", icon: LinkedinIcon },
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/2250140586440", icon: WhatsappIcon },
  { id: "email", label: "Email", href: "mailto:angecedric766@gmail.com", icon: Mail },
];

/* ------------------------------------------------------------------ */
/*  Navigation                                                        */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { id: "accueil", label: "Accueil", href: "#accueil" },
  { id: "a-propos", label: "À propos", href: "#a-propos" },
  { id: "competences", label: "Compétences", href: "#competences" },
  { id: "services", label: "Services", href: "#services" },
  { id: "projets", label: "Réalisations", href: "#projets" },
  { id: "contact", label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/*  À propos — statistiques                                           */
/* ------------------------------------------------------------------ */

export const stats = [
  { id: "projets", value: "4+", label: "Projets livrés" },
  { id: "clients", value: "5+", label: "Clients accompagnés" },
  { id: "stack", value: "100%", label: "Code sur mesure" },
  { id: "reponse", value: "< 24h", label: "Temps de réponse" },
];

/* ------------------------------------------------------------------ */
/*  Compétences (regroupées par catégorie)                            */
/* ------------------------------------------------------------------ */

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Motion (animations)", "HTML5 / CSS3"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "API REST", "Architecture temps réel (Socket.io)"],
  },
  {
    id: "donnees",
    title: "Bases de données",
    icon: Database,
    skills: ["PostgreSQL", "Supabase", "Firebase"],
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Design d'interfaces mobile", "Applications hybrides"],
  },
  {
    id: "design",
    title: "Design & Identité",
    icon: Palette,
    skills: ["UI Design", "Identité visuelle / logo", "Figma", "Design system"],
  },
  {
    id: "outils",
    title: "Outils",
    icon: Wrench,
    skills: ["Git / GitHub", "Vite", "Vercel / Netlify", "Responsive & accessibilité"],
  },
];

/* ------------------------------------------------------------------ */
/*  Services proposés                                                 */
/* ------------------------------------------------------------------ */

export const services = [
  {
    id: "site-vitrine",
    icon: Globe,
    title: "Sites vitrines & e-commerce",
    description:
      "Sites modernes, rapides et responsives pour présenter une activité et convertir les visiteurs en clients.",
  },
  {
    id: "app-sur-mesure",
    icon: Braces,
    title: "Applications web sur mesure",
    description:
      "Outils métier, tableaux de bord et systèmes de gestion en temps réel adaptés à un besoin précis.",
  },
  {
    id: "mobile",
    icon: MonitorSmartphone,
    title: "Applications mobiles",
    description:
      "Interfaces mobiles fluides et cohérentes, pensées pour l'usage réel de vos utilisateurs.",
  },
  {
    id: "identite",
    icon: PenTool,
    title: "Identité visuelle",
    description:
      "Logos et éléments de marque cohérents avec le positionnement de votre entreprise.",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & évolutions",
    description:
      "Suivi, corrections et ajout de nouvelles fonctionnalités après la mise en ligne.",
  },
  {
    id: "conseil",
    icon: Rocket,
    title: "Conseil technique",
    description:
      "Choix d'architecture et de stack technique adaptés à la taille réelle du projet.",
  },
];

/* ------------------------------------------------------------------ */
/*  Réalisations / Projets                                            */
/*  category sert au filtrage dans la section "Réalisations"          */
/* ------------------------------------------------------------------ */

export const projectCategories = ["Tous", "Sites vitrines", "Applications", "Identité visuelle"];

export const projects = [
  {
    id: "lulu-restaurant-site",
    title: "LULU Restaurant — Site vitrine",
    category: "Sites vitrines",
    description:
      "Site vitrine haut de gamme pour un restaurant de cuisine contemporaine : menu filtrable par catégorie, galerie, réservation en ligne et call-to-action WhatsApp direct.",
    stack: ["React", "Tailwind CSS", "DaisyUI","JavaScript"],
    image: "/assets/projects/lulu-restaurant.png",
    links: { demo: "", code: "" },
    featured: true,
  },
 
  
  {
    id: "site-agence-web",
    title: "Site vitrine — Activité freelance",
    category: "Sites vitrines",
    description:
      "Site premium pour présenter une offre de développement web freelance : formules tarifaires, processus en 4 étapes, réalisations et prise de contact via WhatsApp.",
    stack: ["React", "Tailwind CSS", "Vite", "JavaScript"],
    image: "/assets/projects/site-agence.png", 
    links: { demo: "", code: "https://github.com/drico-dev/Site-vitrine-Drico-dev" },
    featured: false,
  },
  
  {
    id: "site vitrine agence forestière",
    title: "AGENCE FORESTIÈRE — Site vitrine",
    category: "Sites vitrines",
    description:
      "Site de présentation pour une agence forestière, avec un design éco-responsable et une navigation intuitive.",
    stack: ["React", "Tailwind CSS", "Vite", "JavaScript"],
    image: "/assets/projects/agence-forestiere.png",
    links: { demo: "", code: "https://github.com/drico-dev/projet-site-f-ret" },
    featured: false,
  },
  {
    id: "Portfolio Drico-dev",
    title: "Portfolio Drico-dev — Site vitrine",
    category: "Sites vitrines",
    description:
      "Application web de gestion d'affectation de logements, avec tableau de bord temps réel pour suivre chaque affectation de la réception à l'affectation.",
    stack: ["HTML", "CSS", "PHP", "MySQL"],
    image: "/assets/projects/portfolio.png",
    links: { demo: "", code: "" },
    featured: false,
  },
  
];

/* ------------------------------------------------------------------ */
/*  Contact                                                            */
/* ------------------------------------------------------------------ */

export const contactMethods = [
  { id: "email", icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { id: "phone", icon: Phone, label: "Téléphone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s+/g, "")}` },
  { id: "location", icon: MapPin, label: "Localisation", value: personalInfo.location, href: "" },
  { id: "whatsapp", icon: MessageCircle, label: "WhatsApp", value: "Discuter d'un projet", href: "https://wa.me/2250140586440" },
];

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

export const footerLinks = navLinks;
