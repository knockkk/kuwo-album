let Url = {
    //front-end 前端路由路径
    loginPage: '/login', //登录
    indexPage: '/index', //首页
    indexRecommend:'/index/recommend', //首页推荐
    indexRecommendType: '/index/recommend/type/:id', //首页推荐-类别
    indexRecommendSelect: '/index/recommend/select', //首页推荐-选择
    indexPopular: '/index/popular', //首页人气榜
    indexLatest: '/index/latest', //首页最新发布
    friendPublish: '/friend/publish', //好友动态
    friendList: '/friend/list', //好友列表
    publish: '/publish', //发布
    search: '/search', //搜素
    imageDetail: '/detail/:id', //图片详情
    album: '/album', //我的相册

}

let imageTypeList = ['人像','风景','宠物','生活','纪实','自然','航拍','潜水','其他']

export {
    Url,
    imageTypeList,
}