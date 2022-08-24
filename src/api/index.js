const URL = "https://dummyjson.com";

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${URL}/products`);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${URL}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
