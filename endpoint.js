let express = require("express")
let app = express()
let child = require("child_process")
let githubUsername = "bysimeon"

app.post("/webhooks/github", function(req, res) {
    var sender = req.body.sender
    var branch = req.body.ref

    if (branch.indexOf("master") > -1 && sender.login === githubUsername) {
        deploy(res)
    }
})

function deploy(res) {
    child.exec("cd /home/simeon/scripts && ./deploy.sh", function(err, stdout, stderr) {
        if (err) {
            console.error(err)
            return res.send(500)
        }
        res.send(200)
    })
}
