import { useState, useEffect } from "react";

const ItemDetail = ({ match }) => {
  useEffect(() => {
    fetchItem();
  });

  const [item, setItem] = useState({
    images: {},
    rarity: {},
    type: {},
    introduction: {},
  });

  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/${match.params.id}`
    );

    const item = await data.json();
    setItem(item.data);
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center">Detail</h1>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <div className="card ">
              <img
                src={item.images.icon}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{item.rarity.displayValue}</li>
                <li className="list-group-item">{item.type.displayValue}</li>
                <li className="list-group-item">{item.introduction.text}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
