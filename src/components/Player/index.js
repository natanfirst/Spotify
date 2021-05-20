import React from "react";

import {
    Container,
    Current,
    Volume,
    Controls,
    Progress,
    Time,
    MusicProgress,
} from "./styles";
import Slider from "rc-slider";

import VolumeIcon from "../../assets/images/volume.svg";
import ShufleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = () => (
    <Container>
        <Current>
            <img
                src="https://cdn-motorshow-ssl.akamaized.net/wp-content/uploads/sites/2/2018/07/maverickgt-700x420.jpg"
                alt="Cover"
            />
            <div>
                <span>Times Like These</span>
                <small>Foo Fighters</small>
            </div>
        </Current>
        <Progress>
            <Controls>
                <button>
                    <img src={ShufleIcon} alt="Shufle" />
                </button>
                <button>
                    <img src={BackwardIcon} alt="Back" />
                </button>
                <button>
                    <img src={PlayIcon} alt="Play" />
                </button>
                {/* <button>
                    <img src={PauseIcon} alt="Pause" />
                </button> */}
                <button>
                    <img src={ForwardIcon} alt="Forward" />
                </button>
                <button>
                    <img src={RepeatIcon} alt="Repeat" />
                </button>
            </Controls>
            <Time>
                <span>1:00</span>
                <MusicProgress>
                    <Slider
                        railStyle={{ background: "#404040", borderRadius: 10 }}
                        trackStyle={{ background: "#1ED760" }}
                        handleStyle={{ border: 0 }}
                    />
                </MusicProgress>
                <span>4:00</span>
            </Time>
        </Progress>

        <Volume>
            <img src={VolumeIcon} alt="Vol" />
            <Slider
                railStyle={{ background: "#404040", borderRadius: 10 }}
                trackStyle={{ background: "#fff" }}
                handleStyle={{ display: 'none' }}
                value={100}
            />
        </Volume>
    </Container>
);

export default Player;
