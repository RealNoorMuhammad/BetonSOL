import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaChartLine, FaTrophy, FaBookOpen, FaBars, FaCoins, FaPlus } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "../../hooks/useTranslation";
import useHoverSound from "../../hooks/useHoverSound";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const { playHoverSound, playClickSound } = useHoverSound();
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`navbar ${isDarkMode ? "dark" : "light"}`}>
      <div className="nav-left">
        <div 
          className="hamburger" 
          onClick={() => {
            playClickSound();
            toggleDrawer();
          }}
          onMouseEnter={playHoverSound}
        >
          <FaBars />
        </div>
        <Link to="/" className="logo-link">
          <h1 className="logo">
            Beton<span className="gold">SOL</span>
          </h1>
        </Link>
        

        <ul className="nav-links">
          <li onMouseEnter={playHoverSound}>
            <Link to="/live-bets">
              <FaChartLine /> {t('navbar.liveFeed')}
            </Link>
          </li>
          <li onMouseEnter={playHoverSound}>
            <Link to="/top-bettors">
              <FaTrophy /> {t('navbar.leaderboard')}
            </Link>
          </li>
          <li onMouseEnter={playHoverSound}>
            <Link to="/bnb-oracle">
              <FaCoins /> {t('navbar.oracle')}
            </Link>
          </li>
          <li onMouseEnter={playHoverSound}>
            <Link to="/how-to-bet">
              <FaBookOpen /> {t('navbar.howToBet')}
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-right">
        {/* ✅ Show theme toggle on desktop only */}
        {!isMobile && (
          isDarkMode ? (
            <MdLightMode 
              className="icon" 
              onClick={() => {
                playClickSound();
                toggleTheme();
              }}
              onMouseEnter={playHoverSound}
            />
          ) : (
            <MdDarkMode 
              className="icon" 
              onClick={() => {
                playClickSound();
                toggleTheme();
              }}
              onMouseEnter={playHoverSound}
            />
          )
        )}
        {!isMobile && <FaXTwitter className="icon" onMouseEnter={playHoverSound} />}
        <Link 
          to="/create-bet"
          className="create-bet-btn"
          onClick={playClickSound}
          onMouseEnter={playHoverSound}
        >
          <FaPlus className="create-bet-icon" />
          {t('navbar.connect')}
        </Link>
      </div>

      {/* 📱 Mobile Drawer */}
      <div className={`drawer ${drawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <div className="drawer-left">
            {isDarkMode ? (
              <MdLightMode 
                className="icon" 
                onClick={() => {
                  playClickSound();
                  toggleTheme();
                }}
                onMouseEnter={playHoverSound}
              />
            ) : (
              <MdDarkMode 
                className="icon" 
                onClick={() => {
                  playClickSound();
                  toggleTheme();
                }}
                onMouseEnter={playHoverSound}
              />
            )}
          </div>
          <IoClose 
            className="close-icon" 
            onClick={() => {
              playClickSound();
              toggleDrawer();
            }}
            onMouseEnter={playHoverSound}
          />
        </div>

        <ul className="drawer-links">
          <li onMouseEnter={playHoverSound}>
            <Link to="/live-bets" onClick={toggleDrawer}>
              <FaChartLine /> {t('navbar.liveFeed')}
            </Link>
          </li>
          <li onMouseEnter={playHoverSound}>
            <Link to="/top-bettors" onClick={toggleDrawer}>
              <FaTrophy /> {t('navbar.leaderboard')}
            </Link>
          </li>
          <li onMouseEnter={playHoverSound}>
            <Link to="/bnb-oracle" onClick={toggleDrawer}>
              <FaCoins /> {t('navbar.oracle')}
            </Link>
          </li>
          <li onMouseEnter={playHoverSound}>
            <Link to="/how-to-bet" onClick={toggleDrawer}>
              <FaBookOpen /> {t('navbar.howToBet')}
            </Link>
          </li>
        </ul>

        <div className="drawer-footer">
          <div className="drawer-divider"></div>
          <FaXTwitter 
            className="drawer-twitter" 
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
          />
        </div>
      </div>

      {/* Overlay */}
      {drawerOpen && <div className="overlay" onClick={toggleDrawer}></div>}
    </nav>
  );
};

export default Navbar;
