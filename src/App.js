import { useQuery } from '@tanstack/react-query';
import './App.css';
import { fetchListOfProducts } from './react-query';


function App() {

  const {data:productList,isLoading} = useQuery({
    queryKey: ['productList'],
    queryFn: () => fetchListOfProducts(),
  });
  // console.log(query);

  if (isLoading) return <h1>Loading Products ! please wait</h1>
  


  return (
    <div className="App">
      <h1>Say Hello</h1>
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
