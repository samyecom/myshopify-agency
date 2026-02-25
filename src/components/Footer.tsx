"use client";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Case Studies', href: '#work' },
        { name: 'Process', href: '#process' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <footer className="w-full bg-[#013D44] text-white py-5 px-6 md:px-8">
            <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 text-center md:text-left">
                {/* Logo */}
                <a href="/" className="inline-block shrink-0">
                    <img src="/white-logo.png" alt="MyShopify Agency" className="h-10 md:h-12 w-auto" />
                </a>

                {/* Nav Links */}
                <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white/70 hover:text-[#CAF389] transition-colors text-[14px] font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Copyright */}
                <p className="text-white/50 text-[13px] shrink-0">
                    © {currentYear} MyShopify Agency. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

