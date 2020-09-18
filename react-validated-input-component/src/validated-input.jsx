import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getLabelValue = this.getLabelValue.bind(this);
    this.checkPasswordValidity = this.checkPasswordValidity.bind(this);
    this.special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    this.state = { password: '', isValidPassword: false };
  }

  handleChange() {
    this.checkPasswordValidity(event.target.value);
  }

  checkPasswordValidity(password) {
    let upperCheck = false;
    let specialCheck = false;
    let numCheck = false;
    for (let i = 0; i < password.length; i++) {
      if (this.special.includes(password[i])) specialCheck = true;
      if (password[i] === password[i].toUpperCase() && !this.special.includes(password[i]) && isNaN(Number(password[i]))) upperCheck = true;
      if (!isNaN(Number(password[i]))) numCheck = true;
    }
    upperCheck && specialCheck && numCheck
      ? this.setState({ password: event.target.value, isValidPassword: true })
      : this.setState({ password: event.target.value, isValidPassword: false });
  }

  getLabelValue() {
    const passLength = this.state.password.length;
    if (passLength < 1) {
      return 'A password is required.';
    } else if (passLength < 8) {
      return 'Your password is too short.';
    } else if (passLength >= 8 && !this.state.isValidPassword) {
      return 'Your password must contain a special charater, a number, and an uppercase letter.';
    } else {
      return null;
    }
  }

  render() {
    const passLength = this.state.password.length;
    const labelValue = this.getLabelValue();
    return (
      <form>
        <input type="password" value={this.state.password} onChange={this.handleChange}/>
        <i className={this.state.isValidPassword && passLength >= 8 ? 'fas fa-check' : 'fas fa-times' }></i>
        {labelValue && <label className="incorrect">{ labelValue }</label>}
      </form>
    );
  }
}

export default ValidatedInput;
