module.exports = {
    apps: [
        {
            name: 'Server1',
            script: './server1.js',
            watch: true,
            env: {
                PORT: 3000
            }
        },
        {
            name: 'Server2',
            script: './server2.js',
            watch: true,
            env: {
                PORT: 3001
            }
        }
    ]
};
