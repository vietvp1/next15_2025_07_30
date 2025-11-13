export default async function Layout({
  abc,
  children,
}: Readonly<{
  abc: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <>
      test nested layout
      {abc}
      {children}
    </>
  );
}
