async function testFunction(req, res) {
  try {
    res.status(200).send({
      success: true,
      message: "Hello from service layer",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error,
    });
  }
}


module.exports = {
    testFunction
}