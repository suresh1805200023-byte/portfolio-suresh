import freelanceImg1 from '../assets/images/imagesproj1/1.png';
import freelanceImg2 from '../assets/images/imagesproj1/2.png';
import freelanceImg3 from '../assets/images/imagesproj1/3.png';
import freelanceImg4 from '../assets/images/imagesproj1/5.png';

import freelanceImg11 from '../assets/images/imagesproj2/1.png';
import freelanceImg12 from '../assets/images/imagesproj2/2.png';
import freelanceImg13 from '../assets/images/imagesproj2/3.png';
import freelanceImg14 from '../assets/images/imagesproj2/4.png';

import freelanceImg21 from '../assets/images/imagesproj3/1.png';
import freelanceImg22 from '../assets/images/imagesproj3/2.png';
import freelanceImg23 from '../assets/images/imagesproj3/3.png';
import freelanceImg24 from '../assets/images/imagesproj3/4.png';

const normalizeProjectSlug = (value = "") =>
  decodeURIComponent(value).trim().toLowerCase().replace(/\s+/g, "-");

export const PROJECTS_DATABASE = {
  "Project-One": {
    slug: "freelance-website-mern",
    aliases: ["freelance-website MERN", "freelance-website mern"],
    name: "FreelanceHub",
    tagline: "Full-Stack Freelancing & Task Management Engine",
    description:
      "FreelanceHub is a full-stack freelancing platform where clients can post projects, hire freelancers, and manage tasks. Freelancers can create profiles, showcase their skills, bid on projects, and get paid securely.",
    features: [
      "User authentication (Client & Freelancer)",
      "Post and browse projects",
      "Bid on projects & hire freelancers",
      "Real-time chat",
      "Secure payments integration",
      "Review and rating system",
      "Responsive design",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.io"],
    liveDemo: "https://dashboard.render.com/static/srv-d80e4bnaqgkc73a2bf0g",
    github: "https://github.com/suresh1805200023-byte/imagesproj1-Mern-stack",
    screenshots: [freelanceImg1, freelanceImg2, freelanceImg3, freelanceImg4],
  },
  "Project-Two": {
    slug: "learning-management-system-mern",
    aliases: ["mern stack lms", "project-two"],
    name: "Project Two Engine",
    tagline: "Your Gateway to Online Education.",
    description:
      "Built a full-stack Learning Management System using the MERN Stack with secure authentication, course management, video learning, payment integration, and admin dashboard features.",
    features: [
      "User Authentication & Authorization (JWT)",
      "Student & Admin Dashboard",
      "Course Creation & Management",
      "Video Lesson Upload & Streaming",
      "Course Enrollment System",
      "Shopping Cart & Checkout",
      "Secure Payment Integration",
      "Progress Tracking System",
      "Wishlist / Favorite Courses",
      "Search & Filter Courses",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.io"],
    liveDemo: "https://mern-project-frontend-ltty.onrender.com/",
    github: "https://github.com/suresh1805200023-byte/Learning-Management-System-Mern-stack",
    screenshots: [freelanceImg11, freelanceImg12, freelanceImg13, freelanceImg14],
  },
  "Project-Three": {
    slug: "food-ordering-app",
    aliases: ["project-three"],
    name: "Food Ordering App",
    tagline: "Real-time SaaS Data & Monitoring Dashboard",
    description:
      "A centralized real-time business metrics engine specializing in tracking high-volume event processing, live transactional charting, and automated error alerting frameworks.",
    features: [
      "Real-time analytics streams with high-frequency rendering",
      "Customizable widget layouts using grid configurations",
      "Exportable reporting engine (PDF, CSV, and Raw JSON formats)",
      "Webhooks administration pane with secret key signing systems",
      "Dark-mode optimized UI minimizing client rendering costs",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Chart.js"],
    liveDemo: "https://example.com",
    github: "https://github.com",
    screenshots: [freelanceImg21, freelanceImg22, freelanceImg23, freelanceImg24],
  },
};

export const getProjectByRouteParam = (routeParam) => {
  if (!routeParam) return null;

  const decoded = decodeURIComponent(routeParam);
  if (PROJECTS_DATABASE[decoded]) {
    return { key: decoded, project: PROJECTS_DATABASE[decoded] };
  }

  const normalized = normalizeProjectSlug(routeParam);

  for (const [key, project] of Object.entries(PROJECTS_DATABASE)) {
    const slug = project.slug || key;
    const candidates = [key, slug, project.name, ...(project.aliases || [])].map(
      normalizeProjectSlug
    );

    if (candidates.includes(normalized)) {
      return { key, project };
    }
  }

  return null;
};
