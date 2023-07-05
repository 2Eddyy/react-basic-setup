import React, { useContext } from 'react';
import './Favorite.css';
import { StateContext } from '../../../Context/Context';
import { removeFav } from '../../../Component/Action'

function Favorite() {
    const { state, dispatch } = useContext(StateContext);

    const RemoveItem = (id) => {
        const remove = state.favorite.filter((item) => item.id !== id);
        dispatch(removeFav(remove));
    }
    return (
        <div className='body'>
            <div className='container-fluied'>
                <div className='row m-4'>
                    <div className='col d-flex cards'>
                        {
                            state.favorite.map((items, i) => {
                                return (
                                    <div className="card col-sm-2" key={i}>
                                        <div className='text-center'>
                                            <img className="images mt-3" src={items.image} alt="" />
                                        </div>
                                        <div className="card-block">
                                            <p className="card-title text-center">{items.category}</p>
                                            <p className='text-center'>Price <span className='price'>{items.price}$</span></p>
                                            <div className='remove-btns'>
                                                <button className='remove-btn text-center' onClick={(() => RemoveItem(items.id))}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorite