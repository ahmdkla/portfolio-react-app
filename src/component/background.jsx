import React from "react";
import PropTypes from "prop-types";

export default class Background extends React.Component {
	render() {
		return (
			<div id="my-background" className="background">
				<div id="stars" />
				<div id="stars2" />
				<div className="top-container flex">
					<h1>
						Hello, I&apos;m Ahmad Akla
						<br />
						I&apos;m a Full Stack Web Developer.
					</h1>
					{/* offset can be cahnged in node modules wowjs default file */}
					<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
							CLICK ME ?
					</button>
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
