import Advantages from "./Advantages";
import BrandsBlock from "./BrandsBlock";
import FormBlock from "./FormBlock";
import Hero from "./Hero";
import Services from "./Services";
import Subscribe from "./Subscribe";
import TextBlock from "./TextBlock";

export default function Home() {
  return (
    <>
      <Hero />
      <Subscribe />
      <Advantages />
      <TextBlock />
      <Services />
      <FormBlock />
      <BrandsBlock />
    </>
  );
}
