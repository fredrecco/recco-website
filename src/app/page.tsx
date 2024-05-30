"use client";
import Header from "@/modules/header";
import About from "@/modules/about";
import Contact from "@/modules/contact";
import Footer from "@/modules/footer";
import { ThemeContextProvider } from "@/common/context/theme";

export default function Home() {
  return (
    <ThemeContextProvider>
      <div className="h-screen w-screen">
        <div className="h-screen flex flex-col">
          <Header />
          <div className="w-full h-full mt-[64px] md:mt-0">
            <About />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}
