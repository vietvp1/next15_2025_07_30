export default async function Home() {
  // const response = await fetch("http://localhost:8080/messages", {
  //   next: {
  //     revalidate: 15,
  //   },
  // });
  // const messages = await response.json();
  // console.log("2");

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      homepage
    </div>
  );
}
