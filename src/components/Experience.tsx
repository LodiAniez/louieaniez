"use client";

import { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import WorkIcon from "@mui/icons-material/HomeWorkOutlined";
import { basePath } from "./../../next.config";

enum Filter {
  ALL = "all",
  VBN = "vbn",
  IPAY = "ipay",
  JCURVE = "jcurve",
  MYMC = "mymc",
  SUN = "sun",
  VC = "vc",
}

type Experience = {
  companyName: string;
  duration: string;
  paragraph: string[];
  id: Filter;
};

type Company = {
  displayName: string;
  value: string;
};

const Experience = () => {
  const [filter, setFilter] = useState<Filter>(Filter.ALL);

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
      paragraph: ["Work in progress."],
    },
    {
      id: Filter.MYMC,
      companyName: "Molave Young's Milling Corporation",
      duration: "March, 2022 - June, 2022",
      paragraph: ["Work in progress."],
    },
    {
      id: Filter.SUN,
      companyName: "Sun Asterisk",
      duration: "July, 2022 - August, 2024",
      paragraph: ["Work in progress."],
    },
    {
      id: Filter.VC,
      companyName: "Virtual Champions",
      duration: "Freelancing",
      paragraph: ["Work in progress."],
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
              {paragraph.map((p, pIndex) => (
                <Typography
                  variant="body2"
                  className="text-[#ccc]"
                  key={pIndex}
                >
                  {p}
                </Typography>
              ))}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
