const { Schema, model, Types } = require('mongoose')

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        trim: true,
        minlenght: 1,
        maxlenght: 280
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        timestamp: {
            type: Date,
            default: Date.now
        },
    },
    toJson: {
        getters: true
    }
})

const thoughtSchema = new Schema({
   
    thoughtText: {
        type: String,
        required: true,
        trim: true,
        minlenght: 1,
        maxlenght: 280
    },
    createdAt: {
        timestamp: {
            type: Date,
            default: Date.now
        },
    },
    usernsame: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],

     timestamp: {
        toJson: {
            getters: true
        }
    },
})


const Thought = model('Thought', thoughtSchema)

module.exports = Thought;








