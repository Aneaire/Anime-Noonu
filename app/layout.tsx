import QueryProvider from "@/utils/react-query/QueryProvider";
import {
  Jolly_Lodger,
  Kaisei_Tokumin,
  Montserrat,
  Poppins,
} from "next/font/google";
import "./globals.css";

const jollyLodger = Jolly_Lodger({
  variable: "--font-jolly-lodger",
  weight: ["400"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const kaisei = Kaisei_Tokumin({
  variable: "--font-kaisei",
  weight: ["400", "500", "800", "700"],
  subsets: ["latin"],
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "NOONU",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${kaisei.variable} ${montserrat.variable} ${jollyLodger.variable} `}
    >
      <body className="bg-background text-foreground">
        <main className="min-h-screen min-w-screen overflow-x-hidden">
          {/* <Sidebar /> */}
          {/* <Header /> */}
          <QueryProvider>
            <section className=" w-full pb-5">{children}</section>
          </QueryProvider>
        </main>
      </body>
    </html>
  );
}
