import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaWallet, FaTimes } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from '../../hooks/useTranslation';
import useHoverSound from '../../hooks/useHoverSound';
import './ConnectWalletModal.css';

const ConnectWalletModal = ({ isOpen, onClose }) => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();
  const { playHoverSound, playClickSound } = useHoverSound();
  const [isLoading, setIsLoading] = useState(false);

  const handleWalletConnect = async (walletType) => {
    playClickSound();
    setIsLoading(true);
    
    // Show loading toast
    toast.loading('Loading...', {
      id: 'wallet-loading',
      position: 'top-right',
      style: {
        background: isDarkMode ? '#000' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#000000',
        border: `1px solid ${isDarkMode ? '#333' : '#ddd'}`,
      },
    });

    // Wait for 5 seconds
    setTimeout(() => {
      // Dismiss loading toast
      toast.dismiss('wallet-loading');
      
      // Show red error toast
      toast.error('Wait until wallets got set', {
        position: 'top-right',
        duration: 4000,
        style: {
          background: '#dc3545',
          color: '#ffffff',
          border: '1px solid #dc3545',
        },
        iconTheme: {
          primary: '#ffffff',
          secondary: '#dc3545',
        },
      });
      
      setIsLoading(false);
      onClose();
    }, 5000);
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className={`modal-content ${isDarkMode ? 'dark' : 'light'}`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="modal-header">
              <h2 className="modal-title">Connect Wallet</h2>
              <button
                className="close-button"
                onClick={onClose}
                onMouseEnter={playHoverSound}
                disabled={isLoading}
              >
                <FaTimes />
              </button>
            </div>

            {/* Content */}
            <div className="modal-body">
              <p className="modal-description">
                Choose your preferred wallet to connect
              </p>
              
              <div className="wallet-options">
                {/* Twitter Wallet */}
                <motion.button
                  className={`wallet-button twitter ${isLoading ? 'disabled' : ''}`}
                  onClick={() => handleWalletConnect('twitter')}
                  onMouseEnter={playHoverSound}
                  disabled={isLoading}
                  whileHover={!isLoading ? { scale: 1.02 } : {}}
                  whileTap={!isLoading ? { scale: 0.98 } : {}}
                >
                  <div className="wallet-icon">
                    <FaTwitter />
                  </div>
                  <div className="wallet-info">
                    <span className="wallet-name">Twitter</span>
                    <span className="wallet-description">Connect via Twitter</span>
                  </div>
                </motion.button>

                {/* BNB Wallet */}
                <motion.button
                  className={`wallet-button bnb ${isLoading ? 'disabled' : ''}`}
                  onClick={() => handleWalletConnect('bnb')}
                  onMouseEnter={playHoverSound}
                  disabled={isLoading}
                  whileHover={!isLoading ? { scale: 1.02 } : {}}
                  whileTap={!isLoading ? { scale: 0.98 } : {}}
                >
                  <div className="wallet-icon">
                    <FaWallet />
                  </div>
                  <div className="wallet-info">
                    <span className="wallet-name">BNB Wallet</span>
                    <span className="wallet-description">Connect BNB Smart Chain wallet</span>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConnectWalletModal;

