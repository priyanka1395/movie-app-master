import React from 'react'
import Header from './Header'
function PageWrapper(props) {
    return (
        <div>
            <Header query={props.query || ''} />
            <div className="components">
                {props.children}
            </div>
        </div>
    )
}

export default PageWrapper