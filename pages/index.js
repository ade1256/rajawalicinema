import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactJWPlayer from 'react-jw-player'
import { version, Button } from 'antd';
import "antd/dist/antd.css";
// Layout
// import ContentLayout from '../layout/ContentLayout';


const axios = require('axios')

class IndexPage extends React.Component {

	static async getInitialProps ({req, res, query}) {
		try {
			const protocol = req.headers['x-forwarded-proto'] || 'http';
			const baseUrl = req ? `${protocol}://${req.headers.host}` : '';
			const url = `${baseUrl}/api/config`;
			const response = await fetch(url);
			const configsJson = await response.json();
			return { apiUrl: url, configs: configsJson };
		}
		catch (err) {
			return { error: 'Could not load configs' }
		}
	};

	constructor (props) {
		super(props)
		this.state = {
			apiKey: '',
			configs: props.configs,
			data: [],
			playerId: 'TlavxDiYtWhDaWsa8okBl2InVFVOeVNYWTFWekZMTTFvNE5XSk1NVGx0VmxwaFVteHQn',
			playerJs: 'https://cdn.jwplayer.com/libraries/kuhsK7Tl.js',
            id: '',
			key: '',
			dataFilm: [{}],
		}
	}

	async componentDidMount() {
		this.getConfig();
		this.getSource();
		console.log(this.props)
	}

	async getConfig() {
		let response = await axios.get(`api/config`,{
			headers: {
				Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZTEyNTYiLCJpYXQiOjE1NTE2NDc5OTd9.YHuh1czyyNLd5xyzxt1HoogCLUIIcRf_zPc2AIA1yX8`,
			}
		});
		console.log(response)
	}

	async getSource() {
		let dataReal=[{}];
		await axios.get('https://www.saveoffline.com/process/?url=https://drive.google.com/file/d/12FNHscqOo6KeUW2BafchTF00XwgxMEkr&type=json')
		.then(function (response) {
			// handle success
			let tmp = [
				response.data.urls.map(data => {
					let result={
						file: data.id,
						label: data.label,
						type: 'video/mp4',
					};
					return result;
				})
			]
			dataReal = tmp;
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		this.setState({
			dataFilm: [{"sources": dataReal[0]}],
		})
		// console.log(dataReal)
		// return dataReal;
	}

	// playerIframe = () => {
	// 	return <ReactJWPlayer
	// 	playerId={this.state.playerId}
	// 	playerScript={this.state.playerJs}
	// 	playlist={this.state.dataFilm}
	// 	/>;
	// }


	render() {
        return (
			<div>
				<Button>asdasd</Button>
			</div>
		);
    }

}

export default IndexPage;
