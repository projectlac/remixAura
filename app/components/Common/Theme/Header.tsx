import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logo from "~/assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "@remix-run/react";
const HeaderWrapper = styled(Box)({
  marginBottom: "20px",
  paddingBottom: "12px",
  borderBottom: "1px solid #333",
  textAlign: "center",

  "& img": {
    margin: "0 auto",
    width: "186px",
    height: "91px",
  },
});
function Header() {
  return (
    <HeaderWrapper className="header h-304px">
      <Box sx={{ mb: "31px", mt: "60px" }}>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </Box>
      <FormControl variant="standard">
        <TextField
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Bạn đang tìm kiếm sản phẩm nào?"
          variant="outlined"
          sx={{
            width: "370px",
            height: "52px",
            background: "#F2F2F2",

            "& .MuiInputBase-root": {
              height: "52px",
            },
            "& fieldset": {
              border: "none",
            },
          }}
        />
      </FormControl>
      <Box
        sx={{
          "& ul": {
            display: "flex",
            justifyContent: "center",
            marginTop: "32px",
            "& li": {
              margin: "0 40px",
              textTransform: "uppercase",
            },
          },
        }}
      >
        <ul>
          <li>
            <Link to={"/shop/all"}>Sản phẩm mới</Link>
          </li>
          <li>TỔNG HỢP SẢN PHẨM</li>
          <li>SẢN PHẨM GIẢM GIÁ</li>
          <li>BÁN CHẠY NHẤT</li>
          <li>LIÊN HỆ CHÚNG TÔI</li>
        </ul>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
