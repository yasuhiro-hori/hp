import { useState } from 'react';

export default function BackendTemplates() {
    const [backendType, setBackendType] = useState<'go' | 'rust'>('go');

    return (
        <div className="card" style={{ maxWidth: '100%', marginTop: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
                <div className="toggle-container">
                    <button
                        className={`toggle-button ${backendType === 'go' ? 'active' : ''}`}
                        onClick={() => setBackendType('go')}
                    >
                        Go Backend
                    </button>
                    <button
                        className={`toggle-button ${backendType === 'rust' ? 'active' : ''}`}
                        onClick={() => setBackendType('rust')}
                    >
                        Rust Backend
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
                {backendType === 'go' ? (
                    <>
                        <div>
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)' }}>Go Backend Template</h3>
                            <p style={{ fontSize: '1.1rem', color: '#e5e5e5', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                                10年戦える<br />
                                技術的負債を生まない堅牢な設計
                            </p>
                            <p style={{ marginBottom: '2rem' }}>
                                Goのシンプルさと高い並行処理能力を最大限に引き出すため、言語特性に最適化された独自のテンプレート基盤を構築。
                                外部システム（DBやWebフレームワーク）への依存を徹底的に排除する「Clean Architecture」を採用し、ビジネスロジックをシステムの中心に保護することで、将来的な技術変更や機能拡張に柔軟に対応できます。
                            </p>

                            <div>
                                <h4 style={{ marginBottom: '1rem', color: 'white' }}>Key Features</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', color: '#a3a3a3' }}>
                                        <span style={{ color: 'var(--accent-color)', marginRight: '0.5rem', fontWeight: 'bold' }}>✓</span>
                                        <span><strong>Clean Architecture</strong>: 責務の分離とテスタビリティの確保</span>
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', color: '#a3a3a3' }}>
                                        <span style={{ color: 'var(--accent-color)', marginRight: '0.5rem', fontWeight: 'bold' }}>✓</span>
                                        <span><strong>Authentication</strong>: Cognito (JWT) 検証ミドルウェア完備</span>
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', color: '#a3a3a3' }}>
                                        <span style={{ color: 'var(--accent-color)', marginRight: '0.5rem', fontWeight: 'bold' }}>✓</span>
                                        <span><strong>Docker & Build System</strong>: マルチステージビルド対応のDockerfileとMakeコマンド完備</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', color: '#a3a3a3' }}>
                                        <span style={{ color: 'var(--accent-color)', marginRight: '0.5rem', fontWeight: 'bold' }}>✓</span>
                                        <span><strong>Type-safe ORM</strong>: SQLBoilerによる型安全かつ高速なDB操作</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="arch-container" style={{ background: '#111', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--card-border)' }}>
                            <div style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#a3a3a3', fontSize: '0.95rem', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                                Domain-Centric: 技術の変化からビジネスの核心を守り抜く
                            </div>

                            <div style={{ position: 'relative', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '2px dashed #666', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '10px' }}>
                                    <span style={{ background: '#111', padding: '0 5px', color: '#888', fontSize: '0.8rem' }}>Infrastructure</span>
                                </div>
                                <div style={{ position: 'absolute', width: '80%', height: '80%', borderRadius: '50%', border: '2px solid #3b82f6', background: 'rgba(59, 130, 246, 0.05)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '10px' }}>
                                    <span style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '0.9rem', marginTop: '0' }}>Adapters</span>
                                </div>
                                <div style={{ position: 'absolute', width: '60%', height: '60%', borderRadius: '50%', border: '2px solid #8b5cf6', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '10px' }}>
                                    <span style={{ color: '#8b5cf6', fontWeight: 'bold', fontSize: '0.9rem', marginTop: '5px' }}>Usecases</span>
                                </div>
                                <div style={{ position: 'absolute', width: '35%', height: '35%', borderRadius: '50%', background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }}>
                                    <span style={{ color: '#000', fontWeight: 'bold' }}>Domain</span>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)' }}>Rust Backend Template</h3>
                            <p style={{ fontSize: '1.1rem', color: '#e5e5e5', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                                安全性とパフォーマンスの極致<br />
                                メモリ安全かつ超高速なバックエンド基盤
                            </p>
                            <p style={{ marginBottom: '2rem' }}>
                                Rustの強力な型システムと所有権モデルを最大限に活かし、メモリ安全かつ超高速な実行性能を両立した言語特化型テンプレート。
                                Go版同様のClean ArchitectureをRustの特性に落とし込み、ビジネスロジックを技術的詳細から完全に分離。
                                高い実行効率を維持しつつ、ランタイムエラーをコンパイル時に徹底的に排除する、極めて堅牢なシステム基盤を提供します。
                            </p>

                            <div>
                                <h4 style={{ marginBottom: '1rem', color: 'white' }}>Key Features</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', color: '#a3a3a3' }}>
                                        <span style={{ color: 'var(--accent-color)', marginRight: '0.5rem', fontWeight: 'bold' }}>✓</span>
                                        <span><strong>Clean Architecture</strong>: ドメインロジックを中心とした堅牢な設計</span>
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', color: '#a3a3a3' }}>
                                        <span style={{ color: 'var(--accent-color)', marginRight: '0.5rem', fontWeight: 'bold' }}>✓</span>
                                        <span><strong>Axum & Tower</strong>: 並行処理に強いモダンな非同期Webスタック</span>
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', color: '#a3a3a3' }}>
                                        <span style={{ color: 'var(--accent-color)', marginRight: '0.5rem', fontWeight: 'bold' }}>✓</span>
                                        <span><strong>SeaORM (Async)</strong>: 型安全なデータベース操作と非同期I/O</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', color: '#a3a3a3' }}>
                                        <span style={{ color: 'var(--accent-color)', marginRight: '0.5rem', fontWeight: 'bold' }}>✓</span>
                                        <span><strong>Zod-like Validation</strong>: シリアライザによる厳密な入力バリデーション</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="arch-container" style={{ background: '#111', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--card-border)' }}>
                            <div style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#a3a3a3', fontSize: '0.95rem', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                                Strict Safety: 実行時の安定性をコンパイル時に保証する
                            </div>

                            <div style={{ position: 'relative', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '2px dashed #666', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '10px' }}>
                                    <span style={{ background: '#111', padding: '0 5px', color: '#888', fontSize: '0.8rem' }}>Infrastructure</span>
                                </div>
                                <div style={{ position: 'absolute', width: '80%', height: '80%', borderRadius: '50%', border: '2px solid #ef4444', background: 'rgba(239, 68, 68, 0.05)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '10px' }}>
                                    <span style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '0.9rem', marginTop: '0' }}>Adapters</span>
                                </div>
                                <div style={{ position: 'absolute', width: '60%', height: '60%', borderRadius: '50%', border: '2px solid #f97316', background: 'rgba(249, 115, 22, 0.1)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '10px' }}>
                                    <span style={{ color: '#f97316', fontWeight: 'bold', fontSize: '0.9rem', marginTop: '5px' }}>Usecases</span>
                                </div>
                                <div style={{ position: 'absolute', width: '35%', height: '35%', borderRadius: '50%', background: '#dea584', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(222, 165, 132, 0.4)' }}>
                                    <span style={{ color: '#000', fontWeight: 'bold' }}>Domain</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <a href="#contact" className="cta-button">
                    詳細な技術仕様を聞く
                </a>
            </div>
        </div>
    );
}
