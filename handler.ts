import * as _ from 'lodash'

// modern module syntax
export const hello = async (event, context, callback) => {
  // dependencies work as expected
  console.log(_.VERSION)

  // async/await also works out of the box
  await new Promise((resolve, reject) => setTimeout(resolve, 500))

  const response = {
    body: JSON.stringify({
      input: event,
      message: 'Go Serverless v1.0! Your function executed successfully!',
    }),
    statusCode: 200,
  }

  callback(null, response)
}
