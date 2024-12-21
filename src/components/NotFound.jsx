import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";

const NotFound = () => {
  return (
    <div>
      <Typography variant="h4">404 - The page was not found</Typography>
      <Button component={Link} to="/">
        Go back to the main page
      </Button>
    </div>
  );
};

export default NotFound;
