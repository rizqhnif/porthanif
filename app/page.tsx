"use client";

import { useEffect, useState } from "react";
import ShinyText from "@/components/ShinyText";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import { motion, Variants } from "motion/react";

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const allProjects = [
    {
      title: 'Safe Shipping Services Website',
      description: 'Forwarder Website for safe shipping services.',
      image: '/forwarder-pic.png',
      tags: ['Website', 'Shipping', 'Forwarding'],
      link: 'https://forwarder-projects.vercel.app'
    },
    {
      title: 'Cyber Attack and Defense Simulation',
      description: 'Simulasi serang Cyber menggunakan javaFx dan memahami konsep algoritma BFS dan DFS.',
      image: '/cyber-pict.png',
      tags: ['Cybersecurity', 'Java', 'Algorithms'],
      link: 'https://github.com/rizqhnif/cyber-attack-defense-simulator'
    },
    {
      title: 'Google Cybersecurity Project - Coursera',
      description: 'Project pembelajaran dari Coursera Google Cybersecurity Professional Certificate.',
      image: '/gugel-cyber-pict.png',
      tags: ['Google', 'Cybersecurity', 'Learning Journeys'],
      link: 'https://github.com/rizqhnif/google-cybersecurity-portfolio'
    },
    {
      title: 'Podcast Video',
      description: 'Proyek podcast edukatif yang mengangkat isu stereotip Islam di TikTok untuk meningkatkan kesadaran akan pentingnya berpikir kritis terhadap konten media sosial.',
      tags: ['YouTube', 'CapCut', 'Education'],
      link: 'https://youtu.be/TswgKie_-_4?si=sfCzIXBkI-041WsA'
    },
    {
      title: 'Video Inforgafis Animasi',
      description: 'Proyek edukatif berupa video animasi yang mengangkat isu stereotip Islam di TikTok.',
      tags: ['Animation', 'CapCut', 'Education'],
      link : 'https://youtu.be/HhcY3ht6SIY?si=KibaCqUZlJh2fpWJ'
    }
  ];

  const getYouTubeThumbnail = (url?: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://img.youtube.com/vi/${match[2]}/hqdefault.jpg`;
    }
    return null;
  };

  const initialLimit = isMobile ? 3 : 4;
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, initialLimit);

  // Data Experience - Silakan ganti gambar, judul, dan deskripsi di sini
  const experiences = [
    {
      id: 1,
      title: "Pradita Future Expert",
      role: "Video Content Competition",
      thumbnail: "juara-rame.png",
      images: ["juara-rame.png", "/juara.png"], // Tambahkan banyak path gambar di sini
      description: "I have been exploring cybersecurity through platforms such as OverTheWire and CTF challenges to strengthen my understanding of Linux fundamentals, security concepts, and problem solving through hands-on practice."
    },
    {
      id: 2,
      title: "DIGIFEST 2025",
      role: "Pemkot Tangerang",
      thumbnail: "/digifest-1.png",
      images: ["/digifest-1.png", "/digifest-2.png", "/digifest-3.png"], // Tambahkan banyak path gambar di sini
      description: "Digifest 2025 adalah bagian dari Cisadane Digital Festival 2025, festival tahunan kolaboratif yang diselenggarakan oleh Pemerintah Kota Tangerang.  Acara ini menggabungkan budaya tradisional dan inovasi digital di sepanjang bantaran Sungai Cisadane dengan tema 'Celebrating The River, Flowing The Future'.  Digifest hadir sebagai wadah bagi pelaku industri digital, UMKM, dan masyarakat untuk mengeksplorasi teknologi, kreativitas, dan hiburan. Pada festival ini kami ber-4 diajak dosen untuk meenjaga stand da"
    },
    {
      id: 3,
      title: "INDOCOMTECH",
      role: "Pemeran Teknologi",
      thumbnail: "/komtek-1.png",
      images: ["/komtek-1.png", "/komtek-3.png", "/komtek-2.png"], // Tambahkan banyak path gambar di sini
      description: "Indocomtech 2025 adalah pameran teknologi konsumen terbesar di Indonesia yang diselenggarakan oleh Yayasan Apkomindo Indonesia (YAI) bersama Satue Event. Acara ini menampilkan berbagai produk dan inovasi teknologi terbaru dari berbagai perusahaan terkemuka di industri teknologi, termasuk perangkat elektronik, gadget, perangkat lunak, dan solusi teknologi lainnya. Pada festival ini saya dan kelompok saya jadi mendapatkan ilmu baru tentang teknologi terbaru, tren industri, dan peluang kolaborasi dengan para profesional di bidang teknologi."
    },
    {
      id: 4,
      title: "bluAmbassador",
      role: "BCA Digital",
      thumbnail: "/bluAmbassador.png",
      images: ["/bluAmbassador.png", "/bluAmbassador-2.png"], // Tambahkan banyak path gambar di sini
      description: "bluAmbassador merupakan program brand ambassador mahasiswa dari blu by BCA Digital yang berfokus pada pengembangan keterampilan komunikasi, personal branding, dan content creation melalui berbagai aktivitas kampanye digital serta promosi layanan perbankan digital kepada mahasiswa."
    }
  ];

  // Animation variants for Apple-like reveal
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.2, 0, 0.2, 1] }
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (menuOpen) return;
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <main className="portfolio-page">    
      {/* NAVBAR CONTAINER */}
      <nav className={`nav-container ${showNavbar ? "show-nav" : "hide-nav"}`}>
        <div className="nav-content">
          <div className="nav-logo">
            <a href="#hero">Rizqhnif</a>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Experience</a>
            <a href="#project">Project</a>
            <a href="#contact">Contact</a>
          </div>
          <button 
            className="hamburger-btn"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
            aria-expanded={menuOpen}
            aria-label="Toggle mobile menu"
          >
            <span className="hamburger-bar bar-1"></span>
            <span className="hamburger-bar bar-2"></span>
            <span className="hamburger-bar bar-3"></span>
          </button>
        </div>
      </nav>

      {/* OVERLAY MENU MOBILE */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} id="mobile-menu" onClick={() => setMenuOpen(false)}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#project" onClick={() => setMenuOpen(false)}>Project</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>

      {/* SEKSI HERO */}
      <section className="hero" id="hero">
        <div className="hero-stack">
          <img
            className="hero-portrait"
            src="/hanif.svg"
            alt="Portrait of Hanif"
            width={435}
            height={653}
            loading="eager"
          />
        </div>

        <div className="namaku">
          <h1 className="namaku-title">
            <ShinyText text="Hello, I'm Hanif!" />
          </h1>
          <p className="namaku-role">Cybersecurity Learner & Digital Creator</p>
        </div>
      </section>

      {/* SEKSI ABOUT */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-visual">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="about-image-wrapper"
            >
              <img src="/hanif-about.png" alt="Hanif" className="about-img" />
              <div className="about-status-tag">
                <span className="status-dot"></span>
                Open for Collaboration
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="about-mini-card"
            >
              <h4>Tech Stack</h4>
              <div className="tech-tags">
                <span>Linux</span>
                <span>Next.js</span>
                <span>Cyber Security</span>
                <span>React</span>
                <span>Python</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>Git</span>
              </div>
            </motion.div>
          </div>

          <div className="about-content">
            <span className="about-kicker">About</span>
            <h2 className="about-title">About Me</h2>
            <div className="about-divider" aria-hidden="true"></div>
            <div className="about-text">
              <ScrollReveal 
                baseOpacity={0.2} 
                enableBlur 
                blurStrength={10}
                textClassName="text-base tracking-tight md:text-lg md:tracking-wide"
              >
                Welcome to my personal website! I&apos;m Muhammad Rizqi Hanif, an IT student dedicated to continuous learning, structured problem-solving, and digital innovation. My tech journey started with a fascination for UI/UX, but as I explored deeper, I found my true passion in Cybersecurity. I love the challenge of dissecting complex systems, understanding how they function under the hood, and learning how to keep them secure. Currently, I am actively sharpening my knowledge through cybersecurity professional courses on Coursera. Whenever I encounter complex bugs or get stuck on a technical roadblock, my immediate instinct is to research deeply, leverage AI tools responsibly, and experiment until the problem is solved.
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SEKSI EXPERIENCE */}
      <section className="experience-section" id="work">
        <div className="experience-shell">
          <div className="experience-intro">
            <span className="experience-kicker">Experience</span>
            <h2 className="experience-title">Experience</h2>
            <p className="experience-summary">
              Highlights of collaborations, competitions, and showcases where I sharpened my digital craft.
            </p>
          </div>
          <div className="experience-list">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="experience-card">
                      <img src={exp.thumbnail} alt={exp.title} className="experience-logo" />
                      <div className="experience-info">
                        <h3>{exp.title}</h3>
                        <p>{exp.role}</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="experience-dialog">
                    <div className="dialog-carousel-container">
                      <div className="dialog-carousel">
                        {exp.images.map((img, idx) => (
                          <img key={idx} src={img} alt={`${exp.title} ${idx}`} className="dialog-image" />
                        ))}
                      </div>
                      {exp.images.length > 1 && (
                        <div className="carousel-indicator">
                          <span>&rsaquo; swipe to see more</span>
                        </div>
                      )}
                    </div>
                    <DialogHeader>
                      <DialogTitle className="dialog-title">
                        {exp.title}
                      </DialogTitle>
                      <DialogDescription className="dialog-description">
                        {exp.description}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* SEKSI PROJECT */}
      <section className="project-section" id="project">
        <h2 className="experience-title">Selected Projects</h2>
        
        <div className="new-projects-grid">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className="new-project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="new-project-image-container">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="new-project-img" />
                ) : getYouTubeThumbnail(project.link) ? (
                  <img src={getYouTubeThumbnail(project.link)!} alt={project.title} className="new-project-img" />
                ) : (
                  <div className="new-project-placeholder">
                    <span>Project {idx + 1}</span>
                  </div>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="new-project-link-overlay">
                    View Project ↗
                  </a>
                )}
              </div>
              <div className="new-project-info">
                <div className="new-project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="new-project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="new-project-title">{project.title}</h3>
                <p className="new-project-desc">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && allProjects.length > initialLimit && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-transparent border border-white/20 hover:border-white/50 rounded-full text-white transition-all cursor-pointer font-medium"
            >
              More Projects
            </button>
          </div>
        )}
      </section>

      {/* CONTACT SECTION */}
      <section className="experience-section" id="contact">
        <h2 className="experience-title">Get in Touch</h2>
        <div className="text-center">
          <p className="text-xl text-gray-400 mb-8">Yuk mutualan LinkedIn!</p>
          <a href="https://www.linkedin.com/in/muhammad-rizqi-hanif-8524a7346/" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
            Connect on LinkedIn
          </a>
        </div>
      </section>

    </main>
  );
}
