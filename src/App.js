import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      text: "hello",
      numArr: [100, 200, 300, 400, 500],
      inputValue: "input",
      textareaValue: "textarea"
    };
  }

  updateText() {
    this.setState({
      number: this.state.number + 1,
      text: "hello word"
    });
  }

  render() {
    return <div className="App">{this.dom()}</div>;
  }

  dom() {
    return (
      <div>
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
      </div>
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
}

export default App;
