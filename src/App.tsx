import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import { motion } from "motion/react";
import { Badge } from "./components/ui/badge";
import AboutMe from "./components/page/AboutMe";
import TechStack from "./components/page/TechStack";
import Portfolio from "./components/page/Portfolio";
import Contact from "./components/page/Contact";

function App() {

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [sectionComponents, setSectionComponents] = useState<'aboutMe' | 'techStack' | 'portfolio' | 'contact' | ''>('aboutMe');

  const renderSection = () => {
    switch (sectionComponents) {
      case 'aboutMe': 
        return <AboutMe />;
      case 'techStack':
        return <TechStack />;
      case 'portfolio': 
        return <Portfolio />;
      case 'contact':
        return <Contact />
    }
  }



  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      };
    }
    checkSize();

    window.addEventListener('resize', checkSize);

    return () => removeEventListener('resize', checkSize);
  }, []);

  return (
    <main className="text-white h-screen w-screen container">
      {!isMobile && <Navbar handleClick={(section) => setSectionComponents(section)} className="fixed py-4" />}
      <section className="container h-full lg:h-screen grid grid-rows-3 lg:grid-cols-2 lg:pt-10">
        <div className="lg:row-span-3 p-4">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }} className="container h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-2xl">Hello ☺️</h1>
            <div className="flex flex-col leading-4 pb-4">
              <span className="text-xs">I'm</span>
              <h2 className="text-2xl">Frontend Web Developer</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="flex gap-4">
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 256 256"><g fill="none"><rect width={256} height={256} fill="#fff" rx={60}></rect><rect width={256} height={256} fill="#0a66c2" rx={60}></rect><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"></path></g></svg>
                </a>

                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>
                </a>
              </div>
              <div>
                <Badge>Ready to work !</Badge>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="row-span-2 lg:row-span-3">
          {isMobile && <Navbar handleClick={(section) => setSectionComponents(section)} className="fixed" />}
          <div className="overflow-y-auto container max-h-[440px] h-[440px] w-full mt-14 p-4 border">
            {renderSection()}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
