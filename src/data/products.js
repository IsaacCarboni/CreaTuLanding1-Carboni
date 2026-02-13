const products = [
  { id: "1", name: "Malbec Reserva", price: 1500, category: "vinos", img: "/img/malbec.jpg", description: "Un vino tinto con cuerpo y notas de frutos rojos." },
  { id: "2", name: "Chardonnay", price: 1200, category: "vinos", img: "/img/cabernet.jpg", description: "Blanco refrescante con notas cítricas." },
  { id: "3", name: "Oferta Especial", price: 900, category: "ofertas", img: "/img/espumante.jpg", description: "Nuestro espumante premium en promoción." }
];

// Función para obtener todos o filtrar por categoría
export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = category 
        ? products.filter(item => item.category === category) 
        : products;
      resolve(data);
    }, 500);
  });
};

// Función para obtener UN solo producto por su ID
export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find(item => item.id === id);
      resolve(product);
    }, 500);
  });
};