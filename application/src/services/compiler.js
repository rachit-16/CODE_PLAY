import axios from 'axios'

const compiler = async (userCode, userInput) => {
  let program = {
    script: userCode,
    stdin: userInput,
    language: 'cpp17',
    versionIndex: '0',
    clientId: process.env.REACT_APP_JDOODLE_CLIENT_ID,
    clientSecret: process.env.REACT_APP_JDOODLE_CLIENT_SECRET
  }

  const config = {
    headers: {
      'content-type': 'application/json'
    }
  }

  // const url = 'http://127.0.0.1:3080/'

  // axios.defaults.headers.post['Content-Type'] = 'application/json'
  await axios
    .post('/api/execute', program, config)
    .then((data) => {
      console.log('DATA:::', data)
      return data
    })
    .catch((e) => {
      console.log('e: ', e)
      return e
    })

  //   axios
  //     .get('https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/v1/execute')
  //     .then((error, response, body) => {
  //       console.log('AXIOS')
  //       console.log('error', error)
  //       console.log('response', response)
  //       console.log('body', body)
  //     })
  //     .catch((e) => {
  //       console.log('e', e)
  //     })
}

export default compiler

// function (error, response, body) {
//     console.log('error:', error);
//     console.log('statusCode:', response && response.statusCode);
//     console.log('body:', body);
// }
