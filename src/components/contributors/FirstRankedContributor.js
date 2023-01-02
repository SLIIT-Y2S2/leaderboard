import React from "react";
import { Avatar, Typography } from "@mui/material";

const FirstRankedContributor = ({ contributor }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Avatar
        src={contributor.url}
        sx={{ width: 100, height: 100 }}
        style={{
          border: "8px solid #D89E00",
        }}
      />
      <Typography
        sx={{ marginTop: 1, fontWeight: "bold", color: "white" }}
        variant="h6"
        color="black"
        component="h2"
      >
        {contributor.login}
      </Typography>
      <Typography sx={{ marginTop: 0.5, fontWeight: "light", color: "white" }}>
        {contributor.points}
      </Typography>
    </div>
  );
};

export default FirstRankedContributor;
