# qtcloud-consult-lite

量潮咨询的**解决方案清单**——在研发中的那本清单，与咨询档案（quanttide-profile-of-consulting-management）分工：

- **这里**：全部在研发中的方案，标状态（研发中 / 待分解），带步骤与事实源入口
- **咨询档案**：关系档案与方案的正本，步骤分解以档案为准

## 方向

| 方向 | 方案 |
|---|---|
| 工程交付 | 工程生命周期交付（九步） |
| 商务接单 | 商务调研：从识别客户到项目启动（五步） |
| 人才培养与雇佣 | 人才培养体系（六步） |
| 需求与设计 | 需求梳理五步 |
| 办公工作流 | AI 办公平台选择（待分解） |

## 开发

```bash
npm install
npm test        # vitest
npm run lint    # eslint
npm run build   # tsc -b && vite build
```

## 结构

```
src/
├── solutions.ts   # 方向与方案数据（状态、步骤、事实源）
├── App.tsx        # 方向分组展示 + 状态
└── App.test.tsx   # 方向顺序、状态计数、分工口径断言
```

## 许可

随仓库 [CC BY 4.0](../../LICENSE)。
