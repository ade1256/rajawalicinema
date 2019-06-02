import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link'
import moment from 'moment';
import {
  Row, Col, Icon,
} from 'antd';
import {StarIcon,TimeIcon} from './icon';
import Layout from '../components/Layout';


const axios = require('axios');

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      dataMovie: [],
      url: this.props.router.query.playUrl ? this.props.router.query.playUrl : '/movie/',
    };
  }

  async componentDidMount() {
    await this.getToken();
    this.getMovie();
    console.log(this.state.url)
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
    const response = await axios.get('/api/movie-list', {
      headers: {
        Authorization: `Bearer ${ this.state.token }`,
      },
    });
    this.setState({
      dataMovie: response.data,
    });
  }

  movieList() {
    return (
      this.state.dataMovie.map(data => (
        <Col key={ data._id } xs={ { span: 24 } } sm={ { span: 8 } } md={ { span: 6 } } lg={ { span: 4 } }>
        <Link href={this.state.url+data.urlSlug}>
        <div className="card-movie">
            <div className="thumbnail" style={ { background: `linear-gradient(180deg, rgba(34, 34, 64, 0.8) 0%, rgba(34, 34, 64, 0) 15.5%), linear-gradient(359.14deg, rgba(34, 34, 64, 0.8) 0.48%, rgba(34, 34, 64, 0) 50.02%), url('${ data.thumbnail }') center`, backgroundSize: 'cover' } }>
              <div className="rating">
                <span className="star">
                  <StarIcon />
                </span>
                {data.rating}
              </div>
              <div className="duration">
                <span className="time">
                  <TimeIcon />
                </span>
                {data.duration}
m
              </div>
              <div>
                {data.quality === 'BLU' ? <div className="label-blu">BLU</div>:''}
                {data.quality === 'HD' ? <div className="label-hd">HD</div>:''}
                {data.quality === 'CAM' ? <div className="label-blu">CAM</div>:''}
              </div>
              <div className="title">
                {data.title}
                {' '}
(
                {' '}
                {moment(data.release).format('YYYY')}
                {' '}
)
              </div>
            </div>
          </div>
        
        </Link>
        </Col>
      ))

    );
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={ 24 }>
            <Layout title={ this.props.router.query.title || 'Nonton film terbaru subtitle Indonesia || Rajawalicinema' } menuActive="discover">
              <Row gutter={ 24 }>
                {this.movieList()}
              </Row>
            </Layout>

          </Col>
        </Row>

      </div>
    );
  }
}

export default withRouter(home);

