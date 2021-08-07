import React, { useContext } from 'react'
import { Button, Card, ListGroup, ListGroupItem } from 'reactstrap';
import { globalStore } from '../ContextAPI/globalStore'
import { viewPageAction } from '../ContextAPI/actions/UserActions';

function CardComponent(ImgSrc, ID) {
    const { dispatch } = useContext(globalStore)
    const ViewHandler = () => {

    }

    return (
        <Card className='d-flex flex-row justify-content-center '  >

            <div class='d-flex w-25 flex-column border border-danger' style={{ alignItems: 'center', justifyContent: 'center' }} >
                <img style={{ width: '100px', height: '100px' }} src={ImgSrc} />
                <p>Name</p>
                <p>ID</p>
            </div>

            <div className='border w-50' >
                <div style={{ alignContent: 'center' }}>
                    <ListGroup>
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Morbi leo risus</ListGroupItem>
                        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                </div>
            </div>

            <div className='d-flex w-25 flex-column align-items-center justify-content-center border border-danger' >
                <Button
                    id={ID}
                    onClick={ViewHandler}
                    className='m-2 p-2 w-100 bg-success font-weight-bold'>View Inmate </Button>
                <Button
                    id={ID}
                    onClick={() => dispatch(viewPageAction('generatePass'))}
                    className='m-2 p-2 w-100 bg-success font-weight-bold'>Generate Pass</Button>
            </div>

        </Card >
    )
}

export default CardComponent
