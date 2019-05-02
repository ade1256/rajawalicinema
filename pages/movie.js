import React, { Component } from 'react';
import { withRouter } from 'next/router';
import moment from 'moment';
import { Row, Col, Breadcrumb } from 'antd';
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
        await this.getSource();
        console.log(this.state.dataMovie);
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
            title:this.state.dataMovie.title,
            description:this.state.dataMovie.tagline,
            image:this.state.dataMovie.thumbnail,
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
            <Row>
              <Col span={ 24 }>
                <Layout title={ 'Nonton film '+ this.state.dataMovie.title + ' ' + moment(this.state.dataMovie.release).format('YYYY') + ' subtitle Indonesia || Rajawalicinema' || 'Nonton film terbaru subtitle Indonesia || Rajawalicinema' } menuActive="discover">
                  <Breadcrumb style={ { margin: '16px 0' } }>
                    <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                    <Breadcrumb.Item> {this.state.dataMovie.title} ( {moment(this.state.dataMovie.release).format('YYYY')} ) </Breadcrumb.Item>
                  </Breadcrumb>
                  <Row gutter={ 24 }>
                  <ReactJWPlayer
                    playerId={this.state.playerId}
                    playerScript={this.state.playerJs}
                    playlist={this.state.dataFilm}
                  />
                  </Row>
                </Layout>
    
              </Col>
            </Row>
    
          </div>
        );
    }
}

export default withRouter(movie);