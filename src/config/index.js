let baseUrl = "http://192.168.137.1:8000";
let Url = {
  //front-end 前端路由路径
  loginPage: "/login", //登录
  register: "/register", //注册
  indexPage: "/index", //首页
  indexRecommend: "/index/recommend", //首页推荐
  indexRecommendType: "/index/recommend/type/:id", //首页推荐-类别
  indexRecommendSelect: "/index/recommend/select", //首页推荐-选择
  indexPopular: "/index/popular", //首页人气榜
  indexLatest: "/index/latest", //首页最新发布
  friendPublish: "/friend/publish", //好友动态
  friendList: "/friend/list", //好友列表
  publish: "/publish", //发布
  search: "/search/:content", //搜素
  imageDetail: "/detail/:id", //图片详情
  album: "/album", //我的相册
  albumImages: '/album/:id', //某相册类图片
  albumManagement: "/album/albumManagement", //相册管理
  albumSort: "/album/albumSort/:type", //相册智能排序
  findPassword: "/findPassword", //找回密码
  edit: "/user/edit", //编辑
  editProfile: "/user/editProfile", //编辑
  editPassword: "/user/editPassword", //修改密码
  editComment: "/user/editComment", //编辑评论
  //back-end
  getIndexImage: baseUrl + "/album/api/v1/popular"
};

const imageTypeList = [
  "人像",
  "风景",
  "宠物",
  "生活",
  "纪实",
  "自然",
  "航拍",
  "潜水",
  "其他"
];

export { Url, imageTypeList };
