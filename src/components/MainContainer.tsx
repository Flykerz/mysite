import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About.tsx";
import Career from "./Career.tsx";
import Contact from "./Contact.tsx";
import Cursor from "./Cursor.tsx";
import Landing from "./Landing.tsx";
import Navbar from "./Navbar.tsx";
import SocialIcons from "./SocialIcons.tsx";
import WhatIDo from "./WhatIDo.tsx";
import Work from "./Work.tsx";
import setSplitText from "./utils/splitText.ts";

const TechStack = lazy(() => import("./TechStack.tsx"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
