const productList = [
    {
        title: 'product 1',
        id:1,
    },
    {
        title: 'product 2',
        id:2,
    },
    {
        title: 'product 3',
        id:3,
    },
    {
        title: 'product 4',
        id:4,
    },
    {
        title: 'product 5',
        id:5,
    },
]

export const fetchListOfProducts = async () => {
    // This is an asynchronous function that returns a promise
    // The async keyword allows us to use the await keyword inside this function
  
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // This line creates a new promise that resolves after a delay of 1000 milliseconds (1 second)
    // The setTimeout function is used to create a delay
    // The resolve function is called after the delay, which resolves(resolve:to complete successfuly) the promise

    return productList;
};
  
export const addNewProduct = async (productName) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newlyCreatedProduct = {
        id: productList.length + 1,
        title: productName,
    };
    productList.push(newlyCreatedProduct);
    return newlyCreatedProduct
    
};