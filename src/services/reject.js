//Managing rejection Callback

function reject(err){
    if (err){
      res.json({
        success: false,
        message: err
      })
  }
}

  module.exports = reject;