import React from "react";

export const dynamic = "force-dynamic";

const Page = async () => {
  // const response = await fetch("http://localhost:8080/messages", {
  //   headers: {
  //     "x-id": "ssr",
  //   },
  // });
  return <div>ssr</div>;
};

export default Page;
