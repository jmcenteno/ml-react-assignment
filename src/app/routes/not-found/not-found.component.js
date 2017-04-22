import React from 'react';

import './not-found.component.scss';

class NotFound extends React.Component {

    render () {

        return (
            <div className="page-not-found">
                <div className="container text-center">
                    <i className="fa fa-frown-o text-muted"></i>
                    <br/>
                    <h1>Page Not Found</h1>
                </div>
            </div>
        );

    }

}

export default NotFound;
