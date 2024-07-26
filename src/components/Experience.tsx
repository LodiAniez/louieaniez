"use client";

import { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import FormControl from "@mui/material/FormControl";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import WorkIcon from "@mui/icons-material/HomeWorkOutlined";

enum Filter {
  ALL = "all",
  VBN = "vbn",
  IPAY = "ipay",
  JCURVE = "jcurve",
  MYMC = "mymc",
  SUN = "sun",
  VC = "vc",
}

type List = {
  list: {
    label: string;
    text: string;
  }[];
};

type Experience = {
  companyName: string;
  duration: string;
  paragraph: (string | List)[];
  id: Filter;
};

type Company = {
  displayName: string;
  value: string;
};

const Experience = () => {
  const [filter, setFilter] = useState<Filter>(Filter.ALL);

  const isList = (data: string | List): data is List => {
    return typeof data === "object" && "list" in data;
  };

  const experiences: Experience[] = [
    {
      id: Filter.VBN,
      companyName: "Virtual Biznest",
      duration: "September, 2019 - May, 2021",
      paragraph: [
        "During my tenure at Virtual Biznest, a dynamic startup specializing in providing digital solutions to partner startups and corporate clients, I served as a fullstack software developer. In this role, I was responsible for the end-to-end development of applications tailored to meet the specific needs of our diverse clientele.",
        "My primary duties involved designing and implementing both frontend and backend components of our applications. I utilized a variety of technologies to build intuitive user interfaces and robust server-side functionality. This included working with modern JavaScript frameworks for frontend development, and leveraging backend technologies to create scalable, high-performance systems.",
        "In addition to development, I managed the deployment process, which often involved configuring and setting up applications on client-purchased Virtual Private Servers (VPS). This required a solid understanding of server environments and deployment practices to ensure that applications were reliably and efficiently launched.",
        "I worked closely with a small, dedicated development team of three members. This tight-knit team structure fostered a collaborative environment where each member’s contributions were integral to the project's success. We collectively tackled challenges, shared insights, and iterated on solutions to deliver high-quality products that aligned with our clients' goals.",
        "Overall, my role at Virtual Biznest allowed me to hone my fullstack development skills, engage in hands-on deployment, and thrive in a collaborative startup setting, all while contributing to impactful digital solutions for our partners.",
      ],
    },
    {
      id: Filter.IPAY,
      companyName: "iPay Center",
      duration: "May, 2021 - August, 2021",
      paragraph: [
        "At iPay Center, a progressive startup focused on simplifying bill payments and enhancing service offerings through API integrations, I worked as a fullstack developer. Our mission was twofold: to provide billers with a convenient platform for managing payments and to offer partner clients the ability to expand their services by integrating their APIs into our system.",
        "In my role, I was responsible for the fullstack development of our applications. This included designing and implementing both frontend and backend components to create a seamless user experience and robust server-side functionality. Additionally, I managed the deployment of our software on cloud-hosted Virtual Private Servers (VPS), ensuring that applications were efficiently configured and maintained for optimal performance and reliability.",
        "A key aspect of my role involved leading our small, dedicated development team of three members. I guided the team through the project lifecycle, from initial planning and architectural design to development and deployment. This leadership role required effective communication and coordination to ensure that our goals were met and that the development process ran smoothly.",
        "Part of my responsibilities also included designing the software architecture. I made strategic decisions regarding system design and infrastructure, focusing on scalability and integration capabilities to handle transactions and interact with external service APIs. This architectural work was crucial for ensuring the robustness and efficiency of our solutions.",
        "Overall, my experience at iPay Center provided me with valuable skills in fullstack development, cloud deployment, and team leadership. I am proud to have led a team in delivering impactful digital solutions while contributing to the company’s mission of improving bill payment convenience and extending service capabilities through innovative integrations.",
      ],
    },
    {
      id: Filter.JCURVE,
      companyName: "JCurve Solutions",
      duration: "August, 2021 - March, 2022",
      paragraph: [
        "During my time at JCurve, a prominent corporate company specializing in providing software services to a diverse range of Australian clients, I served as a fullstack developer. My primary responsibility was to enhance and maintain existing web applications by implementing new features and improving functionality.",
        "In this role, I engaged in both frontend and backend development to ensure that our web applications met the evolving needs of our clients. On the frontend, I worked with modern frameworks and technologies to create intuitive and responsive user interfaces. On the backend, I developed and optimized server-side logic, integrated APIs, and managed database interactions to support new features and ensure overall system performance.",
        "My work involved collaborating closely with cross-functional teams, including product managers, UX/UI designers, and QA engineers, to understand requirements and deliver high-quality solutions. I participated in code reviews and provided constructive feedback to maintain code quality and adhere to best practices.",
        "Additionally, I was responsible for troubleshooting and resolving any issues that arose during the implementation of new features. This required a proactive approach to problem-solving and a thorough understanding of the existing application architecture.",
        "Overall, my role at JCurve allowed me to contribute to the continuous improvement of our web applications, ensuring they delivered value to our Australian clients. My experience there strengthened my fullstack development skills and provided me with valuable insights into managing and enhancing enterprise-level software solutions.",
      ],
    },
    {
      id: Filter.MYMC,
      companyName: "Molave Young's Milling Corporation",
      duration: "March, 2022 - June, 2022",
      paragraph: [
        "At MYMC, a corporate company dedicated to automating manual transactions and streamlining business processes, I worked as a fullstack developer. In this role, I was the sole developer on the team, which meant that I was responsible for overseeing all aspects of the software development lifecycle.",
        "My primary responsibilities encompassed several key areas:",
        {
          list: [
            {
              label: "Software Architecture Planning:",
              text: "I designed the architecture for various applications, ensuring that they were scalable, maintainable, and aligned with the company’s goals of automating manual processes. This involved selecting appropriate technologies, defining system components, and establishing best practices for development and deployment.",
            },
            {
              label: "Development:",
              text: "I developed both mobile and web applications from the ground up. This included building user-friendly interfaces and implementing backend services to handle core functionalities. My development work aimed to improve efficiency and enhance the user experience across both platforms.",
            },
            {
              label: "Testing:",
              text: "I implemented comprehensive testing strategies to ensure the quality and reliability of the applications. This involved writing unit tests, conducting integration tests, and performing manual testing to identify and resolve any issues before deployment.",
            },
            {
              label: "Local Deployments:",
              text: "I handled the deployment of applications on local environments, ensuring that they were correctly configured and ready for use. This included setting up development and staging environments, managing server configurations, and deploying updates as needed.",
            },
            {
              label: "Reporting:",
              text: "As the sole developer, I was responsible for reporting on project progress to higher management. This involved preparing detailed updates, outlining milestones achieved, and addressing any challenges or delays that might impact project timelines.",
            },
          ],
        },
        "Overall, my role at MYMC provided me with a comprehensive view of the software development process. Being the only developer on the team allowed me to gain extensive experience in all facets of development, from initial architecture planning to final deployment and reporting. My contributions were crucial in advancing the company’s mission to automate and optimize its manual transactions, ultimately leading to increased operational efficiency.",
      ],
    },
    {
      id: Filter.SUN,
      companyName: "Sun Asterisk",
      duration: "July, 2022 - August, 2024",
      paragraph: [
        "At Sun Asterisk, a Japan-based corporate company renowned for providing software solutions to Japanese clients, I worked as a fullstack developer. Our work involved both developing new software applications from scratch and implementing new features in existing client systems.",
        "In my role, I had a diverse range of responsibilities:",
        {
          list: [
            {
              label: "Team Leadership:",
              text: "I led a small team of developers on various projects, overseeing the entire development lifecycle. This included assigning tasks, setting deadlines, and ensuring alignment with project goals. My leadership focused on fostering a collaborative environment and maintaining high standards of quality.",
            },
            {
              label: "Code Reviews:",
              text: "I conducted in-depth code reviews to ensure that all code met quality standards and adhered to best practices. This process not only improved the overall codebase but also provided opportunities for mentoring and guiding team members on coding standards and techniques.",
            },
            {
              label: "Fullstack Development:",
              text: "I was actively involved in both frontend and backend development. On the frontend, I used modern frameworks to create responsive and user-friendly interfaces, while on the backend, I developed and optimized server-side logic, integrated APIs, and managed databases to enhance functionality and performance.",
            },
            {
              label: "Training and Mentorship:",
              text: "I was responsible for training junior developers and newly hired team members. This involved providing them with the necessary guidance, resources, and support to help them integrate smoothly into the team and develop their skills effectively.",
            },
            {
              label: "Planning and Coordination:",
              text: "I participated in project planning meetings, contributing to the creation of project roadmaps and setting achievable milestones. I worked closely with stakeholders, including product managers and clients, to gather requirements, define project scope, and address any issues that arose.",
            },
          ],
        },
        "Overall, my role at Sun Asterisk allowed me to gain extensive experience in leading development teams, performing fullstack development, and training new talent. My contributions were crucial in delivering high-quality software solutions that met our Japanese clients' needs, while also enhancing the functionality of existing applications. This role enhanced my skills in both technical development and team management, preparing me to tackle complex projects and drive successful outcomes.",
      ],
    },
    {
      id: Filter.VC,
      companyName: "Virtual Champions",
      duration: "Freelancing",
      paragraph: [
        "As a freelancer with Virtual Champions, I worked on a project for a Dubai-based startup that specializes in delivering digital solutions for depots in Dubai. My role as a fullstack developer was central to enhancing and maintaining their application, which was designed to streamline depot operations and improve efficiency.",
        "Key Responsibilities:",
        {
          list: [
            {
              label: "Fullstack Development:",
              text: "I was responsible for the fullstack development of the application, which involved both frontend and backend tasks. On the frontend, I utilized modern frameworks and technologies to develop and enhance user interfaces, ensuring they were intuitive, responsive, and aligned with the user needs. On the backend, I worked on integrating APIs, optimizing server-side logic, and managing database interactions to support new features and maintain overall application performance.",
            },
            {
              label: "Feature Development:",
              text: "A significant part of my role involved developing new features for the existing application. This included gathering requirements, designing and implementing features, and ensuring they integrated seamlessly with the existing system. My work aimed to enhance the functionality of the application and provide valuable solutions for the client’s depot management needs.",
            },
            {
              label: "Bug Fixing:",
              text: "I also addressed and resolved reported bugs and issues within the application. This involved troubleshooting problems, identifying the root causes, and implementing fixes to ensure the application ran smoothly and met the quality standards expected by the client. My proactive approach to bug fixing helped maintain a high level of reliability and user satisfaction.",
            },
            {
              label: "Client Communication:",
              text: "Although not explicitly mentioned in the initial brief, effective communication with the client was an integral part of my freelance role. I regularly updated the client on progress, discussed any issues or requirements, and ensured that my work aligned with their expectations and business objectives.",
            },
          ],
        },
        "Overall, my freelance work with Virtual Champions for their Dubai-based client allowed me to leverage my fullstack development skills to contribute to a significant project in the digital solutions space. I played a key role in enhancing the application, developing new features, and resolving issues, all of which were critical in supporting the startup's goal of optimizing depot operations in Dubai. This experience further honed my technical skills and provided valuable insights into working with international clients and delivering impactful solutions.",
      ],
    },
  ];

  const companies: Company[] = [
    {
      displayName: "All",
      value: Filter.ALL,
    },
    {
      displayName: "Virtual Biznest",
      value: Filter.VBN,
    },
    {
      displayName: "iPay Center",
      value: Filter.IPAY,
    },
    {
      displayName: "JCurve Solutions",
      value: Filter.JCURVE,
    },
    {
      displayName: "Molave Young's Milling Corporation",
      value: Filter.MYMC,
    },
    {
      displayName: "Sun Asterisk",
      value: Filter.SUN,
    },
    {
      displayName: "Virtual Champions",
      value: Filter.VC,
    },
  ];

  const expContent: Experience[] = useMemo(() => {
    if (filter === Filter.ALL) {
      return [...experiences];
    } else {
      return experiences.filter((exp) => exp.id === filter);
    }
  }, [filter]);

  const handleChange = (event: SelectChangeEvent<Filter>) => {
    setFilter(event.target.value as Filter);
  };

  return (
    <Box className="flex flex-col p-4 gap-4">
      <Box className="flex justify-between">
        <label className="font-mono text-white font-bold text-4xl">
          experiences
        </label>
        <FormControl size="small">
          <Select value={filter} onChange={handleChange} className="bg-[#fff]">
            {companies.map(({ displayName, value }, index) => (
              <MenuItem value={value} key={index}>
                {displayName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <div>
        <p className="text-[#e1e1e3] text-lg">
          I've been working as a fullstack developer for 5 years now. I have
          experience working as a freelancer, as well as in corporate and
          startup companies.
        </p>
      </div>
      <Box className="flex flex-col gap-2">
        {expContent.map(({ companyName, duration, paragraph }, index) => (
          <Card
            className="w-full"
            sx={{ backgroundColor: "#16212b" }}
            key={index}
          >
            <CardHeader
              avatar={
                <Avatar aria-label="vbn" sx={{ color: "#16212b" }}>
                  <WorkIcon />
                </Avatar>
              }
              title={companyName}
              subheader={duration}
              titleTypographyProps={{
                fontWeight: 600,
                color: "#fff",
              }}
              subheaderTypographyProps={{
                color: "#ccc",
              }}
            ></CardHeader>
            <CardContent className="flex flex-col gap-2">
              {paragraph.map((p, pIndex) =>
                isList(p) ? (
                  <List sx={{ color: "#e1e1e3" }} disablePadding>
                    {p.list.map(({ label, text }, listIndex) => (
                      <ListItem key={listIndex}>
                        <Typography variant="body2">
                          <label className="font-semibold">{label}</label>
                          <label>&nbsp;{text}</label>
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Typography
                    variant="body2"
                    className="text-[#ccc]"
                    key={pIndex}
                  >
                    {p}
                  </Typography>
                )
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
