"use client";

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: "20px", color: "crimson" }}>
      <h2>Server Error occured!!!</h2>
      <p>{error.message}</p>

      <button
        onClick={() => reset()}
        style={{
          padding: "10px 16px",
          background: "crimson",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Try Again
      </button>
    </div>
  );
}
