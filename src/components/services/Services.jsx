import React, { useState } from "react";
import NavButton from "../ui/NaviButton";
import VehicleCard from "../ui/VehicleCard";
import TravelPackageCard from "../ui/PackagesCard";
import packageData from "../../data/packagedata";
import SelfDriveCard from "../ui/SelfDriveCard";
import selfDrivingData from "../../data/selfdrivingdata";
import vehicleData from "../../data/vehiclesdata";

export default function Services() {
  const [selected, setSelected] = useState(0);
  return (
    <div
      className="mt-6"
      style={{
        paddingLeft: "1rem",
        paddingRight: "1rem",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <NavButton value={selected} setValue={setSelected} />
      <div className="mt-6">
        {selected === 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              maxWidth: "100%",
              overflow: "hidden",
              justifyContent: "center",
            }}
          >
            {vehicleData.map((vehicle, idx) => (
              <VehicleCard key={idx} vehicle={vehicle} />
            ))}
          </div>
        )}
        {selected === 1 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              maxWidth: "100%",
              overflow: "hidden",
              justifyContent: "center",
            }}
          >
            {selfDrivingData.map((option, idx) => (
              <SelfDriveCard key={idx} selfDriveOption={option} />
            ))}
          </div>
        )}
        {selected === 2 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              maxWidth: "100%",
              overflow: "hidden",
              justifyContent: "center",
            }}
          >
            {packageData.map((pkg, idx) => (
              <TravelPackageCard key={idx} pkg={pkg} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
