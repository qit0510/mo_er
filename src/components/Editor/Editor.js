import React, {Component} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Editor extends Component {


  handleChange = (value) => {
    this.props.onChange(value)
  }

  getContent() {
    return this.text;
  }

  modules = {
    toolbar: [
      [{'header': [1, 2, 3, 4, 5, 6, false]}],
      [{'font': []}, {'size': ['small', false, 'large', 'huge']}, {'align': []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{color: []}, {background: []}],
      [{script: 'super'}, {script: 'sub'}],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['blockquote', 'code-block'],
      ['link'],
    ],
  };

  render() {
    return (
      <div>
        <ReactQuill theme="snow" modules={this.modules} value={this.props.value} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Editor;