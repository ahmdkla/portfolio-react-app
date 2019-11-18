import React from "react";

import facebook from "../assets/img/fb.png";
import github from "../assets/img/github.png";
import linkedin from "../assets/img/linkedin.png";

class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								href="https://www.facebook.com/4kskyp"
								target="_blank"
								rel="noopener noreferrer">
								<img className="logoWhite" src={facebook} alt=""/>
							</a>
							<a
								className="px-3"
								href="https://github.com/ahmdkla"
								target="_blank"
								rel="noopener noreferrer">
								<img className="logoWhite" src={github} alt=""/>
							</a>
							<a
								href="https://www.linkedin.com/in/ahmad-akla-a7780b161/"
								target="_blank"
								rel="noopener noreferrer">
								<img className="logoWhite" src={linkedin} alt=""/>
							</a>
						</div>
					</div>
					<h5 className="pt-4 textToWhite">Ahmad Akla with thanks to Frank Izquierdo &copy; 2019</h5>
				</div>
			</div>
		);
	}
}

export default Footer;
