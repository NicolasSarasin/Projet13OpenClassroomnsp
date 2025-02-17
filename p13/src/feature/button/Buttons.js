import { useSelector, useStore } from "react-redux";
import { SuperCremeux } from "./models";
import { getProductList } from "./selectors";



export const Buttons = () => {
    const store = useStore();
    const list = useSelector(getProductList)

    return <div className="Selection">
        <h1>Choisir son menu</h1>
        <div className="CartNavBar">
                <button onClick={() => store.dispatch({type: 'ADD_PRODUCT', payload: SuperCremeux})}>Ajouter un super crémeux</button>
        </div>
        {
            list.map(
                    (item, index) => <span className="SelectedProduct">{item.title} {item.price} €</span>
            )
        } 
    </div>
};