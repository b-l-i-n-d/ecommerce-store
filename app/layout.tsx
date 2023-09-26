import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "E-Commerce Store",
    description: "A simple e-commerce store built with Next.js and Vercel.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={urbanist.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
