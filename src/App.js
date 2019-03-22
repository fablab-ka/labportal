import React, { Component } from "react";
import SimpleWebRTC from "simplewebrtc";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: "",
      curtainIsOpen: true
    };
  }

  componentDidMount() {
    var webrtc = new SimpleWebRTC({
      url: "https://signal.fablab-karlsruhe.de/",
      localVideoEl: "cameraVideoElement",
      remoteVideosEl: "remoteVideoElement",
      autoRequestMedia: true,
      debug: true
    });

    webrtc.on("readyToCall", () => {
      webrtc.joinRoom("noisebrigde_portal");
    });
  }

  closeCurtains() {}

  openCurtains() {}

  render() {
    let classes = "App";
    if (this.state.curtainIsOpen) {
      classes += " curtain-is-closed";
    }
    return (
      <div className={classes}>
        <p>{this.state.error}</p>

        <video id="cameraVideoElement" autoPlay className="camera-view" />
        <div id="remoteVideoElement" className="remote-view" />

        <div className="control-panel">
          <button onClick={this.closeCurtains.bind(this)}>
            Close Curtains
          </button>
          <button onClick={this.openCurtains.bind(this)}>Open Curtains</button>
        </div>
      </div>
    );
  }
}

export default App;
