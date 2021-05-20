import React from 'react';

import {
    Container,
    Title,
    List,
    Playlist,
    PlaylistImage,
    PlaylistTitle,
} from './styles';

const Browse = () => (
    <Container>
        <Title>Navegar</Title>
        <List>
            <Playlist to="/playlists/1">
                <PlaylistImage
                    src="https://img.vagalume.fm/14641399081415544330/featured"
                    alt="Playlist-Image"
                ></PlaylistImage>
                <PlaylistTitle>Indie Sounds</PlaylistTitle>
                <p>Só música de qualidade</p>
            </Playlist>
            {/* <Playlist href="">
                <img
                    src="https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2020/06/04090128/Lamborghini-Centenario-Roadster-Bare-Carbon_23.jpg"
                    alt="Playlist-Image"
                />
                <PlaylistTitle>Indie Boladão</PlaylistTitle>
                <p>Só música de qualidade</p>
            </Playlist>
            <Playlist href="">
                <img
                    src="https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2020/06/04090128/Lamborghini-Centenario-Roadster-Bare-Carbon_23.jpg"
                    alt="Playlist-Image"
                />
                <PlaylistTitle>Indie Boladão</PlaylistTitle>
                <p>Só música de qualidade</p>
            </Playlist>
            <Playlist href="">
                <img
                    src="https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2020/06/04090128/Lamborghini-Centenario-Roadster-Bare-Carbon_23.jpg"
                    alt="Playlist-Image"
                />
                <PlaylistTitle>Indie Boladão</PlaylistTitle>
                <p>Só música de qualidade</p>
            </Playlist> */}
        </List>
    </Container>
);

export default Browse;
