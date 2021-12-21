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
  ResourceUrlInfo,
  SyncProxyOrganizationResponse,
  FlowApproverInfo,
  PrepareFlowsResponse,
  TemplateInfo,
  GetDownloadFlowUrlResponse,
  DescribeResourceUrlsByFlowsResponse,
  Recipient,
  DescribeTemplatesResponse,
  OperateChannelTemplateResponse,
  CreateSignUrlsRequest,
  AuthFailMessage,
  DescribeResourceUrlsByFlowsRequest,
  Component,
  GetDownloadFlowUrlRequest,
  SignUrlInfo,
  CreateConsoleLoginUrlRequest,
  CreateFlowsByTemplatesResponse,
  PrepareFlowsRequest,
  SyncProxyOrganizationOperatorsResponse,
  FlowResourceUrlInfo,
  DescribeTemplatesRequest,
  SyncProxyOrganizationOperatorsRequest,
  CreateConsoleLoginUrlResponse,
  CreateFlowsByTemplatesRequest,
  SyncProxyOrganizationRequest,
  UsageDetail,
  CreateSignUrlsResponse,
  OperateChannelTemplateRequest,
  DownloadFlowInfo,
  SyncFailReason,
  DescribeUsageRequest,
  ProxyOrganizationOperator,
  Agent,
  FormField,
  FlowInfo,
  UserInfo,
  DescribeUsageResponse,
} from "./essbasic_models"

/**
 * essbasic client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("essbasic.tencentcloudapi.com", "2021-05-26", clientConfig)
  }

  /**
   * 接口（CreateFlowsByTemplates）用于使用多个模板批量创建流程
   */
  async CreateFlowsByTemplates(
    req: CreateFlowsByTemplatesRequest,
    cb?: (error: string, rep: CreateFlowsByTemplatesResponse) => void
  ): Promise<CreateFlowsByTemplatesResponse> {
    return this.request("CreateFlowsByTemplates", req, cb)
  }

  /**
     * 此接口（GetDownloadFlowUrl）用于创建电子签批量下载确认页面链接，支持客户合同（流程）归类打包下载。

     */
  async GetDownloadFlowUrl(
    req: GetDownloadFlowUrlRequest,
    cb?: (error: string, rep: GetDownloadFlowUrlResponse) => void
  ): Promise<GetDownloadFlowUrlResponse> {
    return this.request("GetDownloadFlowUrl", req, cb)
  }

  /**
   * 该接口 (PrepareFlows) 用于创建待发起文件
   */
  async PrepareFlows(
    req: PrepareFlowsRequest,
    cb?: (error: string, rep: PrepareFlowsResponse) => void
  ): Promise<PrepareFlowsResponse> {
    return this.request("PrepareFlows", req, cb)
  }

  /**
     * 此接口（OperateChannelTemplate）用于渠道侧将模板库中的模板对合作企业进行查询和设置, 其中包括可见性的修改以及对合作企业的指定.
1、同步标识=select时：
输入规则：“可见标识”、“指定合作企业列表”为空。
处理规则：返回指定模版的可见标识、指定合作企业列表。
2、同步标识=update时：
输入规则：“可见标识”、“指定合作企业列表”非必填输入。
处理规则：
若“可见标识”=空，不做处理，返回当前的可见标识。
若“可见标识”=所有合作企业，不取“指定合作企业列表”的值处理。
若“可见标识”=指定合作企业，取“指定合作企业列表”的值进行更新/插入。
3、同步标识=delete时：
输入规则：“可见标识”、“指定合作企业列表”非必填输入。
处理规则：
仅取“指定合作企业列表”的值进行删除处理，为空时不做处。
     */
  async OperateChannelTemplate(
    req: OperateChannelTemplateRequest,
    cb?: (error: string, rep: OperateChannelTemplateResponse) => void
  ): Promise<OperateChannelTemplateResponse> {
    return this.request("OperateChannelTemplate", req, cb)
  }

  /**
   * 根据流程Id批量创建签署参与者签署H5链接
   */
  async CreateSignUrls(
    req: CreateSignUrlsRequest,
    cb?: (error: string, rep: CreateSignUrlsResponse) => void
  ): Promise<CreateSignUrlsResponse> {
    return this.request("CreateSignUrls", req, cb)
  }

  /**
     * 此接口（CreateConsoleLoginUrl）用于创建电子签控制台登录链接。若企业未激活，调用同步企业信息、同步经办人信息

     */
  async CreateConsoleLoginUrl(
    req: CreateConsoleLoginUrlRequest,
    cb?: (error: string, rep: CreateConsoleLoginUrlResponse) => void
  ): Promise<CreateConsoleLoginUrlResponse> {
    return this.request("CreateConsoleLoginUrl", req, cb)
  }

  /**
   * 此接口（SyncProxyOrganizationOperators）用于同步渠道合作企业经办人列表
   */
  async SyncProxyOrganizationOperators(
    req: SyncProxyOrganizationOperatorsRequest,
    cb?: (error: string, rep: SyncProxyOrganizationOperatorsResponse) => void
  ): Promise<SyncProxyOrganizationOperatorsResponse> {
    return this.request("SyncProxyOrganizationOperators", req, cb)
  }

  /**
     * 此接口（DescribeUsage）用于获取渠道所有合作企业流量消耗情况。
 注: 此接口每日限频2次，若要扩大限制次数,请提前与客服经理或邮件至e-contract@tencent.com进行联系。
     */
  async DescribeUsage(
    req: DescribeUsageRequest,
    cb?: (error: string, rep: DescribeUsageResponse) => void
  ): Promise<DescribeUsageResponse> {
    return this.request("DescribeUsage", req, cb)
  }

  /**
   * 根据流程信息批量获取资源下载链接
   */
  async DescribeResourceUrlsByFlows(
    req: DescribeResourceUrlsByFlowsRequest,
    cb?: (error: string, rep: DescribeResourceUrlsByFlowsResponse) => void
  ): Promise<DescribeResourceUrlsByFlowsResponse> {
    return this.request("DescribeResourceUrlsByFlows", req, cb)
  }

  /**
   * 此接口（SyncProxyOrganization）用于同步渠道侧企业信息
   */
  async SyncProxyOrganization(
    req: SyncProxyOrganizationRequest,
    cb?: (error: string, rep: SyncProxyOrganizationResponse) => void
  ): Promise<SyncProxyOrganizationResponse> {
    return this.request("SyncProxyOrganization", req, cb)
  }

  /**
   * 通过此接口（DescribeTemplates）查询该企业在电子签渠道版中配置的有效模板列表
   */
  async DescribeTemplates(
    req: DescribeTemplatesRequest,
    cb?: (error: string, rep: DescribeTemplatesResponse) => void
  ): Promise<DescribeTemplatesResponse> {
    return this.request("DescribeTemplates", req, cb)
  }
}
