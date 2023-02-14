/**
 * CreateRoom请求参数结构体
 */
export interface CreateRoomRequest {
    /**
      * 房间名称。
      */
    Name: string;
    /**
      * 预定的房间开始时间，unix时间戳。
      */
    StartTime: number;
    /**
      * 预定的房间结束时间，unix时间戳。
      */
    EndTime: number;
    /**
      * 低代码互动课堂的SdkAppId。
      */
    SdkAppId: number;
    /**
      * 分辨率。可以有如下取值：
1 标清
2 高清
3 全高清
      */
    Resolution: number;
    /**
      * 最大连麦人数（不包括老师）。取值范围[0, 16]
      */
    MaxMicNumber: number;
    /**
      * 房间子类型，可以有以下取值：
videodoc 文档+视频
video 纯视频
coteaching 双师
      */
    SubType: string;
    /**
      * 老师ID。通过[注册用户]接口获取的UserId。指定后该用户在房间内拥有老师权限。
      */
    TeacherId?: string;
    /**
      * 进入课堂时是否自动连麦。可以有以下取值：
0 不自动连麦（需要手动申请上麦，默认值）
1 自动连麦
      */
    AutoMic?: number;
    /**
      * 高音质模式。可以有以下取值：
0 不开启高音质（默认值）
1 开启高音质
      */
    AudioQuality?: number;
    /**
      * 上课后是否禁止自动录制。可以有以下取值：
0 不禁止录制（自动开启录制，默认值）
1 禁止录制
注：如果该配置取值为0，录制将从上课后开始，课堂结束后停止。
      */
    DisableRecord?: number;
    /**
      * 助教Id列表。通过[注册用户]接口获取的UserId。指定后该用户在房间内拥有助教权限。
      */
    Assistants?: Array<string>;
    /**
      * 录制布局。
      */
    RecordLayout?: number;
}
/**
 * BatchCreateRoom返回参数结构体
 */
export interface BatchCreateRoomResponse {
    /**
      * 创建成功课堂ID，与传入课堂信息顺序一致
      */
    RoomIds?: Array<number>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetAppCustomContent请求参数结构体
 */
export interface SetAppCustomContentRequest {
    /**
      * 自定义内容。
      */
    CustomContent: Array<AppCustomContent>;
    /**
      * 应用ID。
      */
    SdkAppId: number;
}
/**
 * 批量创建房间的房间信息
 */
export interface RoomInfo {
    /**
      * 房间名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 预定的房间开始时间，unix时间戳。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: number;
    /**
      * 预定的房间结束时间，unix时间戳。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: number;
    /**
      * 分辨率。可以有如下取值： 1 标清 2 高清 3 全高清
注意：此字段可能返回 null，表示取不到有效值。
      */
    Resolution: number;
    /**
      * 最大连麦人数（不包括老师）。取值范围[0, 16]
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxMicNumber: number;
    /**
      * 房间子类型，可以有以下取值： videodoc 文档+视频 video 纯视频 coteaching 双师
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubType: string;
    /**
      * 老师ID。通过[注册用户]接口获取的UserId。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TeacherId?: string;
    /**
      * 进入课堂时是否自动连麦。可以有以下取值： 0 不自动连麦（需要手动申请上麦，默认值） 1 自动连麦
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoMic?: number;
    /**
      * 释放音视频权限后是否自动取消连麦。可以有以下取值： 0 自动取消连麦（默认值） 1 保持连麦状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    TurnOffMic?: number;
    /**
      * 高音质模式。可以有以下取值： 0 不开启高音质（默认值） 1 开启高音质
注意：此字段可能返回 null，表示取不到有效值。
      */
    AudioQuality?: number;
    /**
      * 上课后是否禁止自动录制。可以有以下取值： 0 不禁止录制（自动开启录制，默认值） 1 禁止录制 注：如果该配置取值为0，录制将从上课后开始，课堂结束后停止。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DisableRecord?: number;
    /**
      * 助教Id列表。通过[注册用户]接口获取的UserId。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Assistants?: Array<string>;
    /**
      * rtc人数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RTCAudienceNumber?: number;
    /**
      * 观看类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AudienceType?: number;
    /**
      * 录制布局。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordLayout?: number;
}
/**
 * SetWatermark返回参数结构体
 */
export interface SetWatermarkResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyRoom返回参数结构体
 */
export interface ModifyRoomResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UnbindDocumentFromRoom返回参数结构体
 */
export interface UnbindDocumentFromRoomResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUser请求参数结构体
 */
export interface DescribeUserRequest {
    /**
      * 用户Id。
      */
    UserId: string;
}
/**
 * ModifyRoom请求参数结构体
 */
export interface ModifyRoomRequest {
    /**
      * 房间ID。
      */
    RoomId: number;
    /**
      * 低代码互动课堂的SdkAppId
      */
    SdkAppId: number;
    /**
      * 预定的房间开始时间，unix时间戳。直播开始后不允许修改。
      */
    StartTime?: number;
    /**
      * 预定的房间结束时间，unix时间戳。直播开始后不允许修改。
      */
    EndTime?: number;
    /**
      * 老师ID。直播开始后不允许修改。
      */
    TeacherId?: string;
    /**
      * 房间名称。
      */
    Name?: string;
    /**
      * 分辨率。可以有如下取值：
1 标清
2 高清
3 全高清
直播开始后不允许修改。
      */
    Resolution?: number;
    /**
      * 最大连麦人数（不包括老师）。取值范围[0, 17)
直播开始后不允许修改。
      */
    MaxMicNumber?: number;
    /**
      * 进入房间时是否自动连麦。可以有以下取值：
0 不自动连麦（默认值）
1 自动连麦
直播开始后不允许修改。
      */
    AutoMic?: number;
    /**
      * 高音质模式。可以有以下取值：
0 不开启高音质（默认值）
1 开启高音质
直播开始后不允许修改。
      */
    AudioQuality?: number;
    /**
      * 房间子类型，可以有以下取值：
videodoc 文档+视频
video 纯视频
coteaching 双师
直播开始后不允许修改。
      */
    SubType?: string;
    /**
      * 禁止录制。可以有以下取值：
0 不禁止录制（默认值）
1 禁止录制
直播开始后不允许修改。
      */
    DisableRecord?: number;
    /**
      * 助教Id列表。直播开始后不允许修改。
      */
    Assistants?: Array<string>;
}
/**
 * CreateDocument返回参数结构体
 */
export interface CreateDocumentResponse {
    /**
      * 文档ID。
      */
    DocumentId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAppDetail返回参数结构体
 */
export interface DescribeAppDetailResponse {
    /**
      * SDK 对应的AppId
      */
    SdkAppId?: string;
    /**
      * 应用配置
      */
    AppConfig?: AppConfig;
    /**
      * 场景配置
      */
    SceneConfig?: Array<SceneItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BindDocumentToRoom请求参数结构体
 */
export interface BindDocumentToRoomRequest {
    /**
      * 房间ID。
      */
    RoomId: number;
    /**
      * 文档ID。
      */
    DocumentId: string;
    /**
      * 绑定类型。后台可透传到客户端，默认为0。客户端可以根据这个字段实现业务逻辑。
      */
    BindType?: number;
}
/**
 * CreateDocument请求参数结构体
 */
export interface CreateDocumentRequest {
    /**
      * 低代码互动课堂的SdkAppId。
      */
    SdkAppId: number;
    /**
      * 文档地址。
      */
    DocumentUrl: string;
    /**
      * 文档名称。
      */
    DocumentName: string;
    /**
      * 文档所有者的Id
      */
    Owner: string;
    /**
      * 转码类型，可以有如下取值：
0 无需转码（默认）
1 需要转码的文档，ppt，pptx，pdf，doc，docx
2 需要转码的视频，mp4，3pg，mpeg，avi，flv，wmv，rm，h264等
2 需要转码的音频，mp3，wav，wma，aac，flac，opus
      */
    TranscodeType?: number;
    /**
      * 权限，可以有如下取值：
0 私有文档（默认）
1 公共文档
      */
    Permission?: number;
    /**
      * 文档后缀名。
      */
    DocumentType?: string;
    /**
      * 文档大小，单位 字节
      */
    DocumentSize?: number;
}
/**
 * DescribeDocumentsByRoom返回参数结构体
 */
export interface DescribeDocumentsByRoomResponse {
    /**
      * 文档信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Documents?: Array<DocumentInfo>;
    /**
      * 符合查询条件文档总数
      */
    Total?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 批量注册用户信息
 */
export interface BatchUserInfo {
    /**
      * 低代码互动课堂的SdkAppId。

      */
    SdkAppId?: number;
    /**
      * 用户ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserId?: string;
    /**
      * 用户在客户系统的Id。 若用户注册时该字段为空，则默认为 UserId 值一致。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OriginId?: string;
}
/**
 * SetAppCustomContent返回参数结构体
 */
export interface SetAppCustomContentResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * LoginOriginId返回参数结构体
 */
export interface LoginOriginIdResponse {
    /**
      * 用户Id。
      */
    UserId: string;
    /**
      * 登录/注册成功后返回登录态token。有效期7天。
      */
    Token: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 用户注册请求信息
 */
export interface BatchUserRequest {
    /**
      * 低代码互动课堂的SdkAppId。

注意：此字段可能返回 null，表示取不到有效值。
      */
    SdkAppId: number;
    /**
      * 用户名称。

注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 用户在客户系统的Id，需要在同一应用下唯一。

注意：此字段可能返回 null，表示取不到有效值。
      */
    OriginId?: string;
    /**
      * 用户头像。

注意：此字段可能返回 null，表示取不到有效值。
      */
    Avatar?: string;
}
/**
 * BatchDeleteRecord请求参数结构体
 */
export interface BatchDeleteRecordRequest {
    /**
      * 房间ID列表
      */
    RoomIds: Array<number>;
    /**
      * 低代码互动课堂的SdkAppId。
      */
    SdkAppId: number;
}
/**
 * LoginUser返回参数结构体
 */
export interface LoginUserResponse {
    /**
      * 用户Id。
      */
    UserId: string;
    /**
      * 登录/注册成功后返回登录态token。有效期7天。
      */
    Token: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAppDetail请求参数结构体
 */
export interface DescribeAppDetailRequest {
    /**
      * 应用ID。低代码互动课堂的SdkAppId。

      */
    ApplicationId: string;
    /**
      * 开发商ID
      */
    DeveloperId: string;
}
/**
 * ModifyApp返回参数结构体
 */
export interface ModifyAppResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BatchRegister请求参数结构体
 */
export interface BatchRegisterRequest {
    /**
      * 批量注册用户信息列表
      */
    Users: Array<BatchUserRequest>;
}
/**
 * DescribeRoom返回参数结构体
 */
export interface DescribeRoomResponse {
    /**
      * 房间名称。
      */
    Name?: string;
    /**
      * 预定的房间开始时间，unix时间戳。
      */
    StartTime?: number;
    /**
      * 预定的房间结束时间，unix时间戳。
      */
    EndTime?: number;
    /**
      * 老师的UserId。
      */
    TeacherId?: string;
    /**
      * 低代码互动课堂的SdkAppId。
      */
    SdkAppId?: number;
    /**
      * 分辨率。可以有如下取值：
1 标清
2 高清
3 全高清
      */
    Resolution?: number;
    /**
      * 最大连麦人数（不包括老师）。取值范围[0, 16]
      */
    MaxMicNumber?: number;
    /**
      * 进入课堂时是否自动连麦。可以有以下取值：
0 不自动连麦（需要手动申请上麦，默认值）
1 自动连麦
      */
    AutoMic?: number;
    /**
      * 高音质模式。可以有以下取值：
0 不开启高音质（默认值）
1 开启高音质
      */
    AudioQuality?: number;
    /**
      * 房间子类型，可以有以下取值：
videodoc 文档+视频
video 纯视频
coteaching 双师
      */
    SubType?: string;
    /**
      * 上课后是否禁止自动录制。可以有以下取值：
0 不禁止录制（自动开启录制，默认值）
1 禁止录制
注：如果该配置取值为0，录制将从上课后开始，课堂结束后停止。
      */
    DisableRecord?: number;
    /**
      * 助教UserId列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Assistants?: Array<string>;
    /**
      * 录制地址。仅在房间结束后存在。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordUrl?: string;
    /**
      * 课堂状态。0为未开始，1为正在上课，2为已结束，3为已过期。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteRoom返回参数结构体
 */
export interface DeleteRoomResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyUserProfile请求参数结构体
 */
export interface ModifyUserProfileRequest {
    /**
      * 待修改用户ID
      */
    UserId: string;
    /**
      * 待修改的用户名
      */
    Nickname?: string;
    /**
      * 待修改头像url
      */
    Avatar?: string;
}
/**
 * DescribeDocumentsByRoom请求参数结构体
 */
export interface DescribeDocumentsByRoomRequest {
    /**
      * 房间ID。
      */
    RoomId: number;
    /**
      * 低代码互动课堂的SdkAppId
      */
    SdkAppId: number;
    /**
      * 分页查询当前页数，从1开始递增，默认值为1
      */
    Page?: number;
    /**
      * 每页数据量，最大1000，默认值为100
      */
    Limit?: number;
    /**
      * 课件权限。
[0]：获取owner的私有课件；
[1]：获取owner的公开课件;
[0,1]：则获取owner的私有课件和公开课件；
[2]：获取owner的私有课件和所有人(包括owner)的公开课件。
默认值为[2]
      */
    Permission?: Array<number>;
    /**
      * 文档所有者的user_id，不填默认获取SdkAppId下所有课件
      */
    Owner?: string;
}
/**
 * DescribeSdkAppIdUsers返回参数结构体
 */
export interface DescribeSdkAppIdUsersResponse {
    /**
      * 用户总数
      */
    Total?: number;
    /**
      * 当前获取用户信息数组列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Users?: Array<UserInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetWatermark返回参数结构体
 */
export interface GetWatermarkResponse {
    /**
      * 老师视频区域的水印参数配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    TeacherLogo?: WatermarkConfig;
    /**
      * 白板区域的水印参数配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    BoardLogo?: WatermarkConfig;
    /**
      * 背景图片配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    BackgroundPicture?: BackgroundPictureConfig;
    /**
      * 文字水印配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text?: TextMarkConfig;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteDocument返回参数结构体
 */
export interface DeleteDocumentResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteRecord请求参数结构体
 */
export interface DeleteRecordRequest {
    /**
      * 房间Id。
      */
    RoomId: number;
    /**
      * 低代码互动课堂的SdkAppId。

      */
    SdkAppId: number;
}
/**
 * 应用自定义内容
 */
export interface AppCustomContent {
    /**
      * 场景参数，一个应用下可以设置多个不同场景。
      */
    Scene: string;
    /**
      * logo地址。
      */
    LogoUrl?: string;
    /**
      * 主页地址，可设置用于跳转。
      */
    HomeUrl?: string;
    /**
      * 自定义的js。
      */
    JsUrl?: string;
    /**
      * 自定义的css。
      */
    CssUrl?: string;
}
/**
 * DescribeRoomStatistics返回参数结构体
 */
export interface DescribeRoomStatisticsResponse {
    /**
      * 峰值在线成员人数。
      */
    PeakMemberNumber?: number;
    /**
      * 累计在线人数。
      */
    MemberNumber?: number;
    /**
      * 记录总数。包含进入房间或者应到未到的。
      */
    Total?: number;
    /**
      * 成员记录列表。
      */
    MemberRecords?: Array<MemberRecord>;
    /**
      * 秒级unix时间戳，实际房间开始时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RealStartTime?: number;
    /**
      * 秒级unix时间戳，实际房间结束时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RealEndTime?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteDocument请求参数结构体
 */
export interface DeleteDocumentRequest {
    /**
      * 文档ID。
      */
    DocumentId: string;
}
/**
 * DescribeSdkAppIdUsers请求参数结构体
 */
export interface DescribeSdkAppIdUsersRequest {
    /**
      * 应用ID
      */
    SdkAppId: number;
    /**
      * 分页，默认值为1
      */
    Page?: number;
    /**
      * 分页数据限制，默认值为20
      */
    Limit?: number;
}
/**
 * DescribeUser返回参数结构体
 */
export interface DescribeUserResponse {
    /**
      * 应用Id。
      */
    SdkAppId: number;
    /**
      * 用户Id。
      */
    UserId: string;
    /**
      * 用户昵称。
      */
    Name: string;
    /**
      * 用户头像Url。
      */
    Avatar: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDocument返回参数结构体
 */
export interface DescribeDocumentResponse {
    /**
      * 文档Id
      */
    DocumentId: string;
    /**
      * 文档原址url
      */
    DocumentUrl: string;
    /**
      * 文档名称
      */
    DocumentName: string;
    /**
      * 文档所有者UserId
      */
    Owner: string;
    /**
      * 应用Id
      */
    SdkAppId: number;
    /**
      * 文档权限
      */
    Permission: number;
    /**
      * 转码结果，无需转码为空，转码成功为结果url，转码失败为错误码
      */
    TranscodeResult: string;
    /**
      * 转码类型
      */
    TranscodeType: number;
    /**
      * 转码进度， 0 - 100 表示（0% - 100%）
      */
    TranscodeProgress: number;
    /**
      * 转码状态，0为无需转码，1为正在转码，2为转码失败，3为转码成功
      */
    TranscodeState: number;
    /**
      * 转码失败后的错误信息
      */
    TranscodeInfo: string;
    /**
      * 文档类型
      */
    DocumentType: string;
    /**
      * 文档大小，单位：字节
      */
    DocumentSize: number;
    /**
      * 更新的UNIX时间戳
      */
    UpdateTime: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyUserProfile返回参数结构体
 */
export interface ModifyUserProfileResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 文字水印配置
 */
export interface TextMarkConfig {
    /**
      * 文字水印内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text?: string;
    /**
      * 文字水印颜色
注意：此字段可能返回 null，表示取不到有效值。
      */
    Color?: string;
}
/**
 * GetWatermark请求参数结构体
 */
export interface GetWatermarkRequest {
    /**
      * 低代码互动课堂的SdkAppId。

      */
    SdkAppId: number;
}
/**
 * CreateSupervisor返回参数结构体
 */
export interface CreateSupervisorResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 场景配置
 */
export declare type SceneItem = null;
/**
 * DeleteRoom请求参数结构体
 */
export interface DeleteRoomRequest {
    /**
      * 房间ID。
      */
    RoomId: number;
}
/**
 * RegisterUser返回参数结构体
 */
export interface RegisterUserResponse {
    /**
      * 用户Id。
      */
    UserId: string;
    /**
      * 登录/注册成功后返回登录态token。有效期7天。
      */
    Token: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 水印配置
 */
export interface WatermarkConfig {
    /**
      * 水印图片的url
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url?: string;
    /**
      * 水印宽。为比例值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Width?: number;
    /**
      * 水印高。为比例值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Height?: number;
    /**
      * 水印X偏移, 取值:0-100, 表示区域X方向的百分比。比如50，则表示位于X轴中间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LocationX?: number;
    /**
      * 水印Y偏移, 取值:0-100, 表示区域Y方向的百分比。比如50，则表示位于Y轴中间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LocationY?: number;
}
/**
 * DescribeRoomStatistics请求参数结构体
 */
export interface DescribeRoomStatisticsRequest {
    /**
      * 房间Id。
      */
    RoomId: number;
    /**
      * 分页查询当前页数，从1开始递增。
      */
    Page: number;
    /**
      * 每页数据量，最大1000。
      */
    Limit: number;
}
/**
 * 文档信息
 */
export interface DocumentInfo {
    /**
      * 文档Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    DocumentId?: string;
    /**
      * 文档原址url
注意：此字段可能返回 null，表示取不到有效值。
      */
    DocumentUrl?: string;
    /**
      * 文档名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    DocumentName?: string;
    /**
      * 文档所有者UserId
注意：此字段可能返回 null，表示取不到有效值。
      */
    Owner?: string;
    /**
      * 应用Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    SdkAppId?: number;
    /**
      * 文档权限，0：私有课件 1：公共课件
注意：此字段可能返回 null，表示取不到有效值。
      */
    Permission?: number;
    /**
      * 转码结果，无需转码为空，转码成功为结果url，转码失败为错误码
注意：此字段可能返回 null，表示取不到有效值。
      */
    TranscodeResult?: string;
    /**
      * 转码类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    TranscodeType?: number;
    /**
      * 转码进度， 0 - 100 表示（0% - 100%）
注意：此字段可能返回 null，表示取不到有效值。
      */
    TranscodeProgress?: number;
    /**
      * 转码状态，0为无需转码，1为正在转码，2为转码失败，3为转码成功
注意：此字段可能返回 null，表示取不到有效值。
      */
    TranscodeState?: number;
    /**
      * 转码失败后的错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    TranscodeInfo?: string;
    /**
      * 文档类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    DocumentType?: string;
    /**
      * 文档大小，单位：字节
注意：此字段可能返回 null，表示取不到有效值。
      */
    DocumentSize?: number;
    /**
      * 更新的UNIX时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime?: number;
}
/**
 * 成员记录信息。
 */
export interface MemberRecord {
    /**
      * 用户ID。
      */
    UserId: string;
    /**
      * 用户名称。
      */
    UserName: string;
    /**
      * 在线时长，单位秒。
      */
    PresentTime: number;
    /**
      * 是否开启摄像头。
      */
    Camera: number;
    /**
      * 是否开启麦克风。
      */
    Mic: number;
    /**
      * 是否禁言。
      */
    Silence: number;
    /**
      * 回答问题数量。
      */
    AnswerQuestions: number;
    /**
      * 举手数量。
      */
    HandUps: number;
    /**
      * 首次进入房间的unix时间戳。
      */
    FirstJoinTimestamp: number;
    /**
      * 最后一次退出房间的unix时间戳。
      */
    LastQuitTimestamp: number;
    /**
      * 奖励次数。
      */
    Rewords: number;
}
/**
 * ModifyApp请求参数结构体
 */
export interface ModifyAppRequest {
    /**
      * 低代码互动课堂的SdkAppId。
      */
    SdkAppId: number;
    /**
      * 回调地址。
      */
    Callback?: string;
    /**
      * 回调key。
      */
    CallbackKey?: string;
}
/**
 * CreateSupervisor请求参数结构体
 */
export declare type CreateSupervisorRequest = null;
/**
 * 背景图片配置
 */
export interface BackgroundPictureConfig {
    /**
      * 背景图片的url
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
}
/**
 * UnbindDocumentFromRoom请求参数结构体
 */
export interface UnbindDocumentFromRoomRequest {
    /**
      * 房间ID。
      */
    RoomId: number;
    /**
      * 文档ID。
      */
    DocumentId: string;
}
/**
 * LoginOriginId请求参数结构体
 */
export interface LoginOriginIdRequest {
    /**
      * 低代码互动课堂的SdkAppId。
      */
    SdkAppId: number;
    /**
      * 用户在客户系统的Id，需要在同一应用下唯一。
      */
    OriginId: string;
}
/**
 * 应用配置信息
 */
export declare type AppConfig = null;
/**
 * BatchRegister返回参数结构体
 */
export interface BatchRegisterResponse {
    /**
      * 注册成功的用户列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Users?: Array<BatchUserInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * LoginUser请求参数结构体
 */
export interface LoginUserRequest {
    /**
      * 注册获取的用户id。
      */
    UserId: string;
}
/**
 * BatchCreateRoom请求参数结构体
 */
export interface BatchCreateRoomRequest {
    /**
      * 低代码平台的SdkAppId。
      */
    SdkAppId: number;
    /**
      * 创建房间ID列表
      */
    RoomInfos: Array<RoomInfo>;
}
/**
 * BindDocumentToRoom返回参数结构体
 */
export interface BindDocumentToRoomResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 用户信息结构体
 */
export interface UserInfo {
    /**
      * 应用Id。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SdkAppId?: number;
    /**
      * 用户Id。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserId?: string;
    /**
      * 用户昵称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 用户头像Url。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Avatar?: string;
}
/**
 * SetWatermark请求参数结构体
 */
export interface SetWatermarkRequest {
    /**
      * 低代码互动课堂的SdkAppId。

      */
    SdkAppId: number;
    /**
      * 老师视频区域的水印参数地址，设置为空字符串表示删除
      */
    TeacherUrl?: string;
    /**
      * 白板视频区域的水印参数地址，设置为空字符串表示删除
      */
    BoardUrl?: string;
    /**
      * 视频默认图片（在没有视频流的时候显示），设置为空字符串表示删除
      */
    VideoUrl?: string;
    /**
      * 白板区域水印的宽度，取值:0-100，默认为0，表示区域X方向的百分比
      */
    BoardW?: number;
    /**
      * 白板区域水印的高度，取值:0-100，默认为0, 表示区域Y方向的百分比
      */
    BoardH?: number;
    /**
      * 白板区域水印X偏移, 取值:0-100, 表示区域X方向的百分比。比如50，则表示位于X轴中间
      */
    BoardX?: number;
    /**
      * 白板区域水印Y偏移, 取值:0-100, 表示区域X方向的百分比。比如50，则表示位于X轴中间
      */
    BoardY?: number;
    /**
      * 老师视频区域水印的宽度，取值:0-100，默认为0，表示区域X方向的百分比
      */
    TeacherW?: number;
    /**
      * 老师视频区域水印的高度，取值:0-100，默认为0, 表示区域Y方向的百分比
      */
    TeacherH?: number;
    /**
      * 老师视频区域水印X偏移, 取值:0-100, 表示区域X方向的百分比。比如50，则表示位于X轴中间
      */
    TeacherX?: number;
    /**
      * 老师视频区域水印Y偏移, 取值:0-100, 表示区域X方向的百分比。比如50，则表示位于X轴中间
      */
    TeacherY?: number;
    /**
      * 文字水印内容，设置为空字符串表示删除
      */
    Text?: string;
    /**
      * 文字水印颜色
      */
    TextColor?: string;
}
/**
 * CreateRoom返回参数结构体
 */
export interface CreateRoomResponse {
    /**
      * 房间ID。
      */
    RoomId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteRecord返回参数结构体
 */
export interface DeleteRecordResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRoom请求参数结构体
 */
export interface DescribeRoomRequest {
    /**
      * 房间Id。
      */
    RoomId: number;
}
/**
 * DescribeDocument请求参数结构体
 */
export interface DescribeDocumentRequest {
    /**
      * 文档Id（唯一id）
      */
    DocumentId: string;
}
/**
 * RegisterUser请求参数结构体
 */
export interface RegisterUserRequest {
    /**
      * 低代码互动课堂的SdkAppId。
      */
    SdkAppId: number;
    /**
      * 用户名称。
      */
    Name?: string;
    /**
      * 用户在客户系统的Id，需要在同一应用下唯一。
      */
    OriginId?: string;
    /**
      * 用户头像。
      */
    Avatar?: string;
}
/**
 * BatchDeleteRecord返回参数结构体
 */
export interface BatchDeleteRecordResponse {
    /**
      * 本次操作删除成功的房间ID列表。如果入参列表中某个房间ID的录制文件已经删除，则出参列表中无对应的房间ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RoomIds?: Array<number>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
