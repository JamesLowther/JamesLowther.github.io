import React from "react";
import Typist from "react-typist-repacked";

export default class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: true,
    };
  }

  typingDelay = 1700;
  typingFinishDelay = 1000;

  typingDone = () => {
    setTimeout(() => {
      this.setState({ typing: false }, () => {
        this.setState({ typing: true });
      });
    }, this.typingDelay);
  };

  render() {
    return (
      <>
        <div className="inline font-mono" style={{ fontWeight: "bold" }}>
          root@ca-orbit-iss:~${" "}
        </div>
        {this.state.typing && (
          <Typist
            className="subtitle-typing inline font-mono"
            avgTypingDelay={90}
            stdTypingDelay={0}
            startDelay={1000}
            cursor={{ element: "|", blink: false }}
            onTypingDone={this.typingDone}
          >
            echo "Linux hack
            <Typist.Delay ms={400} />
            <Typist.Backspace count={3} />
            4ck3r"
            <Typist.Delay ms={this.typingDelay} />
            <Typist.Backspace count={22} />
            <Typist.Delay ms={this.typingFinishDelay} />
            nmap -sV -sC -p- security.enthusiast
            <Typist.Delay ms={this.typingDelay} />
            <Typist.Backspace count={40} />
            <Typist.Delay ms={this.typingFinishDelay} />
            bash ./automate-everything.sh
            <Typist.Delay ms={this.typingDelay} />
            <Typist.Backspace count={29} />
            <Typist.Delay ms={this.typingFinishDelay} />
            docker run -d -p 1337:80 scalable-services:stable
            <Typist.Delay ms={this.typingDelay} />
            <Typist.Backspace count={49} />
            <Typist.Delay ms={this.typingFinishDelay} />
            gcc capable.c -o developer
            <Typist.Delay ms={this.typingDelay} />
            <Typist.Backspace count={26} />
            <Typist.Delay ms={this.typingFinishDelay} />
            curl -L https://www.scriptkitties.ca/
            <Typist.Delay ms={this.typingDelay} />
            <Typist.Backspace count={37} />
            <Typist.Delay ms={this.typingFinishDelay} />
            rm -rf --no-presrve
            <Typist.Delay ms={500} />
            <Typist.Backspace count={3} />
            erve-root /
            <Typist.Delay ms={this.typingDelay} />
            <Typist.Backspace count={27} />
            <Typist.Delay ms={this.typingFinishDelay} />
          </Typist>
        )}
      </>
    );
  }
}
