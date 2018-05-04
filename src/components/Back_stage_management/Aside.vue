<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="#" class="brand-link">
      <!-- <img src="../../assets/img/u208.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
          style="opacity: .8"> -->
      <span class="brand-text font-weight-light">工保网后台业务管理系统</span>
    </a>  

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
              with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon fa fa-dashboard"></i> -->
              <p>
               首页
                <i class="right fa fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>系统首页</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>消息中心</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>账户设置</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>登录日志</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon fa fa-th"></i> -->
              <p>
                用户
                <i class="right fa fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>用户</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>经纪人</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon fa fa-pie-chart"></i> -->
              <p>
               商品
                <i class="right fa fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <!-- <i class="fa fa-circle-o nav-icon"></i> -->
                  <p> 商品管理<i class="right fa fa-angle-left"></i></p>
                  
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>商品列表</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>添加商品</p>
                    </a>
                  </li>
                   <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>商品审核</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>保险机构</p>
                    </a>
                  </li>
                   <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>添加机构</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>机构审核</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>险种列表</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>添加险种</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>险种审核</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <!-- <i class="fa fa-circle-o nav-icon"></i> -->
                  <p>商品配置
                    <i class="right fa fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>保险类型</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>保险品牌</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>保险品牌</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>投保单管理</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon fa fa-tree"></i> -->
              <p>
               订单
                <i class="fa fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>订单列表</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon fa fa-edit"></i> -->
              <p>
                客服
                <i class="fa fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>订单审核</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>补录信息</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>项目审核</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>企业审核</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon fa fa-table"></i> -->
              <p>
                风控
                <i class="fa fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <!-- <i class="fa fa-circle-o nav-icon"></i> -->
                  <p>风控管理
                    <i class="fa fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>订单审核</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>补录信息</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>风控单</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>风控报告</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>保后管理</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <!-- <i class="fa fa-circle-o nav-icon"></i> -->
                  <p>风控配置
                    <i class="fa fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>风控单模板</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>风控报告模板</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>风控模型</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>业务字段管理</p>
                </a>
              </li>
            </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon fa fa-dashboard"></i> -->
              <p>
              资源
                <i class="right fa fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <!-- <i class="fa fa-circle-o nav-icon"></i> -->
                  <p>资源管理<i class="right fa fa-angle-left"></i></p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>项目列表</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>添加项目</p>
                    </a>
                  </li>
                   <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>企业列表</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>添加企业</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <!-- <i class="fa fa-circle-o nav-icon"></i> -->
                  <p>资源配置<i class="right fa fa-angle-left"></i></p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>项目信息字段</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>企业信息字段</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon fa fa-th"></i> -->
              <p>
               内容
                <i class="right fa fa-angle-left"></i>
              </p>
            </a>
             <ul class="nav nav-treeview">
                <li class="nav-item">
                <a href="#" class="nav-link">
                  <!-- <i class="fa fa-circle-o nav-icon"></i> -->
                  <p>资讯管理<i class="right fa fa-angle-left"></i></p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>资讯列表</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>添加资讯</p>
                    </a>
                  </li>
                   <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>资讯审核</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>资讯类型</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <!-- <i class="fa fa-circle-o nav-icon"></i> -->
                  <p>帮助管理<i class="right fa fa-angle-left"></i></p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>帮助列表</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>发布帮助</p>
                    </a>
                  </li>
                   <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>帮助审核</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>帮助分类</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <!-- <i class="fa fa-circle-o nav-icon"></i> -->
                  <p>帮助分类<i class="right fa fa-angle-left"></i></p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>首页banner</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon fa fa-pie-chart"></i> -->
              <p>
               运营
                <i class="right fa fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p> 系统公告</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon fa fa-tree"></i> -->
              <p>
               财务
                <i class="fa fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <!-- <i class="fa fa-circle-o nav-icon"></i> -->
                  <p>财务报表<i class="fa fa-angle-left right"></i></p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>综合统计</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <!-- <i class="fa fa-circle-o nav-icon"></i> -->
                  <p>对账管理<i class="fa fa-angle-left right"></i></p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>对账列表</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon fa fa-edit"></i> -->
              <p>
                报表
                <i class="fa fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>交易统计</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>商品统计</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>会员统计</p>
                </a>
              </li>
            </ul>
          </li>
         <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <!-- <i class="nav-icon fa fa-edit"></i> -->
              <p>
               系统
                <i class="fa fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>组织架构</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>角色管理</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="fa fa-circle-o nav-icon"></i>
                  <p>区域管理</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>
