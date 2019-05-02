import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { Row, Col } from 'antd';
import ReactJWPlayer from 'react-jw-player';
import Layout from '../components/Layout';
import axios from 'axios';

class movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            dataMovie: [],
            apiKey: '',
            configs: props.configs,
            data: [],
            playerId: 'TlavxDiYtWhDaWsa8okBl2InVFVOeVNYWTFWekZMTTFvNE5XSk1NVGx0VmxwaFVteHQn',
            playerJs: 'https://cdn.jwplayer.com/libraries/kuhsK7Tl.js',
            id: '',
            key: '',
            dataFilm: '',
        }
    }

    async componentDidMount() {
        await this.getToken();
        await this.getMovie();
        console.log(this.state.dataMovie)
    }

    async getToken() {
        const response = await axios.post('/login', {
          username: 'ade1256',
          password: 'ade12561256',
        });
        this.setState({
          token: response.data.token,
        });
      }
    
    async getMovie() {
        const response = await axios.get('/api/movie-list/'+this.props.router.query.urlSlug, {
          headers: {
            Authorization: `Bearer ${ this.state.token }`,
          },
        });
        this.setState({
          dataMovie: response.data,
        });
      }

    render() {
        return (
            <div>
            <Row>
              <Col span={ 24 }>
                <Layout title={ this.props.router.query.title || 'Nonton film terbaru subtitle Indonesia || Rajawalicinema' } menuActive="discover">
                  <Row gutter={ 24 }>
                    
                  </Row>
                </Layout>
    
              </Col>
            </Row>
    
          </div>
        );
    }
}

export default withRouter(movie);