import { projectData } from "../utils/data";

const AboutPage = () => {
  return (
    <div className="pt-4 md:py-28 container mx-auto ">
      <div>
        <h1 className="text-3xl">About</h1>
        <p className="p-text text-justify leading-loose tracking-wide">
          With a background in D4 Information Technology from the State
          Polytechnic of Lhokseumawe, I bring skills in website development with
          a specific focus on FrontEnd Development. I have completed several
          website projects that demonstrate my dedication and expertise. I have
          a strong interest in continuously expanding my knowledge in various
          aspects of web development, and I am ready to take on new challenges
          in the world of technology. I believe that the combination of my
          educational background in information technology and practical
          experience in website development enables me to make valuable
          contributions to future projects. I am eager to continue learning and
          growing in the world of web development, and I am prepared to take my
          skills and dedication to the next level
        </p>
        <div className="container flex gap-4 items-center justify-center mx-auto py-5">
          <div className="flex shadow-xl rounded-lg py-4 px-4 flex-col items-center">
            <h1>Project</h1>
            <h2>{projectData.length} +</h2>
          </div>
          <div className="flex shadow-xl rounded-lg py-4 px-4 flex-col items-center">
            <h1>Experience</h1>
            <h2>2 +</h2>
          </div>
          <div className="flex shadow-xl rounded-lg py-4 px-4 flex-col items-center">
            <h1>Projects</h1>
            <h2>3 +</h2>
            <p></p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl">Contact</h1>
        <p className="p-text text-justify leading-loose tracking-wide">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          commodi, vel eligendi, eum dolorum nulla ullam quisquam ratione,
          praesentium odio sit inventore animi ad! Facere soluta ipsam nemo esse
          itaque!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
