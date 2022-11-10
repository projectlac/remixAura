import { Box, Typography } from "@mui/material";
import React from "react";

function Filter() {
  return (
    <div>
      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: "bold",
          marginBottom: "19px",
          textTransform: "uppercase",
        }}
      >
        Phân loại sản phẩm
      </Typography>
      <Box
        sx={{
          "& li": {
            marginBottom: "15px",
            color: "#807C78",
            fontWeight: "400",
            fontSize: "15px",
          },
        }}
      >
        <ul>
          <li>Nến sáp thơm (10)</li>
          <li>Trầm hương (2)</li>
          <li>Trầm nụ (3)</li>
          <li>Tinh dầu thơm (7)</li>
        </ul>
      </Box>
    </div>
  );
}

export default Filter;
