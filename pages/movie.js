import React, { Component } from 'react';
import { withRouter } from 'next/router';
import moment from 'moment';
import { Row, Col, Breadcrumb, Button, Icon } from 'antd';
import ReactJWPlayer from 'react-jw-player';
import Layout from '../components/Layout';
import axios from 'axios';
import {WatchLaterIcon,LampIcon,CautionIcon,IconPlay,StarIcon,TimeIcon,DownloadMp4,DownloadSrt} from './icon';

let genreList = [];
let creatorList = [];
let countrieList = [];
let keywordList = [];
class movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://localhost',
            token: '',
            dataMovie: [],
            dataServer: [],
            apiKey: '',
            configs: props.configs,
            data: [],
            playerId: 'TlavxDiYtWhDaWsa8okBl2InVFVOeVNYWTFWekZMTTFvNE5XSk1NVGx0VmxwaFVteHQn',
            playerJs: 'https://cdn.jwplayer.com/libraries/kuhsK7Tl.js',
            id: '',
            key: '',
            dataFilm: '',
            playServer: '',

            // button
            lightOnOff: false,
        }
    }
    async componentDidMount() {
        await this.getToken();
        // await this.getSource();
        await this.getMovie();
        const { dataMovie,dataServer, playServer } = this.state;
        console.log("Data Movie : ", dataMovie);
        console.log("Data Server : ", dataServer);

        dataMovie.genreId.map(genre=>{
          this.setState({
            dataGenre: genre
          });
          genreList.push(genre);
        }); 

        dataMovie.countrieId.map(data=>{
          this.setState({
            dataCountrie: data
          });
          countrieList.push(data);
        }); 

        dataMovie.creatorId.map(data=>{
          this.setState({
            dataCreator: data
          });
          creatorList.push(data);
        }); 
        dataMovie.keywords.map(data=>{
          this.setState({
            dataKeyword: data
          });
          keywordList.push(data);
        }); 
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
        // console.log("Response Data", response.data.server);
        this.setState({
          dataMovie: response.data,
          dataServer: response.data.server,
        });
      }

      // async getSource() {
      //   let dataSources = [ {} ];
      //   let dataSubtitles = [ {} ];
    
      //   // mengambil sources film
      //   await axios.get('https://www.saveoffline.com/process/?url=https://drive.google.com/file/d/19rqJjMH78KwB0NLG1LumvIU7fnTqFS1u&type=json')
      //     .then((response) => {
      //       // handle success
      //       const tmp = [
      //         response.data.urls.map((data) => {
      //           const result = {
      //               file: data.id,
      //               label: data.label,
      //               type: 'video/mp4',
      //           };
      //           return result;
      //         }),
      //       ];
      //       dataSources = tmp;
      //     })
      //     .catch((error) => {
      //       // handle error
      //       console.log(error);
      //     });
      //   this.setState({
      //     dataFilm: [{ 
      //       title:this.state.dataMovie.title,
      //       description:this.state.dataMovie.tagline,
      //       image:this.state.dataMovie.thumbnail,
      //       // set data source
      //       sources: dataSources[ 0 ],
      //       // set subtitle
      //       tracks: [{ 
      //         file: "/assets/captions-en.vtt", 
      //         label: "English",
      //         kind: "captions",
      //         "default": true 
      //     },{ 
      //         file: "/assets/captions-fr.vtt", 
      //         kind: "captions",
      //         label: "French"
      //     }]
      //     }],
      //   });
      // }

      buttonServer(){
        const {google1,google2,google3,openload1,openload2,openload3,streamango1,streamango2,streamango3,gphoto1,gphoto2,gphoto3} = this.state.dataServer;
        
        return(
          <div>
           {google1?<Col xs={24} sm={24} md={4}><Button className="buttonServer" onClick={e => this.changeServer(google1)} >Google 1</Button></Col>:''}
           {google2?<Col xs={24} sm={24} md={4}><Button className="buttonServer" onClick={e => this.changeServer(google2)} >Google 2</Button></Col>:''}
           {google3?<Col xs={24} sm={24} md={4}><Button className="buttonServer" onClick={e => this.changeServer(google3)} >Google 3</Button></Col>:''}
          </div>
        );
      }

     async changeServer(url){
        this.setState({
          playServer: url,
        });
        console.log("Server google berubah ...")
      }

      playServerGoogle(){
        console.log("Memutar server google ...")
        const {playServer}=this.state;
       return(
        <iframe style={ { width: '100%', height: '400px', position: 'absolute', top: 0 } } scrolling="no" src={this.state.url+'/video/'+playServer} frameBorder="0" allowFullScreen={true}></iframe>
       );
      }

      sectionInformation(){
        const { title, release, rating, duration, quality, thumbnail, tagline, description, plot, storyline, director } = this.state.dataMovie;
        
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
                    {moment.duration(duration, 's').asMinutes()+" m"}
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
                    <td>{ genreList.map(genre=>{return (genre.name+', ')}) }</td>
                  </tr>
                  <tr>
                    <td>Creators</td>
                    <td>:</td>
                    <td>{ creatorList.map(data=>{return (data.name+', ')}) }</td>
                  </tr>
                  <tr>
                    <td>Release Date</td>
                    <td>:</td>
                    <td>{ moment(release).format('DD MMMM YYYY') }</td>
                  </tr>
                  <tr>
                    <td>Production Countries</td>
                    <td>:</td>
                    <td>{ countrieList.map(data=>{return (data.name+', ')}) }</td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td>:</td>
                    <td>{ director }</td>
                  </tr>
                  <tr>
                    <td>Keywords</td>
                    <td>:</td>
                    <td>{ keywordList.map(data=>{return (data+', ')}) }</td>
                  </tr>
                  
                  </tbody>
                </table>
              </div>
            </Col>
          </div>
        );
      }

      lightOnOff(){
        this.setState({
          lightOnOff: !this.state.lightOnOff,
        });
      }

    render() {
        return (
            <div>
            <div className={ this.state.lightOnOff ? 'lightOnOff on' : 'lightOnOff off' }></div>
            <Row >
              <Col span={ 24 }>
                <Layout title={ 'Nonton film '+ this.state.dataMovie.title + ' ' + moment(this.state.dataMovie.release).format('YYYY') + ' subtitle Indonesia || Rajawalicinema' || 'Nonton film terbaru subtitle Indonesia || Rajawalicinema' } menuActive="discover">
                  <Breadcrumb style={ { margin: '16px 0' } }>
                    <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                    <Breadcrumb.Item> {this.state.dataMovie.title} ( {moment(this.state.dataMovie.release).format('YYYY')} ) </Breadcrumb.Item>
                  </Breadcrumb>
                  
                  <Row gutter={ 24 } type="flex" justify="center">
                  <Col span={ 24 }>
                    {this.buttonServer()}
                  </Col>
                  </Row>
                  <Row>
                  <Col span={ 24 } style={ {marginTop: '16px'} }>
                    <div className="backgroundPlayer" style={ { backgorundPosition: 'top', backgroundSize: 'contain', backgroundImage: `url('${ this.state.dataMovie.thumbnail }')`} } >
                      <div className="buttonPlay" onClick={e => this.changeServer(this.state.dataServer.google1)}><IconPlay/></div>
                      
                      {/* Server Saveoffline.com */}
                      {/* <ReactJWPlayer
                        playerId={this.state.playerId}
                        playerScript={this.state.playerJs}
                        playlist={}
                      /> */}

                      {/* Server Google Drive */}
                      {this.state.playServer ? this.playServerGoogle() : ''}
                    </div> 
                  </Col>
                  </Row>
                 <Row className="buttonSetting" style={ {marginTop: '16px'} } gutter={24} type="flex" justify="center">
                  <Col xs={24} sm={24} md={4}>
                    <Button className="buttonAddons"><CautionIcon/>Lapor Error</Button>
                  </Col>
                  <Col xs={24} sm={24} md={4}>
                    <Button className="buttonAddons" onClick={() => this.lightOnOff()}><LampIcon/>Light On / Off</Button>
                  </Col>
                  <Col xs={24} sm={24} md={4}>
                    <Button className="buttonAddons" onClick={() => window.open(this.state.url+'/download/'+ this.state.playServer, '_blank')}><DownloadMp4/>Movie .mp4</Button>
                  </Col>
                  <Col xs={24} sm={24} md={4}>
                    <Button className="buttonAddons" onClick={() => window.location = this.state.url+this.state.dataMovie.subtitle} ><DownloadSrt/>Subtitle .srt</Button>
                  </Col>
                  <Col xs={24} sm={24} md={4}>
                    <Button className="buttonAddons"><WatchLaterIcon/>Watch Later</Button>
                  </Col>
                  
                 </Row>
                  
                  <Row>
                   
                    {this.sectionInformation()}
                  </Row>

                </Layout>
    
              </Col>
            </Row>
    
          </div>
        );
    }
}

export default withRouter(movie);