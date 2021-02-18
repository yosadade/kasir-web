import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Col } from 'reactstrap'
import { numberWithComma } from '../utils'

const Menu = ({ nama, harga, menu }) => {
    return (
        <Col md={4} xs={6} className="mb-4">
            <Card>
                <CardImg top width="100%" src={
                    "assets/images/" +
                    menu.category.nama.toLowerCase() +
                    "/" +
                    menu.gambar
                } alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{nama}</CardTitle>
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                    <CardText>Rp.{numberWithComma(harga)}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Menu
