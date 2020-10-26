import React from "react"
import NonStretchedImage from "./nostrechedimage"

import LightboxReact from "lightbox-react"
import "lightbox-react/style.css"

export default class Lightbox extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;

    const array = []
    this.props.images.forEach(image =>
      array.push(<NonStretchedImage fluid={image.node.childImageSharp.fluid} />)
    )

    console.log(array);

    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          <p class={this.props.textClass}>{this.props.text}</p>
        </button>
 
        {isOpen && (
          <LightboxReact
            mainSrc={array[photoIndex]}
            nextSrc={array[(photoIndex + 1) % array.length]}
            prevSrc={array[(photoIndex + array.length - 1) % array.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + array.length - 1) % array.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.props.images.length,
              })
            }
            enableZoom={false}
            clickOutsideToClose={true}
          />
        )}
      </div>
    );
  }
}