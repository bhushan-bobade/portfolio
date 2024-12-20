import React from "react";

interface ExperienceItemProps {
  dateRange: string;
  title: string;
  company: string;
  location?: string;
  tasks: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  dateRange,
  title,
  company,
  location,
  tasks,
}) => (
  <li className="mb-10 ms-4">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {dateRange}
    </time>
    <h3 className="text-md font-semibold text-gray-900 dark:text-gray-200">
      <span>{title}</span> - <span>{company}</span>
    </h3>
    {location && (
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        {location}
      </p>
    )}
    <ul className="hidden sm:block list-disc list-inside mt-2 text-sm font-normal text-gray-500 dark:text-gray-400">
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </li>
);

const Experience: React.FC = () => {
  const experiences = [
    {
      dateRange: "June 2022 – December 2022",
      title: "Software Development Intern",
      company: "Nebula Technology",
      location: "Pune, Maharashtra",
      tasks: [
        "Led development and maintenance of web applications, achieving a 20% improvement in overall efficiency.",
        "Executed 100+ SQL queries for seamless data retrieval and manipulation.",
        "Worked on Java, SQL technologies, and the Firebase platform to drive innovation and achieve exceptional results.",
      ],
    },
    {
      dateRange: "September 2021 – October 2021",
      title: "Web Development Intern",
      company: "The Sparks Foundation",
      location: "Remote",
      tasks: [
        "Constructed the Childline Foundation Donation Web page, increasing user engagement by 30% through seamless payment gateway integration and user-friendly UI using HTML, CSS, Bootstrap5.",
        "Enabled specific amount donations, resulting in a 25% increase in monthly donations.",
        "Initiated the deployment of an email notification system post-payment, leading to a 30% increase in donor engagement and boost in recurring contributions.",
      ],
    },
  ];

  return (
    <section id="experience-section" className="container mx-auto px-4 py-16 max-w-3xl">
      <h2 className="text-center font-bold text-sm font-jetbrains uppercase tracking-wider mb-8">
        <span className="text-lg text-blue-500">Experience</span>
      </h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            dateRange={exp.dateRange}
            title={exp.title}
            company={exp.company}
            location={exp.location}
            tasks={exp.tasks}
          />
        ))}
      </ol>
    </section>
  );
};

export default Experience;

