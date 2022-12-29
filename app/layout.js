import "../styles/globals.css";
import Header from "app/components/Header";
import Footer from "app/components/Footer";
import Head from "next/head";
import { Lora } from "@next/font/google";
const lora = Lora({
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen flex flex-col box-border">
        <div className="absolute top-0 w-full">
          <Header />
        </div>
        <main className={lora.className}>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
