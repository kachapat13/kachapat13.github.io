import type { Metadata } from "next";
import { Playfair_Display, Poppins, Prompt } from "next/font/google";
import "./globals.css";
import { Header } from "./components/HeaderComponent/Header";
import Loading from "./components/LoadingComponent/Loading";
import { LoadingProvider } from "./context/LoadingContext";
import { ScreenSizeProvider } from "./context/SizeScreenContext";
import Footer from "./components/FooterComponent/Footer";

const poppins = Poppins({
  subsets: ["latin"], // Specify the subsets you need
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Include all font weights
  style: ["normal", "italic"], // Include normal and italic styles
  display: "swap", // Optional: Control font-display behavior
  variable: "--font-poppins",
});
const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-prompt",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair-display",
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
        <ScreenSizeProvider>
          <LoadingProvider>
            <Loading />
            <div className="bg-grainy absolute inset-0 mix-blend-multiply opacity-25 pointer-events-none z-[100]"></div>
            <main className="flex flex-col w-full h-full">
              <Header />
              <div className="relative flex-1 w-full h-full">{children}</div>
              <Footer />
            </main>
          </LoadingProvider>
        </ScreenSizeProvider>
      </body>
    </html>
  );
}
