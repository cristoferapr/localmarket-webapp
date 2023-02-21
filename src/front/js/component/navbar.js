import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sidebarData";
import SubMenu from "./submenu";
import { IconContext } from "react-icons/lib";
import { Row, Col, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
 
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
 
const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
 
const SidebarWrap = styled.div`
  width: 100%;
`;



export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
  let navigate = useNavigate(); 
	const routeChange = () =>{ 
	  let path = '../controlPanel'; 
	  navigate(path);
  }

	return (
		<>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
			<div class="container">
				<Row>
					<Col>
						<NavIcon to="#">
         			   <FaIcons.FaBars onClick={showSidebar} />
         				</NavIcon>
		 		    </Col>
					<Col xs={6}>
            <Link to="/"> 
					<h2
            			style={{ textAlign: "center",
						paddingTop: "2vh",
                    	paddingLeft: "2%",
                    	color: "white" }}
          				>MinimarketWebApp</h2>
              		</Link>
					</Col>
					<Col>
          <Dropdown alingRigth style={{paddingTop: "1vh",}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      🛒
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <span>Por implementar</span>
      </Dropdown.Menu>
    </Dropdown>
					</Col>
					<Col>
					<div  className='nav-container' style={{paddingTop: "1vh", display: "flex", flex_direction: "row"}}>
					{ !store.token ?
						<Link to="/login">
							<button className="btn btn-primary" >Log In</button>
						</Link>
						:
            <><button className="btn btn-primary" onClick={routeChange}>Control Panel</button>
            <Link to="/">
            <button onClick={() => actions.logout()} className="btn btn-primary">Log Out</button></Link></>
}</div></Col>
				</Row>


			</div>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}