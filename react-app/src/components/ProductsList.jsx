const ProductsList = ({list, infoMessage}) => {


  const listProducts = list.map((el) => {
    return <p key={el.id}>{el.name}</p>;
  });

  return <div>{listProducts}</div>;
};

export default ProductsList;