import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

class TechCard extends React.Component {
  constructor(props) {
    super(props);

    this.enableHover = this.enableHover.bind(this);
    this.disableHover = this.disableHover.bind(this);

    this.state = {
      hover: false,
    };
  }

  enableHover() {
    this.setState({ hover: true });
  }

  disableHover() {
    this.setState({ hover: false });
  }

  render() {
    return (
      <div
        id={this.props.name}
        className="h-24 w-24 mb-6"
        onMouseEnter={this.enableHover}
        onMouseLeave={this.disableHover}
        role="none"
      >
        <GatsbyImage
          onMouseEnter={this.enableHover}
          onMouseLeave={this.disableHover}
          image={getImage(this.props.image)}
          className="w-16 mx-4"
          role="none"
          alt="Skill card logo"
        />
        {this.state.hover && (
          <p className="text-white text-center text-xl">{this.props.name}</p>
        )}
      </div>
    );
  }
}

export default TechCard;
