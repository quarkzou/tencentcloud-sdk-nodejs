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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeDatabaseAuditResourceRequest,
  DescribeDorisMetricFilesResponse,
  DescribeInstanceUsedSubnetsResponse,
  DescribeFrontEndRequest,
  CreateInstanceNewResponse,
  DescribeClusterConfigsHistoryResponse,
  DescribeInstanceOperationsRequest,
  DescribeClusterConfigsResponse,
  ScaleOutInstanceResponse,
  ModifyUserPrivilegesV3Response,
  DescribeFederationTokenRequest,
  ModifyWorkloadGroupStatusResponse,
  BindUser,
  CancelBackupJobRequest,
  ModifyWorkloadGroupRequest,
  ResourceNodeSpec,
  UserWorkloadGroup,
  DescribeSlowQueryRecordsDownloadResponse,
  DeleteWorkloadGroupRequest,
  WorkloadGroupConfig,
  FitClsLogRequest,
  ResourceNodeDiskSpec,
  DescribeDmsSqlHistoryRequest,
  DescribeFederationTokenResponse,
  CosSourceInfo,
  ReduceInstanceResponse,
  DescribeBackUpTaskDetailRequest,
  VersionReplicaItem,
  RecoverBackUpJobRequest,
  DiskSpec,
  DescribeInstanceOperationsResponse,
  DescribeUserBindWorkloadGroupResponse,
  ScaleOutInstanceRequest,
  UpdateUserPrivileges,
  DescribeMetricsFileReq,
  DescribeInstanceStateRequest,
  OpenBackUpResponse,
  NetworkInfo,
  ZoneInfo,
  DescribeRestoreTaskDetailResponse,
  DeleteBackUpDataRequest,
  ConfigKeyValue,
  Tag,
  ResizeDiskResponse,
  ModifyInstanceResponse,
  DescribeSlowQueryRecordsDownloadRequest,
  DescribeAreaRegionResponse,
  DescribeDorisMetricFilesRequest,
  ModifyNodeStatusRequest,
  RestartClusterForNodeResponse,
  CancelBackupJobResponse,
  DescribeAreaRegionRequest,
  SlowQueryRecord,
  DescribeInstanceNodesRequest,
  ChargeProperties,
  DescribeWorkloadGroupRequest,
  OpenBackUpRequest,
  InstanceOperation,
  BackupTableContent,
  DescribeInstanceNodesResponse,
  DescribeSqlApisRequest,
  ModifySecurityGroupsRequest,
  CreateInstanceNewRequest,
  DescribeDmsSqlHistoryResponse,
  DorisSourceInfo,
  AttachCBSSpec,
  DataBaseAuditRecord,
  DescribeSlowQueryRecordsResponse,
  ClusterConfigsHistory,
  InstanceConfigItem,
  DescribeRegionZoneResponse,
  CreateBackUpScheduleRequest,
  BackupCosInfo,
  DescribeClusterConfigsHistoryRequest,
  DescribeInstanceStateResponse,
  DescribeInstanceNodesInfoRequest,
  DescribeInstancesHealthStateResponse,
  DescribeSlowQueryRecordsRequest,
  DescribeInstanceNodesRoleResponse,
  DestroyInstanceResponse,
  DescribeBackUpJobRequest,
  ResizeDiskRequest,
  ModifyWorkloadGroupStatusRequest,
  DescribeRegionZoneRequest,
  DescribeDatabaseAuditResourceResponse,
  ModifyUserBindWorkloadGroupRequest,
  DescribeSqlApisResponse,
  ModifyInstanceRequest,
  DescribeSpecResponse,
  ModifyInstanceKeyValConfigsResponse,
  DescribeBackUpSchedulesResponse,
  DescribeBackUpTablesResponse,
  DescribeDatabaseAuditRecordsResponse,
  InstanceNode,
  DescribeInstancesHealthStateRequest,
  NodeInfo,
  FrontEndRule,
  RestartClusterForConfigsResponse,
  ModifySecurityGroupsResponse,
  InstanceInfo,
  DescribeUserBindWorkloadGroupRequest,
  ScaleUpInstanceRequest,
  DescribeInstancesRequest,
  DescribeBackUpSchedulesRequest,
  DescribeClusterConfigsRequest,
  ModifyWorkloadGroupResponse,
  DescribeRestoreTaskDetailRequest,
  ModifyUserPrivilegesV3Request,
  CreateBackUpScheduleResponse,
  ModifyNodeStatusResponse,
  DescribeInstanceResponse,
  DescribeBackUpJobResponse,
  FitClsLogResponse,
  RestartClusterForNodeRequest,
  BackupStatus,
  SearchTags,
  DescribeInstancesResponse,
  DescribeInstanceUsedSubnetsRequest,
  SpecExtra,
  DescribeDatabaseAuditRecordsRequest,
  ModifyMetricFileStructNew,
  DescribeBackUpJobDetailResponse,
  DescribeBackUpJobDetailRequest,
  DescribeTableListRequest,
  DescribeWorkloadGroupResponse,
  ModifyMetricFileStruct,
  DescribeInstanceRequest,
  DescribeBackUpTaskDetailResponse,
  ReduceInstanceRequest,
  DeleteWorkloadGroupResponse,
  ResourceSpec,
  ClusterConfigsInfoFromEMR,
  RestartClusterForConfigsRequest,
  RegionAreaInfo,
  DestroyInstanceRequest,
  RegionInfo,
  CreateWorkloadGroupResponse,
  CreateWorkloadGroupRequest,
  DescribeGoodsDetailResponse,
  RestoreStatus,
  DeleteBackUpDataResponse,
  ModifyInstanceKeyValConfigsRequest,
  BackUpJobDisplay,
  ModifyUserBindWorkloadGroupResponse,
  RecoverBackUpJobResponse,
  DescribeTableListResponse,
  DescribeReplicaVersionRequest,
  NodesSummary,
  DescribeDatabaseAuditDownloadRequest,
  CreateInstanceSpec,
  DescribeFrontEndResponse,
  DescribeGoodsDetailRequest,
  InstanceDetail,
  DescribeSpecRequest,
  DescribeBackUpTablesRequest,
  DescribeInstanceNodesRoleRequest,
  DescribeDatabaseAuditDownloadResponse,
  NodeInfos,
  DescribeReplicaVersionResponse,
  DescribeInstanceNodesInfoResponse,
  ScaleUpInstanceResponse,
} from "./cdwdoris_models"

/**
 * cdwdoris client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cdwdoris.tencentcloudapi.com", "2021-12-28", clientConfig)
  }

  /**
   * 创建或者修改备份策略
   */
  async CreateBackUpSchedule(
    req: CreateBackUpScheduleRequest,
    cb?: (error: string, rep: CreateBackUpScheduleResponse) => void
  ): Promise<CreateBackUpScheduleResponse> {
    return this.request("CreateBackUpSchedule", req, cb)
  }

  /**
   * 查询前端内容
   */
  async DescribeFrontEnd(
    req: DescribeFrontEndRequest,
    cb?: (error: string, rep: DescribeFrontEndResponse) => void
  ): Promise<DescribeFrontEndResponse> {
    return this.request("DescribeFrontEnd", req, cb)
  }

  /**
   * 获取备份、迁移的调度任务信息
   */
  async DescribeBackUpSchedules(
    req?: DescribeBackUpSchedulesRequest,
    cb?: (error: string, rep: DescribeBackUpSchedulesResponse) => void
  ): Promise<DescribeBackUpSchedulesResponse> {
    return this.request("DescribeBackUpSchedules", req, cb)
  }

  /**
   * 查询备份实例列表
   */
  async DescribeBackUpJob(
    req: DescribeBackUpJobRequest,
    cb?: (error: string, rep: DescribeBackUpJobResponse) => void
  ): Promise<DescribeBackUpJobResponse> {
    return this.request("DescribeBackUpJob", req, cb)
  }

  /**
   * 销毁集群
   */
  async DestroyInstance(
    req: DestroyInstanceRequest,
    cb?: (error: string, rep: DestroyInstanceResponse) => void
  ): Promise<DestroyInstanceResponse> {
    return this.request("DestroyInstance", req, cb)
  }

  /**
   * 展示监控指标文件
   */
  async DescribeDorisMetricFiles(
    req: DescribeDorisMetricFilesRequest,
    cb?: (error: string, rep: DescribeDorisMetricFilesResponse) => void
  ): Promise<DescribeDorisMetricFilesResponse> {
    return this.request("DescribeDorisMetricFiles", req, cb)
  }

  /**
   * 获取数据库审计记录
   */
  async DescribeDatabaseAuditRecords(
    req: DescribeDatabaseAuditRecordsRequest,
    cb?: (error: string, rep: DescribeDatabaseAuditRecordsResponse) => void
  ): Promise<DescribeDatabaseAuditRecordsResponse> {
    return this.request("DescribeDatabaseAuditRecords", req, cb)
  }

  /**
   * 查询恢复任务进度详情
   */
  async DescribeRestoreTaskDetail(
    req: DescribeRestoreTaskDetailRequest,
    cb?: (error: string, rep: DescribeRestoreTaskDetailResponse) => void
  ): Promise<DescribeRestoreTaskDetailResponse> {
    return this.request("DescribeRestoreTaskDetail", req, cb)
  }

  /**
   * 创建资源组
   */
  async CreateWorkloadGroup(
    req: CreateWorkloadGroupRequest,
    cb?: (error: string, rep: CreateWorkloadGroupResponse) => void
  ): Promise<CreateWorkloadGroupResponse> {
    return this.request("CreateWorkloadGroup", req, cb)
  }

  /**
   * 下载数据库审计日志
   */
  async DescribeDatabaseAuditDownload(
    req: DescribeDatabaseAuditDownloadRequest,
    cb?: (error: string, rep: DescribeDatabaseAuditDownloadResponse) => void
  ): Promise<DescribeDatabaseAuditDownloadResponse> {
    return this.request("DescribeDatabaseAuditDownload", req, cb)
  }

  /**
   * 获取当前集群各用户绑定的资源信息
   */
  async DescribeUserBindWorkloadGroup(
    req: DescribeUserBindWorkloadGroupRequest,
    cb?: (error: string, rep: DescribeUserBindWorkloadGroupResponse) => void
  ): Promise<DescribeUserBindWorkloadGroupResponse> {
    return this.request("DescribeUserBindWorkloadGroup", req, cb)
  }

  /**
   * 获取BE/FE节点角色
   */
  async DescribeInstanceNodesInfo(
    req: DescribeInstanceNodesInfoRequest,
    cb?: (error: string, rep: DescribeInstanceNodesInfoResponse) => void
  ): Promise<DescribeInstanceNodesInfoResponse> {
    return this.request("DescribeInstanceNodesInfo", req, cb)
  }

  /**
   * 获取集群已使用子网信息
   */
  async DescribeInstanceUsedSubnets(
    req: DescribeInstanceUsedSubnetsRequest,
    cb?: (error: string, rep: DescribeInstanceUsedSubnetsResponse) => void
  ): Promise<DescribeInstanceUsedSubnetsResponse> {
    return this.request("DescribeInstanceUsedSubnets", req, cb)
  }

  /**
   * 获取指定数据源和库下的表列表
   */
  async DescribeTableList(
    req: DescribeTableListRequest,
    cb?: (error: string, rep: DescribeTableListResponse) => void
  ): Promise<DescribeTableListResponse> {
    return this.request("DescribeTableList", req, cb)
  }

  /**
   * 获取可备份表信息
   */
  async DescribeBackUpTables(
    req: DescribeBackUpTablesRequest,
    cb?: (error: string, rep: DescribeBackUpTablesResponse) => void
  ): Promise<DescribeBackUpTablesResponse> {
    return this.request("DescribeBackUpTables", req, cb)
  }

  /**
   * 购买页获取地域及可用区列表、内核版本、网络规则等
   */
  async DescribeRegionZone(
    req: DescribeRegionZoneRequest,
    cb?: (error: string, rep: DescribeRegionZoneResponse) => void
  ): Promise<DescribeRegionZoneResponse> {
    return this.request("DescribeRegionZone", req, cb)
  }

  /**
   * 修改节点状态
   */
  async ModifyNodeStatus(
    req: ModifyNodeStatusRequest,
    cb?: (error: string, rep: ModifyNodeStatusResponse) => void
  ): Promise<ModifyNodeStatusResponse> {
    return this.request("ModifyNodeStatus", req, cb)
  }

  /**
   * 获取集群配置文件修改历史
   */
  async DescribeClusterConfigsHistory(
    req: DescribeClusterConfigsHistoryRequest,
    cb?: (error: string, rep: DescribeClusterConfigsHistoryResponse) => void
  ): Promise<DescribeClusterConfigsHistoryResponse> {
    return this.request("DescribeClusterConfigsHistory", req, cb)
  }

  /**
   * 获取慢查询列表
   */
  async DescribeSlowQueryRecords(
    req: DescribeSlowQueryRecordsRequest,
    cb?: (error: string, rep: DescribeSlowQueryRecordsResponse) => void
  ): Promise<DescribeSlowQueryRecordsResponse> {
    return this.request("DescribeSlowQueryRecords", req, cb)
  }

  /**
   * 开启或关闭资源组
   */
  async ModifyWorkloadGroupStatus(
    req: ModifyWorkloadGroupStatusRequest,
    cb?: (error: string, rep: ModifyWorkloadGroupStatusResponse) => void
  ): Promise<ModifyWorkloadGroupStatusResponse> {
    return this.request("ModifyWorkloadGroupStatus", req, cb)
  }

  /**
   * 修改用户绑定的资源组
   */
  async ModifyUserBindWorkloadGroup(
    req: ModifyUserBindWorkloadGroupRequest,
    cb?: (error: string, rep: ModifyUserBindWorkloadGroupResponse) => void
  ): Promise<ModifyUserBindWorkloadGroupResponse> {
    return this.request("ModifyUserBindWorkloadGroup", req, cb)
  }

  /**
   * 删除备份数据
   */
  async DeleteBackUpData(
    req: DeleteBackUpDataRequest,
    cb?: (error: string, rep: DeleteBackUpDataResponse) => void
  ): Promise<DeleteBackUpDataResponse> {
    return this.request("DeleteBackUpData", req, cb)
  }

  /**
   * 获取集群列表
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 修改资源组信息
   */
  async ModifyWorkloadGroup(
    req: ModifyWorkloadGroupRequest,
    cb?: (error: string, rep: ModifyWorkloadGroupResponse) => void
  ): Promise<ModifyWorkloadGroupResponse> {
    return this.request("ModifyWorkloadGroup", req, cb)
  }

  /**
   * 集群详情页中显示集群状态、流程进度等
   */
  async DescribeInstanceState(
    req: DescribeInstanceStateRequest,
    cb?: (error: string, rep: DescribeInstanceStateResponse) => void
  ): Promise<DescribeInstanceStateResponse> {
    return this.request("DescribeInstanceState", req, cb)
  }

  /**
   * 获取集群的最新的几个配置文件（config.xml、metrika.xml、user.xml）的内容，显示给用户
   */
  async DescribeClusterConfigs(
    req: DescribeClusterConfigsRequest,
    cb?: (error: string, rep: DescribeClusterConfigsResponse) => void
  ): Promise<DescribeClusterConfigsResponse> {
    return this.request("DescribeClusterConfigs", req, cb)
  }

  /**
   * 删除资源组
   */
  async DeleteWorkloadGroup(
    req: DeleteWorkloadGroupRequest,
    cb?: (error: string, rep: DeleteWorkloadGroupResponse) => void
  ): Promise<DeleteWorkloadGroupResponse> {
    return this.request("DeleteWorkloadGroup", req, cb)
  }

  /**
   * 开启或者关闭策略
   */
  async OpenBackUp(
    req: OpenBackUpRequest,
    cb?: (error: string, rep: OpenBackUpResponse) => void
  ): Promise<OpenBackUpResponse> {
    return this.request("OpenBackUp", req, cb)
  }

  /**
   * 查询sql工作区历史运行记录
   */
  async DescribeDmsSqlHistory(
    req: DescribeDmsSqlHistoryRequest,
    cb?: (error: string, rep: DescribeDmsSqlHistoryResponse) => void
  ): Promise<DescribeDmsSqlHistoryResponse> {
    return this.request("DescribeDmsSqlHistory", req, cb)
  }

  /**
   * 检查内核版本是否支持新的备份恢复语法
   */
  async DescribeReplicaVersion(
    req: DescribeReplicaVersionRequest,
    cb?: (error: string, rep: DescribeReplicaVersionResponse) => void
  ): Promise<DescribeReplicaVersionResponse> {
    return this.request("DescribeReplicaVersion", req, cb)
  }

  /**
   * 获取联合身份临时访问凭证
   */
  async DescribeFederationToken(
    req?: DescribeFederationTokenRequest,
    cb?: (error: string, rep: DescribeFederationTokenResponse) => void
  ): Promise<DescribeFederationTokenResponse> {
    return this.request("DescribeFederationToken", req, cb)
  }

  /**
   * 更改安全组
   */
  async ModifySecurityGroups(
    req: ModifySecurityGroupsRequest,
    cb?: (error: string, rep: ModifySecurityGroupsResponse) => void
  ): Promise<ModifySecurityGroupsResponse> {
    return this.request("ModifySecurityGroups", req, cb)
  }

  /**
   * 备份恢复
   */
  async RecoverBackUpJob(
    req: RecoverBackUpJobRequest,
    cb?: (error: string, rep: RecoverBackUpJobResponse) => void
  ): Promise<RecoverBackUpJobResponse> {
    return this.request("RecoverBackUpJob", req, cb)
  }

  /**
   * 集群缩容
   */
  async ReduceInstance(
    req: ReduceInstanceRequest,
    cb?: (error: string, rep: ReduceInstanceResponse) => void
  ): Promise<ReduceInstanceResponse> {
    return this.request("ReduceInstance", req, cb)
  }

  /**
   * 修改用户权限,支持catalog，全部db，部分db表三种权限设置类别
   */
  async ModifyUserPrivilegesV3(
    req: ModifyUserPrivilegesV3Request,
    cb?: (error: string, rep: ModifyUserPrivilegesV3Response) => void
  ): Promise<ModifyUserPrivilegesV3Response> {
    return this.request("ModifyUserPrivilegesV3", req, cb)
  }

  /**
   * 在集群详情页面，拉取该集群的操作
   */
  async DescribeInstanceOperations(
    req: DescribeInstanceOperationsRequest,
    cb?: (error: string, rep: DescribeInstanceOperationsResponse) => void
  ): Promise<DescribeInstanceOperationsResponse> {
    return this.request("DescribeInstanceOperations", req, cb)
  }

  /**
   * 给已存在集群，配置日志服务
   */
  async FitClsLog(
    req: FitClsLogRequest,
    cb?: (error: string, rep: FitClsLogResponse) => void
  ): Promise<FitClsLogResponse> {
    return this.request("FitClsLog", req, cb)
  }

  /**
   * 针对驱动sql命令查询ck集群接口
   */
  async DescribeSqlApis(
    req: DescribeSqlApisRequest,
    cb?: (error: string, rep: DescribeSqlApisResponse) => void
  ): Promise<DescribeSqlApisResponse> {
    return this.request("DescribeSqlApis", req, cb)
  }

  /**
   * 查询备份任务进度详情
   */
  async DescribeBackUpTaskDetail(
    req: DescribeBackUpTaskDetailRequest,
    cb?: (error: string, rep: DescribeBackUpTaskDetailResponse) => void
  ): Promise<DescribeBackUpTaskDetailResponse> {
    return this.request("DescribeBackUpTaskDetail", req, cb)
  }

  /**
   * 根据集群ID查询某个集群的具体信息
   */
  async DescribeInstance(
    req: DescribeInstanceRequest,
    cb?: (error: string, rep: DescribeInstanceResponse) => void
  ): Promise<DescribeInstanceResponse> {
    return this.request("DescribeInstance", req, cb)
  }

  /**
   * 通过API创建集群
   */
  async CreateInstanceNew(
    req: CreateInstanceNewRequest,
    cb?: (error: string, rep: CreateInstanceNewResponse) => void
  ): Promise<CreateInstanceNewResponse> {
    return this.request("CreateInstanceNew", req, cb)
  }

  /**
   * 生成计费相关接口的GoodsDetail结构
   */
  async DescribeGoodsDetail(
    req: DescribeGoodsDetailRequest,
    cb?: (error: string, rep: DescribeGoodsDetailResponse) => void
  ): Promise<DescribeGoodsDetailResponse> {
    return this.request("DescribeGoodsDetail", req, cb)
  }

  /**
   * 数据库审计数据库、用户等
   */
  async DescribeDatabaseAuditResource(
    req: DescribeDatabaseAuditResourceRequest,
    cb?: (error: string, rep: DescribeDatabaseAuditResourceResponse) => void
  ): Promise<DescribeDatabaseAuditResourceResponse> {
    return this.request("DescribeDatabaseAuditResource", req, cb)
  }

  /**
   * 取消对应的备份实例任务
   */
  async CancelBackupJob(
    req: CancelBackupJobRequest,
    cb?: (error: string, rep: CancelBackupJobResponse) => void
  ): Promise<CancelBackupJobResponse> {
    return this.request("CancelBackupJob", req, cb)
  }

  /**
   * 计算资源垂直变配
   */
  async ScaleUpInstance(
    req: ScaleUpInstanceRequest,
    cb?: (error: string, rep: ScaleUpInstanceResponse) => void
  ): Promise<ScaleUpInstanceResponse> {
    return this.request("ScaleUpInstance", req, cb)
  }

  /**
   * 水平扩容节点
   */
  async ScaleOutInstance(
    req: ScaleOutInstanceRequest,
    cb?: (error: string, rep: ScaleOutInstanceResponse) => void
  ): Promise<ScaleOutInstanceResponse> {
    return this.request("ScaleOutInstance", req, cb)
  }

  /**
   * 查询备份任务详情
   */
  async DescribeBackUpJobDetail(
    req: DescribeBackUpJobDetailRequest,
    cb?: (error: string, rep: DescribeBackUpJobDetailResponse) => void
  ): Promise<DescribeBackUpJobDetailResponse> {
    return this.request("DescribeBackUpJobDetail", req, cb)
  }

  /**
   * 获取集群节点角色
   */
  async DescribeInstanceNodesRole(
    req: DescribeInstanceNodesRoleRequest,
    cb?: (error: string, rep: DescribeInstanceNodesRoleResponse) => void
  ): Promise<DescribeInstanceNodesRoleResponse> {
    return this.request("DescribeInstanceNodesRole", req, cb)
  }

  /**
   * 重启集群让配置文件生效
   */
  async RestartClusterForConfigs(
    req: RestartClusterForConfigsRequest,
    cb?: (error: string, rep: RestartClusterForConfigsResponse) => void
  ): Promise<RestartClusterForConfigsResponse> {
    return this.request("RestartClusterForConfigs", req, cb)
  }

  /**
   * 购买页拉取集群的数据节点和zookeeper节点的规格列表
   */
  async DescribeSpec(
    req: DescribeSpecRequest,
    cb?: (error: string, rep: DescribeSpecResponse) => void
  ): Promise<DescribeSpecResponse> {
    return this.request("DescribeSpec", req, cb)
  }

  /**
   * 集群列表页上显示地域信息及各个地域的集群总数
   */
  async DescribeAreaRegion(
    req: DescribeAreaRegionRequest,
    cb?: (error: string, rep: DescribeAreaRegionResponse) => void
  ): Promise<DescribeAreaRegionResponse> {
    return this.request("DescribeAreaRegion", req, cb)
  }

  /**
   * 扩容云盘
   */
  async ResizeDisk(
    req: ResizeDiskRequest,
    cb?: (error: string, rep: ResizeDiskResponse) => void
  ): Promise<ResizeDiskResponse> {
    return this.request("ResizeDisk", req, cb)
  }

  /**
   * 集群健康检查
   */
  async DescribeInstancesHealthState(
    req: DescribeInstancesHealthStateRequest,
    cb?: (error: string, rep: DescribeInstancesHealthStateResponse) => void
  ): Promise<DescribeInstancesHealthStateResponse> {
    return this.request("DescribeInstancesHealthState", req, cb)
  }

  /**
   * 集群滚动重启
   */
  async RestartClusterForNode(
    req: RestartClusterForNodeRequest,
    cb?: (error: string, rep: RestartClusterForNodeResponse) => void
  ): Promise<RestartClusterForNodeResponse> {
    return this.request("RestartClusterForNode", req, cb)
  }

  /**
   * 下载慢查询文件
   */
  async DescribeSlowQueryRecordsDownload(
    req: DescribeSlowQueryRecordsDownloadRequest,
    cb?: (error: string, rep: DescribeSlowQueryRecordsDownloadResponse) => void
  ): Promise<DescribeSlowQueryRecordsDownloadResponse> {
    return this.request("DescribeSlowQueryRecordsDownload", req, cb)
  }

  /**
   * 获取集群节点信息列表
   */
  async DescribeInstanceNodes(
    req: DescribeInstanceNodesRequest,
    cb?: (error: string, rep: DescribeInstanceNodesResponse) => void
  ): Promise<DescribeInstanceNodesResponse> {
    return this.request("DescribeInstanceNodes", req, cb)
  }

  /**
   * 获取资源组信息
   */
  async DescribeWorkloadGroup(
    req: DescribeWorkloadGroupRequest,
    cb?: (error: string, rep: DescribeWorkloadGroupResponse) => void
  ): Promise<DescribeWorkloadGroupResponse> {
    return this.request("DescribeWorkloadGroup", req, cb)
  }

  /**
   * 修改集群名称
   */
  async ModifyInstance(
    req: ModifyInstanceRequest,
    cb?: (error: string, rep: ModifyInstanceResponse) => void
  ): Promise<ModifyInstanceResponse> {
    return this.request("ModifyInstance", req, cb)
  }

  /**
   * KV模式修改配置接口
   */
  async ModifyInstanceKeyValConfigs(
    req: ModifyInstanceKeyValConfigsRequest,
    cb?: (error: string, rep: ModifyInstanceKeyValConfigsResponse) => void
  ): Promise<ModifyInstanceKeyValConfigsResponse> {
    return this.request("ModifyInstanceKeyValConfigs", req, cb)
  }
}
