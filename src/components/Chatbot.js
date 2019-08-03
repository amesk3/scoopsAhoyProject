import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";

let zip;
class Chatbot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zip: "",
      data: [],
      zipDataArr: []
    };
  }

  componentWillMount() {
    fetch("/dataDump.js")
      .then(res => res.json())
      .then(data => this.setState({ data }));

    const { steps } = this.props;
    zip = steps.zipcode.value || null;
    console.log("ITS WORKING?", this.state);
  }

  componentDidUpdate() {
    const { steps } = this.props;
    zip = steps.zipcode.value || null;
  }
  render() {
    const { data, zipDataArr } = this.state;
    let zipRegex = /(\d{5})/;
    objToArr();
    function objToArr() {
      data.forEach(function(item) {
        console.log("coming into foreach");
        let address = item.address.match(zipRegex);
        let name = item.name;
        let zipData = [name, address];
        zipDataArr.push(zipData);
      });
    }

    return (
      <div>
        {this.state.zipDataArr.map(item => {
          if (item[1]) {
            if (item[1][0] === zip) {
              return <ul>{item[0]}</ul>;
            }
          }
        })}
      </div>
    );
  }
}
Chatbot.propTypes = {
  steps: PropTypes.object
};

Chatbot.defaultProps = {
  steps: undefined
};

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: "1",
            message: "Welcome to Scoops Ahoy! How can I help?",
            trigger: "2"
          },
          {
            id: "2",
            options: [
              { value: "Scoops ahoy", label: "Scoops ahoy", trigger: "3" },
              {
                value: "location",
                label: "Where are you located?",
                trigger: "4"
              },
              {
                value: "kids",
                label: "What do you think about kids?",
                trigger: "5"
              },
              {
                value: "zip",
                label: "Is there ice cream in this zip?",
                trigger: "6"
              }
            ]
          },

          {
            id: "3",
            message: "Scoops Ahoy!",
            trigger: "1"
          },

          {
            id: "4",
            message: "Starcourt Mall, Hawkins Indiana",
            trigger: "1"
          },

          {
            id: "5",
            message:
              Math.round(Math.random()) === 1
                ? "Turns out I'm a pretty damn good babysitter"
                : "Man,kids are the worst! Who needs 'em anyway?",
            trigger: "1"
          },
          {
            id: "6",
            message: "What is the zip?",
            trigger: "zipcode"
          },
          {
            id: "zipcode",
            user: true,
            trigger: "8"
          },
          {
            id: "8",
            message: "In {previousValue} there is Ice Cream in these places",
            trigger: "9"
          },
          {
            id: "9",
            component: <Chatbot />,
            trigger: "1"
          }
        ]}
      />
    );
  }
}

export default SimpleForm;
