fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title: 'I am learning JS...',
        userId: 1,
        /* other post data */
    })
})
    .then(res => res.json())
    .then(console.log);
