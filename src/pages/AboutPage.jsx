import ButtonIcon from "../components/ButtonIcon";
import { projectData, contactData } from "../utils/data";

const AboutPage = () => {
  return (
    <div className="py-10 md:py-28 container mx-auto ">
      <div className="mx-6">
        <h1 className="text-3xl">About</h1>
        <p className="p-text pt-3 text-justify leading-loose tracking-wide">
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
          <div className="flex shadow-xl rounded-lg py-4 px-6 flex-col items-center">
            <h1>Project</h1>
            <h2>{projectData.length} +</h2>
          </div>
          <div className="flex shadow-xl rounded-lg py-4 px-4 flex-col items-center">
            <h1>Experience</h1>
            <h2>2 +</h2>
          </div>
          <div className="flex shadow-xl rounded-lg py-4 px-8 flex-col items-center">
            <h1>Age</h1>
            <h2>21 +</h2>
            <p></p>
          </div>
        </div>
      </div>
      <div className="mx-6">
        <h1 className="text-3xl">Contact</h1>
        <p className="p-text pt-3 text-justify leading-loose tracking-wide">
          Find me on
        </p>
        <div className="flex gap-4 pt-3 ">
          {contactData.map((contact, index) => (
            <ButtonIcon key={index} title={contact.name} icons={contact.img} link={contact.link} color={contact.color}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
