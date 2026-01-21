import { useRef, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [backendType, setBackendType] = useState<'go' | 'rust'>('go');
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    menuRef.current?.classList.toggle('open');
  }

  return (
    <>
      <Head>
        <title>株式会社テクシズ | TECSIZ Co., Ltd.</title>
        <meta name="description" content="ビジネスを加速させるシステム開発。高品質・スピーディー・柔軟対応。" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta property="og:title" content="株式会社テクシズ | TECSIZ Co., Ltd." />
        <meta property="og:description" content="ビジネスを加速させるシステム開発。高品質・スピーディー・柔軟対応。" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="株式会社テクシズ" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "株式会社テクシズ",
              "alternateName": "TECSIZ Co., Ltd.",
              "url": "https://tecsiz.co.jp",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "浜松町2-2-15 浜松町ダイヤビル2F",
                "addressLocality": "港区",
                "addressRegion": "東京都",
                "postalCode": "105-0013",
                "addressCountry": "JP"
              },
              "description": "GoやRust、Next.jsを用いた高品質・スピーディーなシステム開発。クリーンアーキテクチャによる保守性の高い設計を提供します。"
            })
          }}
        />
      </Head>

      <header>
        <nav className="nav-container">
          <div><a href="#top" className="logo">TECSIZ</a></div>
          <button className="menu-toggle" onClick={toggleMenu}>☰</button>
          <div ref={menuRef} className="nav-links" id="nav-menu" onClick={() => menuRef.current?.classList.remove('open')}>
            <a href="#services">サービス</a>
            <a href="#products">プロダクト</a>
            <a href="#tech">技術スタック</a>
            <a href="#recruit">採用情報</a>
            <a href="#about">会社概要</a>
            <a href="#contact" className="nav-cta">お問い合わせ</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="top" className="hero">
          <h1>ビジネスを加速させる<br />システム開発</h1>
          <p>
            技術の力でビジネスを加速させる。<br />
            高品質・スピーディーな開発で、新たな価値を創造します。
          </p>
          <a href="#contact" className="cta-button">お問い合わせ</a>
        </section>

        <section className="section" id="services">
          <h2>サービス</h2>
          <div className="grid">
            <div className="card">
              <h3>Webシステム開発</h3>
              <p>
                業務効率化・自動化を実現するためのWebアプリケーションを、要件定義から設計・開発・保守までワンストップで提供します。
                React/Next.jsやGo、Rustなどのモダンな技術選定により、UI/UXに優れ、将来的な拡張性と保守性の高い堅牢なシステムを構築。
                BtoBの管理画面からBtoCのサービスサイトまで、幅広いニーズに対応可能です。
              </p>
            </div>
            <div className="card">
              <h3>クラウド移行支援</h3>
              <p>
                既存のオンプレミス環境やレガシーシステムを、AWSやGCPなどのクラウド環境へスムーズに移行します。
                単なるリフト＆シフトだけでなく、サーバーレスアーキテクチャやコンテナ技術（Docker/Kubernetes）の採用により、
                運用コストの削減、セキュリティの強化、そしてスケーラビリティの向上を実現するクラウドネイティブな設計を提案します。
              </p>
            </div>
            <div className="card">
              <h3>技術コンサルティング</h3>
              <p>
                開発体制の見直し、技術選定支援、コードレビュー、パフォーマンスチューニングなど、技術面でのあらゆる課題解決を支援します。
                CTO代行や技術顧問として経営視点での技術戦略立案を行うほか、アジャイル開発の導入支援やエンジニア教育など、
                貴社のエンジニアリングチームの自走力を高め、組織全体の成長を強力にバックアップします。
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="strength">
          <h2>テクシズの強み</h2>
          <div className="strength-grid">
            <div className="card strength-card">
              <span className="strength-icon">🚀</span>
              <h3>圧倒的な開発スピード</h3>
              <p>
                Go/Rustの自社開発テンプレートを活用し、高品質なバックエンド基盤を短期間で構築。
                要件定義からMVPリリースまで、最短期間でビジネスの立ち上げを支援します。
              </p>
            </div>
            <div className="card strength-card">
              <span className="strength-icon">🛡️</span>
              <h3>10年戦える堅牢な設計</h3>
              <p>
                Clean Architectureをベースとした設計により、技術的負債を最小限に抑えます。
                将来の機能拡張や技術変更にも柔軟に対応できる、保守性の高いコードを提供します。
              </p>
            </div>
            <div className="card strength-card">
              <span className="strength-icon">🧬</span>
              <h3>モダン技術への深い造詣</h3>
              <p>
                Go, Rust, TypeScript, AI(LLM)など、最新技術を実戦投入。
                パフォーマンスと安全性が求められる大規模システムから、スピード重視のスタートアップまで対応可能です。
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="products">
          <h2>プロダクト</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', color: '#a3a3a3' }}>
            言語特性を最大限に活かした開発テンプレート<br />
            高品質なシステムを圧倒的なスピードで立ち上げます。
          </p>

          <div className="card" style={{ maxWidth: '100%' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)' }}>Admin Template</h3>
                <p style={{ fontSize: '1.1rem', color: '#e5e5e5', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                  半スクラッチで始める。<br />
                  最強の管理画面開発基盤。
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  「Reactの知識がなくてもコピペで機能追加できる」をコンセプトに設計された、業務システム特化型のNext.jsテンプレート。
                  実務で磨き上げられた「保守しやすいディレクトリ構造」と、最初から実装済みの必須機能（検索、CSV、認証）により、
                  管理画面開発の工数を劇的に削減します。
                </p>

                <div>
                  <h4 style={{ marginBottom: '1rem', color: 'white' }}>Key Features</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', color: '#a3a3a3' }}>
                      <span style={{ color: 'var(--accent-color)', marginRight: '0.5rem', fontWeight: 'bold' }}>✓</span>
                      <span><strong>Vertical Slice Architecture</strong>: 機能ごとの独立性を担保</span>
                    </li>
                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', color: '#a3a3a3' }}>
                      <span style={{ color: 'var(--accent-color)', marginRight: '0.5rem', fontWeight: 'bold' }}>✓</span>
                      <span><strong>Config-Driven Development</strong>: 設定ファイルベースの開発体験</span>
                    </li>
                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', color: '#a3a3a3' }}>
                      <span style={{ color: 'var(--accent-color)', marginRight: '0.5rem', fontWeight: 'bold' }}>✓</span>
                      <span><strong>Authentication</strong>: AWS Cognito (OIDC) 連携ロジック実装済み</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', color: '#a3a3a3' }}>
                      <span style={{ color: 'var(--accent-color)', marginRight: '0.5rem', fontWeight: 'bold' }}>✓</span>
                      <span><strong>Docker & Build System</strong>: Prod/Dev環境別のDockerfile完備</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ディレクトリ構造の可視化 */}
              {/* アーキテクチャの概念図（Admin） */}
              <div className="arch-container" style={{ background: '#111', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--card-border)' }}>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#a3a3a3', fontSize: '0.95rem', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                  Vertical Slice: 複雑性を分断し、開発速度を加速させる
                </div>

                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div className="arch-box" style={{ border: '1px solid #3b82f6', background: 'rgba(59, 130, 246, 0.1)', color: '#93c5fd', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                    <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Feature Modules (Domain)</strong>
                    <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>ビジネス機能ごとの独立したカプセル (Projects, Contracts...)</div>
                  </div>

                  <div style={{ textAlign: 'center', color: '#666' }}>⬇ 依存 (Uses)</div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="arch-box" style={{ border: '1px solid #10b981', background: 'rgba(16, 185, 129, 0.1)', color: '#6ee7b7', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                      <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Shared UI</strong>
                      <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>再利用可能な部品 (Atomic Design)</div>
                    </div>
                    <div className="arch-box" style={{ border: '1px solid #8b5cf6', background: 'rgba(139, 92, 246, 0.1)', color: '#c4b5fd', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                      <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Core / Libs</strong>
                      <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>API, Auth, Hooks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <a href="#contact" className="cta-button">
                デモ・導入のご相談はこちら
              </a>
            </div>
          </div>

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
        </section>

        <section className="section" id="workflow">
          <h2>開発の流れ</h2>
          <div className="workflow-container">
            {[
              { title: "ヒアリング・要件定義", desc: "お客様のビジネス課題を深く掘り下げ、実現したいゴールを明確にします。技術的な観点から最適な解決策を提案します。" },
              { title: "設計・アーキテクチャ選定", desc: "将来の拡張性を見据え、Clean Architectureに基づいた設計を行います。最適な技術スタックを選定します。" },
              { title: "アジャイル開発", desc: "2週間程度のイテレーションで開発を進めます。早い段階で動くものをお見せし、フィードバックを取り入れながらブラッシュアップします。" },
              { title: "テスト・品質保証", desc: "自動テストの導入はもちろん、セキュリティスキャンやパフォーマンスチェックを徹底し、高品質なシステムを担保します。" },
              { title: "リリース・保守運用", desc: "クラウド環境（AWS/GCP）へのデプロイを行い、リリース後も継続的な改善や技術サポートを提供します。" },
            ].map((step, idx) => (
              <div key={idx} className="workflow-step">
                <div className="step-number">{idx + 1}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="tech">
          <h2>技術スタック</h2>
          <div className="grid">
            <div className="card">
              <h3>言語・フレームワーク</h3>
              <div className="tech-list">
                <span className="tech-tag">Go</span>
                <span className="tech-tag">Rust</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Svelte</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">Laravel</span>
                <span className="tech-tag">FastAPI</span>
              </div>
            </div>
            <div className="card">
              <h3>インフラ・クラウド</h3>
              <div className="tech-list">
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">Google Cloud (GCP)</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">Kubernetes</span>
                <span className="tech-tag">Terraform</span>
                <span className="tech-tag">CloudFormation</span>
                <span className="tech-tag">GitHub Actions</span>
                <span className="tech-tag">Fargate</span>
                <span className="tech-tag">Lambda</span>
                <span className="tech-tag">CloudRun</span>
              </div>
            </div>
            <div className="card">
              <h3>データベース・ミドルウェア</h3>
              <div className="tech-list">
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">Redis</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">gRPC</span>
                <span className="tech-tag">GraphQL</span>
              </div>
            </div>
            <div className="card">
              <h3>得意分野</h3>
              <p style={{ marginTop: '1rem' }}>
                AI/LLM統合開発 / MVP開発 / 新規プロダクト開発 / マイクロサービス化 / パフォーマンス最適化 / アジャイル開発
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="recruit">
          <h2>採用情報</h2>
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3>私たちと一緒に働きませんか</h3>
            <p>
              株式会社テクシズは、技術力で社会にインパクトを与える急成長中のスタートアップです。
              私たちは「技術を楽しむこと」と「プロフェッショナルとしての成果」の両立を大切にしています。
              少数精鋭のチームだからこそ、一人ひとりの裁量が大きく、エンジニアとしてスピーディーに成長できる環境があります。
              フルリモートワークやフレックスタイム制を導入しており、ライフスタイルに合わせた柔軟な働き方が可能です。
              自由と責任を尊重し、新しい技術への挑戦を恐れず、チームと共に成長していける仲間を募集しています。
            </p>
            <div style={{ marginTop: '2rem' }}>
              <h4>募集ポジション</h4>
              <p>エンジニア（バックエンド / フロントエンド / インフラなど分野不問）</p>

              <h4 style={{ marginTop: '1.5rem' }}>歓迎スキル</h4>
              <div className="tech-list">
                <span className="tech-tag">Go</span>
                <span className="tech-tag">Rust</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Svelte</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">Terraform</span>
                <span className="tech-tag">AI / LLM</span>
                <span className="tech-tag">自走力</span>
                <span className="tech-tag">チーム開発経験</span>
              </div>

              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <a
                  href="mailto:info@tecsiz.co.jp?subject=採用応募&body=氏名と希望ポジションをご記入のうえ送信してください。"
                  className="cta-button"
                >
                  メールで応募する
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <h2>よくある質問</h2>
          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question">開発期間はどのくらいかかりますか？</div>
              <div className="faq-answer">
                案件の規模によりますが、MVP開発であれば最短1ヶ月〜3ヶ月程度でのリリースが可能です。
                自社開発テンプレートを活用することで、基盤構築の時間を大幅に短縮しています。
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">既存システムの保守やリプレイスもお願いできますか？</div>
              <div className="faq-answer">
                はい、可能です。レガシーシステムのクラウド移行（AWS/GCP）や、Go/Rustへのリプレイスによるパフォーマンス改善など、
                現状の課題に合わせた最適なプランを提案いたします。
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">技術顧問やCTO代行としての参画は可能ですか？</div>
              <div className="faq-answer">
                可能です。週1回からの技術相談や、エンジニア採用の技術面談、コードレビュー体制の構築など、
                単なる受託開発に留まらない伴走型のサポートを提供しています。
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">Rustを使用した開発のメリットは何ですか？</div>
              <div className="faq-answer">
                Rustはメモリ安全性が高く、実行速度が極めて速いため、計算リソースの節約（インフラコスト削減）と
                バグの少ない堅牢なシステム構築が可能です。特に高トラフィックなAPIや複雑なビジネスロジックを持つシステムに最適です。
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <h2>会社概要</h2>
          <div className="about-grid">
            <div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>技術の力で、<br />新たな価値を。</h3>
              <p>
                株式会社テクシズは、最先端の技術力と深いビジネス理解を武器に、お客様のビジネスを成功へと導くシステム開発会社です。
                私たちは単にシステムを作るだけでなく、お客様の「実現したいこと」を深く理解し、最適なソリューションを提案するパートナーでありたいと考えています。
                変化の激しいIT業界において、常に最新のトレンドをキャッチアップし、最高のパフォーマンスを発揮することで、社会に貢献し続けます。
              </p>
            </div>
            <div className="card">
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1rem 2rem' }}>
                <strong>会社名</strong>
                <span>株式会社テクシズ</span>

                <strong>代表者</strong>
                <span>堀 靖弘</span>

                <strong>所在地</strong>
                <span>東京都港区浜松町2-2-15<br />浜松町ダイヤビル2F</span>

                <strong>事業内容</strong>
                <span>システム開発・ITコンサルティング</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>お問い合わせ</h2>
          <p style={{ marginBottom: '2rem' }}>お仕事のご相談・ご依頼など、お気軽にお問い合わせください。</p>
          <a href="mailto:info@tecsiz.co.jp" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
            info@tecsiz.co.jp
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} TECSIZ Co., Ltd. All rights reserved.</p>
      </footer>
    </>
  )
}
