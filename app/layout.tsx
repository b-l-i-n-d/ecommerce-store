import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

import { ModalProviders } from "@/providers/modal-providers";
import NProgressProviders from "@/providers/nprogress-provider";
import { Toaster } from "sonner";
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
                <NProgressProviders>
                    <ModalProviders />
                    <Toaster richColors />
                    <Navbar />
                    <div className="mt-10">{children}</div>
                    <Footer />
                </NProgressProviders>
            </body>
        </html>
    );
}
