import * as React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import AspectRatio from '@mui/joy/AspectRatio';
import { Link } from "react-router-dom";

const Item = ({ name, description, price, stock, id, img }) => {
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
      <CardOverflow>
        <Link to={`/product/${id}`}>
          <AspectRatio sx={{ minWidth: 300 }} ratio="4/3">
            <img
              src={img}
              srcSet={img}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </Link>
      </CardOverflow>

      <CardContent>
        <Typography level="body-xs">{description}</Typography>
        <Link to={`/product/${id}`}>
          <Typography
            sx={{
              fontWeight: "md",
              cursor: "pointer",
              fontSize: 20,
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
        <Link>
        <Button variant="solid" color="danger" size="lg">
          Ver detalle
        </Button>
        </Link>
      </CardOverflow>

    </Card>
  );
};
export default Item;
