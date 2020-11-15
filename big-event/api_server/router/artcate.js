const express = require('express')
const router = express.Router()
const artcate_handler = require('../router_handler/artcate')
//校验
const expressJoi = require('@escook/express-joi')
const {
  add_cate_schema,
  delete_cate_schema,
  get_cate_schema
} = require('../schema/artcate')
//
router.get('/cates', artcate_handler.getArticleCates)
router.post('/addcates', expressJoi(add_cate_schema), artcate_handler.addArticleCates)
//删除文章
router.get('/deletecate/:id', expressJoi(delete_cate_schema), artcate_handler.deleteCateById)
router.get('/cates/:id', expressJoi(get_cate_schema), artcate_handler.getArticleById)
module.exports = router