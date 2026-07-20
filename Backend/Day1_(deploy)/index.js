// require('dotenv').config();
// const express = require('express');
import env from 'dotenv';
env.config();
import express from 'express';

const gitHubData = {
    "login": "HussainDurrani1",
    "id": 130679495,
    "node_id": "U_kgDOB8oCxw",
    "avatar_url": "https://avatars.githubusercontent.com/u/130679495?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/HussainDurrani1",
    "html_url": "https://github.com/HussainDurrani1",
    "followers_url": "https://api.github.com/users/HussainDurrani1/followers",
    "following_url": "https://api.github.com/users/HussainDurrani1/following{/other_user}",
    "gists_url": "https://api.github.com/users/HussainDurrani1/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/HussainDurrani1/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/HussainDurrani1/subscriptions",
    "organizations_url": "https://api.github.com/users/HussainDurrani1/orgs",
    "repos_url": "https://api.github.com/users/HussainDurrani1/repos",
    "events_url": "https://api.github.com/users/HussainDurrani1/events{/privacy}",
    "received_events_url": "https://api.github.com/users/HussainDurrani1/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Hussain Durrani ",
    "company": null,
    "blog": "",
    "location": "Lahore, Pakistan",
    "email": null,
    "hireable": null,
    "bio": "Pursuing BSCS. Learning BackEnd Development. Passionate about AI.",
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 6,
    "following": 21,
    "created_at": "2023-04-13T14:43:52Z",
    "updated_at": "2026-07-17T15:48:23Z"
}

const app = express();
const port = process.env.PORT;

// To use the dist folder (created by 'npm run build' in the frontend) to make it work with backend
// app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.send('<h1>Hello Durrani!</h1>>')
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'Joke 1',
            content: 'This is the 1st Joke',
        },
        {
            id: 2,
            title: 'Joke 2',
            content: 'This is the 2nd Joke',
        },
        {
            id: 3,
            title: 'Joke 3',
            content: 'This is the 3rd Joke',
        },
        {
            id: 4,
            title: 'Joke 4',
            content: 'This is the 4th Joke',
        },
        {
            id: 5,
            title: 'Joke 5',
            content: 'This is the 5th Joke',
        }
    ]
    res.send(jokes);
})

app.get('/github', (req, res) => {
    res.json(gitHubData);
})

app.get('/login', (req, res) => {
    res.send('Durranis don\'t need to login')
});

app.get('/linkedin', (req, res) => {
    res.send('<h1>This is Hussain\'s LinkedIn</h1>')
});

app.get('/durrani', (req, res) => {
    res.send('<h1>Hussain Durrani is great...</h1>')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});