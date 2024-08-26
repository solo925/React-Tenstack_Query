import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import './App.css';
import { addNewProduct, fetchListOfProducts } from './react-query';


function App() {
  const [productTitle, setProductTitle] = useState('')
  const getQueryClient = useQueryClient();

  const { data: productList, isLoading } = useQuery({
    queryKey: ['productList'],
    queryFn: () => fetchListOfProducts(),
  });
  // console.log(query);
  const {mutateAsync : handleAddnewProductMutation} = useMutation({
    mutationFn: addNewProduct,
    onSuccess: () => {
      getQueryClient.invalidateQueries(['productList'])
    }
  });
  
  async function handleAddnewProduct() {
    await handleAddnewProductMutation(productTitle)
    setProductTitle('')
    
  }
  
  if (isLoading) return <h1>Loading Products ! please wait</h1>
  


  return (
    <div className="App">
      <h1>React QUery demo</h1>
      <div>
        <input name='name'
          type='text' placeholder='Set product title'
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)} />
        <button onClick={handleAddnewProduct} disabled={productTitle.trim() === ''} type='button'>
          Add new Item
        </button>

      </div>
      <ul>
        {
          productList?.length > 0 ? (
            productList.map((product) => <li key={product.id}>{ product.title}</li>)
          ):(<h1>No products found</h1>)
        };
      </ul>

     
    </div>
  );
}

export default App;
