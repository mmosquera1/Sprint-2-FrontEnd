import "../components/Categories.modules.css";
import { CategoriesCard } from "./CategoriesCard";
import accesorios from "../images/accesorios.jpg";
import cuerda from "../images/cuerda.jpg";
import percusion from "../images/percusion.jpg";
import viento from "../images/viento.jpg";

export function Categories(){

    return(

        <div >
            <h3>Categorias de instrumentos</h3>
            <div className="categorias">
                <CategoriesCard 
                    titulo="Accesorios"
                    img_src={accesorios}
                    descripcion="Gran variedad de accesorios"
                />
                <CategoriesCard 
                    titulo="Cuerda"
                    img_src={cuerda}
                    descripcion="Instrumentos de cuerda"
                />
                <CategoriesCard 
                    titulo="Percusión"
                    img_src={percusion}
                    descripcion="Instrumentos de percusión"
                />
                <CategoriesCard 
                    titulo="Viento"
                    img_src={viento}
                    descripcion="Instrumentos de viento"
                />
            </div>

        </div>
    )
}