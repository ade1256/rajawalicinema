import fetch from 'isomorphic-unfetch';
import React from 'react';
import 'antd/dist/antd.css';

const axios = require('axios');

class IndexPage extends React.Component {
  static async getInitialProps({ req, res, query }) {
    try {
      const protocol = req.headers[ 'x-forwarded-proto' ] || 'http';
      const baseUrl = req ? `${ protocol }://${ req.headers.host }` : '';
      const url = `${ baseUrl }/api/config`;
      const response = await fetch(url);
      const configsJson = await response.json();
      return { apiUrl: url, configs: configsJson };
    } catch (err) {
      return { error: 'Could not load configs' };
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      apiKey: '',
      configs: props.configs,
      data: [],
      playerId: 'TlavxDiYtWhDaWsa8okBl2InVFVOeVNYWTFWekZMTTFvNE5XSk1NVGx0VmxwaFVteHQn',
      playerJs: 'https://cdn.jwplayer.com/libraries/kuhsK7Tl.js',
      id: '',
      key: '',
      dataFilm: '',
    };
  }

  async componentDidMount() {
    await this.getConfig();
    await this.getSource();
    console.log(this.state.dataFilm);
  }

  async getConfig() {
    const response = await axios.get('api/config', {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZTEyNTYiLCJpYXQiOjE1NTE2NDc5OTd9.YHuh1czyyNLd5xyzxt1HoogCLUIIcRf_zPc2AIA1yX8',
      },
    });
    // console.log(response);
  }

  async getSource() {
    let dataSources = [ {} ];
    let dataSubtitles = [ {} ];

    // mengambil sources film
    await axios.get('https://www.saveoffline.com/process/?url=https://drive.google.com/open?id=19rqJjMH78KwB0NLG1LumvIU7fnTqFS1u')
      .then((response) => {
        // handle success
        const tmp = [
          response.data.urls.map((data) => {
            const result = {
                file: data.id,
                label: data.label,
                type: 'video/mp4',
            };
            return result;
          }),
        ];
        dataSources = tmp;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
    this.setState({
      dataFilm: [{ 
        // set data source
        sources: dataSources[ 0 ],
        // set subtitle
        tracks: [{ 
          file: "/assets/captions-en.vtt", 
          label: "English",
          kind: "captions",
          "default": true 
      },{ 
          file: "/assets/captions-fr.vtt", 
          kind: "captions",
          label: "French"
      }]
      }],
    });
  }

  render() {
    return (
      <div>
        {/* <ReactJWPlayer
          playerId={this.state.playerId}
          playerScript={this.state.playerJs}
          playlist={this.state.dataFilm}
        /> */}
       
      </div>
    );
  }
}

export default IndexPage;
