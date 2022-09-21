const { Schema, model } = require('mongoose')

const userSchema = new Schema({

    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: string,
        unique: true,
        lowercase: true,
        trim: true,
        required: true,
        validate: {
            validator: validateEmail = (email) => {
                return /^\([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/.test(email)
            },
            message: 'You must enter a valid email',
        },
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        }
    ]
},
    {
        toJSON: {
            virtuals: true,
            getters: true,
        }
    }
)
const User = model('User', userSchema)
 userSchema.virtual('friendCount').get(function () {
    return this.friends.lenght
 })
 module.exports = User