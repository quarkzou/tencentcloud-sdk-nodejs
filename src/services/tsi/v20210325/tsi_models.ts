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

/**
 * TongChuanSync返回参数结构体
 */
export interface TongChuanSyncResponse {
  /**
   * 同传结果数组
   */
  List?: Array<DisplayInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 同传结果数据
 */
export interface DisplayInfo {
  /**
   * 句子 ID
   */
  SeId?: string
  /**
   * 句子版本号
   */
  SeVer?: number
  /**
   * 识别结果
   */
  SourceText?: string
  /**
   *  翻译结果
   */
  TargetText?: string
  /**
   * 句子开始时间
   */
  StartTime?: number
  /**
   * 句子结束时间
   */
  EndTime?: number
  /**
   *  当前句子是否已结束
   */
  IsEnd?: boolean
}

/**
 * TongChuanRecognize返回参数结构体
 */
export interface TongChuanRecognizeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TongChuanDisplay请求参数结构体
 */
export interface TongChuanDisplayRequest {
  /**
   * 一段完整的语音对应一个SessionUuid
   */
  SessionUuid: string
  /**
   * 句子排序方式，1-由新到旧
   */
  IsNew: number
  /**
   * 最多返回几句，目前只支持 5 条数据
   */
  SeMax: number
}

/**
 * TongChuanRecognize请求参数结构体
 */
export interface TongChuanRecognizeRequest {
  /**
   * 一段完整的语音对应一个SessionUuid
   */
  SessionUuid: string
  /**
   * 音频中的语言类型，支持语言列表<li> zh : 中文 </li> <li> en : 英文 </li>
   */
  Source: string
  /**
   * 翻译目标语言类型，支持的语言列表<li> zh : 中文 </li> <li> en : 英文 </li>
   */
  Target: string
  /**
   * 语音编码类型，1-pcm
   */
  AudioFormat: number
  /**
   * 语音分片的序号，从0开始
   */
  Seq: number
  /**
   * 语音开始的时间戳
   */
  Utc: number
  /**
   * 是否最后一片语音分片，0-否，1-是
   */
  IsEnd: number
  /**
   * 翻译时机，0-不翻译 2-句子实时翻译
   */
  TranslateTime: number
  /**
   * 语音分片内容进行 Base64 编码后的字符串。音频内容需包含有效并可识别的文本信息。
   */
  Data: string
}

/**
 * TongChuanDisplay返回参数结构体
 */
export interface TongChuanDisplayResponse {
  /**
   * 同传结果数组
   */
  List?: Array<DisplayInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TongChuanSync请求参数结构体
 */
export interface TongChuanSyncRequest {
  /**
   * 一段完整的语音对应一个SessionUuid
   */
  SessionUuid: string
  /**
   * 音频中的语言类型，支持语言列表<li> zh : 中文 </li> <li> en : 英文 </li>
   */
  Source: string
  /**
   * 翻译目标语言类型，支持的语言列表<li> zh : 中文 </li> <li> en : 英文 </li>
   */
  Target: string
  /**
   * 语音编码类型，1-pcm
   */
  AudioFormat: number
  /**
   * 语音分片的序号，从0开始
   */
  Seq: number
  /**
   * 语音开始的时间戳
   */
  Utc: number
  /**
   * 是否最后一片语音分片，0-否，1-是
   */
  IsEnd: number
  /**
   * 翻译时机，0-不翻译 2-句子实时翻译
   */
  TranslateTime: number
  /**
   * 语音分片内容进行 Base64 编码后的字符串。音频内容需包含有效并可识别的文本信息。
   */
  Data: string
}
