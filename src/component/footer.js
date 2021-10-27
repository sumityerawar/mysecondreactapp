import React from 'react';

const footer = (props) => {
    return (
        <>
          <hr/>
            <center>
                <h3> &copy; Developer Funnel - {props.month} {props.year}</h3>  
            </center>  
        </>
    )
}

export default footer;