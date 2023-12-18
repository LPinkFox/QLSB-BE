const importAll = (context) => context.keys().map(context);
const images = importAll(require.context('./assets/', false, /\.(png|jpe?g|svg)$/));

const Product = [];

const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:8080/NguoiDung/AllProduct');
        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
            const product = data[i];

            // Use dynamic import to get the image source
            product.imgsource = images[i];

            // Add the modified product to the Product array
            Product.push(product);
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

// Assuming Products is meant to be an array of products, you need to assign it the value of the Product array
const Products = Product;

// Export the Products array
export { Products };
