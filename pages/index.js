import Head from "next/head";

export default function Home() {
  return (
    <div className="app-container">
      <Head>
        <title>Kayan</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.2rem",
        }}
      >
        <h1 style={{ margin: "0" }}>Kayan</h1>
        <p>Coming soon....</p>
      </div>
    </div>
  );
}
