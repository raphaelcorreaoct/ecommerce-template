import React from "react";
import { Box } from "layout/Box";
import Logo from "assets/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { GrCart } from "react-icons/gr";

const Header = () => {
  return (
    <Box
      as="header"
      height="84px"
      position="sticky"
      left="0"
      top="0"
      zIndex={1}
      backgroundColor="#fff"
    >
      <Box className="wrapper" display="flex" alignItems="center">
        <Box className="logo" maxWidth="96px">
          <img src={Logo} alt="Plus Shoes" style={{ width: "100%" }} />
        </Box>

        <Box
          className="menu"
          maxWidth="400px"
          width="100%"
          display="flex"
          justifyContent="space-between"
          marginLeft="36px"
          marginRight="36px"
        >
          <a href="#/">Masculino</a>
          <a href="#/">Feminino</a>
          <a href="#/">Esportivo</a>
          <a href="#/">Outlet</a>
        </Box>
        <Box
          className="search-bar"
          width="100%"
          maxWidth="500px"
          borderColor="borderColor"
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="6px"
          height="36px"
          overflow="hidden"
        >
          <Box
            as="button"
            width="30px"
            height="100%"
            backgroundColor="transparent"
            border="none"
          >
            <HiOutlineSearch />
          </Box>
          <Box
            as="input"
            type="text"
            width="calc(100% - 30px)"
            height="100%"
            border="none"
            placeholder="O que você está procurando?"
          />
        </Box>
        <Box
          className="user-menu"
          display="flex"
          marginLeft="22px"
          justifyContent="space-between"
          width="100%"
          maxWidth="190px"
        >
          <Box>
            <AiOutlineUser />
            <strong>Minha Conta</strong>
          </Box>
          <Box>
            <GrCart />
            <strong>3</strong>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
