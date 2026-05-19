import { useState } from 'react';

type Tab = 'go' | 'rust';

const data = {
    go: {
        title: 'Go Backend Template',
        sub: '10年戦える、技術的負債を生まない堅牢な設計。',
        body: 'Goのシンプルさと並行処理を最大限に引き出すため、言語特性に最適化した独自テンプレート。Clean Architecture でビジネスロジックを技術的詳細から完全に分離する。',
        stack: ['Go', 'Echo', 'SQLBoiler', 'Cognito (JWT)', 'Docker'],
        features: [
            { k: 'Clean Architecture', v: '責務の分離とテスタビリティの確保' },
            { k: 'Authentication', v: 'Cognito (JWT) 検証ミドルウェア完備' },
            { k: 'Docker / Build', v: 'マルチステージビルド対応 + Makefile' },
            { k: 'Type-safe ORM', v: 'SQLBoiler による型安全かつ高速な DB 操作' },
        ],
        tagline: 'Domain-Centric: 技術の変化からビジネスの核心を守り抜く。',
        ringColor: '#1746a2',
    },
    rust: {
        title: 'Rust Backend Template',
        sub: '安全性とパフォーマンスの極致。',
        body: 'Rust の型システムと所有権モデルを活かし、メモリ安全かつ超高速な実行性能を両立。ランタイムエラーをコンパイル時に徹底排除する、極めて堅牢な基盤。',
        stack: ['Rust', 'Axum / Tower', 'SeaORM', 'Cognito (JWT)', 'Docker'],
        features: [
            { k: 'Clean Architecture', v: 'ドメインロジックを中心とした堅牢な設計' },
            { k: 'Axum & Tower', v: '並行処理に強いモダンな非同期 Web スタック' },
            { k: 'SeaORM (Async)', v: '型安全なデータベース操作と非同期 I/O' },
            { k: 'Strict Validation', v: 'シリアライザによる厳密な入力バリデーション' },
        ],
        tagline: 'Strict Safety: 実行時の安定性をコンパイル時に保証する。',
        ringColor: '#c8410c',
    },
};

export default function BackendTemplates() {
    const [tab, setTab] = useState<Tab>('go');
    const d = data[tab];

    return (
        <div className="bt-wrap">
            <div className="toggle-container">
                <button
                    className={`toggle-button ${tab === 'go' ? 'active' : ''}`}
                    onClick={() => setTab('go')}
                >
                    Go Backend
                </button>
                <button
                    className={`toggle-button ${tab === 'rust' ? 'active' : ''}`}
                    onClick={() => setTab('rust')}
                >
                    Rust Backend
                </button>
            </div>

            <div className="bt-grid">
                <div className="bt-text">
                    <div className="bt-label">● TEMPLATE — {tab.toUpperCase()}</div>
                    <h3>{d.title}</h3>
                    <p className="bt-sub">{d.sub}</p>
                    <p className="bt-body">{d.body}</p>

                    <div className="bt-stack">
                        {d.stack.map((s) => (
                            <span key={s} className="bp-tag">
                                {s}
                            </span>
                        ))}
                    </div>

                    <div className="bt-features">
                        {d.features.map((f) => (
                            <div key={f.k} className="bt-feature">
                                <div className="bt-feature-k">✓ {f.k}</div>
                                <div className="bt-feature-v">{f.v}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bt-diagram">
                    <span className="bp-corners" aria-hidden="true">
                        <span>+</span>
                        <span>+</span>
                        <span>+</span>
                        <span>+</span>
                    </span>
                    <div className="bt-diagram-label">● ARCH.DIAGRAM</div>
                    <div className="bt-diagram-tagline">{d.tagline}</div>

                    <div className="bt-svg-wrap">
                        <svg width="320" height="320" viewBox="0 0 320 320">
                            <circle
                                cx="160"
                                cy="160"
                                r="150"
                                fill="none"
                                stroke="#0a1d3a"
                                strokeWidth="1.5"
                                strokeDasharray="6 4"
                            />
                            <circle
                                cx="160"
                                cy="160"
                                r="115"
                                fill="none"
                                stroke={d.ringColor}
                                strokeWidth="1.5"
                            />
                            <circle
                                cx="160"
                                cy="160"
                                r="80"
                                fill="none"
                                stroke={d.ringColor}
                                strokeWidth="1.5"
                            />
                            <circle cx="160" cy="160" r="42" fill="#0a1d3a" />
                            <text x="160" y="22" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#6b7785" letterSpacing="2">
                                INFRASTRUCTURE
                            </text>
                            <text x="160" y="58" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill={d.ringColor} letterSpacing="2" fontWeight="700">
                                ADAPTERS
                            </text>
                            <text x="160" y="92" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill={d.ringColor} letterSpacing="2" fontWeight="700">
                                USECASES
                            </text>
                            <text x="160" y="165" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="14" fill="#fafaf6" fontWeight="700" letterSpacing="1.5">
                                DOMAIN
                            </text>
                            <line x1="0" y1="160" x2="15" y2="160" stroke="#6b7785" strokeWidth="1" />
                            <line x1="305" y1="160" x2="320" y2="160" stroke="#6b7785" strokeWidth="1" />
                            <line x1="160" y1="0" x2="160" y2="15" stroke="#6b7785" strokeWidth="1" />
                            <line x1="160" y1="305" x2="160" y2="320" stroke="#6b7785" strokeWidth="1" />
                        </svg>
                    </div>

                    <div className="bt-diagram-foot">
                        <span>SCALE 1:1</span>
                        <span>R=150 / R=115 / R=80 / R=42</span>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <a href="/#contact" className="bp-btn">
                    $ contact --about=backend-template
                </a>
            </div>

            <style>{`
                .bt-wrap { max-width: 100%; }

                .bt-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                }
                @media (max-width: 900px) {
                    .bt-grid { grid-template-columns: 1fr; }
                }

                .bt-label {
                    font-family: var(--font-mono);
                    font-size: 11px;
                    letter-spacing: 0.16em;
                    color: var(--bp-blue);
                    font-weight: 600;
                    margin-bottom: 12px;
                }

                .bt-text h3 {
                    font-family: var(--font-sans);
                    font-size: 36px;
                    font-weight: 900;
                    color: var(--bp-ink);
                    margin: 0 0 12px;
                    letter-spacing: -0.025em;
                }
                .bt-sub {
                    font-family: var(--font-sans);
                    font-size: 17px;
                    color: var(--bp-blue);
                    margin: 0 0 16px;
                    font-weight: 700;
                }
                .bt-body {
                    font-family: var(--font-sans);
                    font-size: 14px;
                    line-height: 1.85;
                    color: var(--bp-ink-soft);
                    margin: 0 0 28px;
                }

                .bt-stack {
                    margin-bottom: 24px;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                }

                .bt-features { border-top: 1.5px solid var(--bp-ink); }
                .bt-feature {
                    padding: 14px 0;
                    border-bottom: 1px dashed var(--bp-border-dash);
                    display: grid;
                    grid-template-columns: 180px 1fr;
                    gap: 16px;
                }
                @media (max-width: 500px) {
                    .bt-feature { grid-template-columns: 1fr; gap: 4px; }
                }
                .bt-feature-k {
                    font-family: var(--font-mono);
                    font-size: 12px;
                    color: var(--bp-ink);
                    letter-spacing: 0.06em;
                    font-weight: 700;
                }
                .bt-feature-v {
                    font-family: var(--font-sans);
                    font-size: 13px;
                    color: var(--bp-ink-soft);
                    line-height: 1.7;
                }

                .bt-diagram {
                    border: 1.5px solid var(--bp-ink);
                    padding: 36px;
                    background: var(--bp-paper);
                    position: relative;
                    min-height: 460px;
                }
                .bp-corners {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                }
                .bp-corners span {
                    position: absolute;
                    font-family: var(--font-mono);
                    font-size: 10px;
                    color: var(--bp-ink);
                    opacity: 0.55;
                    letter-spacing: 0.12em;
                }
                .bp-corners span:nth-child(1) { top: 6px; left: 8px; }
                .bp-corners span:nth-child(2) { top: 6px; right: 8px; }
                .bp-corners span:nth-child(3) { bottom: 2px; left: 8px; }
                .bp-corners span:nth-child(4) { bottom: 2px; right: 8px; }

                .bt-diagram-label {
                    font-family: var(--font-mono);
                    font-size: 11px;
                    letter-spacing: 0.14em;
                    color: var(--bp-blue);
                    margin-bottom: 16px;
                    text-align: center;
                    font-weight: 600;
                }
                .bt-diagram-tagline {
                    text-align: center;
                    font-family: var(--font-mono);
                    font-size: 12px;
                    color: var(--bp-muted);
                    margin-bottom: 28px;
                    letter-spacing: 0.04em;
                }
                .bt-svg-wrap {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 320px;
                    position: relative;
                }
                .bt-diagram-foot {
                    padding-top: 16px;
                    border-top: 1px dashed var(--bp-border-dash);
                    display: flex;
                    justify-content: space-between;
                    font-family: var(--font-mono);
                    font-size: 10px;
                    color: var(--bp-muted);
                    letter-spacing: 0.12em;
                }
            `}</style>
        </div>
    );
}
