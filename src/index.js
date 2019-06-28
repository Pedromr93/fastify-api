const fastify = require('fastify')({ logger: true })
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mycargarage')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

fastify.get('/', async (request, reply) => {
    return { hello: 'world'};
})

// run the server
const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.log.info(`Server listening on ${fastify.server.address().port}`);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();