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

import Carousel from "@/components/Carousel";
import PageLayout from "@/layouts/page-layout";

import { useProjects } from "@/hooks/useProjects";

const Project = () => {
  const { handleOpenLink, projects } = useProjects();

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
          {projects.map(
            (
              { description, images, tags, title, link, technologies },
              index
            ) => (
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
                      maxHeight: 270,
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
                    <Grid container spacing={0.5}>
                      {technologies.map((tech, techIndex) => (
                        <Grid item xs={4} key={techIndex}>
                          <Typography
                            sx={{ bgcolor: tech.color, color: "#fff" }}
                            className="p-1 rounded-md text-center text-xs"
                          >
                            {tech.tech}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </PageLayout>
  );
};

export default Project;
