/**
 * 咨询解决方案清单：在研发中的那本清单。
 *
 * 与咨询档案（quanttide-profile-of-consulting-management）同一结构：
 * 方向 → 方案 → 步骤。方法本体在各域 handbook，这里只存定位、步骤与事实源入口。
 */

export type Direction =
  | 'devops-engineering'
  | 'business-development'
  | 'human-resources'
  | 'product-development'
  | 'vibe-working'

export interface Solution {
  name: string
  direction: Direction
  /** 研发中：步骤已分解；待分解：方案已形成、步骤随实施补充 */
  status: 'wip' | 'draft'
  summary: string
  steps: string[]
  /** 方法本体的事实源（handbook 或咨询档案） */
  source?: string
  sourceLabel?: string
}

export interface DirectionGroup {
  key: Direction
  label: string
  note: string
}

/** 方向分组：前四个对齐四领域手册，第五个是平台选型类方案 */
export const directions: DirectionGroup[] = [
  {
    key: 'devops-engineering',
    label: '工程交付',
    note: '从规划到监控的工程全流程规范，解决发布总出事、职责说不清。',
  },
  {
    key: 'business-development',
    label: '商务接单',
    note: '从识别客户到签约收款的售前方法，解决需求没对齐就报价。',
  },
  {
    key: 'human-resources',
    label: '人才培养与雇佣',
    note: '带人、留人、走人的方法，解决培训脱离业务、人走了方法也走了。',
  },
  {
    key: 'product-development',
    label: '需求与设计',
    note: '把模糊诉求变成可信的产品地图，解决需求写成系统模块清单。',
  },
  {
    key: 'vibe-working',
    label: '办公工作流',
    note: 'AI 进日常办公的平台选型与流程。',
  },
]

export const solutions: Solution[] = [
  {
    name: '工程生命周期交付',
    direction: 'devops-engineering',
    status: 'wip',
    summary: '把一个工程从规划到监控按阶段逐项交付，每阶段有明确动作与验收。',
    steps: [
      '规划：需求与任务管理',
      '开发：子模块化开发管理',
      'Git 规范：提交类型、分支命名与子模块维护',
      '构建：构建状态管理',
      '测试：测试状态与覆盖率',
      '发布：版本发布与审计',
      '部署：持续部署',
      '运维：日常运维',
      '监控：运行监控',
    ],
    source: 'https://github.com/quanttide/quanttide-devops/blob/main/docs/handbook/stage/index.md',
    sourceLabel: 'devops handbook',
  },
  {
    name: '商务调研：从识别客户到项目启动',
    direction: 'business-development',
    status: 'wip',
    summary: '售前阶段的完整走法，任何一项基石不明确都不进入报价。',
    steps: [
      '识别客户与定义服务：先判类型与痛点，再匹配交付风格',
      '获取销售线索：鉴别真伪后引私信入私域',
      '评估项目需求：数据源、交付成果、字段、量级、合规与反爬',
      '组建团队与协作：销售到实施的分工与移交',
      '售前清单验收：逐项核对后进入报价',
    ],
    source: 'https://github.com/quanttide/quanttide-business/blob/main/docs/handbook/intro/clarify.md',
    sourceLabel: 'business handbook',
  },
  {
    name: '人才培养体系',
    direction: 'human-resources',
    status: 'wip',
    summary: '以真实业务为教材，在容错空间中完成从执行到思考再到带人的角色跃迁。',
    steps: [
      '以真实业务为教材：工作即课堂',
      '授之以渔：先给框架，用提问代替给答案',
      '渐进式授权：示范到逐步接手，管理者兜底',
      'AI 是思考的脚手架：结论必须自己复述消化',
      '终点是教别人干：沉淀为手册才属于组织',
      '按阶段一人一策：新人、骨干、高管节奏不同',
    ],
    source: 'https://github.com/quanttide/quanttide-human/blob/main/docs/handbook/training/index.md',
    sourceLabel: 'human handbook',
  },
  {
    name: '需求梳理五步',
    direction: 'product-development',
    status: 'wip',
    summary: '自下而上从素材归纳出用户故事地图，结构从素材浮现，不预设骨架再填内容。',
    steps: [
      '确定用户画像：一行定视角，不自行假设',
      '收集素材：捕捉「用户要…」句式，保留来源',
      '归纳层级：活动、任务、故事细节三层',
      '人工调整：人调层级与颗粒度，反馈给 AI',
      '评审确认：主线清晰、视角一致、素材无遗漏',
    ],
    source: 'https://github.com/quanttide/quanttide-product/blob/main/docs/handbook/stage/clarify.md',
    sourceLabel: 'product handbook',
  },
  {
    name: 'AI 办公平台选择',
    direction: 'vibe-working',
    status: 'draft',
    summary:
      '企业 AI 办公升级改造的平台选型：WorkBuddy 是计算单元，腾讯文档是存储单元。',
    steps: ['待分解——方案已形成，评估过程与平台分工边界随实施补充。'],
    source:
      'https://github.com/quanttide/quanttide-profile-of-consulting-management/blob/main/vibe-working/platform-decision/index.md',
    sourceLabel: '咨询档案',
  },
]
