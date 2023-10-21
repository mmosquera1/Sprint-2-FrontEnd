
import { ProductBody } from "../components/ProductBody";
import { TitleBar } from "../components/TitleBar";
//import instrumentos from "../images/instrumentos.jpg";
import data from "../data";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export function ProductDetail() {
  const { id } = useParams();
  const [detalle, setDetalle] = useState([]);

  function getData() {
    //data.id = id;
    const response = data[id-1];
    setDetalle(response);
  }
  //console.log(detalle.titulo);

  useEffect(() => {
    getData();
  });

  return (
    <div className="block">
      <TitleBar titulo="Características del Producto" />
      <ProductBody
        img_src={detalle.img}
        titulo={detalle.titulo}
        categoria={detalle.categoria}
        descripcion={detalle.descripcion}
        caracteristicas="Lorem ipsum dolor sit amet."
        precio={detalle.precio}
      />
      {/* <ProductBody
        img_src={instrumentos}
        titulo="Lorem ipsum"
        descripcion="Lorem ipsum dolor sit amet."
        caracteristicas="Lorem ipsum dolor sit amet."
        precio="$550"
      /> */}
      
    </div>
  );
}
