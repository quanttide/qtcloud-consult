import { solutions, directions, type Solution } from './solutions'
import './App.css'

function StatusBadge({ status }: { status: Solution['status'] }) {
  return (
    <span className={status === 'wip' ? 'badge online' : 'badge wip'}>
      {status === 'wip' ? '研发中' : '待分解'}
    </span>
  )
}

function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <article className="card">
      <div className="cardTop">
        <h3>{solution.name}</h3>
        <StatusBadge status={solution.status} />
      </div>
      <p className="summary">{solution.summary}</p>
      <ol className="steps">
        {solution.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      {solution.source && (
        <a className="preview" href={solution.source} target="_blank" rel="noopener">
          {solution.sourceLabel} →
        </a>
      )}
    </article>
  )
}

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <h1>量潮咨询 · 解决方案清单</h1>
        <p>
          在研发中的咨询方案，按方向、方案、步骤三层展开；方法本体在各域
          handbook，这里只存定位、步骤与事实源入口。
        </p>
      </header>

      {directions.map((group) => (
        <section key={group.key} aria-labelledby={`dir-${group.key}`}>
          <div className="trackHead">
            <h2 id={`dir-${group.key}`}>{group.label}</h2>
            <p>{group.note}</p>
          </div>
          <div className="grid">
            {solutions
              .filter((solution) => solution.direction === group.key)
              .map((solution) => (
                <SolutionCard key={solution.name} solution={solution} />
              ))}
          </div>
        </section>
      ))}
    </main>
  )
}
