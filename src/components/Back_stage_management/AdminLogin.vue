<template>
	<!-- <div class="hold-transition login-page"> -->
		<div class="login-box">
			<!-- /.login-logo -->
			<div class="card">
				<div class="card-body login-card-body">
					<div class="login-logo">
						<a href="#"><b style="font-size:28px;">工保网业务后台管理系统</b></a>
					</div>
					<!-- <p class="login-box-msg">Sign in to start your session</p> -->
					<form action="../../index2.html" method="post">
						<div class="form-group has-feedback">
							<input type="email" class="form-control" placeholder="请输入用户名称">
							<!-- <span class="fa fa-envelope form-control-feedback"></span> -->
						</div>
						<div class="form-group has-feedback">
							<input type="password" class="form-control" placeholder="请输入登录密码">
							<!-- <span class="fa fa-lock form-control-feedback"></span> -->
						</div>
						<div class="row">
							<!-- <div class="col-8">
								<div class="checkbox icheck">
								<label>
									<input type="checkbox"> Remember Me
								</label>
								</div>
							</div> -->
							<!-- /.col -->
							<div class="col-4">
								<button type="submit" class="btn btn-primary btn-block btn-flat" style="width:320px;border-radius:5px;">
									登 录
								</button>
							</div>
							<!-- /.col -->
						</div>
					</form>
				<!-- <div class="social-auth-links text-center mb-3">
					<p>- OR -</p>
					<a href="#" class="btn btn-block btn-primary">
						<i class="fa fa-facebook mr-2"></i> Sign in using Facebook
					</a>
					<a href="#" class="btn btn-block btn-danger">
						<i class="fa fa-google-plus mr-2"></i> Sign in using Google+
					</a>
				</div> -->
				<!-- /.social-auth-links -->

				<!-- 忘记密码 -->
				<!-- <p class="mb-1">
					<a href="#">I forgot my password</a>
				</p>
				<p class="mb-0">
					<a href="register.html" class="text-center">Register a new membership</a>
				</p> -->
				</div>
				<!-- /.login-card-body -->
			</div>
		</div>
		<!-- /.login-box -->
	<!-- </div> -->
</template>
<script>
	export default {
	  name: 'adminLogin'
	}
	$(function(){
		// console.log(window.location.pathname);
		if(window.location.pathname == "/AdminLogin"){
			$("body").css("background","#e9ecef")
		}
	})
</script>
<style>
	
</style>