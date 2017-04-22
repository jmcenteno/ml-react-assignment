import React from 'react';
import { Link } from 'react-router';

import './list.component.scss';

class ProductList extends React.Component {

    static propTypes = {
        products: React.PropTypes.arrayOf(React.PropTypes.any).isRequired
    }

    constructor(props) {
        
        super(props);

    }

    render() {

        return (
            <div>
                {
                    this.props.products.map((product, i) => {
                        return (
                            <div key={i}>
                                { i ? <hr/> : null }
                                <div className="media product-media">
                                    <div className="media-left">
                                        <figure>
                                            <img src={product.pictures[0] || '../img/no-img.jpg'} />
                                        </figure>
                                    </div>
                                    <div className="media-body">
                                        <h3 className="media-heading">{product.name}</h3>
                                        <p className="lead">{product.price || 'N/A'}</p>
                                    </div>
                                    <div className="media-right">
                                        <Link to={'/spaceships/' + product.id} className="btn btn-primary">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>  
        );

    }

}

export default ProductList;
