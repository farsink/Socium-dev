import Header from "./Components/Header";
import Hero from "./Components/Hero";
import SocialMedias from "./Components/SocialMedias";
// import { Test } from "./Components/Test";
// import { Test } from "./Components/Test";

export default function Home() {
  return (
    <>
      <main>
        <div className='md:ml-12 md:mr-12'>
          <Header />
        </div>
        <Hero />
        <div className='md:pl-12 md:pr-12'>
          <SocialMedias />
        </div>
        {/* <Test/> */}
      </main>
    </>
  );
}
