import React from 'react'
import { Label, Spinner } from 'reactstrap';

function LoadScreen({ size, text }) {
    return (
        <div style={styles.container} >
            <Label style={{ fontWeight: 'bold', }}>{text ? text : 'Loading ....'}
            </Label>
            <Spinner size={size || "large"} color="primary" />
            <h3 className='text-danger text-center mb-3 font-weight-bold'>
                If this take too long please refresh the page</h3>
        </div>

    );
};



const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

}
export default LoadScreen;