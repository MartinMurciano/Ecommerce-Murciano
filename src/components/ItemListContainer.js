import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return(
        <div>
            <p>
            Bienvenido al sitio {props.name}
            </p>
            <ItemCount />
        </div>
    );
};

export default ItemListContainer;