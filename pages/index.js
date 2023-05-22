import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <h1>This is Musafirana (a spotify 2.0)</h1>
    </div>
  );
}
