import { Navbar } from "flowbite-react"
import React from "react"
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Nav() {
    const { user } = useUser();
    if (!user) {
        return (
            <Navbar
        fluid={true}
        rounded={true}
        >
        <Navbar.Brand>
            <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
            </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link
            href="#"
            active={true}
            >
            Home
            </Navbar.Link>
            <Navbar.Link href="#">
            Services
            </Navbar.Link>
            <Navbar.Link href="/api/auth/login">
            Login
            </Navbar.Link>
            <Navbar.Link href="/api/auth/login">
            Sign-up
            </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
        )
    }
    return (
        user && (
        <Navbar
        fluid={true}
        rounded={true}
        >
        <Navbar.Brand>
            <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
            </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link
            href="#"
            active={true}
            >
            Home
            </Navbar.Link>
            <Navbar.Link href="#">
            Services
            </Navbar.Link>
            <Navbar.Link href="/api/auth/logout">
            Logout
            </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
    )
    )
}