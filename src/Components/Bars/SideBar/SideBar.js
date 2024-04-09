import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore, SportsHockey, Warehouse } from "@mui/icons-material";
import { Dashboard, AccountBalance, Store, ShoppingBasket, Settings } from "@mui/icons-material";
import { styled, useTheme } from "@mui/material/styles";

const drawerWidth = 240;

function SideBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [open, setOpen] = React.useState(false);
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
        navigate("/Inventory");
        break;
      case 5:
        setOpen(!open);
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
          { text: "Inventory", icon: <Warehouse/> },
          { text: "Settings", icon: <Settings /> },
        ].map((item, index) => (
          <React.Fragment key={item.text}>
            <ListItemButton onClick={() =>  handleSubListToggle(index)}>
            <ListItemIcon sx={{color:"white"}}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
              {index === 1 && ledgerOpen ? (
                <ExpandLess />
              ) : index === 1 ? (
                <ExpandMore />
              ) : null}
              {index === 2 && purchaseOpen ? (
                <ExpandLess />
              ) : index === 2 ? (
                <ExpandMore />
              ) : null}
              {index === 3 && saleOpen ? (
                <ExpandLess />
              ) : index === 3 ? (
                <ExpandMore />
              ) : null}
              {index === 5 && open ? (
                <ExpandLess />
              ) : index === 5 ? (
                <ExpandMore />
              ) : null}
            </ListItemButton>
            {index === 1 && (
              <Collapse in={ledgerOpen} timeout="auto" unmountOnExit>
                <SubList component="div" disablePadding>
                  {["Supplier", "Customer"].map((subtext, index) => (
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
            {index === 2 && (
              <Collapse in={purchaseOpen} timeout="auto" unmountOnExit>
                <SubList component="div" disablePadding>
                  {["Purchase Bill", "Purchase Return", "Paid Payment"].map(
                    (subtext, index) => (
                      <ListItemButton key={subtext} onClick={() => {
                        navigate(`/${subtext}`);
                      }}>
                        <ListItemText primary={subtext} />
                      </ListItemButton>
                    )
                  )}
                </SubList>
              </Collapse>
            )}
            {index === 3 && (
              <Collapse in={saleOpen} timeout="auto" unmountOnExit>
                <SubList component="div" disablePadding>
                  {["Sale Invoice", "Sale Return"].map((subtext, index) => (
                    <ListItemButton key={subtext} onClick={() => {
                      navigate(`/${subtext}`);
                    }}>
                      <ListItemText primary={subtext} />
                    </ListItemButton>
                  ))}
                </SubList>
              </Collapse>
            )}
            {index === 5 && (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <SubList component="div" disablePadding>
                  {["Category", "Product", "HSN", "Unit"].map(
                    (subtext, index) => (
                      <ListItemButton key={subtext} onClick={() => {
                        navigate(`/${subtext}`);
                      }}>
                        <ListItemText primary={subtext} />
                      </ListItemButton>
                    )
                  )}
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

export default SideBar;
