import ItemCount from "./ItemCount";
const ItemDetail = ({ item }) => {
  
  const handleOnAdd = (quantity) => {
    alert(`¡Sumaste ${quantity} unidades de ${item.name} al carrito! 🍷`);
    console.log("Cantidad seleccionada:", quantity);
  };

  return (
    <div style={{ padding: "20px", display: "flex", gap: "20px" }}>
      <img src={item.img} alt={item.name} style={{ width: "300px" }} />
      <div>
        <h1>{item.name}</h1>
        <p>{item.category}</p>
        <h2>${item.price}</h2>

        {}
        <ItemCount stock={10} initial={1} onAdd={handleOnAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;