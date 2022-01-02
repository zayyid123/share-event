import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    const { children } = props;
    return (
        <div>
            <Head>
                <title>SME - Share My Event</title>
                <link rel="shortcut icon" href="/logo/SME.png"></link>
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
