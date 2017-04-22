import React from 'react';

import ImageViewer from '../image-viewer';
import './product-details-view.component.scss';

class ProductDetailsView extends React.Component {

    static propTypes = {
        product: React.PropTypes.object,
        category: React.PropTypes.string,
        specs: React.PropTypes.arrayOf(React.PropTypes.any),
    };

    render() {

        return (
            <div>
                <div className="page-header">
                    <h1>
                        <small>{this.props.category}</small>
                        <br/>
                        {this.props.product.name}
                    </h1>
                </div>
                <div className="row">
                    <div className="col-sm-7">
                        
                        <section>
                            <div className="product-image">
                                <ImageViewer images={this.props.product.pictures} />
                            </div>
                            <p>{this.props.product.description}</p>
                        </section>

                    </div>
                    <div className="col-sm-5">
                        
                        <small>Price</small>
                        <br/>
                        <strong className="product-price">{this.props.product.price}</strong>
                        <br/>

                        <aside>
                            <h3>Tech Specs</h3>    
                            {
                                this.props.specs.map((spec, i) => {
                                    return (
                                        <div className="row" key={i}>
                                            <div className="col-xs-5">
                                                <p><strong>{spec.label}</strong></p>
                                            </div>
                                            <div className="col-xs-7">
                                                <p>{spec.value || 'N/A'}</p>
                                            </div>
                                        </div>
                                     );
                                 })
                            }
                        </aside>
                    </div>
                </div>
            </div>
        );

    }

}

export default ProductDetailsView;
