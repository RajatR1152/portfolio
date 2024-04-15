import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ContextProvider from "@/context/DataContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RajatR personal portfolio",
  description: "RajatR personal portfolio",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container w-full flex">
          <ContextProvider>
            <Sidebar />
            {children}
          </ContextProvider>
        </div>
      </body>
    </html>
  );
}
