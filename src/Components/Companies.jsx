import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import logosImg from "../media/logos.png";

const Companies = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));

  return (
    <Box sx={{ mt: 10 }}>
 

      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <img src={logosImg} alt="logos" />
      </Container>
    </Box>
  );
};

export default Companies;
