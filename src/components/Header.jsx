import React, { useContext, useEffect, useState } from 'react'
import { Alert, Badge, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import '../assets/css/style.css'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const { cart, count } = useContext(AppContext)
    const [total, setTotal] = useState(0)

    const toggle = () => {
        setIsOpen(prevState => !prevState)
    }

    const calculate = () => {
        const totalPrice = cart.reduce((acc, item) => {
            return (item.price * item.count) + acc
        }, 0)

        // console.log("totalPrice", totalPrice);

        setTotal(totalPrice)
    }

    useEffect(() => {
        calculate()
    }, [count])

    return (
        <div className='header'>
            <Container>
                <div className='text-end'>
                    <Dropdown isOpen={isOpen} toggle={toggle} >
                        <DropdownToggle color='primary'>
                            <AiOutlineShoppingCart />
                            {
                                count > 0 &&
                                <Badge color='danger'>{count}</Badge>
                            }
                        </DropdownToggle>
                        <DropdownMenu >
                            {
                                !cart.length ?
                                    <DropdownItem>
                                        <Alert color='info'>
                                            Your bag is empty!
                                        </Alert>
                                    </DropdownItem>
                                    :
                                    cart.map(item => (
                                        <DropdownItem key={item.id}>
                                            {
                                                item.count > 0 && 
                                                <span>{item.title} x<b>{item.count}</b></span> 
                                            }
                                             {/* {item.title} x<b>{item.count}</b> */}
                                        </DropdownItem>
                                    ))
                            }
                            <DropdownItem divider />
                            <DropdownItem>
                                <Link to='/cart'>
                                    <h5>Total: {total}</h5>
                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Container>
        </div>
    )
}

export default Header