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
  ChatCompletionsRequest,
  GetTokenCountResponse,
  GetEmbeddingResponse,
  ErrorMsg,
  ChatStdResponse,
  GetEmbeddingRequest,
  ChatProResponse,
  Choice,
  ChatProRequest,
  EmbeddingData,
  EmbeddingUsage,
  Delta,
  Usage,
  Message,
  GetTokenCountRequest,
  ChatCompletionsResponse,
  ChatStdRequest,
} from "./hunyuan_models"

/**
 * hunyuan client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("hunyuan.tencentcloudapi.com", "2023-09-01", clientConfig)
  }

  /**
     * 腾讯混元大模型是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口支持流式或非流式调用，当使用流式调用时为 SSE 协议。

 1. 本接口暂不支持返回图片内容。
 2. 默认每种模型单账号限制并发数为 5 路，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service) 。
 3. 请使用 SDK 调用本接口，每种开发语言的 SDK Git 仓库 examples/hunyuan/v20230901/ 目录下有提供示例供参考。SDK 链接在文档下方 “**开发者资源 - SDK**” 部分提供。
     */
  async ChatCompletions(
    req: ChatCompletionsRequest,
    cb?: (error: string, rep: ChatCompletionsResponse) => void
  ): Promise<ChatCompletionsResponse> {
    return this.request("ChatCompletions", req, cb)
  }

  /**
     * <span style="font-size:1.5em;">注意：本接口将于 5 月 15 日下线；下线后将不再提供文档指引，接口本身可继续调用，建议使用 [hunyuan](https://cloud.tencent.com/document/api/1729/105701) 接入。</span>

腾讯混元大模型（hunyuan-pro）是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口支持流式或非流式调用，当使用流式调用时为 SSE 协议。

 1. 本接口暂不支持返回图片内容。
 2. 默认单账号限制并发数为 5 路，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service) 。
 3. 请使用 SDK 调用本接口，每种开发语言的 SDK Git 仓库 examples/hunyuan/v20230901/ 目录下有提供示例供参考。SDK 链接在文档下方 “**开发者资源 - SDK**” 部分提供。
     */
  async ChatPro(
    req: ChatProRequest,
    cb?: (error: string, rep: ChatProResponse) => void
  ): Promise<ChatProResponse> {
    return this.request("ChatPro", req, cb)
  }

  /**
     * <span style="font-size:1.5em;">注意：本接口将于 5 月 15 日下线；下线后将不再提供文档指引，接口本身可继续调用，建议使用 [hunyuan](https://cloud.tencent.com/document/api/1729/105701) 接入。</span>

腾讯混元大模型标准版是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。本接口支持流式或非流式调用，当使用流式调用时为 SSE 协议。

 1. 本接口暂不支持返回图片内容。
 2. 默认单账号限制并发数为 5 路，如您有提高并发限制的需求请 [联系我们](https://cloud.tencent.com/act/event/Online_service) 。
 3. 请使用 SDK 调用本接口，每种开发语言的 SDK Git 仓库 examples/hunyuan/v20230901/ 目录下有提供示例供参考。SDK 链接在文档下方 “**开发者资源 - SDK**” 部分提供。
     */
  async ChatStd(
    req: ChatStdRequest,
    cb?: (error: string, rep: ChatStdResponse) => void
  ): Promise<ChatStdResponse> {
    return this.request("ChatStd", req, cb)
  }

  /**
   * 该接口用于计算文本对应Token数、字符数。
   */
  async GetTokenCount(
    req: GetTokenCountRequest,
    cb?: (error: string, rep: GetTokenCountResponse) => void
  ): Promise<GetTokenCountResponse> {
    return this.request("GetTokenCount", req, cb)
  }

  /**
   * 腾讯混元 Embedding 接口，可以将文本转化为高质量的向量数据。
   */
  async GetEmbedding(
    req: GetEmbeddingRequest,
    cb?: (error: string, rep: GetEmbeddingResponse) => void
  ): Promise<GetEmbeddingResponse> {
    return this.request("GetEmbedding", req, cb)
  }
}
