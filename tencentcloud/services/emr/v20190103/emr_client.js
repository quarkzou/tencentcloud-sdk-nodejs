"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * emr client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("emr.tencentcloudapi.com", "2019-01-03", clientConfig);
    }
    /**
     * DescribeYarnApplications
     */
    async DescribeYarnApplications(req, cb) {
        return this.request("DescribeYarnApplications", req, cb);
    }
    /**
     * 强制修改标签
     */
    async ModifyResourcesTags(req, cb) {
        return this.request("ModifyResourcesTags", req, cb);
    }
    /**
     * 变配询价
     */
    async InquiryPriceUpdateInstance(req, cb) {
        return this.request("InquiryPriceUpdateInstance", req, cb);
    }
    /**
     * 创建EMR集群实例
     */
    async CreateCluster(req, cb) {
        return this.request("CreateCluster", req, cb);
    }
    /**
     * 续费询价。
     */
    async InquiryPriceRenewInstance(req, cb) {
        return this.request("InquiryPriceRenewInstance", req, cb);
    }
    /**
     * DescribeImpalaQueries
     */
    async DescribeImpalaQueries(req, cb) {
        return this.request("DescribeImpalaQueries", req, cb);
    }
    /**
     * 修改YARN资源调度的资源配置
     */
    async ModifyResourceScheduleConfig(req, cb) {
        return this.request("ModifyResourceScheduleConfig", req, cb);
    }
    /**
     * 集群续费询价。
     */
    async InquirePriceRenewEmr(req, cb) {
        return this.request("InquirePriceRenewEmr", req, cb);
    }
    /**
     * 查询EMR任务运行详情状态
     */
    async DescribeClusterFlowStatusDetail(req, cb) {
        return this.request("DescribeClusterFlowStatusDetail", req, cb);
    }
    /**
     * 扩容询价. 当扩容时候，请通过该接口查询价格。
     */
    async InquiryPriceScaleOutInstance(req, cb) {
        return this.request("InquiryPriceScaleOutInstance", req, cb);
    }
    /**
     * 获取集群的自动扩缩容的详细记录
     */
    async DescribeAutoScaleRecords(req, cb) {
        return this.request("DescribeAutoScaleRecords", req, cb);
    }
    /**
     * 获取账户的CVM配额
     */
    async DescribeCvmQuota(req, cb) {
        return this.request("DescribeCvmQuota", req, cb);
    }
    /**
     * 扩容节点
     */
    async ScaleOutInstance(req, cb) {
        return this.request("ScaleOutInstance", req, cb);
    }
    /**
     * 修改用户密码（用户管理）
     */
    async ModifyUserManagerPwd(req, cb) {
        return this.request("ModifyUserManagerPwd", req, cb);
    }
    /**
     * 获取Hbase表级监控数据概览接口
     */
    async DescribeHBaseTableOverview(req, cb) {
        return this.request("DescribeHBaseTableOverview", req, cb);
    }
    /**
     * 查询集群实例信息
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 创建流程作业
     */
    async RunJobFlow(req, cb) {
        return this.request("RunJobFlow", req, cb);
    }
    /**
     * 销毁集群节点
     */
    async TerminateClusterNodes(req, cb) {
        return this.request("TerminateClusterNodes", req, cb);
    }
    /**
     * 该接口支持安装了OpenLdap组件的集群。
批量导出用户。对于kerberos集群，如果需要kertab文件下载地址，可以将NeedKeytabInfo设置为true；注意SupportDownLoadKeyTab为true，但是DownLoadKeyTabUrl为空字符串，表示keytab文件在后台没有准备好（正在生成）。
     */
    async DescribeUsersForUserManager(req, cb) {
        return this.request("DescribeUsersForUserManager", req, cb);
    }
    /**
     * 删除用户列表（用户管理）
     */
    async DeleteUserManagerUserList(req, cb) {
        return this.request("DeleteUserManagerUserList", req, cb);
    }
    /**
     * 该接口支持安装了OpenLdap组件的集群。
新增用户列表（用户管理）。
     */
    async AddUsersForUserManager(req, cb) {
        return this.request("AddUsersForUserManager", req, cb);
    }
    /**
     * 修改自动扩缩容规则
     */
    async ModifyAutoScaleStrategy(req, cb) {
        return this.request("ModifyAutoScaleStrategy", req, cb);
    }
    /**
     * 删除自动扩缩容规则，后台销毁根据该规则扩缩容出来的节点
     */
    async DeleteAutoScaleStrategy(req, cb) {
        return this.request("DeleteAutoScaleStrategy", req, cb);
    }
    /**
     * yarn application 统计接口查询
     */
    async DescribeEmrApplicationStatics(req, cb) {
        return this.request("DescribeEmrApplicationStatics", req, cb);
    }
    /**
     * 查询待续费节点信息
     */
    async DescribeInstanceRenewNodes(req, cb) {
        return this.request("DescribeInstanceRenewNodes", req, cb);
    }
    /**
     * 修改了yarn的资源调度器，点击部署生效
     */
    async ModifyResourceScheduler(req, cb) {
        return this.request("ModifyResourceScheduler", req, cb);
    }
    /**
     * EMR同步TKE中POD状态
     */
    async SyncPodState(req, cb) {
        return this.request("SyncPodState", req, cb);
    }
    /**
     * 用于启停服务 重启服务等功能
     */
    async StartStopServiceOrMonitor(req, cb) {
        return this.request("StartStopServiceOrMonitor", req, cb);
    }
    /**
     * 创建EMR集群实例
     */
    async CreateInstance(req, cb) {
        return this.request("CreateInstance", req, cb);
    }
    /**
     * 创建实例询价
     */
    async InquiryPriceCreateInstance(req, cb) {
        return this.request("InquiryPriceCreateInstance", req, cb);
    }
    /**
     * 添加扩缩容规则，按负载和时间
     */
    async AddMetricScaleStrategy(req, cb) {
        return this.request("AddMetricScaleStrategy", req, cb);
    }
    /**
     * 查询流程任务
     */
    async DescribeJobFlow(req, cb) {
        return this.request("DescribeJobFlow", req, cb);
    }
    /**
     * 获取hive查询信息
     */
    async DescribeHiveQueries(req, cb) {
        return this.request("DescribeHiveQueries", req, cb);
    }
    /**
     * 查询监控概览页指标数据
     */
    async DescribeEmrOverviewMetrics(req, cb) {
        return this.request("DescribeEmrOverviewMetrics", req, cb);
    }
    /**
     * 缩容Task节点
     */
    async TerminateTasks(req, cb) {
        return this.request("TerminateTasks", req, cb);
    }
    /**
     * 销毁EMR实例。此接口仅支持弹性MapReduce正式计费版本。
     */
    async TerminateInstance(req, cb) {
        return this.request("TerminateInstance", req, cb);
    }
    /**
     * 获取自动扩缩容规则
     */
    async DescribeAutoScaleStrategies(req, cb) {
        return this.request("DescribeAutoScaleStrategies", req, cb);
    }
    /**
     * 查询YARN资源调度数据信息
     */
    async DescribeResourceSchedule(req, cb) {
        return this.request("DescribeResourceSchedule", req, cb);
    }
    /**
     * 获取自动扩缩容全局配置
     */
    async DescribeAutoScaleGroupGlobalConf(req, cb) {
        return this.request("DescribeAutoScaleGroupGlobalConf", req, cb);
    }
    /**
     * 查询集群节点信息
     */
    async DescribeClusterNodes(req, cb) {
        return this.request("DescribeClusterNodes", req, cb);
    }
    /**
     * 查询集群列表
     */
    async DescribeInstancesList(req, cb) {
        return this.request("DescribeInstancesList", req, cb);
    }
    /**
     * 刷新YARN的动态资源池
     */
    async ModifyResourcePools(req, cb) {
        return this.request("ModifyResourcePools", req, cb);
    }
    /**
     * 获取洞察结果信息
     */
    async DescribeInsightList(req, cb) {
        return this.request("DescribeInsightList", req, cb);
    }
    /**
     * 扩容集群节点
     */
    async ScaleOutCluster(req, cb) {
        return this.request("ScaleOutCluster", req, cb);
    }
}
exports.Client = Client;
