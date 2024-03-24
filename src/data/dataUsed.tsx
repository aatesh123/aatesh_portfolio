export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export type navLinkItemProps = {
  id: string;
  title: string;
};

export const educations = [
  {
    id: "college",
    degree: "B.Tech (Computer Science)",
    institution: "National Institute of Technology Jaipur",
    cgpa: "7.5",
    startTime: "2018 Aug",
    endTime: "2022 June",
  },
  {
    id: "school",
    degree: "Higher Secondary",
    institution: "Bhartiya Sen Sec School Sikar",
    percentage: "87.2%",
    startTime: "2017 April",
    endTime: "2018 June",
  },
];

export type educationProps = {
  id: string;
  degree: string;
  institution: string;
  cgpa?: string;
  percentage?: string;
  startTime: string;
  endTime: string;
};

export const skills = [
  {
    id: "DSA",
    name: "DSA",
  },
  {
    id: "C++",
    name: "C++",
  },
  {
    id: "problemSolving",
    name: "Problem Solving",
  },
  {
    id: "ReactJS",
    name: "ReactJS",
  },
  {
    id: "JavaScript",
    name: "JavaScript",
  },
  {
    id: "mySql",
    name: "My SQL",
  },
  {
    id: "mongoDb",
    name: "Mongo DB",
  },
  {
    id: "dbms",
    name: "DBMS",
  },
  {
    id: "oops",
    name: "oops",
  },
  
  {
    id: "systemDesign",
    name: "System Design",
  },
  {
    id: "Intelimatch",
    name: "Intellimatch",
  },
  {
    id: "Java",
    name: "Java",
  },
  {
    id: "Python",
    name: "Python",
  },
  {
    id: "Deployment",
    name: "Deployment",
  },
  {
    id: "TeamCity",
    name: "TeamCity",
  },
  {
    id: "NodeJs",
    name: "NodeJs",
  },
  {
    id: "WebDevelopment",
    name: "Web Development",
  },
  {
    id: "Excel",
    name: "Excel",
  },
  {
    id: "Jira",
    name: "Jira",
  },
 
 
];

export type skillProps = {
  id: string;
  name: string;
};
