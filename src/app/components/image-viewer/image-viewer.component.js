import React from 'react';

import './image-viewer.component.scss';

class ImageViewer extends React.Component {

    static propTypes = {
        images: React.PropTypes.arrayOf(React.PropTypes.string)
    }

    constructor (props) {

        super(props);

        this.state = {
            current: 0
        };

    }

    setCurrent(index) {

        this.setState({ 
            current: index 
        });

    }

    render() {

        return (
            <div className="image-viewer">
                <div className="row">
                    <div className="col-md-2">
                        <div className="thumbnails hidden-xs hidden-sm">
                            {
                                this.props.images.length ? 
                                this.props.images.map((img, i) => {
                                    return (
                                        <a onClick={() => this.setCurrent(i)} key={i}>
                                            <img 
                                                src={img || '../img/no-img.jpg'} 
                                                className={'img-responsive img-thumbnail ' + (this.state.current == i ? 'active' : '')} 
                                            />
                                        </a>
                                    );
                                }) :
                                <img src='../img/no-img.jpg' className="img-responsive img-thumbnail active" />
                            }
                        </div>
                    </div>
                    <div className="col-md-10">
                        <img 
                            src={this.props.images[this.state.current] || '../img/no-img.jpg'} 
                            className="img-responsive current-image hidden-xs hidden-sm" 
                        />
                        <img 
                            src={this.props.images[0] || 'assets/img/no-img.jpg'} 
                            className="img-responsive current-image hidden-md hidden-lg" 
                        />
                    </div>
                </div>
            </div>
        );

    }

}

export default ImageViewer;
