// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
// we will put some server logic here later...
// export the express app we created to make it available to other modules
const users=[];
current_user = null
next_id = 0;

const register = () => {
    app.post("/register", (req, res) => {
        const user_name = req.body.user_name
        const your_name = req.body.your_name
        const password = req.body.password
        const confirm_password = req.body.confirm_password
        const email = req.body.email
        if(user_name == '' || your_name == '' || password == '' || confirm_password == '' || email == ''){
            return res.status(400).json("error: empty_field");
        }else if(password != confirm_password){
            return res.status(400).json("error: unmatched_password");
        }else{
            const user = {
                user_id: next_id,
                user_name: user_name,
                your_name: your_name,
                password: password,
                email: email,
            }
            users.push(user)
            current_user = user.user_id
            next_id++
            return res.json("success");
        }
      })
}

register()

module.exports = app