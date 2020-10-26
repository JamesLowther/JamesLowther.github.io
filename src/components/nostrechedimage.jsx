import React from "react"
import Img from "gatsby-image"

const NonStretchedImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth && props.fluid.presentationHeight) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        // maxHeight: window.innerHeight - 50px,
        height: window.innerHeight,
        maxHeight: props.fluid.presentationHeight,
        width: "auto",
        margin: "auto auto 0", // Used to center the image
      },
    }
  }

  return <Img {...normalizedProps} />
}
export default NonStretchedImage
