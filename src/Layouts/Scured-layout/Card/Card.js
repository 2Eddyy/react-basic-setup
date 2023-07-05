import React, { useContext, useEffect, useState } from 'react';
import './Card.css';
import { StateContext } from '../../../Context/Context';
import { addtocart, favorite } from '../../../Component/Action'
function Card() {

    const [data, setData] = useState([]);
    const { state, dispatch } = useContext(StateContext);
    const [product, setProduct] = useState('');
    useEffect(() => {
        fetch('https://fakestoreapi.com/products', {
            method: "get"
        })
            .then((res) => res.json())
            .then((result) => {
                setData(result)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const filterData = (event) => {
        let searchData = event.target.value;
        console.log(searchData, "cxvxjkbv");
        if (searchData !== "") {
            let results = data.filter((item) => {
                return item.category.toLowerCase().startsWith(searchData.toLowerCase());
            })
            setData(results)
        }
        else {
            console.log(data);
            setData(data);
        }
        setProduct(searchData);
    }
    const Refresh = () => {
        setProduct("");
    }
    const AddToCart = (add) => {
        let addtodata = state.cart.find((item) => item.id === add.id);
        if (addtodata) {
            state.cart.map((item) => {
                if (item.id === add.id) {
                    item.qty += 1;
                    return item;
                }
                else {
                    return item;
                }
            })
            return;
        }
        dispatch(addtocart(add));
    }
    const FavoriteItems = (fav) => {
        let favData = state.favorite.find((item) => item.id === fav.id);
        if (favData) {
            state.cart.map((item) => {
                if (item.id === fav.id) {
                    item.qty += 1;
                    return item;
                }
                else {
                    return item;
                }
            })
            return;
        }
        dispatch(favorite(fav));
    }
    return (
        <div className='body'>
            <div className='search-div'>
                <div className="input-group">
                    <div className="form-outline">
                        <input placeholder='Search products ...' type='search' id="form1" className="search" value={product} onChange={filterData} />
                    </div>
                    <div><i className="fa-solid fa-magnifying-glass"></i></div>
                    <button className='refresh-btn' onClick={Refresh}><i className="fa-solid fa-arrows-rotate"></i></button>
                </div>
            </div>
            <div className='container-fluied'>

                <div className='row m-4'>
                    <div className='col d-flex cards mt-5'>
                        {data && data.length > 0 ? (
                            data.map((items, i) => {
                                return (
                                    <div className="card col-sm-2" key={i}>
                                        <div className='text-center'>
                                            <img className="images mt-3" src={items.image} alt="" />
                                        </div>
                                        <div className="card-block">
                                            <p className="card-title text-center">{items.category}</p>
                                            <p className='text-center'>Price <span className='price'>{items.price}$</span></p>
                                            <div className='icons '>
                                                <i className="fa-solid fa-cart-shopping" onClick={(() => AddToCart(items))}></i>
                                                <i className="fa-solid fa-heart" onClick={(() => FavoriteItems(items))}></i>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            // <h3 className='loading'><span>loading...! <i class="fa-solid fa-circle-notch fa-spin"></i></span></h3>
                            <h3 className='text-center'>No Results Founds...!</h3>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card