let baseUrl = "http://10.13.5.53:8000";
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
  /* 首页 */
  imageSrc:baseUrl + "/resources/", //imageSrc+imageid = 图片路径
  getRecommend: baseUrl + "/album/api/v1/popular", //首页推荐
  getClassified: baseUrl + "/album/api/v1/classified_album", //获取分类推荐图片
  getRanklist: baseUrl + "/album/api/v1/ranklist", //首页人气榜
  getLatest: baseUrl + "/album/api/v1/recentimgs", //首页最新发布
  getImageDetail: baseUrl + "/album/api/v1/getphotodetails", //获取图片详情 

  postPublish: baseUrl + "/album/api/v1/uploadimg", //发布图片
  postRegister: baseUrl + "/album/api/v1/register", //注册
  postLogin: baseUrl + "/album/api/v1/login", //登录
  postEditProfile: baseUrl + '/album/api/v1/editprofile', //修改个人信息
  getGetBackPwd: baseUrl + '/album/api/v1/get_back_password_verify', //找回密码

  /* 好友 */
  getFriendUpdata: baseUrl + '/album/api/v1/getfriendupdates', //获取好友动态
  addFriend: baseUrl + '/album/api/v1/addfriend', //添加朋友
  addNewGroup: baseUrl + '/album/api/v1/addnewgroup', //添加新分组
  getGroupList: baseUrl + '/album/api/v1/getgrouplist', //获取分组列表 +userid=*
  getGroupMembers: baseUrl + '/album/api/v1/getgroupmembers', //获取分组好友
  deleteGroup: baseUrl + '/album/api/v1/deletegroup', //删除分组
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
