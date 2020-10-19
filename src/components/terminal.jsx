import React from "react";
import Typist from "react-typist-repacked";

export default class Terminal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      typing: true
    }
  }

  typingDelay = 1700;

  typingDone = () => {
    setTimeout(() => {
      this.setState({ typing: false }, () => { this.setState({ typing: true }) })
    }, this.typingDelay)
  }

  render () {

    const texts = [
      "Student",
      "Tech Enthusiast",
      "Hacker",
      "Driven Learner"
    ]

    return (
      <>
        {
          this.state.typing &&
          <Typist
            className='subtitle-typing'
            avgTypingDelay={90}
            stdTypingDelay={0}
            startDelay={1000}
            cursor={{ element: '█' }}
            onTypingDone={this.typingDone}
          >
            echo "{texts[0]}"
            <Typist.Delay ms={this.typingDelay}/>
            <Typist.Backspace count={texts[0].length + 1}/>
            {texts[1]}"
            <Typist.Delay ms={this.typingDelay}/>
            <Typist.Backspace count={texts[1].length + 1}/>
            {texts[2]}"
            <Typist.Delay ms={this.typingDelay}/>
            <Typist.Backspace count={texts[2].length + 1}/>
            {texts[3]}"
            <Typist.Delay ms={this.typingDelay}/>
            <Typist.Backspace count={texts[3].length + 9}/>
          </Typist>
        }
      </>
    )

  }

}

