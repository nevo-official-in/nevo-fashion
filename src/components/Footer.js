import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold tracking-tighter mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
              data-testid="footer-brand"
            >
              NEVO THREADS
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Weaving the Future of Fashion
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm uppercase tracking-widest mb-4 text-white/80"
              data-testid="footer-links-title"
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-collection"
                >
                  Collection
                </a>
              </li>
              <li>
                <a
                  href="#lookbook"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-lookbook"
                >
                  Lookbook
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-sm uppercase tracking-widest mb-4 text-white/80"
              data-testid="footer-legal-title"
            >
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-privacy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-terms"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-returns"
                >
                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-white/40 text-sm" data-testid="footer-copyright">
            © {currentYear} NOVA THREADS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;