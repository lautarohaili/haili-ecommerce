import ItemCount from "./itemCount";

function Item({ prod, cat, marca, modelo, precio, url, descripcion }) {
  return (
    <>
      <div className="card w-100 mt-5">
        <p className="item__category">
          {prod.cat} - {marca} / {modelo}
        </p>
      </div>
      <div className="card-body">
        <img src={url} alt="" className="w-50" />
        {precio}
        {descripcion}
      </div>

      <div className="card-footer">
        <div>
          <ItemCount stock={10} initial={1} />
        </div>
      </div>
    </>
  );
}

export default Item;
