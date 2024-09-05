import type { Metadata } from "next";
import { Poppins, Prompt } from "next/font/google";
import "./globals.css";
import { Header } from "./components/HeaderComponent/Header";
import Loading from "./components/LoadingComponent/Loading";
import { LoadingProvider } from "./components/LoadingComponent/LoadingContext";

const poppins = Poppins({
  subsets: ["latin"], // Specify the subsets you need
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Include all font weights
  style: ["normal", "italic"], // Include normal and italic styles
  display: "swap", // Optional: Control font-display behavior
  variable: "--font-poppins",
});
const prompt = Prompt({
  subsets: ["latin"], // Specify the subsets you need
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Include all font weights
  style: ["normal", "italic"], // Include normal and italic styles
  display: "swap", // Optional: Control font-display behavior
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "My Profile",
  description: "I'm Kachapat Buakhaw",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${prompt.variable} bg-primary-dark-gradient`}
      >
        <LoadingProvider>
          <Loading />
          <Header />
          <div className="bg-grainy absolute inset-0 mix-blend-multiply opacity-25 pointer-events-none"></div>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
