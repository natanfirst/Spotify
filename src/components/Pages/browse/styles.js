import styled from "styled-components";

import {Link} from 'react-router-dom';

export const Container = styled.div`
    flex: 1;
    margin-top: 110px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 48px;
`;

export const List = styled.div`
    margin-top: 20px;
    display: flex;
`;

export const Playlist = styled(Link)`
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    text-decoration: none;

    &:first-child {
        margin: 0;
    }

    p {
        line-height: 22px;
        margin-top: 5px;
        font-size: 13px;
        color: #b3b3b3;
    }
`;

export const PlaylistImage = styled.img`
    height: 250px;
    &:hover {
        opacity: 0.4;
    }
`;

export const PlaylistTitle = styled.strong`
    font-size: 13px;
    margin-top: 10px;
    color: #fff;
`;
