function openDetail(){
	var user = app.getUser();
	if(user && user.status && user.status == 1){
		// 表示已经充值
		alert("已充值");
	}else{
		floatWebview();
	}
	
}

// 创建悬浮窗口
var floatw=null;
function floatWebview(){
	if(floatw){ // 避免快速多次点击创建多个窗口
		return;
	}
	floatw=plus.webview.create("webview_float.html","webview_float.html",{width:'200px',height:'200px',margin:"auto",background:"rgba(0,0,0,0.8)",scrollIndicator:'none',scalable:false,popGesture:'none'});
	floatw.addEventListener("loaded",function(){
		floatw.show('fade-in',100);
		floatw=null;
	},false);
}

// 支付接口
function toPay(flag){
	// flag = 1 和2 来区分对应的充值的金额，待定
	if(flag == 1){
		var user = app.getUser();
		user.status = 1;
		app.setUser(user);
		alert("半年的充值");
	}else{
		var user = app.getUser();
		user.status = 1;
		app.setUser(user);
		alert("一年的充值");
	}
}
