//Managing Response Callback

function response(res, data){
  if (!data){
      res.json({
        success: false,
        message: "Not Found"
      })
    } else {
      res.json({success: true, data: data
      })
    }
  }

  module.exports = response;