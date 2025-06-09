import { useEffect, useState } from "react";
import LandingPage from "../pages/LandingPage";
import LandingPageMobile from "../pages/mobile/LandingPageMobile";

export default function LandingPageSelector() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <LandingPageMobile /> : <LandingPage />;
}
