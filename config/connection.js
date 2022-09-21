const {connect, connection} = require("mongose");
const connectionStr = process.env.MONGODB_URI || 3001 ;

connect(connectionStr,{
    useNewUrlParse: true,
    useUnifiedTopology:true
});

module.exports = connection