"use client";

import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#001E21] text-white py-16 px-8 border-t border-white/5">
            <div className="max-w-container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <a href="/" className="inline-block">
                            <img src="/logo.png" alt="MyShopify Agency" className="h-9 w-auto brightness-0 invert" />
                        </a>
                        <p className="text-slate-400 text-[15px] leading-relaxed max-w-xs">
                            Elite Shopify development agency helping ambitious brands scale through technical excellence and data-driven design.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#CAF389] hover:border-[#CAF389] hover:text-[#013D44] transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[17px] font-bold mb-6 text-[#CAF389]">Solutions</h4>
                        <ul className="space-y-4">
                            {['Store Setup', 'Custom Theme', 'App Integration', 'Speed Optimization', 'Migration'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-slate-400 hover:text-white transition-colors text-[15px]">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-[17px] font-bold mb-6 text-[#CAF389]">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Our Work', 'Process', 'Testimonials', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-slate-400 hover:text-white transition-colors text-[15px]">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[17px] font-bold mb-6 text-[#CAF389]">Get in Touch</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <Mail className="shrink-0 text-[#CAF389]" size={20} />
                                <span className="text-slate-400 text-[15px]">hello@myshopifyagency.com</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <Phone className="shrink-0 text-[#CAF389]" size={20} />
                                <span className="text-slate-400 text-[15px]">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <MapPin className="shrink-0 text-[#CAF389]" size={20} />
                                <span className="text-slate-400 text-[15px]">123 Commerce Way, Digital Suite 404, San Francisco, CA</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-[14px]">
                        © {currentYear} MyShopify Agency. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-slate-500 text-[14px]">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
