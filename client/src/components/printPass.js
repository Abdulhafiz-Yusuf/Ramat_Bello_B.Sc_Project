import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import { Button } from 'reactstrap';
import GatePassBased from '../views/Dashboard/Guest/GatePassBased';

function PrintPass() {


    const [buttonDisplay, setbtnDisplay] = React.useState({ display: 'flex' })


    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    const backHandler = () => {
        window.location = '/dashboard'
    }

    return (
        <div>
            < div className='mb-5 align-self-center justify-content-lg-center' style={buttonDisplay}>
                <Button className='mr-4 text-light font-weight-bold'
                    color='success'
                    onClick={backHandler}>BACK
                </Button>
                <Button className='text-light font-weight-bold' color='success' onClick={handlePrint}>
                    Print Gate Pass
                </Button>
            </div >
            <GatePassBased ref={componentRef} style={{ buttonDisplay }} />
        </div>

    );
};



export default PrintPass