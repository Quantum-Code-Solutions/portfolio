import { useEffect } from "react";
import AOS from "aos";
import Header from "./parts/header/Header";
import WhatWeDo from "./parts/what-we-do/WhatWeDo";
import Developers from "./parts/developers/Developers";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="w-full h-auto">
      <Header />
      <WhatWeDo />
      <Developers />
    </div>
  );
};

export default App;
