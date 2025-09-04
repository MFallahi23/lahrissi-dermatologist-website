import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./styles/style.scss";
import { Toaster } from "react-hot-toast";

const manropeFont = Manrope({
  variable: "--ff-main",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Lahrissi",
  description: "Dermatologue à Casablanca",
  icons: {
    icon: "/icons/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manropeFont.variable}>
        {children} <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
