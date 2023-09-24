import HeroSection from "./components/HeroSection";
import Services from "./components/Services";

const Home = () => {
  const data = {
    name: "Baby Bundles",
  };

  return (
    <>
      <HeroSection myData={data} />
      <Services />
    </>
  );
};

export default Home;
