import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function VehicleCard({ vehicle }) {
  // const vehicle = vehicleData[0]; // Use the first vehicle for now
  // WhatsApp handler
  const handleWhatsApp = () => {
    const message = `Hello, I am interested in booking the vehicle: ${vehicle.name} (${vehicle.fuel}, ${vehicle.transmission}, ${vehicle.seats} seats) at ${vehicle.price}.`;
    const url = `https://wa.me/+917995267449?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "345px" },
        maxWidth: "100%",
        height: 420,
        mt: 3,
        mr: { xs: 0, sm: 2 },
        ml: { xs: 0, sm: 2 },
        mb: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 6,
        boxShadow: 6,
      }}
    >
      <CardMedia
        component="img"
        alt={vehicle.name}
        height="140"
        image={vehicle.image}
        sx={{ height: 180, objectFit: "cover" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", fontFamily: "Roboto" }}
        >
          {vehicle.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontFamily: "Arial",
            fontSize: "14px",
          }}
        >
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "2px 0",
            }}
          >
            <span>Price</span>
            <span>{vehicle.price}</span>
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "2px 0",
            }}
          >
            <span>Fuel</span>
            <span>{vehicle.fuel}</span>
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "2px 0",
            }}
          >
            <span>Transmission</span>
            <span>{vehicle.transmission}</span>
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "2px 0",
            }}
          >
            <span>Seats</span>
            <span>{vehicle.seats}</span>
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "2px 0",
            }}
          >
            <span>Driver Charges</span>
            <span>{vehicle.driverCharges}</span>
          </p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: 0,
          }}
          onClick={handleWhatsApp}
        >
          Check Availability
        </Button>
      </CardActions>
    </Card>
  );
}
