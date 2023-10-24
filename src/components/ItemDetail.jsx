import React from 'react'
import { useParams } from 'react-router-dom'
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from "@mui/joy/Typography";


const ItemDetail = ({ productos }) => {

  const { id } = useParams()

  const productoFiltrado = productos.filter((producto) => producto.id == id)

  console.log(productoFiltrado)
  return (
    <>

      {
        productoFiltrado.map((p) => {
          return (
            <Card
              sx={{
                width: 320,
                maxWidth: "100%",
                boxShadow: "lg",
                margin: 1
              }}
            >
              <CardOverflow>
                <AspectRatio sx={{ minWidth: 200 }}>
                  <img
                    src={p.img}
                    srcSet={p.img}
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
              </CardOverflow>

              <CardContent>
                <Typography level="body-xs">{p.description}</Typography>
                <Typography
                  sx={{
                    fontWeight: "md",
                    cursor: "pointer",
                  }}
                >
                  {p.name}
                </Typography>


                <Typography
                  level="title-lg"
                  sx={{ mt: 1, fontWeight: "xl" }}
                  endDecorator={
                    <Chip component="span" size="sm" variant="soft" color="success">
                      Oferta
                    </Chip>
                  }
                >
                  $ {p.price}
                </Typography>
                <Typography level="body-sm">
                  (Solo quedan <b>{p.stock}</b> en stock!)
                </Typography>
              </CardContent>
              <CardOverflow>
                <Button variant="solid" color="danger" size="lg">
                  Añadir al carrito
                </Button>
              </CardOverflow>
            </Card>
          )
        })
      }





    </>
  )

}

export default ItemDetail