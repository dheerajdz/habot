import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import HabotSection from "./Components/HabotSection";
import HomePage from "./Components/Homepage";
import HowItWorks from "./Components/HowItWorks";
import Navbar from "./Components/Navbar";
import PostRequirement from "./Components/PostRequirement";
import SupplierVerification from "./Components/SupplierVerification";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HomePage />
      <HabotSection />
      <PostRequirement />
      <SupplierVerification />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;
