import { ProductCard } from "../components/ProductCard";
//import instrumentos from "../images/instrumentos.jpg";
import data from "../data";
import "../components/Recommends.modules.css";

export function Recommends(){
  const cards = data.map((item) => {
    return (
      <ProductCard
        key={item.id}
        img_src={item.img}
        titulo={item.titulo}
        descripcion={item.descripcion}
        precio={item.precio}
        categoria={item.categoria}
        id={item.id}
      />
    );
  });
    return(
        <div>
            <h3>Recomendaciones</h3>
            <div className="grid-container">{cards}
      {/* <ProductCard
        img_src={instrumentos}
        titulo="Lorem ipsum"
        descripcion="Lorem ipsum dolor sit amet."
        precio="$550"
      />
      <ProductCard
        img_src={instrumentos}
        titulo="Lorem ipsum"
        descripcion="Lorem ipsum dolor sit amet."
        precio="$550"
      /> */}
      </div>
        </div>
    )
}