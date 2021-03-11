import React, { Component } from 'react';

class Drum extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mp3Files:[
              {
                id: "Q",
                name: "Heater-1",
                link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              },
              {
                id: "W",
                name: "Heater-2",
                link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              },
              {
                id: "E",
                name: "Heater-3",
                link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            },
            {
              id: "A",
              name: "Chord_1",
              link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
            },
            {
              id: "S",
              name: "Chord_2",
              link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
            },
            {
              id: "D",
              name: "Chord_3",
              link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
            },
            {
              id: "Z",
              name: "Dsc_Oh",
              link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            },
            {
              id: "X",
              name: "Kick_n_Hat",
              link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            },
            {
              id: "C",
              name: "Give_us_a_light",
              link: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
            }]

        };

      }
    handleClick = (key, name) => {
        console.log(name);
        console.log('button clicked', this.state.mp3Files[0].name);
        document.getElementById(key).play();
        let tDisp = document.getElementById("txt");
        tDisp.innerText = name;
    }

    handleKeydown(e) {
    console.log("here", e.key);
    let keys = e.key.toUpperCase();
    console.log("keys here",keys);
    document.getElementById(keys).play();
    let tDisp = document.getElementById("txt");
    tDisp.innerText = keys;
  }

    render() {
        return (
            <div id="drum-machine" onKeyDown={this.handleKeydown}>
                <div id="display" className="card border-warning mb-3" style={{width: 38 + 'rem', height: 30 + 'rem'}}>
                    <div className="card-header"><h2>Drum Machine</h2></div>
                    <div className="card-body text-warning">
                        <h5 className="card-title" id="txt">Hit it !</h5>
                        <p className="card-text"></p>
                        <div id="bttns">
                            {this.state.mp3Files.map((key, i) => {
                                return (
                                    <a href="#" className="drum-pad" id={key.name} key={i} onClick={() => this.handleClick(key.id, key.name)}>
                                        <div id="btTxt">{key.id}
                                            <audio src={key.link} className="clip" id={key.id}>
                                            </audio>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default Drum;
