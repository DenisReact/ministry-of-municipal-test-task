import { createTheme } from "@mui/material";

const theme = createTheme({
  spacing: 8,
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          background: "white",
          fontSize: "14px",
          "& .MuiInputBase-input": {
            paddingTop: "12px",
            paddingBottom: "12px",
          },

          "& fieldset": {
            borderColor: "transparent !important",
          },
        },

        notchedOutline: {
          borderColor: "#D9E1EB",
          borderRadius: "8px",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          border: "none",
          borderRadius: "6px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 4px 0 rgba(0,0,0,0.05)",
          marginTop: "4px",
        },
      },
    },
  },
});

export default theme;
