import Header from "@/components/common/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen min-w-screen overflow-x-hidden">
      {/* <Sidebar /> */}
      <Header />
      <section className=" w-full px-2 md:px-3 lg:px-5 pb-5">
        {children}
      </section>
    </main>
  );
}
