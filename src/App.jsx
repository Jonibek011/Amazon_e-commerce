import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers } from "./slices/UserSlice.js";
function App() {
  const dispatch = useDispatch();

  const { users, status } = useSelector((store) => store.user);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    // if (users && users.data && users.data.best_sellers) {
    //   setProducts(users.data.best_sellers);
    // }
    if (users.data && users.data.best_sellers) {
      setProducts(users.data.best_sellers);
    }
  }, [users]);
  console.log(products);
  return (
    <div className="w-[100vw] h-[100vh] ">
      {products.map((product, index) => {
        return <h1 key={index}>{product.product_title}</h1>;
      })}
    </div>
  );
}

export default App;
