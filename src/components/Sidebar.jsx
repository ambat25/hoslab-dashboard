import React, { Component } from 'react';
import user_image from '../assets/lab.jpeg';

export default class Sidebar extends Component {
	render() {
		return (
			<div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-700 mdl-color-text--blue-grey-50 p-1">
				<header className="demo-drawer-header mb-1">
					<img alt="user pic" src={user_image} className="demo-avatar" />
					<div className="demo-avatar-dropdown">
						<span>info@hoslab.com</span>
						<div className="mdl-layout-spacer" />
					</div>
				</header>
				<nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
					<a className="mdl-navigation__link" href="/">
						<i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">
							home
						</i>Home
					</a>
					<a className="mdl-navigation__link" href="/">
						<i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">
							home
						</i>Tests
					</a>
					<a className="mdl-navigation__link" href="/">
						<i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">
							home
						</i>Results
					</a>
					<a className="mdl-navigation__link" href="/">
						<i className="mdl-color-text--blue-grey-400 fa fa-search fa-lg" role="presentation"></i>logout
					</a>
				</nav>
			</div>
		);
	}
}
