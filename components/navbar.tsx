import Link from "next/link";

import { Container } from "@/components/ui/container";
import { MainNav } from "@/components/ui/main-nav";

export const Navbar = () => {
    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link className="ml-4 flex lg:ml-0 gap-x-2" href="/">
                        <p className="text-xl font-bold">E-Commerce Store</p>
                    </Link>

                    <MainNav />
                </div>
            </Container>
        </div>
    );
};
