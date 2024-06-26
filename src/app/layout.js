import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { Toaster } from "react-hot-toast";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "Aden Pizza",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/bricolage-grotesque"
          rel="stylesheet"
        />
      </head>
      <body>
        <StoreProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <div className="w-full">{children}</div>
        </StoreProvider>
      </body>
    </html>
  );
}
