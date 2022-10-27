import { GetServerSideProps } from 'next';
import Head from "next/head";
import Image from "next/image";
import { Box, Button, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@shared/store';
import { counterAsync, decrementCounter } from '@shared/store/modules/Counter';

type HomeProps = {
  text: string;
}

export default function Home({ text }: HomeProps) {
  const { counterState: { counter, isLoading } } = useAppSelector();
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        // width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Head>
        <title>HOME</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        component={"main"}
        sx={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Box>
          <Typography>
            {text}
          </Typography>
          <Stack gap={"20px"} my={"20px"} justifyContent={"center"}>
            <Typography component={"span"}>Contador: {counter}</Typography>
            <Stack flexDirection={"row"} gap={"15px"}>
              <Button
                variant={"contained"}
                disabled={isLoading}
                onClick={() => dispatch(counterAsync(10))}
              >
                INCREMENTAR 10 ASYNC
              </Button>
              <Button
                variant={"contained"}
                disabled={isLoading}
                onClick={() => dispatch(decrementCounter(1))}
              >
                DECREMENTAR 1
              </Button>
            </Stack>
          </Stack>

        </Box>

      </Box>

      <Stack>
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
      </Stack>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params, query } = ctx;
  console.log("query", query);

  return {
    props: {
      text: `Ola ${query.name ?? "Brasileirinho"}`
    }
  }
}