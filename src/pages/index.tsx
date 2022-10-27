import { GetServerSideProps } from 'next';
import Head from "next/head";
import Image from "next/image";

type HomeProps = {
  text: string;
}

export default function Home({ text }: HomeProps) {
  return (
    <div>
      <Head>
        <title>HOME</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{text}</h1>

      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx;
  console.log("params", params);

  return {
    props: {
      text: "Ola"
    }
  }
}