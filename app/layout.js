import "../styles/globals.css";
import Header from "app/components/Header";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className="relative min-h-screen flex flex-col">
          <Header />
          <main>{children}</main>
      </body>
    </html>
  );
}
