import React from "react";

import { Container, Search, User } from "./styles";

const Header = () =>(
    <Container>
        <Search>
            <input placeholder="Search" />
        </Search>
        <User>
            <img src="https://avatars.githubusercontent.com/u/74800473?v=4" alt="Avatar"/>
            Natanael Alves
        </User>
    </Container>
) 

export default Header;
