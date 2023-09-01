import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function MainContainer({ children }: any) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>PokéNext</title>
            </Head>
            <Header />
            <main className="container">{children}</main>
            <Footer />
        </>
    );
}
