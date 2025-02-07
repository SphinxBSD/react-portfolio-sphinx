import Section from "./Section";
import { experienceItems, educationItems, coursesItems } from "../constants";
import Heading from "./Heading";

function Resume() {
  return (
    <Section id="resume">
      <div className="container relative z-2">
        {/* Use Flexbox to create two columns */}
        <Heading className="md:max-w-md lg:max-w-3xl" title="RESUME" />
        <div className="flex flex-wrap gap-8 justify-between">
          <div className="w-full md:w-[48%] relative pl-6">
            {/* WORK Column */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-800"></div>
            <h2 className="text-2xl font-bold mb-4">WORK</h2>
            {experienceItems.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 rounded-full bg-yellow-500 mr-4"></div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-400">{item.description}</p>
                <p className="text-yellow-500 font-medium">{item.date}</p>
              </div>
            ))}
            {/* EDUCATION Column */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-800"></div>
            <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
            {educationItems.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 rounded-full bg-yellow-500 mr-4"></div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-400">{item.description}</p>
                <p className="text-yellow-500 font-medium">{item.date}</p>
              </div>
            ))}
          </div>

          <div className="w-full md:w-[48%] relative pl-6">
            {/* COURSES Column */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-800"></div>
            <h2 className="text-2xl font-bold mb-4">COURSES</h2>
            {coursesItems.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 rounded-full bg-yellow-500 mr-4"></div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-400">{item.description}</p>
                <p className="text-yellow-500 font-medium">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Resume;
