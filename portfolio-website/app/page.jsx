import { Button } from "@components/ui/button";
import Social from "@components/Social";
import Photo from "@components/Photo";
import Stats from "@components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Computer Science Student</span>
            <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent">Arda Gediz</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col items-center xl:flex-row gap-8">
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex space-x-4" iconStyles="text-4xl text-accent flex justify-center items-center hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home;

