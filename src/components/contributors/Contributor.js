import { Avatar, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",

  color: theme.palette.text.secondary,
}));

const Contributor = ({ contributor, index }) => {
  return (
    <div className="relative z-20">
      {
        //with avatar
        /* <Item variant="rounded" sx={{ boxShadow: 4, borderRadius: 2 }}>
        <div className="flex flex-row  justify-between items-center pr-6 pl-6">
          <div className="flex flex-row items-center">
            <div className="mr-4">
              <Avatar src={contributor.url} />
            </div>
            <div className="flex flex-col items-start ">
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
                color="black"
                component="h2"
              >
                {contributor.login}
              </Typography>
              <Typography color="blue " sx={{ fontWeight: "medium" }}>
                {contributor.points}
              </Typography>
            </div>
          </div>
          <div>
            {index == 0 && (
              <Typography
                variant="h4"
                color="yellow"
                sx={{ fontWeight: "bold" }}
              >
                {index + 1}
              </Typography>
            )}
            {index == 1 && (
              <Typography
                variant="h4"
                color="green"
                sx={{ fontWeight: "bold" }}
              >
                {index + 1}
              </Typography>
            )}
            {index == 2 && (
              <Typography variant="h4" color="red" sx={{ fontWeight: "bold" }}>
                {index + 1}
              </Typography>
            )}
          </div>
        </div>
      </Item> */
      }
      {index != 0 && (
        <Item
          variant="rounded"
          sx={{ boxShadow: 4, borderRadius: 2, marginBottom: 6 }}
        >
          <div className="flex flex-row  justify-between items-center pr-6 pl-6">
            <div className="flex flex-col items-start ">
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", lineHeight: 2 }}
                color="black"
                component="h2"
              >
                {contributor.login}
              </Typography>
              <Typography color="blue " sx={{ fontWeight: "medium" }}>
                {contributor.points}
              </Typography>
            </div>
            <div>
              {index === 1 && (
                <Typography
                  variant="h4"
                  color="green"
                  sx={{ fontWeight: "bold" }}
                >
                  {index + 1}
                </Typography>
              )}
              {index === 2 && (
                <Typography
                  variant="h4"
                  color="red"
                  sx={{ fontWeight: "bold" }}
                >
                  {index + 1}
                </Typography>
              )}
            </div>
          </div>
        </Item>
      )}
    </div>
  );
};

export default Contributor;
