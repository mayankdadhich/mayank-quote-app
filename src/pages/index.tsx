import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
        <div className={styles.center}>
        <Image
            className={styles.logo}
            src="/pngegg.png"
            alt="quotes Logo"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className={styles.center}>
          <h1>Quotes, Dialogues And Proverbs!</h1>
        </div>
      </main>
    </>
  );
}
