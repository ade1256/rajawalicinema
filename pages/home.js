import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link'
import moment from 'moment';
import {
  Row, Col, Icon,
} from 'antd';
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

  quality(data) {
    if (data === 'BLU' ) {
      return (<div className="label-blu">BLU</div>);
    }
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
              { this.quality(data.quality) }
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

// Define Icon SVG
const StarSvg = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path d="M6.30712 0.487005L4.71879 4.10687L1.1651 4.68922C0.527819 4.79311 0.272421 5.67621 0.73457 6.182L3.30558 8.99806L2.69749 12.9761C2.58803 13.6951 3.2618 14.2337 3.82611 13.8975L7.00521 12.0192L10.1843 13.8975C10.7486 14.231 11.4224 13.6951 11.3129 12.9761L10.7048 8.99806L13.2759 6.182C13.738 5.67621 13.4826 4.79311 12.8453 4.68922L9.29164 4.10687L7.7033 0.487005C7.41871 -0.158228 6.59414 -0.16643 6.30712 0.487005Z" fill="#F2C94C" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const TimeSvg = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 14.0033C4.68569 14.0033 1.9967 11.3143 1.9967 8C1.9967 4.68569 4.68569 1.9967 8 1.9967C11.3143 1.9967 14.0033 4.68569 14.0033 8C14.0033 11.3143 11.3143 14.0033 8 14.0033ZM8 3.74767C5.65496 3.74767 3.74767 5.65497 3.74767 8C3.74767 10.345 5.65497 12.2523 8 12.2523C10.345 12.2523 12.2523 10.345 12.2523 8C12.2523 5.65495 10.345 3.74767 8 3.74767ZM9.00055 8.7504C9.00055 8.89111 8.89111 9.00054 8.75041 9.00054H6.24903C6.10833 9.00054 5.99889 8.89111 5.99889 8.7504V8.25012C5.99889 8.10942 6.10833 7.99998 6.24903 7.99998H8V5.24848C8 5.10778 8.10944 4.99834 8.25014 4.99834H8.75043C8.89113 4.99834 9.00057 5.10778 9.00057 5.24848V8.7504H9.00055Z" fill="#F2C94C" />
  </svg>

);

const TimeIcon = props => (
  <Icon component={ TimeSvg } { ...props } />
);
const StarIcon = props => (
  <Icon component={ StarSvg } { ...props } />
);
