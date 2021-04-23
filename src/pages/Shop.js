import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.com/v2/cosmetics/br/new");
    const items = await data.json();
    setItems(items.data.items);
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center">
        Shop Page
        {items.length <= 0 && (
          <div
            className="spinner-border text-primary d-flex align-self-center"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </h1>
      <div className="list-group">
        {items.map((item) => (
          <Link
            to={`/shop/${item.id}`}
            className="list-group-item list-group-item-action"
            key={item.id}
          >
            <img
              src={item.images.smallIcon}
              alt={item.name}
              className="img-thumbnail"
            ></img>{" "}
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
