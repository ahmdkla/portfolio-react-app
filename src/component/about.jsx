import React from "react";
import myImage from "../assets/img/myImage.jpg";
import PropTypes from "prop-types";

export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className={this.props.fadeInRight}>
					About
				</h1>
				<div className="row" style={{ marginTop: 7 + "rem" }}>
					<div className="col-12 col-lg-6 hidden">
						<img
							className={"img-fluid " + this.props.fadeInRight}
							src={myImage}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 250 + "px",
								width: 250 + "px"
							}}
						/>

						<p className={"mytext pt-3 " + this.props.fadeInRight}>
							I love to transform ideas into reality using code. I
							am passionate about programming to create awesome things <br /> (Currently learning).
						</p>
					</div>
					<div
						className={
							"col-12 col-sm-12 col-md-12 col-lg-6 " +
							this.props.bounceLeft
						}>
						<h2 className={"pt-3 " + this.props.fadeInRight}>
							Ahmad Rafiqul A'la
						</h2>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 75 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								C#
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 70 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								HTML5
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 70 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								CSS3
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 65 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								PHP
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 65 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Java
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-90-bar"
								role="progressbar"
								style={{ width: 55 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Javascript
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 55 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								ReactJS
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

About.propTypes = {
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
};
