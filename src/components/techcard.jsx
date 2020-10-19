import React from "react"
import Img from 'gatsby-image';

class TechCard extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div 
        class="h-24 w-24 mb-8"
        onMouseEnter={this.handleMouseHover} 
        onMouseLeave={this.handleMouseHover}
      >
        <Img
          fluid={this.props.fluid} 
          className="w-16 mx-4"
        />
        {
          this.state.isHovering &&
          <p class="text-white text-center text-xl mt-1">{this.props.name}</p>
        }
      </div>
    )
  }
}

export default TechCard;