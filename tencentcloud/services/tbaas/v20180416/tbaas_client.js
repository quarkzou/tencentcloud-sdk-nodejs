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
 * tbaas client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tbaas.tencentcloudapi.com", "2018-04-16", clientConfig);
    }
    /**
     * Bcos区块链引擎已下线，请选用其他区块链引擎

执行Bcos交易，支持动态部署的合约
     */
    async InvokeBcosTrans(req, cb) {
        return this.request("InvokeBcosTrans", req, cb);
    }
    /**
     * 通过交易ID查询长安链交易
     */
    async QueryChainMakerTransaction(req, cb) {
        return this.request("QueryChainMakerTransaction", req, cb);
    }
    /**
     * Bcos区块链引擎已下线，请选用其他区块链引擎

使用块高查询Bcos区块信息
     */
    async GetBcosBlockByNumber(req, cb) {
        return this.request("GetBcosBlockByNumber", req, cb);
    }
    /**
     * 批量申请长安链用户签名证书
     */
    async ApplyChainMakerBatchUserCert(req, cb) {
        return this.request("ApplyChainMakerBatchUserCert", req, cb);
    }
    /**
     * 获取合约容器日志
     */
    async GetChaincodeLogForUser(req, cb) {
        return this.request("GetChaincodeLogForUser", req, cb);
    }
    /**
     * Bcos区块链引擎已下线，请选用其他区块链引擎

Bcos根据交易哈希查看交易详细信息
     */
    async GetBcosTransByHash(req, cb) {
        return this.request("GetBcosTransByHash", req, cb);
    }
    /**
     * 获取该用户的网络列表。网络信息中包含组织信息，但仅包含该用户所在组织的信息。
     */
    async GetClusterListForUser(req, cb) {
        return this.request("GetClusterListForUser", req, cb);
    }
    /**
     * Bcos区块链引擎已下线，请选用其他区块链引擎

Bcos分页查询当前群组下的区块列表
     */
    async GetBcosBlockList(req, cb) {
        return this.request("GetBcosBlockList", req, cb);
    }
    /**
     * 调用长安链合约查询
     */
    async QueryChainMakerContract(req, cb) {
        return this.request("QueryChainMakerContract", req, cb);
    }
    /**
     * 查询长安链体验网络指定高度区块的交易
     */
    async QueryChainMakerDemoBlockTransaction(req, cb) {
        return this.request("QueryChainMakerDemoBlockTransaction", req, cb);
    }
    /**
     * 新增交易
     */
    async Invoke(req, cb) {
        return this.request("Invoke", req, cb);
    }
    /**
     * 获取区块链网络概要
     */
    async GetClusterSummary(req, cb) {
        return this.request("GetClusterSummary", req, cb);
    }
    /**
     * 获取节点日志
     */
    async GetPeerLogForUser(req, cb) {
        return this.request("GetPeerLogForUser", req, cb);
    }
    /**
     * Bcos区块链引擎已下线，请选用其他区块链引擎

动态部署并发布Bcos合约
     */
    async DeployDynamicBcosContract(req, cb) {
        return this.request("DeployDynamicBcosContract", req, cb);
    }
    /**
     * 获取fabric最新交易列表
     */
    async GetLatestTransactionList(req, cb) {
        return this.request("GetLatestTransactionList", req, cb);
    }
    /**
     * 下载用户证书
     */
    async DownloadUserCert(req, cb) {
        return this.request("DownloadUserCert", req, cb);
    }
    /**
     * 创建并安装合约
     */
    async CreateChaincodeAndInstallForUser(req, cb) {
        return this.request("CreateChaincodeAndInstallForUser", req, cb);
    }
    /**
     * 通过交易ID查询长安链体验网络交易
     */
    async QueryChainMakerDemoTransaction(req, cb) {
        return this.request("QueryChainMakerDemoTransaction", req, cb);
    }
    /**
     * 获取最新交易列表（已废弃）
     */
    async GetLatesdTransactionList(req, cb) {
        return this.request("GetLatesdTransactionList", req, cb);
    }
    /**
     * 申请用户证书
     */
    async ApplyUserCert(req, cb) {
        return this.request("ApplyUserCert", req, cb);
    }
    /**
     * 调用长安链合约执行交易
     */
    async InvokeChainMakerContract(req, cb) {
        return this.request("InvokeChainMakerContract", req, cb);
    }
    /**
     * Invoke异步调用结果查询
     */
    async GetInvokeTx(req, cb) {
        return this.request("GetInvokeTx", req, cb);
    }
    /**
     * 实例化结果查询
     */
    async GetChaincodeInitializeResultForUser(req, cb) {
        return this.request("GetChaincodeInitializeResultForUser", req, cb);
    }
    /**
     * 获取通道列表
     */
    async GetChannelListForUser(req, cb) {
        return this.request("GetChannelListForUser", req, cb);
    }
    /**
     * 查询长安链指定高度区块的交易
     */
    async QueryChainMakerBlockTransaction(req, cb) {
        return this.request("QueryChainMakerBlockTransaction", req, cb);
    }
    /**
     * 实例化合约
     */
    async InitializeChaincodeForUser(req, cb) {
        return this.request("InitializeChaincodeForUser", req, cb);
    }
    /**
     * 调用长安链体验网络合约查询
     */
    async QueryChainMakerDemoContract(req, cb) {
        return this.request("QueryChainMakerDemoContract", req, cb);
    }
    /**
     * 获取交易详情
     */
    async GetTransactionDetailForUser(req, cb) {
        return this.request("GetTransactionDetailForUser", req, cb);
    }
    /**
     * trustsql服务统一接口
     */
    async SrvInvoke(req, cb) {
        return this.request("SrvInvoke", req, cb);
    }
    /**
     * Bcos区块链引擎已下线，请选用其他区块链引擎

Bcos分页查询当前群组的交易信息列表
     */
    async GetBcosTransList(req, cb) {
        return this.request("GetBcosTransList", req, cb);
    }
    /**
     * 调用长安链体验网络合约执行交易
     */
    async InvokeChainMakerDemoContract(req, cb) {
        return this.request("InvokeChainMakerDemoContract", req, cb);
    }
    /**
     * 获取合约编译日志
     */
    async GetChaincodeCompileLogForUser(req, cb) {
        return this.request("GetChaincodeCompileLogForUser", req, cb);
    }
    /**
     * 获取区块内的交易列表
     */
    async GetBlockTransactionListForUser(req, cb) {
        return this.request("GetBlockTransactionListForUser", req, cb);
    }
    /**
     * 查看当前网络下的所有区块列表，分页展示
     */
    async GetBlockList(req, cb) {
        return this.request("GetBlockList", req, cb);
    }
    /**
     * 查询交易
     */
    async Query(req, cb) {
        return this.request("Query", req, cb);
    }
}
exports.Client = Client;
