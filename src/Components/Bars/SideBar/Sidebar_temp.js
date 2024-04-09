import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Dashboard, AccountBalance, Store, ShoppingBasket, Settings } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;

function SideBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [ledgerOpen, setLedgerOpen] = React.useState(false);
  const [purchaseOpen, setPurchaseOpen] = React.useState(false);
  const [saleOpen, setSaleOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const SubList = styled(List)(({ theme }) => ({
    paddingLeft: theme.spacing(4), // Adjust as needed
  }));

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleSubListToggle = (index) => {
    switch (index) {
      case 0:
        navigate("/Dashboard");
        break;
      case 1:
        setLedgerOpen(!ledgerOpen);
        break;
      case 2:
        setPurchaseOpen(!purchaseOpen);
        break;
      case 3:
        setSaleOpen(!saleOpen);
        break;
      case 4:
        break;
      case 5:
        break;
      default:
        break;
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          { text: "Dashboard", icon: <Dashboard /> },
          { text: "Ledger", icon: <AccountBalance /> },
          { text: "Purchase", icon: <ShoppingBasket /> },
          { text: "Sale", icon: <Store /> },
          { text: "Inventory", icon: null },
          { text: "Setting", icon: <Settings /> },
        ].map((item, index) => (
          <React.Fragment key={item.text}>
            <ListItemButton onClick={() => handleSubListToggle(index)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
              {index === 1 && ledgerOpen ? (
                <ExpandLess />
              ) : index === 2 && purchaseOpen ? (
                <ExpandLess />
              ) : index === 3 && saleOpen ? (
                <ExpandLess />
              ) : null}
            </ListItemButton>
            {index === 1 && (
              <Collapse in={ledgerOpen} timeout="auto" unmountOnExit>
                <SubList component="div" disablePadding>
                  {["Supplier", "Customer"].map((subtext, subIndex) => (
                    <ListItemButton
                      key={subtext}
                      onClick={() => {
                        navigate(`/${subtext}`);
                      }}
                    >
                      <ListItemText primary={subtext} />
                    </ListItemButton>
                  ))}
                </SubList>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="permanent"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#002F67",
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#002F67",
              color: "white",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

SideBar.propTypes = {
  window: PropTypes.func,
};

export default SideBar;
