import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

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

                            <div className="visible-xs">
                                <small>Price</small>
                                <br/>
                                <strong className="product-price">{this.props.product.price}</strong>
                                <br/>
                                <br/>
                            </div>

                            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                <Tab eventKey={1} title="Description">
                                    <p>{this.props.product.description}</p>
                                </Tab>
                                <Tab eventKey={2} title="Reviews">
                                    {
                                        this.props.product.reviews.length ?
                                        this.props.product.reviews.map((item) => {
                                            return (
                                                <div className="review"></div>
                                            );
                                        }) :
                                        <p>There are no reviews for this product.</p>
                                    }
                                </Tab>
                            </Tabs>

                        </section>

                    </div>
                    <div className="col-sm-5">
                        
                        <div className="hidden-xs">
                            <small>Price</small>
                            <br/>
                            <strong className="product-price">{this.props.product.price}</strong>
                            <br/>
                        </div>

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
