import React from 'react';
import _ from 'lodash';

import ProductGrid from './grid';
import ProductList from './list';

import './product-list-view.component.scss';

export class ProductListView extends React.Component {

    static propTypes = {
        products: React.PropTypes.arrayOf(React.PropTypes.any).isRequired
    }

    constructor(props) {
        
        super(props);

        this.state = {
            products: this.props.products,
            sortBy: 'name',
            mode: 'grid'
        };

    }

    componentWillReceiveProps(nextProps) {
        
        this.setState({ 
            products: nextProps.products 
        });

    }

    sortProducts(e) {

        let products = this.props.products || [];
        let sortBy = e.target.value;

        if (sortBy === 'price-asc' || sortBy === 'price-desc') {

            products = _.sortBy(products, ['price']);


            if (sortBy === 'price-desc') {                
                products.reverse();
            }

            this.setState({ 
                products: products,
                sortBy: sortBy 
            });

        } else {

            this.setState({
                products: _.sortBy(products, ['name']),
                sortBy: sortBy
            });

        }

    }

    render() {

        const {
            products,
            mode
        } = this.state;

        return (
            <div className="product-list">
                {
                    products ? 
                    <div className="well">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="form-inline">
                                    <label className="control-label">Sort By:</label>
                                    <select className="form-control" onChange={this.sortProducts.bind(this)}>
                                        <option value="name">Alphabetically</option>
                                        <option value="price-asc">Price: Low to High</option>
                                        <option value="price-desc">Price: High to Low</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xs-6 text-right">
                                <div className="btn-group" role="group" aria-label="View Options">
                                    <button 
                                        type="button" 
                                        className={'btn ' + (mode === 'grid' ? 'btn-primary' : 'btn-default')} 
                                        onClick={() => this.setState({ mode: 'grid' })}>
                                        <i className="glyphicon glyphicon-th-large"></i>
                                    </button>
                                    <button 
                                        type="button" 
                                        className={'btn ' + (mode === 'list' ? 'btn-primary' : 'btn-default')} 
                                        onClick={() => this.setState({ mode: 'list' })}>
                                        <i className="glyphicon glyphicon-th-list"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> : 
                    null
                }

                {
                    products && mode == 'grid' ?
                    <ProductGrid products={this.state.products} /> :
                    null
                }

                {
                    products && mode == 'list' ?
                    <ProductList products={this.state.products} /> :
                    null
                }

                {
                    !products ?
                    <Spinner /> :
                    null
                }

            </div>
        );
    }

}

export default ProductListView;
