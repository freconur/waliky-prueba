import React from "react";
import { Link } from "react-router-dom";
import "./navbarListFix.css";
const NavBarListFix = ({ setSecondMenuActive, secondMenuActive, setThirdMenuActive, thirdMenuActive }) => {
	return (
		<>
			<div className="navbar-list__container">
				<ul className="navbar-list">
					<li>
						<Link onClick={() => setSecondMenuActive(!secondMenuActive)}>
							productos
						</Link>
						<ul className={`second-menu ${secondMenuActive && "secondMenuActive"}`}>
							<li>
								<Link onClick={() => setThirdMenuActive(!thirdMenuActive)}>
									bts
								</Link>
								<ul className={`tercer-nivel third-menu ${secondMenuActive && thirdMenuActive && "thirdMenuActive"}`}  >
									<li>
										<Link onClick={() =>{setSecondMenuActive(!secondMenuActive); setThirdMenuActive(!thirdMenuActive)}} to="/bts/polos">
											polos
										</Link>
									</li>
									<li>
										<Link onClick={() =>{setSecondMenuActive(!secondMenuActive) ; setThirdMenuActive(!thirdMenuActive)}} to="/bts/tazas">
											tazas
										</Link>
									</li>
									<li>
										<Link onClick={() =>{setSecondMenuActive(!secondMenuActive) ; setThirdMenuActive(!thirdMenuActive)}} to="/bts/cojines">
											cojines
										</Link>
									</li>
									<li>
										<Link onClick={() =>{setSecondMenuActive(!secondMenuActive) ; setThirdMenuActive(!thirdMenuActive)}} to="/bts/cojinesMid">
											cojin es mid
										</Link>
									</li>
									<li>
										<Link onClick={() =>{setSecondMenuActive(!secondMenuActive) ; setThirdMenuActive(!thirdMenuActive)}} to="/bts/medias">
											medias
										</Link>
									</li>
									<li>
										<Link onClick={() =>{setSecondMenuActive(!secondMenuActive) ; setThirdMenuActive(!thirdMenuActive)}} to="/bts/libretas">
											libretas
										</Link>
									</li>
									<li>
										<Link onClick={() =>{setSecondMenuActive(!secondMenuActive) ; setThirdMenuActive(!thirdMenuActive)}} to="/bts/cartucheras">
											cartucheras
										</Link>
									</li>
									<li>
										<Link onClick={() =>{setSecondMenuActive(!secondMenuActive) ; setThirdMenuActive(!thirdMenuActive)}} to="/bts/poster">
											poster
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link onClick={() =>{setSecondMenuActive(!secondMenuActive) ; setThirdMenuActive(!thirdMenuActive)}} to="/kawaii">
									kawaii
								</Link>
							</li>
							<li>
								<Link onClick={() =>{setSecondMenuActive(!secondMenuActive) ; setThirdMenuActive(!thirdMenuActive)}} to="alquiler-de-cilindros-biombos">
									biombos
								</Link>
							</li>
						</ul>
					</li>
					<li >
						<Link>
							nosotros
						</Link>
					</li>
					<li>
						<Link>
							contacto
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default NavBarListFix;
