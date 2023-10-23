import * as React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";

const Item = ({ name, description, price, stock, id }) => {
  return (
    <Card
      sx={{
        width: 320,
        maxWidth: "100%",
        boxShadow: "lg",
        margin: 1,
        display: "inline-block",
      }}
    >
      <CardContent>
        <Typography level="body-xs">{description}</Typography>
        {/* <Link
          href="#product-card"
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
        >
          {name}
        </Link> */}
        <Link to={`/product/${id}`}> 
          <Typography
            sx={{
              fontWeight: "md",
              cursor: "pointer",
            }}
          >
            {name}
          </Typography>
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Oferta
            </Chip>
          }
        >
          $ {price}
        </Typography>
        <Typography level="body-sm">
          (Solo quedan <b>{stock}</b> en stock!)
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
          Añadir al carrito
        </Button>
      </CardOverflow>
    </Card>
  );
};
export default Item;
