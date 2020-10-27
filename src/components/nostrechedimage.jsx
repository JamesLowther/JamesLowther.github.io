import React from "react"
import Img from "gatsby-image"

const NonStretchedImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth && props.fluid.presentationHeight) {
    normalizedProps = {
      ...props,
      // style: {
      //   ...(props.style || {}),
      //   maxWidth: props.fluid.presentationWidth,
      //   // maxHeight: window.innerHeight - 50px,
      //   height: window.innerHeight,
      //   maxHeight: props.fluid.presentationHeight,
      //   width: "auto",
      //   margin: "50px auto 0", // Used to center the image
      // },
      className: "w-3/5 mx-auto mt-12"
    }
  }

  return <div class="h-screen flex items-center"><Img {...normalizedProps} /></div>
}
export default NonStretchedImage
