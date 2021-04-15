import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

class TechCard extends React.Component {
  constructor(props) {
    super(props)

    this.enableHover = this.enableHover.bind(this)
    this.disableHover = this.disableHover.bind(this)

    this.state = {
      hover: false,
    }
  }

  enableHover() {
    this.setState({ hover: true })
    console.log(this.props.name + " enable")
  }

  disableHover() {
    this.setState({ hover: false })
    console.log(this.props.name + " disable")
  }

  render() {
    return (
      <div
        id={this.props.name}
        className="h-24 w-24 mb-4"
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
        />
        {this.state.hover && (
          <p className="text-white text-center text-xl mt-1">{this.props.name}</p>
        )}
      </div>
    )
  }
}

export default TechCard
