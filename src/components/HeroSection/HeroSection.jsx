import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import "./HeroSection.css";
import { FaTwitter, FaBolt, FaShieldAlt, FaGlobe, FaCoins } from "react-icons/fa";
import { RiLink } from "react-icons/ri";
import { LuCopy } from "react-icons/lu";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "../../hooks/useTranslation";
import useHoverSound from "../../hooks/useHoverSound";
import GlitchText from "../GlitchText";
import ConnectWalletModal from "../ConnectWalletModal";

function HeroSection() {
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";
  const { t } = useTranslation();
  const { playHoverSound, playClickSound } = useHoverSound();
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const heroRef = useRef(null);

  const handleCopy = () => {
    playClickSound();
    navigator.clipboard.writeText(contractAddress);
    toast.success(t("hero.contractCopied"), {
      position: "top-right",
      style: {
        background: "#000",
        color: "#14F195",
        border: "1px solid #14F195",
      },
      iconTheme: {
        primary: "#14F195",
        secondary: "#000",
      },
    });
  };

  // ---- 3D Mouse Parallax Logic ----
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    
    // 3D rotation based on mouse position
    rotateX.set((mouseY / rect.height) * -10);
    rotateY.set((mouseX / rect.width) * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setHovered(false);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      className="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <Toaster />

      {/* 3D Background Elements */}
      <div className="hero-3d-bg">
        <motion.div 
          className="floating-cube cube-1"
          animate={{
            y: [0, -20, 0],
            rotateX: [0, 5, 0],
            rotateY: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="floating-cube cube-2"
          animate={{
            y: [0, 30, 0],
            rotateX: [0, -5, 0],
            rotateY: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="floating-cube cube-3"
          animate={{
            y: [0, -15, 0],
            rotateX: [0, 8, 0],
            rotateY: [0, -8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Live Badge with 3D effect */}
      <motion.div 
        className="live-badge-3d"
        initial={{ opacity: 0, y: -20, rotateX: -90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.span
          className="dot-3d"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1, 0.6, 1],
            boxShadow: [
              "0 0 10px rgba(20, 241, 149, 0.5), inset 0 0 20px rgba(20, 241, 149, 0.3)",
              "0 0 25px rgba(20, 241, 149, 1), inset 0 0 30px rgba(20, 241, 149, 0.5)",
              "0 0 10px rgba(20, 241, 149, 0.5), inset 0 0 20px rgba(20, 241, 149, 0.3)",
            ],
          }}
          transition={{ duration: 1.2, repeat: Infinity }}
        ></motion.span>
        {t("hero.liveNow")}
      </motion.div>

      {/* 3D Title Container */}
      <motion.div
        className="hero-title-container-3d"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 0.8, z: -100 }}
        animate={{ opacity: 1, scale: 1, z: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h1
          className="hero-title-3d"
          style={{
            transform: "translateZ(50px)",
          }}
        >
          {t("hero.title")}{" "}
          <motion.span 
            className="highlight-3d"
            style={{
              transform: "translateZ(80px)",
              display: "inline-block",
            }}
            whileHover={{ 
              scale: 1.1,
              rotateY: 5,
              rotateX: 5,
            }}
          >
            <GlitchText className="highlight">
              {t("hero.titleHighlight")}
            </GlitchText>
          </motion.span>
        </motion.h1>
      </motion.div>

      {/* 3D Subtitle */}
      <motion.p
        className="hero-subtitle-3d"
        initial={{ opacity: 0, y: 20, z: -50 }}
        animate={{ opacity: 1, y: 0, z: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          transform: "translateZ(30px)",
        }}
      >
        {t("hero.subtitle")}
      </motion.p>

      <motion.div
        className="button-group"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        
       
       
      </motion.div>

      {/* 3D Features */}
      <motion.div
        className="features-3d"
        initial="hidden"
        animate="visible"
        variants={container}
        style={{
          transform: "translateZ(20px)",
        }}
      >
        {[
          { icon: <FaShieldAlt />, text: t("hero.onChainVerified") },
          { icon: <FaGlobe />, text: t("hero.allTimesET") },
        ].map((feature, i) => (
          <motion.div
            key={i}
            className="feature-card-3d"
            variants={item}
            whileHover={{
              scale: 1.1,
              rotateY: 5,
              z: 30,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <span className="feature-icon-3d">{feature.icon}</span>
            <span className="feature-text-3d">{feature.text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* 3D Footer */}
      <motion.div
        className="footer-3d"
        initial={{ opacity: 0, y: 40, z: -50 }}
        whileInView={{ opacity: 1, y: 0, z: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        style={{
          transform: "translateZ(10px)",
        }}
      >
        <motion.p
          whileHover={{ scale: 1.05 }}
        >
          <FaCoins /> {t("hero.followTwitter")}{" "}
          <span className="footer-highlight">{t("hero.followHandle")}</span> {t("hero.followOnX")}
        </motion.p>
        <motion.div 
          className="contract-3d"
          whileHover={{ scale: 1.02 }}
        >
          <p>{t("hero.contractAddress")}</p>
          <motion.div 
            className="address-box-3d"
            whileHover={{
              scale: 1.05,
              rotateY: 2,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {contractAddress}
            <motion.button 
              className="copy-btn-3d" 
              onClick={handleCopy}
              onMouseEnter={playHoverSound}
              whileHover={{
                scale: 1.2,
                rotateZ: 90,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <LuCopy />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Connect Wallet Modal */}
      <ConnectWalletModal 
        isOpen={isWalletModalOpen} 
        onClose={() => setIsWalletModalOpen(false)} 
      />
    </section>
  );
}

export default HeroSection;
