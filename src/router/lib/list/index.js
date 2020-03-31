/**
 * @description 列表页的路由
 */

const QueryTable = {
    path: 'queryTable',
    name: 'queryTable',
    component: () => import("@/views/main/list/QueryTable")
  }
  
  
  module.exports = [
    QueryTable
  ]
  