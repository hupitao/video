/**
 * 演示程序当前的 “注册/登录” 等操作，是基于 “本地存储” 完成的
 * 当您要参考这个演示程序进行相关 app 的开发时，
 * 请注意将相关方法调整成 “基于服务端Service” 的实现。
 **/
(function($, owner) {
	/**
	 * 软件版本 
	 */
	owner.version = "1.0.0";

	/**
	 * 封装post提交，会在headers中带上sessionToken
	 * 
	 * @param {Object} url
	 * @param {Object} data
	 * @param {Object} callback
	 */
	owner.post = function(url, data, callback, errback) {
//		data.visitAccount = app.getUser.telephone || "";
//		data.visitTmType = app.getDevice().model || "";
//		data.visitBwType = "";
//		data.visitTmIp = "";
//		console.log("postdata=" + JSON.stringify(data));
		$.ajax(url, {
			data: data,
			headers: {
				"sessionToken": app.getSessionToken()
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 30000, //超时时间设置为10秒；
			success: function(result) {
				callback(result);
			},
			error: function(xhr, type, errorThrown) {
				var s = '网络异常,请稍后重试。';
				errback(s);
				console.log("url:" + url + ", data:" + JSON.stringify(data) + " , type:" + type); //异常处理；
			}
		});
	};

	/**
	 * 封装get提交，会在headers中带上sessionToken
	 * 
	 * @param {Object} url
	 * @param {Object} data
	 * @param {Object} callback
	 */
	owner.get = function(url, data, callback, errback) {
//		data.visitAccount = app.getUser.telephone || "";
//		data.visitTmType = app.getDevice().model || "";
//		data.visitBwType = "";
//		data.visitTmIp = "";
		console.log("getdata=" + JSON.stringify(data));

		$.ajax(url, {
			data: data,
			headers: {
				"sessionToken": app.getSessionToken()
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 30000, //超时时间设置为10秒；
			success: function(result) {
				callback(result);
			},
			error: function(xhr, type, errorThrown) {
				var s = '网络异常,请稍后重试。';
				errback(s);
				console.log("url:" + url + ", data:" + JSON.stringify(data) + " , type:" + type); //异常处理；
			}
		});
	};

	/**
	 * 获取当前状态
	 **/
	owner.getUser = function() {
		var userText = plus.storage.getItem('$user') || "{}";
		var user = JSON.parse(userText);
		return user;
	};

	/**
	 * 设置当前状态
	 **/
	owner.setUser = function(user) {
		user = user || {};
		plus.storage.setItem('$user', JSON.stringify(user));
	};

}(mui, window.app = {}));