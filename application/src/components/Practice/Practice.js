import React, { Component } from 'react'
import Auxillary from '../../hoc/Auxiliary/Auxillary'
import Editor from '../Editor/Editor'
import classes from './Practice.module.css'
import compiler from '../../services/compiler'

const template = `#include<bits/stdc++.h>
using namespace std;

int main(){
    cout<<"Hello World!";
    return 0;
}`

class Practice extends Component {
  constructor(props) {
    super(props)

    this.state = {
      output: ''
    }

    this.userCode = template
    this.userInput = ''
  }

  onCodeChange = (value) => {
    this.userCode = value
  }

  onInputChange = (value) => {
    this.userInput = value
  }

  runCodeHandler = async (code, input) => {
    this.setState({ output: await compiler(code, input) })
    console.log('OUTPUT::::', this.state.output)
  }

  render() {
    let attachedClasses = [classes.Sidebar, classes.Close]
    if (this.props.show) {
      attachedClasses = [classes.Sidebar, classes.Open]
    }

    return (
      <Auxillary>
        <div className={attachedClasses.join(' ')}>
          <div className={classes.practiceEditor}>
            <div className={classes.top}>
              <p>Code</p>
              <button
                className={classes.runButton}
                onClick={() =>
                  this.runCodeHandler(this.userCode, this.userInput)
                }
              >
                Run
              </button>
            </div>
            <Editor
              mode="c_cpp"
              width="100%"
              height="90%"
              template={template}
              onChange={(val) => this.onCodeChange(val)}
            />
          </div>
          <div className={classes.Practice}>
            <div className={classes.inputEditor}>
              <p>Input</p>
              <Editor
                mode="text"
                width="98%"
                height="85%"
                onChange={(val) => this.onInputChange(val)}
              />
            </div>
            <div className={classes.outputEditor}>
              <p>Output</p>
              <Editor
                mode="text"
                width="98%"
                height="85%"
                value={this.state.output}
              />
            </div>
          </div>
        </div>
      </Auxillary>
    )
  }
}

export default Practice
