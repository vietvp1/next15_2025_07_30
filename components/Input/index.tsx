"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const Input = () => {
  const inputRef = useRef<any>(null);
  const router = useRouter();
  return (
    <div>
      <input ref={inputRef} className="border"></input>
      <button
        className="border"
        onClick={() => {
          router.push(`/test-loading/${inputRef.current?.value || ""}`);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Input;
