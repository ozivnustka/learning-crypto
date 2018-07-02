const Router = require('koa-router')
const controllers = require('../controllers')

const router = new Router()

router.get('/', controllers.getStatus)
router.get('/blocks', controllers.getAllBlocks)
router.get('/blocks/last', controllers.getLastBlock)
router.post('/blocks', controllers.addBlock)

const routes = router.routes()

module.exports = routes
