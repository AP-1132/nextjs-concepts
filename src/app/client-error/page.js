"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      if (Math.random() > 0.5) {
        setError(new Error("Client Component Failed")); /// triggers error.js
      } else {
        setData("Data Fetched Succsessfully");
      }

      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  // show loading while fetching
  if (loading)
    return (
      <div style={{ padding: "20px", color: "grey" }}>
        <h3>Client Component is loading...</h3>
      </div>
    );
  // throw error to trigger error.js
  if (error) throw error;

  //"Show fetched data"
  return (
    <div style={{ padding: "20px" }}>
      <d2>{data}</d2>
      <p>Click try again in error page to retry</p>
    </div>
  );
}
