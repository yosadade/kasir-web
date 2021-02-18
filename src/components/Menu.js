import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Col } from 'reactstrap'

const Menu = ({ nama, harga }) => {
    return (
        <Col md={4} xs={6} className="mb-4">
            <Card>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{nama}</CardTitle>
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                    <CardText>Rp.{harga}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Menu
