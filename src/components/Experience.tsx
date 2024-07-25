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
import Image from "next/image";
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
  companyLogo: string;
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
      companyLogo: `${basePath}/logos/vbn.png`,
      duration: "November, 2019 - May, 2021",
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
      companyLogo: `${basePath}/logos/ipay.png`,
      duration: "Work in progress",
      paragraph: ["Work in progress."],
    },
    {
      id: Filter.JCURVE,
      companyName: "JCurve Solutions",
      companyLogo: `${basePath}/logos/jcurve.jpg`,
      duration: "Work in progress",
      paragraph: ["Work in progress."],
    },
    {
      id: Filter.MYMC,
      companyName: "Molave Young's Milling Corporation",
      companyLogo: `${basePath}/logos/mymc.png`,
      duration: "Work in progress",
      paragraph: ["Work in progress."],
    },
    {
      id: Filter.SUN,
      companyName: "Sun Asterisk",
      companyLogo: `${basePath}/logos/sunasterisk.png`,
      duration: "Work in progress",
      paragraph: ["Work in progress."],
    },
    {
      id: Filter.VC,
      companyName: "Virtual Champions",
      companyLogo: `${basePath}/logos/vc.png`,
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
            {companies.map((company, index) => (
              <MenuItem value={company.value} key={index}>
                {company.displayName}
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
        {expContent.map((exp, index) => (
          <Card
            className="w-full"
            sx={{ backgroundColor: "#16212b" }}
            key={index}
          >
            <CardHeader
              avatar={
                <Avatar aria-label="vbn" className="bg-[#000]">
                  <Image
                    src={exp.companyLogo}
                    alt="image"
                    width={100}
                    height={100}
                    priority
                  />
                </Avatar>
              }
              title={exp.companyName}
              subheader={exp.duration}
              titleTypographyProps={{
                fontWeight: 600,
                color: "#fff",
              }}
              subheaderTypographyProps={{
                color: "#ccc",
              }}
            ></CardHeader>
            <CardContent className="flex flex-col gap-2">
              {exp.paragraph.map((p, pIndex) => (
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
