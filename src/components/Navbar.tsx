"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from './ui/Button';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Case Studies', href: '#work' },
        { name: 'Process', href: '#process' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${isScrolled
                ? 'bg-[#002D31]/90 backdrop-blur-sm shadow-lg py-1 md:py-2'
                : 'bg-[#002D31]/60 backdrop-blur-sm py-2 md:py-3'
                }`}
        >
            <div className="max-w-container mx-auto px-4 md:px-8 flex items-center justify-between">
                <a href="/" className="flex items-center">
                    <img src="/white-logo.png" alt="MyShopify Agency" className="h-12 w-auto" />
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white hover:text-white font-heading font-regular transition-colors text-[13px] tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button
                        variant="primary"
                        href="#cta"
                        className="px-6 py-2 text-[14px] !bg-[#CAF389] !text-black border-none rounded-full font-bold transition-all"
                    >
                        Get Started
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-white/90 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#013D44] border-t border-white/5 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6 bg-[#013D44] border-t border-white/10 items-center text-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-white/90 hover:text-[#CAF389] transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button
                                variant="primary"
                                href="#cta"
                                className="w-full max-w-[200px] mt-2 py-3 text-[15px] !bg-[#CAF389] hover:bg-[#CAF389]/90 !text-[#013D44] border-none rounded-xl font-bold"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get Started
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
