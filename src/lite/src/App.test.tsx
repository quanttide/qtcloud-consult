import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'
import { solutions, directions } from './solutions'

describe('解决方案清单', () => {
  it('五个方向依次展开', () => {
    render(<App />)

    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings.map((h) => h.textContent)).toEqual([
      '工程交付',
      '商务接单',
      '人才培养与雇佣',
      '需求与设计',
      '办公工作流',
    ])
    expect(directions.map((d) => d.key)).toEqual([
      'devops-engineering',
      'business-development',
      'human-resources',
      'product-development',
      'vibe-working',
    ])
  })

  it('五个方案在架：四个研发中、一个待分解', () => {
    render(<App />)

    expect(screen.getAllByText('研发中')).toHaveLength(4)
    expect(screen.getAllByText('待分解')).toHaveLength(1)
    expect(solutions).toHaveLength(5)
  })

  it('AI 办公平台选择标待分解，结论写明计算与存储单元分工', () => {
    render(<App />)

    const card = screen.getByText('AI 办公平台选择').closest('article') as HTMLElement
    expect(card).toHaveTextContent('WorkBuddy 是计算单元')
    expect(card).toHaveTextContent('腾讯文档是存储单元')
    expect(card).toHaveTextContent('待分解')
  })

  it('每个方案都带事实源入口', () => {
    render(<App />)

    const previews = screen.getAllByRole('link', { name: /handbook|咨询档案/ })
    expect(previews).toHaveLength(5)
    for (const link of previews) {
      expect(link.getAttribute('href')).toMatch(/^https:\/\/github\.com\/quanttide\//)
    }
  })

  it('九步的工程生命周期排最前', () => {
    expect(solutions[0].name).toBe('工程生命周期交付')
    expect(solutions[0].steps).toHaveLength(9)
    expect(solutions[0].steps[0]).toMatch(/^规划/)
    expect(solutions[0].steps[8]).toMatch(/^监控/)
  })
})
