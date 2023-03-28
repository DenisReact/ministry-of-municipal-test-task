import React, { useState } from "react";
import {
	AppBar,
	Drawer,
	List,
	ListItem,
	Toolbar,
	Typography,
	IconButton,
	Box,
} from '@mui/material';

import MenuIcon from "@mui/icons-material/Menu";

import HomePageIcon from "../icons/home-page-icon";
import VisualPollutionIcon from "../icons/visual-pollution-icon";
import BuildingAndConstructionIcon from "../icons/building-and-construction-icon";
import ExcavationIcon from "../icons/excavation-image-icon";
import HealthIcon from "../icons/health-icon";
import RetailIcon from "../icons/retail-icon";
import CleaningIcon from "../icons/cleaning-icon";
import EnvironmentIcon from "../icons/environment-icon";
import GroupHousingIcon from "../icons/group-housing-icon";
import HousingSectorIcon from "../icons/housing-sector-icon";
import LandViolationIcon from "../icons/land-violation-icon";
import MunicipalRevenueIcon from "../icons/municipal-revenue-icon";
import StreetVendorsIcon from "../icons/street-vendors-icon";
import VisualPollutionPage from "../../pages/visual-pollution-page";

const sideBarItems = [
  { id: "1", text: "Home", link: "#", icon: <HomePageIcon /> },
  {
    id: "2",
    text: "Visual Pollution",
    link: "#",
    icon: <VisualPollutionIcon />,
  },
  {
    id: "3",
    text: "Building & Construction",
    link: "#",
    icon: <BuildingAndConstructionIcon />,
  },
  {
    id: "4",
    text: "Excavation",
    link: "#",
    icon: <ExcavationIcon />,
  },
  {
    id: "5",
    text: "Health",
    link: "#",
    icon: <HealthIcon />,
  },
  {
    id: "6",
    text: "Retail",
    link: "#",
    icon: <RetailIcon />,
  },
  {
    id: "7",
    text: "Retail",
    link: "#",
    icon: <RetailIcon />,
  },
  {
    id: "8",
    text: "Cleaning",
    link: "#",
    icon: <CleaningIcon />,
  },
  {
    id: "9",
    text: "Environment",
    link: "#",
    icon: <EnvironmentIcon />,
  },
  {
    id: "10",
    text: "Group Housing",
    link: "#",
    icon: <GroupHousingIcon />,
  },
  {
    id: "11",
    text: "Housing Sector",
    link: "#",
    icon: <HousingSectorIcon />,
  },
  {
    id: "12",
    text: "Land Violation",
    link: "#",
    icon: <LandViolationIcon />,
  },
  {
    id: "13",
    text: "Municipal Revenue",
    link: "#",
    icon: <MunicipalRevenueIcon />,
  },
  {
    id: "14",
    text: "Street Vendors",
    link: "#",
    icon: <StreetVendorsIcon />,
  },
];

export default function Layout() {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar sx={{ position: "fixed" }}>
        {/* <IconButton onClick={handleMenuClick} edge='start' sx={{}}>
					<MenuIcon />
				</IconButton> */}
        <Toolbar
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#212B36",
            maxHeight: "64px",
          }}
        >
          <Typography noWrap>MUI Styling</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        disableEnforceFocus
        variant="temporary"
        open={open}
        // sx={themedStyles(theme, responsiveDrawerWidth).drawer}
        PaperProps={{
          sx: { backgroundColor: "#EEF1FA;" },
        }}
      >
        <Toolbar />
        <List>
          {sideBarItems.map((el) => (
            <ListItem
              key={el.id}
              sx={{
                borderBottom: "1px solid",
                borderBottomColor: "primary.main",
              }}
            >
              {/* <a href={el.link}>{el.text}</a> */}
              {el.icon}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main>
        <Toolbar />
        <VisualPollutionPage />
      </main>
    </>
  );
}
