type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ variant: string }>;
};

export const revalidate = 10;

export async function generateStaticParams() {
  const response = await fetch("http://localhost:8080/messages");
  console.log("generateStaticParams111111111111");
  return [
    {
      slug: "product1",
    },
    {
      slug: "product2",
    },
    {
      slug: "product3",
    },
    {
      slug: "product4",
    },
    {
      slug: "product5",
    },
  ];
}

export default async function Product({ params }: Props) {
  const { slug } = await params;

  const response = await fetch("http://localhost:8080/messages");
  const messages = await response.json();
  console.log("content");

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {slug}
    </div>
  );
}
