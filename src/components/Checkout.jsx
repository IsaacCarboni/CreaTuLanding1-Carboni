import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config"; 
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Swal from "sweetalert2";

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [orderId, setOrderId] = useState("");

    const comprar = (data) => {

        const orden = {
            cliente: data,
            productos: cart,
            total: totalPrice(),
            fecha: Timestamp.now()
        };

        const ordersRef = collection(db, "orders");

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id);
                clearCart();
                
                Swal.fire({
                    title: "¡Compra exitosa!",
                    text: `Tu número de orden es: ${doc.id}`,
                    icon: "success"
                });
            })
            
    };

    if (orderId) {
        return (
            <div className="container mt-5">
                <h2>¡Muchas gracias por tu compra!</h2>
                <p>Tu número de pedido es: <strong>{orderId}</strong></p>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Finalizar Compra</h2>
            <form onSubmit={handleSubmit(comprar)}>
                <div className="mb-3">
                    <input 
                        type="text" 
                        placeholder="Ingresá tu nombre" 
                        className="form-control"
                        {...register("nombre", { required: true, minLength: 3 })} 
                    />
                    {errors.nombre && <small className="text-danger">El nombre es obligatorio (mín. 3 letras)</small>}
                </div>

                <div className="mb-3">
                    <input 
                        type="email" 
                        placeholder="Ingresá tu e-mail" 
                        className="form-control"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
                    />
                    {errors.email && <small className="text-danger">Ingresá un email válido</small>}
                </div>

                <div className="mb-3">
                    <input 
                        type="phone" 
                        placeholder="Ingresá tu teléfono" 
                        className="form-control"
                        {...register("telefono", { required: true })} 
                    />
                    {errors.telefono && <small className="text-danger">El teléfono es obligatorio</small>}
                </div>

                <button type="submit" className="btn btn-primary">Comprar</button>
            </form>
        </div>
    );
};

export default Checkout;