import React from "react";

const Coloured = (WrappedComponent) =>{
    return(props) =>{
        return(
            <div className="text-success">
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Coloured;