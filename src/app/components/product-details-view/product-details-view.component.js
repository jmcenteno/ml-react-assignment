import React from 'react';

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
                            <img src={this.props.product.picture || 'http://facetheforce.today/random/400?r=1'} className="product-image" />
                            <p>Thrawn jar skywalker antilles hutt jabba ventress hutt tatooine. Darth jinn skywalker grievous darth. Qui-gon amidala luuke jabba windu. Mandalore utapau calamari windu amidala lars ahsoka antilles han. Kamino antilles antilles jinn greedo cade skywalker. Chewbacca moff cade kessel darth utapau hutt skywalker twi'lek. Luke yavin darth calamari qui-gonn skywalker wedge ahsoka. Watto tatooine palpatine droid k-3po darth. Organa kashyyyk antilles solo padmé coruscant chewbacca k-3po. Organa fett moff obi-wan hutt dooku.</p>
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
