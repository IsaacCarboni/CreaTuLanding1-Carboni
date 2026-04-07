import Item from "./Item"; 

// 1. Cambiamos "productos" por "items" (que es como lo mandás desde el Container)
const ItemList = ({ items }) => { 
    return (
        <div className="row">
            {/* 2. Agregamos el ?. antes del map para que no explote si está vacío */}
            {items?.map((p) => (
                <Item key={p.id} item={p} />
            ))}
        </div>
    );
};

export default ItemList;