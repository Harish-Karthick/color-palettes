import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import colorBoxStyles from "../styles/ColorBoxStyles";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayShow: false,
    };
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }
  toggleOverlay() {
    this.setState({ overlayShow: true }, () => {
      setTimeout(() => {
        this.setState({ overlayShow: false });
      }, 2000);
    });
  }
  render() {
    const { background, name, moreUrl, classes, showingAllColors } = this.props;
    const { overlayShow } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.toggleOverlay}>
        <div className={classes.colorBox}>
          <div
            className={`${classes.copyOverlay} ${
              overlayShow && classes.showCopyOverlay
            }`}
          />
          <div
            className={`${classes.copyMessage} ${
              overlayShow && classes.showCopyMessage
            }`}
          >
            <h1 className={classes.messageTitle}>Copied!</h1>
            <p className={classes.messageColor}>{background}</p>
          </div>
          <button className={classes.copyButton}>COPY</button>
          <span className={classes.colorName}>{name}</span>
          {showingAllColors && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(colorBoxStyles)(ColorBox);
