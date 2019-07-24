import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';
import Link from 'next/link'
import moment from 'moment';
import {
  Row, Col, Icon, Button, Table
} from 'antd';
import Layout from '../../../components/LayoutAdmin';
import {IconPlay,StarIcon,TimeIcon} from '../../icon';

const axios = require('axios');

class adminHome extends Component {
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
    await this.getMovie();
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
    const response = await axios.get('/api/movie-list', {
      headers: {
        Authorization: `Bearer ${ this.state.token }`,
      },
    });
    this.setState({
      dataMovie: response.data,
    });
  }

  sectionInformation(record){
    const { title, release, rating, duration, quality, thumbnail, tagline, description, plot, storyline, director, genreId, creatorId, countrieId, keywords } = record;
    
    return (
      <div id="sectionInformation">
        <Col xs={24} sm={24} md={24}>
          
            <h1>{ title + ' (' + moment(release).format('YYYY') + ') ' + ' - ' + tagline  } </h1>
            <div style={ {position: 'relative', display: 'block', height: '16px', marginTop: '8px'} }>
              <div className="rating">
                <span className="star">
                  <StarIcon />
                </span>
                {rating}
              </div>
              <div className="duration">
                <span className="time">
                  <TimeIcon />
                </span>
                {duration} m
              </div>
                {quality === 'BLU' ? <div className="label-blu">BLU</div>:''}
                {quality === 'HD' ? <div className="label-hd">HD</div>:''}
                {quality === 'CAM' ? <div className="label-blu">CAM</div>:''}
            </div>
            <hr/>
            <div className="description">
              <p>{ description }</p>
              <p>{ plot }</p>
              <p>{ storyline }</p>
            </div>
          
        </Col>
        <Col xs={24} sm={24} md={5}>
          <div className="thumbnail"><img src={thumbnail} ></img></div>
        </Col>
        <Col xs={24} sm={24} md={19}>
          <div className="details">
            <table>
              <tbody>
              <tr>
                <td>Genre</td>
                <td>:</td>
                <td>{ genreId.map(genre=>{return (genre.name+', ')}) }</td>
              </tr>
              <tr>
                <td>Creators</td>
                <td>:</td>
                <td>{ creatorId.map(data=>{return (data.name+', ')}) }</td>
              </tr>
              <tr>
                <td>Release Date</td>
                <td>:</td>
                <td>{ moment(release).format('DD MMMM YYYY') }</td>
              </tr>
              <tr>
                <td>Production Countries</td>
                <td>:</td>
                <td>{ countrieId.map(data=>{return (data.name+', ')}) }</td>
              </tr>
              <tr>
                <td>Director</td>
                <td>:</td>
                <td>{ director }</td>
              </tr>
              <tr>
                <td>Keywords</td>
                <td>:</td>
                <td>{ keywords.map(data=>{return (data+', ')}) }</td>
              </tr>
              
              </tbody>
            </table>
          </div>
        </Col>
      </div>
    );
  }

  linkAdd(){
    Router.replace('/admin/movie/add');
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={ 24 }>
            <Layout title={ 'List Movie - Admin Kebonfilm' } menuActive="listMovie">
              <Row gutter={ 24 }>
                <Col span={ 24 }>
                  <Button onClick={ e => this.linkAdd() }>Add</Button>
                </Col>
              </Row>
              <Row gutter={ 24 }>
              <Table
                columns={columns}
                expandedRowRender={record => this.sectionInformation(record)}
                dataSource={this.state.dataMovie}
                rowKey={record => record._id}
              />
              </Row>
            </Layout>

          </Col>
        </Row>

      </div>
    );
  }
}

const columns = [
  { 
    title: 'Title', 
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Year',
    dataIndex: 'release',
    key: 'release',
    render: (data) => moment(data).format('YYYY'),
  },
  {
    title: 'Quality',
    dataIndex: 'quality',
    key: 'quality',
  },
  {
    title: 'CreatedAt',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (data) => moment(data).format('DD MMMM YYYY - HH:mm'),
  },
  {
    title: 'UpdatedAt',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    render: (data) => moment(data).format('DD MMMM YYYY - HH:mm'),
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => {
      return (
        <div>
          <a href="javascript:;">Edit</a>
          <a href="javascript:;">Delete</a>
        </div>
      );
    },
  },
];


export default withRouter(adminHome);

