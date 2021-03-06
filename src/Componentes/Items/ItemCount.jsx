import { useState } from "react";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
import Widget from "../Widget/Widget";
import "../Items/ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  function handleIncrease() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function handleDecrease() {
    if (count > initial) {
      setCount(count - 1);
    }
  }

  if (count == 0) {
    return alert("La cantidad no puede ser menor a 1");
  }

  const add = () => swal("Agregado al Carrito !");

  return (
    <>
      <Button
        className="botones"
        variant="outline-primary"
        onClick={handleDecrease}
      >
        {" - "}
      </Button>
      <label>{count}</label>
      <Button
        className="botones"
        variant="outline-primary"
        onClick={handleIncrease}
      >
        {" + "}
      </Button>
      <div>
        <Button
          className="botonCarrito"
          variant="outline-success"
          onClick={() => add()}
        >
          <Widget />
        </Button>
      </div>
    </>
  );
}

export default ItemCount;
