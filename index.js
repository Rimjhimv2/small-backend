require("dotenv").config()
console.log("hello");
const express=require("express")
const app=express()
const port=3000
const githubData={
    "login": "Rimjhimv2",
    "id": 183602310,
    "node_id": "U_kgDOCvGMhg",
    "avatar_url": "https://avatars.githubusercontent.com/u/183602310?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Rimjhimv2",
    "html_url": "https://github.com/Rimjhimv2",
    "followers_url": "https://api.github.com/users/Rimjhimv2/followers",
    "following_url": "https://api.github.com/users/Rimjhimv2/following{/other_user}",
    "gists_url": "https://api.github.com/users/Rimjhimv2/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Rimjhimv2/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Rimjhimv2/subscriptions",
    "organizations_url": "https://api.github.com/users/Rimjhimv2/orgs",
    "repos_url": "https://api.github.com/users/Rimjhimv2/repos",
    "events_url": "https://api.github.com/users/Rimjhimv2/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Rimjhimv2/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Rimjhim Verma",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-10-02T10:31:01Z",
    "updated_at": "2025-05-22T18:12:37Z"
  }

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/twitter',(req,res)=>{
    res.send('hellodotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>hi everyone</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>lorem ipsum....</h2>")

})
app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})