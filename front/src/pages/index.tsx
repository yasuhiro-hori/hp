import { useRef } from "react";
import Head from "next/head";

export default function Home() {
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    menuRef.current?.classList.toggle('open');
  }

  return (
    <>
      <Head>
        <title>株式会社テクシズ | TECSIZ Co., Ltd.</title>
        <meta name="description" content="ビジネスを加速させるシステム開発。高品質・スピーディー・柔軟対応。" />
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
            <a href="#contact">お問い合わせ</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="top" className="hero">
          <h1>ビジネスを加速させる<br />システム開発</h1>
          <p>
            技術の力で、ビジネスを加速させる。<br />
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
                React/Next.jsやGoなどのモダンな技術選定により、UI/UXに優れ、将来的な拡張性と保守性の高い堅牢なシステムを構築。
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

        <section className="section" id="products">
          <h2>プロダクト</h2>

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
              <div className="tree-view">
                <div style={{ color: '#e5e5e5', marginBottom: '0.5rem' }}>// 実務に最適化された実際のディレクトリ構成</div>
                <div className="tree-content"><span className="tree-folder">src/</span></div>

                <div className="tree-node">
                  <div className="tree-content"><span className="tree-folder">api/</span> <span className="tree-desc">API通信とReact QueryのHooksを集約</span></div>
                </div>

                <div className="tree-node">
                  <div className="tree-content"><span className="tree-folder">atomic/</span> <span className="tree-desc">Atomic Designに基づくUIパーツ</span></div>
                  <div className="tree-node"><div className="tree-content"><span className="tree-folder">dialog/</span></div></div>
                  <div className="tree-node"><div className="tree-content"><span className="tree-folder">form/</span></div></div>
                  <div className="tree-node"><div className="tree-content"><span className="tree-folder">table/</span></div></div>
                </div>

                <div className="tree-node">
                  <div className="tree-content"><span className="tree-folder">layouts/</span> <span className="tree-desc">共通レイアウト定義</span></div>
                  <div className="tree-node"><div className="tree-content"><span className="tree-file">ListPageContainer.tsx</span> <span className="tree-desc" style={{ color: 'var(--accent-color)' }}>← 一覧画面の共通枠</span></div></div>
                </div>

                <div className="tree-node">
                  <div className="tree-content"><span className="tree-folder">modules/</span> <span className="tree-desc">機能（ドメイン）単位で構成</span></div>

                  <div className="tree-node">
                    <div className="tree-content"><span className="tree-folder">plans/</span> <span className="tree-desc">プラン管理機能</span></div>
                    <div className="tree-node"><div className="tree-content"><span className="tree-file">ListTable.tsx</span></div></div>
                    <div className="tree-node"><div className="tree-content"><span className="tree-file">Search.tsx</span></div></div>
                  </div>

                  <div className="tree-node">
                    <div className="tree-content"><span className="tree-folder">contracts/</span> <span className="tree-desc">契約管理機能</span></div>
                  </div>
                </div>

                <div className="tree-node">
                  <div className="tree-content"><span className="tree-folder">pages/</span> <span className="tree-desc">ルーティング定義のみ</span></div>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)' }}>Go Backend Template</h3>
                <p style={{ fontSize: '1.1rem', color: '#e5e5e5', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                  堅牢で高速。<br />
                  Clean Architecture採用のGolang基盤。
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  大規模開発に耐えうる「Clean Architecture」をベースに、全ての依存関係解決と初期化処理をエントリーポイント（cmd）に集約。
                  これによりドメインロジックの純粋性を完全に保ち、SQLBoilerによるType-safeなDB操作やGinによる高速なAPI処理と共存させています。
                  「どこで何が起きているか」が明確な、保守性の高い設計です。
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

              {/* Goディレクトリ構造の可視化 */}
              <div className="tree-view">
                <div style={{ color: '#e5e5e5', marginBottom: '0.5rem' }}>// 責務が明確に分離されたレイヤードアーキテクチャ</div>
                <div className="tree-content"><span className="tree-folder">root/</span></div>

                <div className="tree-node">
                  <div className="tree-content"><span className="tree-folder">cmd/</span> <span className="tree-desc">エントリポイント (責務の集約)</span></div>
                  <div className="tree-node"><div className="tree-content"><span className="tree-file">main.go</span></div></div>
                </div>

                <div className="tree-node">
                  <div className="tree-content"><span className="tree-folder">adapter/</span> <span className="tree-desc">外部との入出力を担当 (Controller)</span></div>
                  <div className="tree-node">
                    <div className="tree-content"><span className="tree-folder">api/</span> <span className="tree-desc">機能単位で完結 (Vertical Slice)</span></div>
                    <div className="tree-node">
                      <div className="tree-content"><span className="tree-folder">projects/</span> <span className="tree-desc">機能ごとにHandler/Repo/Usecaseを集約</span></div>
                      <div className="tree-node"><div className="tree-content"><span className="tree-folder">handlers/</span></div></div>
                      <div className="tree-node"><div className="tree-content"><span className="tree-folder">repositories/</span></div></div>
                      <div className="tree-node"><div className="tree-content"><span className="tree-folder">usecases/</span></div></div>
                    </div>
                  </div>
                </div>

                <div className="tree-node">
                  <div className="tree-content"><span className="tree-folder">domain/</span> <span className="tree-desc">ビジネスロジックの中核</span></div>
                  <div className="tree-node"><div className="tree-content"><span className="tree-folder">entity/</span> <span className="tree-desc">自動生成エンティティ</span></div></div>
                  <div className="tree-node"><div className="tree-content"><span className="tree-folder">models/</span> <span className="tree-desc">ドメインモデル</span></div></div>
                </div>

                <div className="tree-node">
                  <div className="tree-content"><span className="tree-folder">infrastructure/</span> <span className="tree-desc">技術的詳細・実装</span></div>
                  <div className="tree-node"><div className="tree-content"><span className="tree-folder">db/</span> <span className="tree-desc">DB接続・設定</span></div></div>
                  <div className="tree-node"><div className="tree-content"><span className="tree-folder">middleware/</span></div></div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <a href="#contact" className="cta-button">
                詳細な技術仕様を聞く
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="tech">
          <h2>技術スタック</h2>
          <div className="grid">
            <div className="card">
              <h3>言語・フレームワーク</h3>
              <div className="tech-list">
                <span className="tech-tag">Go</span>
                <span className="tech-tag">TypeScript</span>
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
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">Terraform</span>
                <span className="tech-tag">Fargate</span>
                <span className="tech-tag">Lambda</span>
                <span className="tech-tag">CloudRun</span>
              </div>
            </div>
            <div className="card">
              <h3>得意分野</h3>
              <p style={{ marginTop: '1rem' }}>
                MVP開発 / 新規プロダクト開発 / マイクロサービス化 / パフォーマンス最適化 / アジャイル開発
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
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">Terraform</span>
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
                <span>東京都港区浜松町２丁目２番１５号<br />浜松町ダイヤビル２Ｆ</span>

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
