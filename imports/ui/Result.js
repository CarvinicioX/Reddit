import React, { Component } from 'react';

import MdIconPack from 'react-icons/lib/md'
import { MdComment, MdArrowUpward, MdArrowDownward } from 'react-icons/lib/md'

// Result component - represents a single todo item
export default class Result extends Component {
  render() {
    return (
      <li>
        <div className="row">                                                   
          <img src={this.props.result.thumbnail} height="90px" width="90px" style={{borderRadius: '60px'}}></img>
          <div className="col">
            <p className="">{this.props.result.author}</p>
            <p className="lead">{this.props.result.title}</p>
            <ul className="list-inline">
              <li className="list-inline-item"><MdComment />{this.props.result.num_comments}</li>
              <li className="list-inline-item"><MdArrowUpward />{this.props.result.ups}</li>
              <li className="list-inline-item"><MdArrowDownward />{this.props.result.downs}</li>
            </ul>
          </div>
        </div>
      </li>
    );
  }
}