import React from "react";
import Contributor from "./Contributor";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import FirstRankedContributor from "./FirstRankedContributor";

const ContributorsList = ({ contributors }) => {
  return (
    <div className="w-full  lg:w-8/12 p-12 md:p-36 rounded-lg">
      <div className="bg-[#25076B] p-12 md:p-16 rounded-lg">
        {contributors.map((contributor, index) => {
          if (index == 0) {
            return <FirstRankedContributor contributor={contributor} />;
          }
        })}
      </div>
      <div className="bg-[#99E5E5] p-12 md:p-20 rounded-lg">
        <Box sx={{ width: "100%" }}>
          <Stack spacing={3}>
            {contributors.map((contributor, index) => {
              return (
                <div>
                  <Contributor contributor={contributor} index={index} />
                </div>
              );
            })}
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default ContributorsList;
