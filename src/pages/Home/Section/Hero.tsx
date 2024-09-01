import video from "@/assets/hero.mp4";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeIn } from "@/variant";

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  const handleSearchSubmit: SubmitHandler<FieldValues> = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    onSearch(search);
  };

  return (
    <div className="relative flex items-center justify-center h-[calc(100vh-88px)] bg-gray-900">
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center text-white px-4 sm:px-8">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Explore the City on Two Wheels
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Rent a bike and discover the beauty of urban cycling
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="border p-4 rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl flex flex-col sm:flex-row items-center justify-center mx-auto gap-4"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto mb-4 sm:mb-0 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:from-teal-500 hover:via-cyan-600 hover:to-blue-700 transition-transform duration-300 transform hover:scale-105"
          >
            Start Your Adventure
          </Button>
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto"
          >
            <Input
              name="search"
              type="text"
              placeholder="Search bike..."
              className="lg:w-96 w-full sm:w-48 px-4 py-2 text-black dark:text-white outline-none rounded-lg transition duration-300 ease-in-out transform focus:scale-105"
            />
            <Button
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:from-teal-500 hover:via-cyan-600 hover:to-blue-700 transition-transform duration-300 transform hover:scale-105"
            >
              Search
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
