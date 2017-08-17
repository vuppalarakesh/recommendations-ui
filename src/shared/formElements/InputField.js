import React from "react";


export default class InputField extends React.Component {
  constructor(){
    super();
    this.state = {
      valid: false,
      invalidTag:''
    }
    this.handleBlur = this.handleBlur.bind(this);

  }
  handleBlur(e){
    var val = e.target.value
    console.log(val)
    if(val.trim() == ""){
      this.setState({
        valid: true,
        invalidTag: <p className="form-input-hint">{this.props.title} is required.</p>
      });
    }else{
      this.setState({
        valid: false,
        invalidTag: ''
      });
    }
  }

  render() {
    return (
      <div className={"form-group " + (this.state.valid ? ' has-error' : '')}>
        <div className="col-3 pull-left">
    		<label className="form-label">{this.props.title}</label>
        </div>
        <div className={"col-9 pull-left " + (this.state.valid ? 'lsn-input-error' : '')}>
    		<input
    			className="form-input"
    			name={this.props.name}
    			type={this.props.inputType}
    			value={this.props.content}
    			onChange={this.props.controlFunc}
    			placeholder={this.props.placeholder}
          onBlur={this.handleBlur}/>
          {this.state.invalidTag}
        </div>
    	</div>
    );
  }
}

InputField.propTypes = {
	inputType: React.PropTypes.oneOf(['text', 'number', 'password']).isRequired,
	title: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	controlFunc: React.PropTypes.func.isRequired,
	content: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
	]).isRequired,
	placeholder: React.PropTypes.string,
};
