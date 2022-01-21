const debug = process.env.NODE_ENV !== 'production'
const name = 'study-blog'

module.exports = {
    'process.env.BACKEND_URL': !debug ? `/${name}` : '',
}
