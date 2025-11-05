export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (Math.random() > 0.5) {
    throw new Error("Server Component failed");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Server Data Fetched Successfully</h2>
      <p>Reload the page to see Random Error</p>
    </div>
  );
}
