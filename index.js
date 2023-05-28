const express = require('express')
const app = express()

/* 导入cors跨域方案 */
const cors = require('cors')
/* 防止vue使用historymode出现404 */
const history = require('connect-history-api-fallback')
// 使用中间件
app.use(history())
app.use(express.urlencoded({ extended: false }))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
/* const */
const jwtConfig = require('./base/config').jwtConfig.jwtSecretKey
/* 注册cors中间件 */
app.use(cors())
/* 防止报错终止程序 */
process.on('uncaughtException', function (err) {
  console.log(err)
})
/* jwt中间件 */
const expressJWT = require('express-jwt')
app.use(expressJWT({ secret: jwtConfig }).unless({ path: [/^\/adminLogin/, /^\/api/] }))

const jwt = require('jsonwebtoken')

/* 导入并使用后台登录路由模块 */
app.use('/adminLogin', require('./router/admin/Login'))
/* 导入并使用后台路由模块 */
app.use('/adminapi', require('./router/admin/index'))
/* 前台接口模块（全） */
app.use('/api', require('./router/api/index'))

/* 错误级别中间件 */
app.use((err, req, res, next) => {
  console.log(err);
  if (!req.headers.authorization) return res.send({ status: 204, message: '权限不足 拒绝访问' })
  const token = jwt.verify(req.headers.authorization.replace('Bearer ', ''), 'babadawo')
  if (Number(String(token.exp) + '000') < Date.now()) {
    return res.send({ status: 204, message: '权限失效' })
  }
  if (err.name === 'UnauthorizedError') return res.send({ status: 204, message: '权限不足 拒绝访问' })
  next()
})
// console.log(express);
/* 启动服务器 */
app.listen(4433, () => {
  console.log('you server is running. 127.0.0.1:4102')
})
