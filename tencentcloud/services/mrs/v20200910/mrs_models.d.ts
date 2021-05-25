/**
 * 检验报告
 */
export interface Indicator {
    /**
      * 检验指标项
注意：此字段可能返回 null，表示取不到有效值。
      */
    Indicators: Array<IndicatorItem>;
}
/**
 * 报告模板
 */
export interface Template {
    /**
      * 患者信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    PatientInfo: PatientInfo;
    /**
      * 报告信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportInfo: ReportInfo;
    /**
      * 检查报告
注意：此字段可能返回 null，表示取不到有效值。
      */
    Check: Check;
    /**
      * 病理报告
注意：此字段可能返回 null，表示取不到有效值。
      */
    Pathology: PathologyReport;
    /**
      * 出院报告，入院报告，门诊病历
注意：此字段可能返回 null，表示取不到有效值。
      */
    MedDoc: MedDoc;
    /**
      * 诊断证明
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiagCert: DiagCert;
    /**
      * 病案首页
注意：此字段可能返回 null，表示取不到有效值。
      */
    FirstPage: FirstPage;
    /**
      * 检验报告
注意：此字段可能返回 null，表示取不到有效值。
      */
    Indicator: Indicator;
    /**
      * 报告类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportType: string;
}
/**
 * 质地
 */
export interface Elastic {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 分数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
}
/**
 * 报告基本信息
 */
export interface ReportInfo {
    /**
      * 医院名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Hospital: string;
    /**
      * 科室名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    DepartmentName: string;
    /**
      * 申请时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    BillingTime: string;
    /**
      * 报告时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportTime: string;
    /**
      * 检查时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    InspectTime: string;
    /**
      * 检查号
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckNum: string;
    /**
      * 影像号
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageNum: string;
    /**
      * 放射号
注意：此字段可能返回 null，表示取不到有效值。
      */
    RadiationNum: string;
    /**
      * 检验号
注意：此字段可能返回 null，表示取不到有效值。
      */
    TestNum: string;
    /**
      * 门诊号
注意：此字段可能返回 null，表示取不到有效值。
      */
    OutpatientNum: string;
    /**
      * 病理号
注意：此字段可能返回 null，表示取不到有效值。
      */
    PathologyNum: string;
    /**
      * 住院号
注意：此字段可能返回 null，表示取不到有效值。
      */
    InHospitalNum: string;
    /**
      * 样本号
注意：此字段可能返回 null，表示取不到有效值。
      */
    SampleNum: string;
    /**
      * 标本种类
注意：此字段可能返回 null，表示取不到有效值。
      */
    SampleType: string;
    /**
      * 病历号
注意：此字段可能返回 null，表示取不到有效值。
      */
    MedicalRecordNum: string;
    /**
      * 报告名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportName: string;
    /**
      * 超声号
注意：此字段可能返回 null，表示取不到有效值。
      */
    UltraNum: string;
}
/**
 * Ihc信息
 */
export interface IHCInfo {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * “”
      */
    Value: Value;
}
/**
 * 图片处理参数
 */
export interface HandleParam {
    /**
      * ocr引擎
      */
    OcrEngineType?: number;
    /**
      * 是否返回分行文本内容
      */
    IsReturnText?: boolean;
    /**
      * 顺时针旋转角度
      */
    RotateTheAngle?: number;
    /**
      * 自动适配方向,仅支持优图引擎
      */
    AutoFitDirection?: boolean;
    /**
      * 坐标优化
      */
    AutoOptimizeCoordinate?: boolean;
    /**
      * 是否开启图片压缩，开启时imageOriginalSize必须正确填写
      */
    IsScale?: boolean;
    /**
      * 原始图片大小(单位byes),用来判断该图片是否需要压缩
      */
    ImageOriginalSize?: number;
    /**
      * 采用后台默认值(2048Kb)
      */
    ScaleTargetSize?: number;
}
/**
 * ImageToObject请求参数结构体
 */
export interface ImageToObjectRequest {
    /**
      * 图片列表
      */
    ImageInfoList: Array<ImageInfo>;
    /**
      * 图片处理参数
      */
    HandleParam: HandleParam;
    /**
      * 图片类别
      */
    Type: number;
    /**
      * 是否使用分类引擎
      */
    IsUsedClassify: boolean;
}
/**
 * TextToObject请求参数结构体
 */
export interface TextToObjectRequest {
    /**
      * 报告文本
      */
    Text: string;
    /**
      * 报告类型
      */
    Type: number;
    /**
      * 是否使用分类引擎
      */
    IsUsedClassify: boolean;
}
/**
 * 横纵比
 */
export interface AspectRatio {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 数值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Number: string;
    /**
      * 关系
注意：此字段可能返回 null，表示取不到有效值。
      */
    Relation: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
}
/**
 * 病症描述
 */
export interface SymptomInfo {
    /**
      * 等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    Grade: BlockInfo;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part: Part;
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 病变
注意：此字段可能返回 null，表示取不到有效值。
      */
    Symptom: BlockInfo;
    /**
      * 属性
注意：此字段可能返回 null，表示取不到有效值。
      */
    Attrs: Array<BlockInfo>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
}
/**
 * 结节
 */
export interface TuberInfo {
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: BlockInfo;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part: Part;
    /**
      * 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    Size: Array<Size>;
    /**
      * 数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Multiple: Multiple;
    /**
      * 纵横比
注意：此字段可能返回 null，表示取不到有效值。
      */
    AspectRatio: AspectRatio;
    /**
      * 边缘
注意：此字段可能返回 null，表示取不到有效值。
      */
    Edge: BlockInfo;
    /**
      * 内部回声
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerEcho: BlockInfo;
    /**
      * 外部回声
注意：此字段可能返回 null，表示取不到有效值。
      */
    RearEcho: BlockInfo;
    /**
      * 质地
注意：此字段可能返回 null，表示取不到有效值。
      */
    Elastic: Elastic;
    /**
      * 形态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Shape: BlockInfo;
    /**
      * 形态属性
注意：此字段可能返回 null，表示取不到有效值。
      */
    ShapeAttr: BlockInfo;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkinMedulla: BlockInfo;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Trend: BlockInfo;
    /**
      * 钙化
注意：此字段可能返回 null，表示取不到有效值。
      */
    Calcification: BlockInfo;
    /**
      * 包膜
注意：此字段可能返回 null，表示取不到有效值。
      */
    Envelope: BlockInfo;
    /**
      * 强化
注意：此字段可能返回 null，表示取不到有效值。
      */
    Enhancement: BlockInfo;
    /**
      * 淋巴结
注意：此字段可能返回 null，表示取不到有效值。
      */
    LymphEnlargement: BlockInfo;
    /**
      * 淋巴门
注意：此字段可能返回 null，表示取不到有效值。
      */
    LymphDoor: BlockInfo;
    /**
      * 活动度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Activity: BlockInfo;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Operation: BlockInfo;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    CDFI: BlockInfo;
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    SizeStatus: BlockInfo;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerEchoDistribution: BlockInfo;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerEchoType: Array<BlockInfo>;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Outline: BlockInfo;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Structure: BlockInfo;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Density: BlockInfo;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vas: BlockInfo;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cysticwall: BlockInfo;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Capsule: BlockInfo;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsthmusThicknese: Size;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
}
/**
 * 孕产史
 */
export interface ObstericalMedicalHistory {
    /**
      * 婚史
注意：此字段可能返回 null，表示取不到有效值。
      */
    MarriageHistory: string;
    /**
      * 孕史
注意：此字段可能返回 null，表示取不到有效值。
      */
    FertilityHistory: string;
}
/**
 * 数量
 */
export interface Multiple {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Count: number;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
}
/**
 * 家族疾病史
 */
export interface FamilyMedicalHistory {
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelativeHistory: string;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelativeCancerHistory: string;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    GeneticHistory: string;
}
/**
 * 建议
 */
export interface Advice {
    /**
      * 文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
}
/**
 * 部位
 */
export interface Part {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    NormPart: NormPart;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
}
/**
 * ImageToClass返回参数结构体
 */
export interface ImageToClassResponse {
    /**
      * 分类结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    TextTypeList: Array<TextType>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 淋巴
 */
export interface Lymph {
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part: Part;
    /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total: number;
    /**
      * 转移数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransferNum: number;
}
/**
 * Invasive
 */
export interface Invas {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part: Part;
    /**
      * 阳性
注意：此字段可能返回 null，表示取不到有效值。
      */
    Positive: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
}
/**
 * 部位
 */
export interface NormPart {
    /**
      * 部位值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part: string;
    /**
      * 部位方向
注意：此字段可能返回 null，表示取不到有效值。
      */
    PartDirection: string;
    /**
      * 组织值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tissue: string;
    /**
      * 组织方向
注意：此字段可能返回 null，表示取不到有效值。
      */
    TissueDirection: string;
    /**
      * 上级部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Upper: string;
}
/**
 * 医学资料
 */
export interface MedDoc {
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Advice: Advice;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Diagnosis: Array<DiagCertItem>;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiseaseMedicalHistory: DiseaseMedicalHistory;
    /**
      * “”
      */
    PersonalMedicalHistory: PersonalMedicalHistory;
    /**
      * “”
      */
    ObstericalMedicalHistory: ObstericalMedicalHistory;
    /**
      * “”
      */
    FamilyMedicalHistory: FamilyMedicalHistory;
    /**
      * “”
      */
    MenstrualMedicalHistory: MenstrualMedicalHistory;
    /**
      * “”
      */
    TreatmentRecord: TreatmentRecord;
}
/**
 * 描述
 */
export interface Desc {
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 器官
注意：此字段可能返回 null，表示取不到有效值。
      */
    Organ: Array<Organ>;
    /**
      * 结节
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tuber: Array<TuberInfo>;
}
/**
 * 患者信息
 */
export interface PatientInfo {
    /**
      * 患者姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 患者性别
注意：此字段可能返回 null，表示取不到有效值。
      */
    Sex: string;
    /**
      * 患者年龄
注意：此字段可能返回 null，表示取不到有效值。
      */
    Age: string;
    /**
      * 患者手机号码
注意：此字段可能返回 null，表示取不到有效值。
      */
    Phone: string;
    /**
      * 患者地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Address: string;
    /**
      * 患者身份证
注意：此字段可能返回 null，表示取不到有效值。
      */
    IdCard: string;
}
/**
 * 个人史
 */
export interface PersonalMedicalHistory {
    /**
      * 出生史
注意：此字段可能返回 null，表示取不到有效值。
      */
    BirthPlace: string;
    /**
      * 居住史
注意：此字段可能返回 null，表示取不到有效值。
      */
    LivePlace: string;
    /**
      * 工作史
注意：此字段可能返回 null，表示取不到有效值。
      */
    Job: string;
    /**
      * 吸烟史
注意：此字段可能返回 null，表示取不到有效值。
      */
    SmokeHistory: string;
    /**
      * 饮酒史
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlcoholicHistory: string;
}
/**
 * 器官
 */
export interface Organ {
    /**
      * 部位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Part: Part;
    /**
      * 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    Size: Array<Size>;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    Envelope: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    Edge: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerEcho: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    Gland: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    Shape: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    Thickness: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    ShapeAttr: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    CDFI: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    SymDesc: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    SizeStatus: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    Outline: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    Structure: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    Density: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vas: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cysticwall: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    Capsule: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsthmusThicknese: Size;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerEchoDistribution: BlockInfo;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
}
/**
 * 诊断证明
 */
export interface DiagCert {
    /**
      * 建议
注意：此字段可能返回 null，表示取不到有效值。
      */
    Advice: Advice;
    /**
      * 诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    Diagnosis: Array<DiagCertItem>;
}
/**
 * 病历
 */
export interface TreatmentRecord {
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    DmissionCondition: string;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChiefComplaint: string;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiseasePresent: string;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    SymptomsAndSigns: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuxiliaryExamination: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    BodyExamination: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    SpecialistExamination: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    MentalExamination: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckRecord: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    InspectResult: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    IncisionHealing: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    TreatmentSuggestion: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    FollowUpRequirements: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckAndTreatmentProcess: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    SurgeryCondition: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConditionChanges: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeCondition: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    PTNM: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    PTNMM: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    PTNMN: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    PTNMT: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    ECOG: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    NRS: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    KPS: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeathDate: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelapseDate: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    ObservationDays: string;
}
/**
 * 值
 */
export interface Value {
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Grade: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Percent: Array<number>;
    /**
      * 阳性
注意：此字段可能返回 null，表示取不到有效值。
      */
    Positive: string;
}
/**
 * 出入院诊断
 */
export interface DischargeDiagnosis {
    /**
      * 表格位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    TableIndex: number;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    OutDiagnosis: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiseaseCode: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    InStatus: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    OutStatus: BlockInfo;
}
/**
 * 疾病史
 */
export interface DiseaseMedicalHistory {
    /**
      * 主病史
注意：此字段可能返回 null，表示取不到有效值。
      */
    MainDiseaseHistory: string;
    /**
      * 过敏史
注意：此字段可能返回 null，表示取不到有效值。
      */
    AllergyHistory: string;
    /**
      * 传染疾病史
注意：此字段可能返回 null，表示取不到有效值。
      */
    InfectHistory: string;
    /**
      * 手术史
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperationHistory: string;
    /**
      * 输血史
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransfusionHistory: string;
}
/**
 * 病理报告
 */
export interface PathologyReport {
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    CancerPart: Part;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    CancerSize: Array<Size>;
    /**
      * 描述文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    DescText: string;
    /**
      * 癌症
注意：此字段可能返回 null，表示取不到有效值。
      */
    HistologyLevel: HistologyLevel;
    /**
      * 扩散
注意：此字段可能返回 null，表示取不到有效值。
      */
    HistologyType: HistologyType;
    /**
      * 淋巴
注意：此字段可能返回 null，表示取不到有效值。
      */
    IHC: Array<IHCInfo>;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    InfiltrationDepth: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    Invasive: Array<Invas>;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    LymphNodes: Array<Lymph>;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    PTNM: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    PathologicalReportType: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportText: string;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    SampleType: BlockInfo;
    /**
      * ""
注意：此字段可能返回 null，表示取不到有效值。
      */
    SummaryText: string;
}
/**
 * TextToClass返回参数结构体
 */
export interface TextToClassResponse {
    /**
      * 分类结果
      */
    TextTypeList: Array<TextType>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 类型
 */
export interface HistologyType {
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Infiltration: string;
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
}
/**
 * 块信息
 */
export interface BlockInfo {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 阳性
注意：此字段可能返回 null，表示取不到有效值。
      */
    Positive: string;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
}
/**
 * 总结
 */
export interface Summary {
    /**
      * 症状
注意：此字段可能返回 null，表示取不到有效值。
      */
    Symptom: Array<SymptomInfo>;
    /**
      * 文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
}
/**
 * 文本类型
 */
export interface TextType {
    /**
      * 类别Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id: number;
    /**
      * 类别层级
注意：此字段可能返回 null，表示取不到有效值。
      */
    Level: number;
    /**
      * 类别名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
}
/**
 * 等级
 */
export interface HistologyLevel {
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Grade: string;
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
}
/**
 * 指标项
 */
export interface IndicatorItem {
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Code: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Scode: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Sname: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Range: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    Arrow: string;
    /**
      * 是否正常
注意：此字段可能返回 null，表示取不到有效值。
      */
    Normal: boolean;
}
/**
 * 图片信息
 */
export interface ImageInfo {
    /**
      * 图片id
      */
    Id: number;
    /**
      * 图片url
      */
    Url?: string;
    /**
      * 图片base64编码
      */
    Base64?: string;
}
/**
 * 诊断证明项
 */
export interface DiagCertItem {
    /**
      * 文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: Array<string>;
}
/**
 * 月经史
 */
export interface MenstrualMedicalHistory {
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastMenstrualPeriod: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenstrualFlow: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenarcheAge: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenstruationOrNot: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenstrualCycles: string;
    /**
      * “”
注意：此字段可能返回 null，表示取不到有效值。
      */
    MenstrualPeriod: string;
}
/**
 * ImageToClass请求参数结构体
 */
export interface ImageToClassRequest {
    /**
      * 图片列表
      */
    ImageInfoList: Array<ImageInfo>;
    /**
      * 图片处理参数
      */
    HandleParam: HandleParam;
    /**
      * 图片类型
      */
    Type: number;
}
/**
 * 大小
 */
export interface NormSize {
    /**
      * 数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Number: Array<string>;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit: string;
}
/**
 * 病案首页
 */
export interface FirstPage {
    /**
      * 出入院诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    DischargeDiagnosis: Array<DischargeDiagnosis>;
    /**
      * 病理诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    PathologicalDiagnosis: BlockInfo;
    /**
      * 临床诊断
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClinicalDiagnosis: BlockInfo;
}
/**
 * 检查报告单
 */
export interface Check {
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Desc: Desc;
    /**
      * 结论
注意：此字段可能返回 null，表示取不到有效值。
      */
    Summary: Summary;
}
/**
 * TextToObject返回参数结构体
 */
export interface TextToObjectResponse {
    /**
      * 报告结构化结果
      */
    Template: Template;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TextToClass请求参数结构体
 */
export interface TextToClassRequest {
    /**
      * 报告文本
      */
    Text: string;
}
/**
 * ImageToObject返回参数结构体
 */
export interface ImageToObjectResponse {
    /**
      * 报告结构化结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Template: Template;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 大小
 */
export interface Size {
    /**
      * 原文位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index: Array<number>;
    /**
      * 标准大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    NormSize: NormSize;
    /**
      * 原文
注意：此字段可能返回 null，表示取不到有效值。
      */
    Src: string;
    /**
      * 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
}
