import React from 'react';
import { Link } from 'react-router';

import './grid.component.scss';

class ProductGrid extends React.Component {

    static propTypes = {
        products: React.PropTypes.arrayOf(React.PropTypes.any).isRequired
    }

    constructor(props) {
        
        super(props);

    }

    paginate(arr) {

        const pages = [];
        let page = [];

        arr.forEach((item, i) => {

        page.push(item);

        if ((i + 1) % 3 === 0 || (i + 1) >= arr.length) {
            pages.push(page);
            page = [];
        }

        });

        return pages;

    }

    buildColumns(product, i) {
        return (
            <div className="col-sm-4" key={i}>
                <div className="panel panel-default product-grid-panel">
                    <figure>
                        <img src={product.picture || 'http://facetheforce.today/random/400?r=' + product.id} />
                    </figure>
                    <div className="panel-body">
                        <h3 className="panel-title">{product.name}</h3>
                        <p className="lead">{product.price || 'N/A'}</p>
                        <Link to={'/spaceships/' + product.id} className="btn btn-primary btn-block">View Details</Link>
                    </div>
                </div>
            </div>
        );
    }

    render() {

        const products = this.paginate(this.props.products || []);

        return (
            <div>
                {
                    products.map((row, i) => {
                        return (
                            <div className="row" key={i}>
                                {row.map(this.buildColumns)}
                            </div>
                        );
                    })
                }
            </div>
        );

    }

}

export default ProductGrid;
