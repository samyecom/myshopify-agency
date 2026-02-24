import localFont from "next/font/local";
import "./globals.css";

const kanit = localFont({
    src: [
        {
            path: "../../public/fonts/kanit/Kanit-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/kanit/Kanit-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/kanit/Kanit-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/kanit/Kanit-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-kanit",
});

const openSans = localFont({
    src: [
        {
            path: "../../public/fonts/open sans/OpenSans-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/open sans/OpenSans-Semibold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/open sans/OpenSans-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-open-sans",
});

export const metadata = {
    title: "MyShopify Agency | Precision Shopify Engineering",
    description: "We build high-performance Shopify stores for brands that need precision engineering.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${kanit.variable} ${openSans.variable} font-sans`}>
                {children}
            </body>
        </html>
    );
}
