import React, { Fragment } from "react";


class JsxTest extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      number: props.match.params.num,
      text: "hello",
      numArr: [100, 200, 300, 400, 500],
      inputValue: "input",
      textareaValue: "textarea"
    };
  }

  updateText() {
    this.setState({
      number: Number(this.state.number) + 1,
      text: "hello word"
    });
  }

  render() {
    return (
      <Fragment>
        {/* 注释 */}
        {/* 动态数据 */}
        <p>
          这是一条动态数据：{this.state.text} : {this.state.number}
        </p>
        <button onClick={this.updateText.bind(this)}>add</button>
        {/* 条件判断 */}
        {this.state.number > 5 ? (
          <p>
            number: {this.state.number}, {">"} 5
          </p>
        ) : (
          <p>
            number: {this.state.number}, {"<="} 5
          </p>
        )}
        {this.showNumber()}
        {/* 列表循环 */}
        <ul>
          {this.state.numArr.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {/* form 表单 */}
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.bindInputValue.bind(this)}
        />{" "}
        --{">"} {this.state.inputValue}
        <br />
        <textarea
          value={this.state.textareaValue}
          onChange={this.bindTextareaValue.bind(this)}
        ></textarea>{" "}
        --{">"} {this.state.textareaValue}
        
        <br/>
        <br/>
        <br/>
        <button onClick={this.backHome.bind(this)}>返回 Home</button>
      </Fragment>
    );
  }

  showNumber() {
    if (this.state.number > 10) {
      return (
        <p>
          number: {this.state.number}, {">"} 10
        </p>
      );
    } else {
      return (
        <p>
          number: {this.state.number}, {"<="} 10
        </p>
      );
    }
  }

  bindInputValue(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  bindTextareaValue(event) {
    this.setState({
      textareaValue: event.target.value
    });
  }

  backHome() {
    this.props.history.push('/');
  }

}

export default JsxTest;
