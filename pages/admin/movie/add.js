import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { Row, Col, Button, Table, Form, Input, InputNumber, Select } from 'antd';
import Layout from '../../../components/LayoutAdmin';
import moment from 'moment';

const axios = require('axios');
const {Option} = Select;
const {TextArea} = Input;
class add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataIMDB: null,
        };
    }

    async componentDidMount() {
        console.log(moment(1549324800000).format('DD MMMM YYYY'));
        console.log(moment.duration(7320, 's').asMinutes() + " Menit" );
      }
    
    async getIMDB(idIMDB) {
        let response = await axios.get(`https://imdb-scraper-kebonfilm.herokuapp.com/title/${idIMDB.target.value}`, {
        });
        this.setState({
            dataIMDB: response.data,
        });
        let { name, rating, certificate, runtime, release } = this.state.dataIMDB;
        this.props.form.setFieldsValue({
           title: name,
           rating,
           certificate,
           runtime,
           release
          });
        console.log("Data IMDB", response.data );
      }

      handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
     };

     handleSubmit = e => {
        e.preventDefault();
      };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
            <Row>
            <Col span={ 24 }>
            <Layout title={ 'Add Movie - Admin Kebonfilm' } menuActive="listMovie">
            <Row gutter={ 24 }>
              <Col span={12}>
                <Form layout="vertical" onSubmit={this.handleSubmit}>
                    <Form.Item label="IMDB ID.">
                        <Input
                        placeholder="tt0437086"
                        onChange={idIMDB=>this.getIMDB(idIMDB)}
                        required
                        />
                    </Form.Item>
                    <Form.Item label="Title">
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input your title!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Tagline">
                        {getFieldDecorator('tagline')(<Input />)}
                    </Form.Item>
                    <Row gutter={24}>
                        <Col span= { 4 }>
                            <Form.Item label="Rating">
                            {getFieldDecorator('rating', {
                                rules: [{ required: true, type: 'number', message: 'Should be number and required !' }],
                            })(<InputNumber />)}
                            </Form.Item>
                        </Col>
                        <Col span={ 4 }>
                            <Form.Item label="Release">
                                {getFieldDecorator('release', {
                                    rules: [{ required: true, type: 'number', message: 'Should be number and required !' }],
                                })(<InputNumber />)}
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item label="Runtime">
                                {getFieldDecorator('runtime', {
                                    rules: [{ required: true, type: 'number', message: 'Should be number and required !' }],
                                })(<InputNumber />)}
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                        <Form.Item label="Certificate">
                          {getFieldDecorator('certificate', {
                            rules: [{ required: true, message: 'Please input !' }],
                          })(<Input />)}
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                      <Form.Item label="Quality">
                      {
                        getFieldDecorator('quality',
                        {
                            rules: [{ required: true, message: 'required !' }],
                        })(
                        <Select>
                            <Option value="BLU">BLU</Option>
                            <Option value="HD">HD</Option>
                            <Option value="CAM">CAM</Option>
                        </Select>
                        )
                      }
                      </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="Thumbnail">
                        {
                            getFieldDecorator('thumbnail',
                            {
                                rules: [{required: true, message: 'Link thumbnail !!'}]
                            }
                            )
                            (<Input/>)
                        }
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="Director">
                        {
                            getFieldDecorator('director',
                            {
                                rules: [{required: false, message: 'Director !!'}]
                            }
                            )
                            (<Input/>)
                        }
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item label="Genre">
                        {getFieldDecorator('genre', {
                            rules: [
                            { required: true, message: 'Please select genres!', type: 'array' },
                            ],
                        })(
                            <Select mode="multiple" placeholder="Please select genres">
                            <Option value="id1">Horror</Option>
                            <Option value="id2">Comedy</Option>
                            </Select>,
                        )}
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item label="Categorie">
                        {getFieldDecorator('categorie', {
                            rules: [
                            { required: true, message: 'Please select categorie!' },
                            ],
                        })(
                            <Select placeholder="Please select categori">
                            <Option value="id1">Movie</Option>
                            <Option value="id2">Series</Option>
                            </Select>,
                        )}
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item label="Countrie">
                        {getFieldDecorator('countrie', {
                            rules: [
                            { required: true, message: 'Please select countrie!', type: 'array' },
                            ],
                        })(
                            <Select mode="multiple" placeholder="Please select countrie">
                            <Option value="id1">Indonesia</Option>
                            <Option value="id2">US</Option>
                            </Select>,
                        )}
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item label="Creator">
                        {getFieldDecorator('creator', {
                            rules: [
                            { required: true, message: 'Please select creator!', type: 'array' },
                            ],
                        })(
                            <Select mode="multiple" placeholder="Please select creator">
                            <Option value="id1">Creator 1</Option>
                            <Option value="id2">Creator 2</Option>
                            </Select>,
                        )}
                        </Form.Item>
                      </Col>
                    </Row>
                </Form>
              </Col>
              <Col span={12}>
              <Row gutter={24}>
                <Col span={24}>
                  <Form.Item label="Plot">
                  {
                      getFieldDecorator('plot',
                      {
                          rules: [{required:true, message: "Plot shouldn't be blank !"}]
                      }
                      )
                      (
                          <TextArea rows={4} />
                      )
                  }
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Storyline">
                  {
                      getFieldDecorator('storyline',
                      {
                          rules: [{required:true, message: "storyline shouldn't be blank !"}]
                      }
                      )
                      (
                          <TextArea rows={4} />
                      )
                  }
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Description">
                  {
                      getFieldDecorator('description',
                      {
                          rules: [{required:true, message: "description shouldn't be blank !"}]
                      }
                      )
                      (
                          <TextArea rows={4} />
                      )
                  }
                  </Form.Item>
                </Col>
              </Row>
              </Col>
            </Row>
            </Layout>
            </Col>
            </Row>
            </div>
            );
        }
    }
    
    export default withRouter(Form.create({ name: 'add_form' })(add));
    