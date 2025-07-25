import { TypeAnimation } from "react-type-animation";
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.jpeg'

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side of about page */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greetings */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ruturaj Swain
          </h2>

          {/* Skills Heading with Typing Effect */}

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Frontend Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "React Developer",
                2000,
                "Web Developer",
                2000,
                "MERN Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block", text: "#8245ec" }}
              repeat={Infinity}
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a FrontEnd developer with over 2+ years of experience in
            building scalable web applications. a strong foundation in HTML,
            CSS, and Javascript. Proven ability to collaborate with
            cross-functional teams to deliver high-quality software solutions.
            Committed to enhancing user experiences through innovative
            problem-solving and exceptional attention to detail.
          </p>

          {/* Resume Button */}

          <a
            href="https://drive.google.com/file/d/19tL3O6LqJhIdDnMGoX-my6KUBXunpFHI/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

         {/* Right side */}

         <div className="md:w-1/2 flex justify-center md:justify-end">
         <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Ruturaj Swain"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
         </div>
      </div>
    </section>
  );
};

export default About;
