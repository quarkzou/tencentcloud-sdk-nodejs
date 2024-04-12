import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ImageToImageResponse, SubmitTextToImageProJobRequest, ImageToImageRequest, QueryTextToImageProJobResponse, QueryTextToImageProJobRequest, SubmitTextToImageProJobResponse, TextToImageRequest, TextToImageResponse } from "./aiart_models";
/**
 * aiart client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 文生图（高级版）接口基于高级版文生图大模型，将根据输入的文本描述，智能生成与之相关的结果图。分为提交任务和查询任务2个接口。
提交任务：输入文本等，提交一个文生图（高级版）异步任务，获得任务 ID。
查询任务：根据任务 ID 查询任务的处理状态、处理结果，任务处理完成后可获得生成图像结果。
并发任务数（并发）说明：并发任务数指能同时处理的任务数量。文生图（高级版）默认提供1个并发任务数，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
    QueryTextToImageProJob(req: QueryTextToImageProJobRequest, cb?: (error: string, rep: QueryTextToImageProJobResponse) => void): Promise<QueryTextToImageProJobResponse>;
    /**
     * 文生图（高级版）接口基于高级版文生图大模型，将根据输入的文本描述，智能生成与之相关的结果图。分为提交任务和查询任务2个接口。
提交任务：输入文本等，提交一个文生图（高级版）异步任务，获得任务 ID。
查询任务：根据任务 ID 查询任务的处理状态、处理结果，任务处理完成后可获得生成图像结果。
并发任务数（并发）说明：并发任务数指能同时处理的任务数量。文生图（高级版）默认提供1个并发任务数，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
    SubmitTextToImageProJob(req: SubmitTextToImageProJobRequest, cb?: (error: string, rep: SubmitTextToImageProJobResponse) => void): Promise<SubmitTextToImageProJobResponse>;
    /**
     * 智能文生图接口提供基础版文生图能力，将根据输入的文本描述，智能生成与之相关的结果图。

智能文生图默认提供3个并发任务数，代表最多能同时处理3个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
    TextToImage(req: TextToImageRequest, cb?: (error: string, rep: TextToImageResponse) => void): Promise<TextToImageResponse>;
    /**
     * 智能图生图接口提供基础版图生图能力，将根据输入的图像及文本描述，智能生成风格转化后的图像。建议避免输入人像过小、姿势复杂、人数较多的人像图片。
智能图生图默认提供3个并发任务数，代表最多能同时处理3个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
    ImageToImage(req: ImageToImageRequest, cb?: (error: string, rep: ImageToImageResponse) => void): Promise<ImageToImageResponse>;
}
