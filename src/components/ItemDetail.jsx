    import { useState, useContext } from 'react';
    import { CartContext } from '../context/CartContext';
    import ItemCount from './ItemCount';
    import { Link } from 'react-router-dom';
    import Swal from 'sweetalert2';

    const ItemDetail = ({ item }) => {
    
        if (!item) {
            return <div className="text-center mt-5"><h3>Cargando los detalles de tu bodega...</h3></div>;
        }

        const { addItem } = useContext(CartContext);
        const [compraFinalizada, setCompraFinalizada] = useState(false);

        const onAdd = (cantidad) => {
            addItem(item, cantidad);
            setCompraFinalizada(true);

            Swal.fire({
                title: "¡Excelente!",
                text: `Sumaste ${cantidad} ${item.nombre} a tu bodega.`,
                icon: "success",
                timer: 2000,
                showConfirmButton: false
            });
        };
    
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                    <img src={item.img} alt={item.nombre} className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6">
                        <h2>{item.nombre}</h2>
                        <p className="lead">{item.descripcion}</p>
                        <h3 className="text-primary">$ {item.precio}</h3>
                        <p>Stock disponible: {item.stock}</p>

                        {compraFinalizada ? (
                            <div className="mt-3">
                                <Link to="/cart" className="btn btn-success me-2">Ir al carrito</Link>
                                <Link to="/" className="btn btn-outline-primary">Seguir comprando</Link>
                            </div>
                        ) : (
                            <ItemCount 
                                stock={item.stock} 
                                initial={1} 
                                onAdd={onAdd} 
                            />
                        )}                  
                    </div>
                </div>
            </div>
        );
    };

    export default ItemDetail;