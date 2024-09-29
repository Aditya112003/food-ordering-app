import { AppProvider } from "@/components/AppContext";
import Header from "@/components/layout/Header";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <div className="min-h-screen flex flex-col">
          <AppProvider>
            <Toaster />
            <div className="flex-grow max-w-4xl w-full mx-auto p-4">
              <Header />
              <main>{children}</main>
            </div>
            <Footer className="max-w-4xl w-full mx-auto" />
          </AppProvider>
        </div>
      </body>
    </html>
  );
}
