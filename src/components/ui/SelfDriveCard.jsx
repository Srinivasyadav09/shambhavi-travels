import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function SelfDriveCard({ selfDriveOption }) {
  // WhatsApp handler
  const handleWhatsApp = () => {
    const message = `Hello, I am interested in the self-drive car: ${selfDriveOption.vehicle} (${selfDriveOption.type}, ${selfDriveOption.transmission}, ${selfDriveOption.fuel}, ${selfDriveOption.seats} seats) at ₹${selfDriveOption.pricePerDay}/day.`;
    const url = `https://wa.me/919000000000?text=${encodeURIComponent(message)}`;
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
        alt={selfDriveOption.vehicle}
        image={selfDriveOption.image}
        sx={{ height: 180, objectFit: "cover" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            fontFamily: "Inter, Roboto, Arial, Helvetica, sans-serif",
          }}
        >
          {selfDriveOption.vehicle}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontFamily: "Inter, Roboto, Arial, Helvetica, sans-serif",
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
            <span>Type</span>
            <span>{selfDriveOption.type}</span>
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "2px 0",
            }}
          >
            <span>Transmission</span>
            <span>{selfDriveOption.transmission}</span>
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "2px 0",
            }}
          >
            <span>Fuel</span>
            <span>{selfDriveOption.fuel}</span>
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "2px 0",
            }}
          >
            <span>Seats</span>
            <span>{selfDriveOption.seats}</span>
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "2px 0",
            }}
          >
            <span>Price Per Day</span>
            <span>₹{selfDriveOption.pricePerDay}</span>
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
          Check Now
        </Button>
      </CardActions>
    </Card>
  );
}
