"use client";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import AppIcon from "@mui/icons-material/AppsOutlined";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { basePath } from "./../../next.config";

import Carousel from "@/components/Carousel";
import PageLayout from "@/layouts/page-layout";

enum ProjectTag {
  WEB = "Web application",
  MOBILE = "Mobile application",
}

type Project = {
  title: string;
  tags: ProjectTag[];
  images: string[];
  description: string;
  link?: string;
};

const Project = () => {
  const { MOBILE, WEB } = ProjectTag;
  const projects: Project[] = [
    {
      title: "Canvaschat",
      tags: [WEB],
      images: [
        `${basePath}/canvaschat/canvaschattool.png`,
        `${basePath}/canvaschat/jackpinemedia.png`,
      ],
      description:
        "Canvaschat is a versatile chat portal that can be embedded into any business website to address customer concerns. It includes an agent portal for responding to customer queries and an admin portal for viewing reports and feedback.",
      link: "https://canvaschattool.com/",
    },
    {
      title: "Meetsone",
      tags: [WEB, MOBILE],
      images: [
        `${basePath}/meetsone/1.png`,
        `${basePath}/meetsone/meetsone1.png`,
        `${basePath}/meetsone/meetsone2.png`,
        `${basePath}/meetsone/meetsone3.png`,
      ],
      description:
        "Meetsone is a Japanese app that provides businesses with flexible control over their processes and transactions through dynamic forms and efficient reporting, offering functionality similar to a CRM system.",
      link: "https://app.meetsone.com/mm-login",
    },
    {
      title: "Fancrew",
      tags: [WEB],
      images: [
        `${basePath}/fancrew/fancrew1.png`,
        `${basePath}/fancrew/fancrew2.png`,
      ],
      description:
        "Fancrew is a web app that enables businesses to create dynamic questionnaires and surveys, helping them gather valuable insights from their customers.",
      link: "https://dev.cr.fancrew.com/admin/login",
    },
    {
      title: "Requisition app",
      tags: [WEB],
      images: [
        `${basePath}/mymc/mymc1.jpg`,
        `${basePath}/mymc/mymc2.jpg`,
        `${basePath}/mymc/mymc3.jpg`,
        `${basePath}/mymc/mymc4.jpg`,
      ],
      description:
        "Requisition app centralizes the manual process of sending equipment requests from various business addresses to the main office and is deployed internally. It also includes a feature for maintaining an inventory record of each piece of equipment.",
    },
  ];

  const handleOpenLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <PageLayout>
      <Box className="flex justify-between">
        <label className="font-mono text-white font-bold text-4xl">
          projects
        </label>
      </Box>
      <div>
        <p className="text-[#e1e1e3] text-lg">
          Here are the projects I have contributed to and developed over the
          span of 5 years in my career.
        </p>
      </div>

      <Box className="flex flex-col gap-2">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {projects.map(({ description, images, tags, title, link }, index) => (
            <Grid item xs={6} key={index}>
              <Card sx={{ backgroundColor: "#16212b" }}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="appicon">
                      <AppIcon className="text-[#16212b]" />
                    </Avatar>
                  }
                  title={title}
                  subheader={tags.join(" | ")}
                  titleTypographyProps={{
                    fontWeight: 600,
                    color: "#fff",
                  }}
                  subheaderTypographyProps={{
                    color: "#ccc",
                  }}
                />
                <CardMedia component="image">
                  <Carousel images={images} />
                </CardMedia>
                <CardContent
                  className="flex flex-col gap-2"
                  sx={{
                    color: "#e1e1e3",
                    height: 170,
                    overflow: "auto",
                  }}
                >
                  <Typography variant="body2">
                    Link:{" "}
                    {link ? (
                      <Link
                        onClick={() => handleOpenLink(link)}
                        className="cursor-pointer"
                      >
                        {link}
                      </Link>
                    ) : (
                      <em>N / A (Internal)</em>
                    )}
                  </Typography>
                  <Typography variant="body2">{description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </PageLayout>
  );
};

export default Project;
