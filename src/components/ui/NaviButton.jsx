import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LuggageSharpIcon from "@mui/icons-material/LuggageSharp";
import KeySharpIcon from "@mui/icons-material/KeySharp";
import DirectionsCarFilledSharpIcon from "@mui/icons-material/DirectionsCarFilledSharp";

export default function NavButton({ value, setValue }) {
  const [isFixed, setIsFixed] = useState(true);
  const navRef = useRef(null);

  useEffect(() => {
    // Target section to stop fixing the nav button (e.g., footer)
    const target = document.getElementById("footer-section");
    if (!target) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={navRef}
      className={`navi-bottom-nav${isFixed ? " fixed-bottom-nav" : ""}`}
      style={{
        width: "100%",
        maxWidth: 600,
        margin: "0 auto",
        zIndex: 100,
        left: 0,
        right: 0,
        padding: 10,
      }}
    >
      <Box sx={{ width: "100%", borderRadius: 6, overflow: "hidden" }}>
        <BottomNavigation
          sx={{
            backgroundColor: "#f4f5f6",
            fontFamily: "Roboto",
            fontWeight: 600,
            "& .MuiBottomNavigationAction-label": {
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: 600,
              fontFamily: "Roboto",
            },
            boxShadow: 3,
          }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Vehicles"
            icon={<DirectionsCarFilledSharpIcon />}
          />
          <BottomNavigationAction label="Self Drive" icon={<KeySharpIcon />} />
          <BottomNavigationAction
            label="Packages"
            icon={<LuggageSharpIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}
