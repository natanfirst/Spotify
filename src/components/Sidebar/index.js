import React from "react";

import {
    Container,
    NewPlaylist,
    Nav,
    HomeLink,
    BrowserLink,
    RadioLink,
} from "./styles";
import { BsHouseDoor } from "react-icons/bs";
import { SiDiscogs } from "react-icons/si";
import { IoRadio } from "react-icons/io5";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

function Sidebar() {
    return (
        <Container>
            <div>
                <Nav main>
                    <li>
                        <HomeLink>
                            <BsHouseDoor />
                            <a href="Home" className="Home">
                                Home
                            </a>
                        </HomeLink>
                        <BrowserLink>
                            <SiDiscogs />
                            <a href="Browser" className="Browser">
                                Browser
                            </a>
                        </BrowserLink>
                        <RadioLink>
                            <IoRadio />
                            <a href="Radio" className="Radio">
                                Radio
                            </a>
                        </RadioLink>
                    </li>
                </Nav>
                <Nav>
                    <li>
                        <span>YOUR LIBRARY</span>
                    </li>
                    <li>
                        <a href="2">Made For You</a>
                    </li>
                    <li>
                        <a href="3">Recently Played</a>
                    </li>
                    <li>
                        <a href="4">Liked Songs</a>
                    </li>
                    <li>
                        <a href="5">Albums</a>
                    </li>
                    <li>
                        <a href="6">Artists</a>
                    </li>
                    <li>
                        <a href="7">Podcasts</a>
                    </li>
                </Nav>
                <Nav>
                    <li>
                        <span>PLAYLISTS</span>
                        <li>
                            <a href="7">Indie Rock</a>
                        </li>
                    </li>
                </Nav>
            </div>
            <NewPlaylist>
                <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
                Nova Playlist
            </NewPlaylist>
        </Container>
    );
}

export default Sidebar;
