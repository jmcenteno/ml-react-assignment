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
                    <div className="col-sm-2">
                        <div className="thumbnails">
                            {
                                this.props.images.map((img, i) => {
                                    return (
                                        <a onClick={() => this.setCurrent(i)} key={i}>
                                            <img 
                                                src={img || '../img/no-img.jpg'} 
                                                className={'img-responsive img-thumbnail ' + (this.state.current == i ? 'active' : '')} 
                                            />
                                        </a>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <img 
                            src={this.props.images[this.state.current] || '../img/no-img.jpg'} 
                            className="current-image img-responsive" 
                        />
                    </div>
                </div>
            </div>
        );

    }

}

export default ImageViewer;
