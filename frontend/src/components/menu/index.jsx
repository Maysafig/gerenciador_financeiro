/* eslint-disable react/prop-types */
import { Content, Header, Menu } from "./styles"

const MenuComponent = ({ children }) => {
   return (
      <>
         <Header></Header>
         <Menu></Menu>
         <Content>{children}</Content>
      </>
   )
}

export default MenuComponent