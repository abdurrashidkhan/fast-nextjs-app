"use client"
import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error.message)
  }, [error])
  console.log(error.message)
  return (
    <div>
      <h1>{error.message}</h1>
    </div>
  );
}

export default error;