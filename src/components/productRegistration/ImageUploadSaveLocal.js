import React from 'react';

class imageUploadSaveLocal extends React.Component {
  constructor(props) {
     super(props);
     this.state = {file: '',imagePreviewUrl: ''};
     this._handleSubmit = this._handleSubmit.bind(this);
     this._handleImageChange = this._handleImageChange.bind(this);
   }

   _handleSubmit(e) {
     e.preventDefault();
     // TODO: do something with -> this.state.file
     console.log('handle uploading-', this.state.file);
   }

   _handleImageChange(e) {
     e.preventDefault();

     let reader = new FileReader();
     let file = e.target.files[0];

     reader.onloadend = () => {
       this.setState({
         file: file,
         imagePreviewUrl: reader.result
       });
     };

     reader.readAsDataURL(file);
   }


   render() {
     let {imagePreviewUrl} = this.state;
     let $imagePreview = null;
     if (imagePreviewUrl) {
       $imagePreview = (<figure className="image is-128x128">
         <img src={imagePreviewUrl} style={{width: '6.25rem', height: '6.25rem'}}/></figure>
       );
     } else {
       $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
     }

     return (
       <div className="previewComponent">
         <form onSubmit={this._handleSubmit}>
           <input className="fileInput"
             type="file"
             onChange={this._handleImageChange} />
           <button className="submitButton"
             type="submit"
             onClick={this._handleSubmit}>Upload Image</button>
         </form>
         <div className="imgPreview">
           {$imagePreview}
         </div>
       </div>
     );
   }
 }

export default imageUploadSaveLocal;
