import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Font_end_page/HelloWorld'
import AdminLogin from '@/components/Back_stage_management/AdminLogin'
//后台首页
import admin_index from '@/components/Back_stage_management/admin_index/index'
import message_center from '@/components/Back_stage_management/admin_index/message_center'
import account_setting from '@/components/Back_stage_management/admin_index/account_setting'
import logon_log from '@/components/Back_stage_management/admin_index/logon_log'
//后台用户
import user from '@/components/Back_stage_management/admin_user/user'
import agent from '@/components/Back_stage_management/admin_user/agent'
//后台商品
import commodity_list from '@/components/Back_stage_management/admin_commodity/commodity_list'
import add_commodity from '@/components/Back_stage_management/admin_commodity/add_commodity'
import commodity_review from '@/components/Back_stage_management/admin_commodity/commodity_review'
import insurance_agency from '@/components/Back_stage_management/admin_commodity/insurance_agency'
import add_mechanism from '@/components/Back_stage_management/admin_commodity/add_mechanism'
import institutional_review from '@/components/Back_stage_management/admin_commodity/institutional_review'
import list_of_risks from '@/components/Back_stage_management/admin_commodity/list_of_risks'
import add_insurance from '@/components/Back_stage_management/admin_commodity/add_insurance'
import insurance_audit from '@/components/Back_stage_management/admin_commodity/insurance_audit'
import insurance_type from '@/components/Back_stage_management/admin_commodity/insurance_type'
import insurance_brand from '@/components/Back_stage_management/admin_commodity/insurance_brand'
import insurance_policy from '@/components/Back_stage_management/admin_commodity/insurance_policy'
//后台订单
import admin_order from '@/components/Back_stage_management/admin_order/admin_order'
//后台客服
import order_audit from '@/components/Back_stage_management/admin_customer_service/order_audit'
import recording_information from '@/components/Back_stage_management/admin_customer_service/recording_information'
import project_audit from '@/components/Back_stage_management/admin_customer_service/project_audit'
import enterprise_audit from '@/components/Back_stage_management/admin_customer_service/enterprise_audit'
//后台风控/admin_risk_management/order_audit
import risk_management_order_audit from '@/components/Back_stage_management/admin_risk_management/order_audit'
import risk_management_recording_information from '@/components/Back_stage_management/admin_risk_management/recording_information'
import risk_control_list from '@/components/Back_stage_management/admin_risk_management/risk_control_list'
import risk_control_report from '@/components/Back_stage_management/admin_risk_management/risk_control_report'
import after_insurance_management from '@/components/Back_stage_management/admin_risk_management/after_insurance_management'
import risk_control_list_template from '@/components/Back_stage_management/admin_risk_management/risk_control_list_template'
import risk_report_template from '@/components/Back_stage_management/admin_risk_management/risk_report_template'
import risk_control_template from '@/components/Back_stage_management/admin_risk_management/risk_control_template'
import business_field_management from '@/components/Back_stage_management/admin_risk_management/business_field_management'
//后台资源
import project_list from '@/components/Back_stage_management/admin_resources/project_list'
import add_project from '@/components/Back_stage_management/admin_resources/add_project'
import enterprise_list from '@/components/Back_stage_management/admin_resources/enterprise_list'
import add_enterprise from '@/components/Back_stage_management/admin_resources/add_enterprise'
import project_information_field from '@/components/Back_stage_management/admin_resources/project_information_field'
import enterprise_information_field from '@/components/Back_stage_management/admin_resources/enterprise_information_field'
//后台内容
import information_list from '@/components/Back_stage_management/admin_content/information_list'
import add_information from '@/components/Back_stage_management/admin_content/add_information'
import information_audit from '@/components/Back_stage_management/admin_content/information_audit'
import information_type from '@/components/Back_stage_management/admin_content/information_type'
import help_list from '@/components/Back_stage_management/admin_content/help_list'
import release_help from '@/components/Back_stage_management/admin_content/release_help'
import help_audit from '@/components/Back_stage_management/admin_content/help_audit'
import help_classification from '@/components/Back_stage_management/admin_content/help_classification'
import index_banner from '@/components/Back_stage_management/admin_content/index_banner'
//后台运营
import admin_operate from '@/components/Back_stage_management/admin_operate/admin_operate'
//后台财务
import account_management from '@/components/Back_stage_management/admin_finance/account_management'
import financial_statements from '@/components/Back_stage_management/admin_finance/financial_statements'
//后台报表
import transaction_statistics from '@/components/Back_stage_management/admin_report_form/transaction_statistics'
import commodity_statistics from '@/components/Back_stage_management/admin_report_form/commodity_statistics'
import membership_statistics from '@/components/Back_stage_management/admin_report_form/membership_statistics'
//后台系统
import organizational_structure from '@/components/Back_stage_management/admin_system/organizational_structure'
import role_management from '@/components/Back_stage_management/admin_system/role_management'
import regional_management from '@/components/Back_stage_management/admin_system/regional_management'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    //后台路由
    //后台首页路由
    {
      path: '/AdminLogin',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/admin_index',
      name: 'admin_index',
      component: admin_index
    },
    {
      path: '/admin_index/index',
      name: 'admin_index',
      component: admin_index
    },
    {
      path: '/admin_index/message_center',
      name: 'message_center',
      component: message_center
    },
    {
      path: '/admin_index/account_setting',
      name: 'account_setting',
      component: account_setting
    },
    {
      path: '/admin_index/logon_log',
      name: 'logon_log',
      component: logon_log
    },
    //后台用户路由
    {
      path: '/admin_user/user',
      name: 'user',
      component: user
    },
    {
      path: '/admin_user/agent',
      name: 'agent',
      component: agent
    },
    //后台商品路由
    {
      path: '/admin_commodity/commodity_list',
      name: 'commodity_list',
      component: commodity_list
    },
    {
      path: '/admin_commodity/add_commodity',
      name: 'add_commodity',
      component: add_commodity
    },
    {
      path: '/admin_commodity/commodity_review',
      name: 'commodity_review',
      component: commodity_review
    },
    {
      path: '/admin_commodity/insurance_agency',
      name: 'insurance_agency',
      component: insurance_agency
    },
    {
      path: '/admin_commodity/add_mechanism',
      name: 'add_mechanism',
      component: add_mechanism
    },
    {
      path: '/admin_commodity/institutional_review',
      name: 'institutional_review',
      component: institutional_review
    },
    {
      path: '/admin_commodity/list_of_risks',
      name: 'list_of_risks',
      component: list_of_risks
    },
    {
      path: '/admin_commodity/add_insurance',
      name: 'add_insurance',
      component: add_insurance
    },
    {
      path: '/admin_commodity/insurance_audit',
      name: 'insurance_audit',
      component: insurance_audit
    },
    {
      path: '/admin_commodity/insurance_type',
      name: 'insurance_type',
      component: insurance_type
    },
    {
      path: '/admin_commodity/insurance_brand',
      name: 'insurance_brand',
      component: insurance_brand
    },
    {
      path: '/admin_commodity/insurance_policy',
      name: 'insurance_policy',
      component: insurance_policy
    },
    //后台订单路由
    {
      path: '/admin_order/admin_order',
      name: 'admin_order',
      component: admin_order
    },
    //后台客服路由
    {
      path: '/admin_customer_service/order_audit',
      name: 'order_audit',
      component: order_audit
    },
    {
      path: '/admin_customer_service/recording_information',
      name: 'recording_information',
      component: recording_information
    },
    {
      path: '/admin_customer_service/project_audit',
      name: 'project_audit',
      component: project_audit
    },
    {
      path: '/admin_customer_service/enterprise_audit',
      name: 'enterprise_audit',
      component: enterprise_audit
    },
    //后台风控路由
    {
      path: '/admin_risk_management/order_audit',
      name: 'risk_management_order_audit',
      component: risk_management_order_audit
    },
    {
      path: '/admin_risk_management/recording_information',
      name: 'risk_management_recording_information',
      component: risk_management_recording_information
    },
    {
      path: '/admin_risk_management/risk_control_list',
      name: 'risk_control_list',
      component: risk_control_list
    },
    {
      path: '/admin_risk_management/risk_control_report',
      name: 'risk_control_report',
      component: risk_control_report
    },
    {
      path: '/admin_risk_management/after_insurance_management',
      name: 'after_insurance_management',
      component: after_insurance_management
    },
    {
      path: '/admin_risk_management/after_insurance_management',
      name: 'after_insurance_management',
      component: after_insurance_management
    },
    {
      path: '/admin_risk_management/risk_control_list_template',
      name: 'risk_control_list_template',
      component: risk_control_list_template
    },
    {
      path: '/admin_risk_management/risk_report_template',
      name: 'risk_report_template',
      component: risk_report_template
    },
    {
      path: '/admin_risk_management/risk_control_template',
      name: 'risk_control_template',
      component: risk_control_template
    },
    {
      path: '/admin_risk_management/business_field_management',
      name: 'business_field_management',
      component: business_field_management
    },
    //后台资源路由
    {
      path: '/admin_resources/project_list',
      name: 'project_list',
      component: project_list
    },
    {
      path: '/admin_resources/add_project',
      name: 'add_project',
      component: add_project
    },
    {
      path: '/admin_resources/enterprise_list',
      name: 'enterprise_list',
      component: enterprise_list
    },
    {
      path: '/admin_resources/add_enterprise',
      name: 'add_enterprise',
      component: add_enterprise
    },
    {
      path: '/admin_resources/project_information_field',
      name: 'project_information_field',
      component: project_information_field
    },
    {
      path: '/admin_resources/enterprise_information_field',
      name: 'enterprise_information_field',
      component: enterprise_information_field
    },
    //后台内容路由
    {
      path: '/admin_content/information_list',
      name: 'information_list',
      component: information_list
    },
    {
      path: '/admin_content/add_information',
      name: 'add_information',
      component: add_information
    },
    {
      path: '/admin_content/information_audit',
      name: 'information_audit',
      component: information_audit
    },
    {
      path: '/admin_content/information_type',
      name: 'information_type',
      component: information_type
    },
    {
      path: '/admin_content/help_list',
      name: 'help_list',
      component: help_list
    },
    {
      path: '/admin_content/release_help',
      name: 'release_help',
      component: release_help
    },
    {
      path: '/admin_content/help_audit',
      name: 'help_audit',
      component: help_audit
    },
    {
      path: '/admin_content/help_classification',
      name: 'help_classification',
      component: help_classification
    },
    {
      path: '/admin_content/index_banner',
      name: 'index_banner',
      component: index_banner
    },
    //后台运营路由
    {
      path: '/admin_operate/admin_operate',
      name: 'admin_operate',
      component: admin_operate
    },
    //后台财务路由
    {
      path: '/admin_finance/account_management',
      name: 'account_management',
      component: account_management
    },
    {
      path: '/admin_finance/financial_statements',
      name: 'financial_statements',
      component: financial_statements
    },
    //后台报表路由
    {
      path: '/admin_report_form/transaction_statistics',
      name: 'transaction_statistics',
      component: transaction_statistics
    },
    {
      path: '/admin_report_form/commodity_statistics',
      name: 'commodity_statistics',
      component: commodity_statistics
    },
    {
      path: '/admin_report_form/membership_statistics',
      name: 'membership_statistics',
      component: membership_statistics
    },
    //后台系统路由
    // import organizational_structure from '@/components/Back_stage_management/admin_system/organizational_structure'
    // import role_management from '@/components/Back_stage_management/admin_system/role_management'
    // import regional_management from '@/components/Back_stage_management/admin_system/regional_management'
    {
      path: '/admin_system/organizational_structure',
      name: 'organizational_structure',
      component: organizational_structure
    },
    {
      path: '/admin_system/role_management',
      name: 'role_management',
      component: role_management
    },
    {
      path: '/admin_system/regional_management',
      name: 'regional_management',
      component: regional_management
    },
  ]
})
