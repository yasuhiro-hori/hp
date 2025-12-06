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
          <p>高品質・スピーディー・柔軟対応。<br />お客様の課題を技術の力で解決します。</p>
          <a href="#contact" className="cta-button">お問い合わせ</a>
        </section>

        <section className="section" id="services">
          <h2>サービス</h2>
          <div className="grid">
            <div className="card">
              <h3>Webシステム開発</h3>
              <p>
                業務効率化・自動化を実現するためのWebアプリケーションを、要件定義から設計・開発・保守までワンストップで提供します。
                モダンな技術選定により、拡張性と保守性の高いシステムを構築します。
              </p>
            </div>
            <div className="card">
              <h3>クラウド移行支援</h3>
              <p>
                既存のオンプレミス環境やレガシーシステムを、AWSやGCPなどのクラウド環境へスムーズに移行。
                サーバーレスアーキテクチャの採用により、運用コストの削減とスケーラビリティの向上を実現します。
              </p>
            </div>
            <div className="card">
              <h3>技術コンサルティング</h3>
              <p>
                開発体制の見直し、技術選定支援、コードレビュー、パフォーマンスチューニングなど、技術面での課題解決を支援。
                CTO代行や技術顧問として、貴社のエンジニアリングチームを強力にバックアップします。
              </p>
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
              株式会社テクシズは、急成長中のスタートアップです。
              少数精鋭のチームで、スピード感を持って価値あるプロダクトを次々と生み出しています。
              自由と責任を尊重し、技術でビジネスに貢献したい方を歓迎します。
            </p>
            <div style={{ marginTop: '2rem' }}>
              <h4>募集ポジション</h4>
              <p>エンジニア（バックエンド / フロントエンド / インフラなど分野不問）</p>

              <h4 style={{ marginTop: '1.5rem' }}>歓迎スキル</h4>
              <div className="tech-list">
                <span className="tech-tag">Go</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">自走力</span>
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
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>技術の力で、<br />新たな価値を。</h3>
              <p>株式会社テクシズは、最先端の技術力でお客様のビジネスを支援するシステム開発会社です。</p>
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
