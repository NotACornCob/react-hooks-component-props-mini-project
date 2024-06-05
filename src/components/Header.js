import React from "react";

function Header(prop) {
return <header><h1 key={prop.name}>{prop.name}</h1></header>
}

export default Header;