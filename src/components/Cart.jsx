import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Alert } from 'reactstrap';

function Cart() {
    const { cart, setCount } = useContext(AppContext)
    // console.log("cart", cart);

    const decreaseCount = (id) => {
        const selectedProduct = cart.find(item => item.id === id)
        if(selectedProduct.count == 0) return
        selectedProduct.count > 0 ?
            selectedProduct.count -= 1 : ""

        setCount(prevState => prevState > 0 &&
            prevState - 1)
    }

    const increaseCount = (id) => {
        const selectedProduct = cart.find(item => item.id === id)
        if(selectedProduct.count == 10) return
        selectedProduct.count < 10 ?
            selectedProduct.count += 1 : ""

        setCount(prevState => prevState + 1)

    }

    return (
        <div>
            {
                !cart.length ?
                    <Alert
                        color='info'
                        className='mt-4 text-center'
                    >
                        <h3>Your basket is empty!</h3>
                    </Alert>
                    :
                    cart.map(item => (
                        <div key={item.id} className='col-md-12 mb-4'>
                            <div className='d-flex align-items-center gap-5'>
                                <div className='img-wrapper'>
                                    <img src={item.img_url} alt="Photo" />
                                </div>
                                <div>
                                    <h4>
                                        {item.title}
                                    </h4>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <button
                                        className='btn btn-primary'
                                        onClick={() => {

                                            decreaseCount(item.id)
                                        }}
                                    >
                                        -
                                    </button>
                                    <span>{item.count}</span>
                                    <button
                                        className='btn btn-primary'
                                        onClick={() => {
                                            increaseCount(item.id)
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))
            }
        </div >
    )
}

export default Cart