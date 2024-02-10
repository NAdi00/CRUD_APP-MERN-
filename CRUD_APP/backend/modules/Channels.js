const mongoose = require('mongoose');

const Channelschema = new mongoose.Schema ({
    name: {type:String},
    email: {type:String},
    password:{type:String},
    location: {type:String},
})

const ChannelModel = mongoose.model("Channel", Channelschema);

module.exports = ChannelModel;