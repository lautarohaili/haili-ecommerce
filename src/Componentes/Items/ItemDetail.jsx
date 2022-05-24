function ItemDetail({ cat, marca, modelo, precio, url, descripcion }) {
  return (
    <div>
      <img src={url} alt="imagen" />
      <p>
        {marca} - {modelo}
      </p>
      <p>{precio}</p>
      <p>{cat}</p>
    </div>
  );
}

export default ItemDetail;
