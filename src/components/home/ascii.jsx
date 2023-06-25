import React from "react";
import PropTypes from "prop-types";

class ASCIIAnimation extends React.PureComponent {
  constructor(props) {
    super(props);

    this._isMounted = false;

    this._div = React.createRef();
    this._canvas = React.createRef();

    this._handleResize = this._handleResize.bind(this);

    this.state = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    this._isMounted = true;

    this._resizeObserver = new ResizeObserver(entries => {
      this._handleResize();
    });

    this._size = {
      width: this._div.current.offsetWidth,
      height: this._div.current.offsetHeight,
    };

    this._resizeObserver.observe(this._div.current);

    this._start();
  }

  componentWillUnmount() {
    this._isMounted = false;
    this._resizeObserver.disconnect();
  }

  async _start() {
    this.didReset = false;

    while (this._isMounted && !this._getSourceData()) {}

    if (this._isMounted) {
      this.ctx = this._canvas.current.getContext("2d");
      let [renderedFrames, currentFrame_i] = await this._preRender();

      if (renderedFrames) {
        this.renderedFrames = renderedFrames;
        this.currentFrame_i = currentFrame_i;
        this._playRendered();
      }
    }
  }

  _handleResize() {
    if (
      Math.abs(this._div.current.offsetWidth - this._size.width) <= 3 ||
      Math.abs(this._div.current.offsetHeight - this._size.height) <= 3
    ) {
      return;
    }

    this._size.width = this._div.current.offsetWidth;
    this._size.height = this._div.current.offsetHeight;

    clearTimeout(this.resizeID);
    this.resizeID = setTimeout(async () => {
      this.didReset = true;
      await this._sleep(100);

      clearInterval(this.intervalID);
      this.forceUpdate();
      this._start();
    }, 75);
  }

  _getSourceData() {
    // Calculate dimensions of frame in pixels.
    let frameX = Math.floor(this.props.source[0][0].length / 3);
    let frameY = this.props.source[0].length;
    let frameRatio = frameX / frameY;
    let numFrames = this.props.source.length;

    if (!this._canvas.current || !this._div.current) return false;

    // Calculate size of the parent div in the DOM.
    let parentWidth = this._div.current.offsetWidth - 5;
    let parentHeight = this._div.current.offsetHeight - 5;
    let parentRatio = parentWidth / parentHeight;

    let pixelSize, newCanvasWidth, newCanvasHeight;

    if (frameRatio > parentRatio) {
      newCanvasWidth = parentWidth;
      newCanvasHeight = Math.floor(frameY * (parentWidth / frameX));
      pixelSize = parentWidth / frameX;
    } else {
      newCanvasWidth = Math.floor(frameX * (parentHeight / frameY));
      newCanvasHeight = parentHeight;
      pixelSize = parentHeight / frameY;
    }

    newCanvasWidth -= frameX * this.props.squishiness;
    newCanvasHeight -= frameY * this.props.squishiness;

    this.setState({ width: newCanvasWidth, height: newCanvasHeight });

    this.sourceData = {
      frameX: frameX,
      frameY: frameY,
      canvasWidth: newCanvasWidth,
      canvasHeight: newCanvasHeight,
      pixelSize: pixelSize,
      numFrames: numFrames,
    };

    return true;
  }

  _convertColor(str_hex) {
    let red = ["0", "36", "72", "109", "145", "182", "218", "255"];
    let green = ["0", "36", "72", "109", "145", "182", "218", "255"];
    let blue = ["0", "85", "170", "255"];

    let color_int = parseInt("0x" + str_hex);

    // Convert from 8-bit to 24-bit equivalent.
    let color =
      "rgb(" +
      red[(color_int & 0xe0) >> 5] +
      "," +
      green[(color_int & 0x1c) >> 2] +
      "," +
      blue[color_int & 0x03] +
      ")";

    return color;
  }

  async _preRender() {
    let renderedFrames = [];

    let currentFrame_i = 0;
    let lastTime = Date.now();

    for (let i = 0; i < this.sourceData.numFrames; i++) {
      if (!this._isMounted || this.didReset) {
        return [null, null];
      }

      // Create a new canvas for the frame.
      let preCanvas = document.createElement("canvas");
      preCanvas.width = this.sourceData.canvasWidth;
      preCanvas.height = this.sourceData.canvasHeight;

      let preCtx = preCanvas.getContext("2d");

      preCtx.font = this.sourceData.pixelSize + "px Courier New";

      // Render the frame at index i.
      for (let y = 0; y < this.sourceData.frameY; y++) {
        let line = this.props.source[i][y];

        for (let x = 0; x < this.sourceData.frameX; x++) {
          let start = x * 3;
          // Draw a single pixel.
          preCtx.fillStyle = this._convertColor(
            line.slice(start + 1, start + 3)
          );
          preCtx.fillText(
            line[start],
            x * (this.sourceData.pixelSize - this.props.squishiness) + 2,
            this.sourceData.pixelSize + y * this.sourceData.pixelSize
          );
        }
      }
      // Add the rendered canvas to the array.
      renderedFrames.push(preCanvas);

      if (this.didReset) {
        return [null, null];
      }

      // Display partial render.
      let now = Date.now();
      if (now - lastTime >= this.props.frameDelay) {
        // If there is a frame rendered for us to draw.
        if (currentFrame_i < renderedFrames.length) {
          await this._drawIntermediateFrame(
            renderedFrames[currentFrame_i],
            i / this.props.source.length
          );

          currentFrame_i = currentFrame_i + (1 % this.sourceData.numFrames);
          lastTime = now;
        }
      }
    }
    return [renderedFrames, currentFrame_i];
  }

  async _drawIntermediateFrame(frame, progress) {
    // Draw the frame.
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.drawImage(frame, 0, 0);

    let padding = 20;
    this.ctx.lineWidth = 3;

    let radius = this.sourceData.canvasWidth / 60;
    let radOffset = 1.5 * Math.PI;

    this.ctx.beginPath();
    this.ctx.arc(
      this.ctx.canvas.width - radius - padding,
      radius + padding,
      radius,
      radOffset,
      2 * Math.PI * progress + radOffset
    );
    this.ctx.strokeStyle = "#FFFFFF";
    this.ctx.stroke();

    await this._sleep(1);
  }

  _playRendered() {
    this.intervalID = setInterval(() => {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.ctx.drawImage(this.renderedFrames[this.currentFrame_i], 0, 0);
      this.currentFrame_i =
        (this.currentFrame_i + 1) % this.sourceData.numFrames;
    }, this.props.frameDelay);
  }

  async _sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  render() {
    return (
      <div ref={this._div} className={this.props.className}>
        <canvas
          ref={this._canvas}
          width={this.state.width}
          height={this.state.height}
          className="mx-auto w-full"
        />
      </div>
    );
  }
}

ASCIIAnimation.propTypes = {
  source: PropTypes.array,
  frameDelay: PropTypes.number,
  squishiness: PropTypes.number,
  loadingFontSize: PropTypes.number,
};

ASCIIAnimation.defaultProps = {
  frameDelay: 40,
  squishiness: 1,
  loadingFontSize: 12,
};

export default ASCIIAnimation;
