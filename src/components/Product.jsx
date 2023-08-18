import React, { useContext } from 'react'
import { product_list } from '../constants/products'
import { Button, Card, CardBody, CardText, CardTitle, Container, Row } from 'reactstrap'
import { AppContext } from '../context/AppContext'

function Product() {
    const { addToCart } = useContext(AppContext)

    return (
        <Container>
            <Row>
                {
                    product_list.map(item => (
                        <div
                            key={item.id}
                            className='col-md-4 mb-4'
                        >
                            <Card className='cards'>
                                <div className='product-img-wrapper'>
                                    <img
                                        alt="Sample"
                                        src={item.img_url}
                                    />
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {item.title}
                                    </CardTitle>
                                    <CardText>
                                        {
                                            item.old_price &&
                                            <del className='text-danger'>{item.old_price}</del>
                                        }
                                        {" "}
                                        {
                                            <strong>{item.price}</strong>
                                        }
                                    </CardText>
                                    <Button onClick={() => addToCart(item)}>
                                        Add to cart
                                    </Button>
                                </CardBody>
                            </Card>

                        </div>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Product