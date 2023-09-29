import Link from "next/link";

import { getCategories } from "@/actions/get-categories";

import { MainNav } from "@/components/main-nav";
import { NavbarActions } from "@/components/navbar-actions";
import { Container } from "@/components/ui/container";

export const revalidate = 0;

export const Navbar = async () => {
    const categories = await getCategories();

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link className="ml-4 flex lg:ml-0 gap-x-2" href="/">
                        <p className="text-xl font-bold">E-Commerce Store</p>
                    </Link>

                    <MainNav data={categories} />

                    <NavbarActions />
                </div>
            </Container>
        </div>
    );
};
