import React from "react";

import {
    Container,
    Head,
    PlaylistImage,
    ContentPlaylist,
    PlaylistTitle,
    NumberMusics,
    PlayButton,
    SongList,
} from "./styles";

import ClockIcon from '../../../assets/images/clock.svg';
import PlusIcon from '../../../assets/images/plus.svg';

const Playlist = () => {
    return (
        <Container>
            <Head>
                <PlaylistImage
                    src="https://img.vagalume.fm/14641399081415544330/featured"
                    alt="Playlist-Image"
                ></PlaylistImage>
                <ContentPlaylist>
                    <span>Playlist</span>
                    <PlaylistTitle>Indie Men</PlaylistTitle>
                    <NumberMusics>15 musics</NumberMusics>
                    <PlayButton>Play</PlayButton>
                </ContentPlaylist>
            </Head>

            <SongList cellPadding={0} cellSpacing={0}>
                <thead>
                    <th />
                    <th>Titulo</th>
                    <th>Artista</th>
                    <th>Álbum</th>
                    <th><img src={ClockIcon} alt="Duração"/></th>
                </thead>

                <tbody>
                    <tr>
                        <td><img src={PlusIcon} alt="Adicionar" /></td>
                        <td>Papercut</td>
                        <td>Linkin Park</td>
                        <td>Hybrid Theory</td>
                        <td>3:26</td>
                    </tr>
                    <tr>
                        <td><img src={PlusIcon} alt="Adicionar" /></td>
                        <td>Papercut</td>
                        <td>Linkin Park</td>
                        <td>Hybrid Theory</td>
                        <td>3:26</td>
                    </tr>
                    <tr>
                        <td><img src={PlusIcon} alt="Adicionar" /></td>
                        <td>Papercut</td>
                        <td>Linkin Park</td>
                        <td>Hybrid Theory</td>
                        <td>3:26</td>
                    </tr>
                    <tr>
                        <td><img src={PlusIcon} alt="Adicionar" /></td>
                        <td>Papercut</td>
                        <td>Linkin Park</td>
                        <td>Hybrid Theory</td>
                        <td>3:26</td>
                    </tr>
                    <tr>
                        <td><img src={PlusIcon} alt="Adicionar" /></td>
                        <td>Papercut</td>
                        <td>Linkin Park</td>
                        <td>Hybrid Theory</td>
                        <td>3:26</td>
                    </tr>
                    <tr>
                        <td><img src={PlusIcon} alt="Adicionar" /></td>
                        <td>Papercut</td>
                        <td>Linkin Park</td>
                        <td>Hybrid Theory</td>
                        <td>3:26</td>
                    </tr>
                </tbody>
            </SongList>
        </Container>
    );
};

export default Playlist;
