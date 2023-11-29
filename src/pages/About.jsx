import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CTA from "../components/CTA";
import { experiences } from "../constants";
import { skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Anurag Bhardwaj
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
        Results-driven Software Developer with 2 years' experience. Delivering  projects with 25% faster project times.

Expert in translating tech into user-friendly solutions. Committed to innovation and teamwork.
        </p>
      </div>

      <div className="py-10 flex flex-col">
      <h3 class=" subhead-text mb-5">What I know</h3>

        {/* <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-28 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-2/5 h-2/5 object-contain'
                />
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="  flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg text-slate-300" style={{background:'#343434'}}>
            <div className="text-primary font-medium text-lg tracking-wider">
              Frontend
            </div>
            <div className="flex flex-wrap gap-2">
            <div className="rounded-md bg-body text-xs text-primary p-2 border  border-yellow-500/60">
                React Js
              </div>
              <div className="rounded-md bg-body text-xs text-primary p-2">
                HTML
              </div>
              <div className="rounded-md bg-body text-xs text-primary p-2">CSS</div>
              <div className="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                Tailwind
              </div>
              <div className="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                Javascript
              </div>
            
              
             
            </div>
          </div>
          <div  class="  flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg  text-slate-300" style={{background:'#343434'}}>
            <div class="text-primary font-medium text-lg tracking-wider">
              Backend
            </div>
            <div class="flex flex-wrap gap-2">
              <div class="rounded-md bg-body text-xs text-primary p-2 border border-green-500/60">
               Spring Framework
              </div>
              <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">
                Hibernate
              </div>
              <div class="rounded-md bg-body text-xs text-primary p-2">
              Microservices
              </div>
              <div class="rounded-md bg-body text-xs text-primary p-2 border border-green-500/60">
                Swagger
              </div>
              <div class="rounded-md bg-body text-xs text-primary p-2 border border-orange-500/60">
               Spring Security
              </div>
              <div class="rounded-md bg-body text-xs text-primary p-2">
               JUnit and Mockito
              </div>
            </div>
          </div>
          <div  class="   flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg  text-slate-300" style={{background:'#343434'}}>
            <div class="text-primary font-medium text-lg tracking-wider">
              Database
            </div>
            <div class="flex flex-wrap gap-2">
              <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                MySql
              </div>
             
              <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                PostgreSQL
              </div>
             
              
            </div>
          </div>
          <div class="  flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg  text-slate-300" style={{background:'#343434'}}>
            <div class="text-primary font-medium text-lg tracking-wider">
              Devops
            </div>
            <div class="flex flex-wrap gap-2">
              <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                Docker
              </div>
              <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                Kubernetes
              </div>
              <div class="rounded-md bg-body text-xs text-primary p-2 border border-orange-500/60">
                GIT
              </div>
             
              
              <div class="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500/60">
                AWS
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
          "I've worked with various companies, leveling up my skills and teaming up with smart people. Here's the rundown:"
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
