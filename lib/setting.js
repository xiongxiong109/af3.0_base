/**
 * Created by Administrator on 2014/11/4.
 */
var host = "http://dep0.pimpin.cn";//微信端后台
var shop_host ="http://dep0.pimpin.cn";//店家后台
var appid = "wxc1907d92ed16f47e";//公众号id
var redirect_uri_host ="http%3a%2f%2fdep0.pimpin.cn";//微信授权重定向基地址
var tiles =[
    "漫狐美甲，小伙伴们都在玩，你还在等什么呢"
];
var base_url ="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+ appid
    +"&redirect_uri=" + redirect_uri_host +"%2fcustomer%2fcustomer%2fshare%2fview&response_type=code&scope=snsapi_base";
function weixin_share(openid){
    //var params = getUrlParams();
    document.addEventListener('WeixinJSBridgeReady', function() {
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                'img_url': 'http://nails.oss-cn-hangzhou.aliyuncs.com/shop/f001a677ba5c4f248e3fb49940b18e0a/basic/1415185141.jpg', //转发图标logo1.jpg
                'link': base_url +(!openid?"":"&state=" + openid) + "#wechat_redirect",
                'desc':'漫狐美甲致力为您打开方便之门' ,  //摘要
                'title':tiles[0]  //标题
            });
        });
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                'img_url': 'http://nails.oss-cn-hangzhou.aliyuncs.com/shop/f001a677ba5c4f248e3fb49940b18e0a/basic/1415185141.jpg', //转发图标logo1.jpg
                'link': base_url +(!openid?"":"&state=" + openid) + "#wechat_redirect",
                'desc': '漫狐美甲致力为您打开方便之门' ,
                'title': tiles[0]
            });
        });
    });
}
