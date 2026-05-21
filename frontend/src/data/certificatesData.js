/**
 * CERTIFICATES — edit everything here.
 *
 * Image files live in: frontend/src/assets/images/certificates/
 * Import paths must match the exact filename (including .png, .jpg, .jpeg).
 */

import freecodecampCert from '../assets/images/certificates/freecodecamp.png';
import nptelCert from '../assets/images/certificates/java.jpg';
import mernCert from '../assets/images/certificates/mern.jpeg';
import reactCert from '../assets/images/certificates/react.jpeg';

const normalizeCertSlug = (value = "") =>
  decodeURIComponent(value).trim().toLowerCase().replace(/\s+/g, "-");

export const CERTIFICATES_DATABASE = {
  "Cert-One": {
    slug: "freecodecamp-javascript",
    aliases: ["freecodecamp-javascript", "freeCodeCamp-javaScript"],
    title: "freeCodeCamp JavaScript",
    institution: "freeCodeCamp",
    date: "February 2026",
    duration: "300+ hours",
    description: "JavaScript algorithms and data structures certification.",
    skills: ["JavaScript"],
    verifyUrl:
      "https://www.freecodecamp.org/certification/sureshkumar23800/javascript-v9",
    image: freecodecampCert,
  },
  "Cert-Two": {
    slug: "nptel-java",
    aliases: ["nptel java"],
    title: "Programming in Java",
    institution: "NPTEL / IIT",
    date: "April 2024",
    duration: "12 weeks",
    description:
      "Introduction to Java programming, OOP concepts, collections, and problem-solving for engineering applications.",
    skills: ["Java", "OOP", "Data Structures", "Problem Solving"],
    verifyUrl:
      "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS43S96110017030757268",
    image: nptelCert,
  },
  "Cert-Three": {
    slug: "mern-stack-iyal-learning",
    aliases: ["MERN", "MERN Stack"],
    title: "MERN Stack Internship",
    institution: "Iyal Learn, Madurai",
    date: "September 2024",
    duration: "19th August 2024 - 24th August 2024",
    description:
      "Successfully completed a 6-day internship in MERN Stack at Iyal Learn, Madurai. Gained hands-on experience in full-stack web development including MongoDB, Express.js, React.js, and Node.js while building modern web applications and improving problem-solving skills.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Full Stack Development",
      "REST API",
    ],
    certificateNo: "IL2089",
    issueDate: "23-Sep-2024",
    image: mernCert,
  },
  "Cert-Four": {
    slug: "react-js",
    aliases: ["React JS", "React"],
    title: "React JS Course",
    institution: "iSquare Academy",
    date: "March 2025",
    duration: "Jan 2025 - Feb 2025",
    description:
      "Successfully completed the React JS course at iSquare Academy with hands-on experience in building modern user interfaces, reusable components, routing, and state management concepts.",
    skills: ["React JS", "Components", "React Router", "Hooks", "Frontend Development"],
    grade: "A",
    issueDate: "03-03-2025",
    image: reactCert,
  },
};

export const getCertificateByRouteParam = (routeParam) => {
  if (!routeParam) return null;

  const decoded = decodeURIComponent(routeParam);
  if (CERTIFICATES_DATABASE[decoded]) {
    return { key: decoded, certificate: CERTIFICATES_DATABASE[decoded] };
  }

  const normalized = normalizeCertSlug(routeParam);

  for (const [key, certificate] of Object.entries(CERTIFICATES_DATABASE)) {
    const slug = certificate.slug || key;
    const candidates = [key, slug, certificate.title, ...(certificate.aliases || [])].map(
      normalizeCertSlug
    );

    if (candidates.includes(normalized)) {
      return { key, certificate };
    }
  }

  return null;
};
