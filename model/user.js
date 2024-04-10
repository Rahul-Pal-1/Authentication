const mongoose =  require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure uniqueness
        trim: true, // Trim whitespace
        lowercase: true, // Convert email to lowercase
        validate: {
            validator: function(value) {
                // Regular expression for email validation
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    password:{
        type:String
    },
},{
    timestamps:true,
});

const User = mongoose.model('user', userSchema);

module.exports = User;