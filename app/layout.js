import "../styles/globals.css";
import Header from "app/components/Header";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
