import Image from 'next/image'
import {useRef} from "react";
import {useRouter} from "next/router";

export default function Home() {
    const menuRef = useRef<HTMLDivElement>(null);
    const {basePath} = useRouter()
    const toggleMenu = () => {
        menuRef.current?.classList.toggle('open');
    }

    return (
        <>
            <header>
                <nav>
                    <div className="nav-container">
                        <div><a href="#top" className="logo">TECSIZ</a></div>
                        <button className="menu-toggle" onClick={toggleMenu}>☰</button>
                    </div>
                    <div ref={menuRef} className="nav-links" id="nav-menu" onClick={toggleMenu}>
                        <a href="#services">サービス</a>
                        <a href="#recruit">採用情報</a>
                        <a href="#about">会社情報</a>
                        <a href="#contact">お問い合わせ</a>
                    </div>
                </nav>
            </header>

            <section id="top" className="hero">
                <h1>ビジネスを加速させるシステム開発</h1>
                <p>高品質・スピーディー・柔軟対応。お客様の課題を解決します。</p>
            </section>

            <section className="section" id="services">
                <h2>サービス</h2>

                <h3>Webシステム開発</h3>
                <p>
                    業務効率化・自動化を実現するためのWebアプリケーションを、要件定義から設計・開発・保守までワンストップで提供します。
                    フロントエンドからバックエンド、インフラまで対応可能です。
                </p>

                <h3>クラウド移行支援</h3>
                <p>
                    既存のオンプレミス環境やレガシーシステムを、AWSやGCPなどのクラウド環境へスムーズに移行します。
                    セキュリティ、コスト、パフォーマンスを考慮した最適な設計を行います。
                    <br/>
                </p>

                <h3>技術コンサルティング</h3>
                <p>
                    開発体制の見直し、技術選定支援、コードレビュー、パフォーマンスチューニングなど、技術面での課題解決を支援します。
                    CTO代行や技術顧問契約にも対応可能です。<br/>
                    また、他社エンジニアチームや開発ベンダー様との協業体制の構築・技術支援にも柔軟に対応いたします。
                </p>
                <p>
                    <strong>【参考価格】</strong><br/>
                    ・Webシステム開発：案件単価150万円〜（税別）<br/>
                    ・技術顧問（アドバイザリー型）：月額30万円〜（税別）<br/>
                    ・CTO代行（プロダクト開発支援型）：月額80万円〜（税別）<br/>
                    ※案件内容に応じたお見積り・ご提案が可能です。<br/>
                    <strong><a style={{color: "inherit", textDecoration: "underline"}} href="mailto:info@tecsiz.co.jp">まずはご相談ください。</a></strong>
                </p>
            </section>

            <section className="section" id="alliance">
                <h2>事例</h2>
                <h3>ヤネミル</h3>
                <div style={{marginBottom: '2rem'}}>
                    <Image
                        src={`${basePath}/yanemiru.png`}
                        alt="屋根パネル搭載シミュレーションシステム"
                        width={800}                 // ← 必須
                        height={600}                // ← 必須
                        style={{maxWidth: '100%', height: 'auto'}}
                        priority
                    />
                    <h3>屋根パネル搭載シミュレーションシステム</h3>
                    <p>
                        航空画像を活用した屋根上の太陽光パネル設置シミュレーションシステムを開発いたしました。本システムは、実際に何枚のパネルが設置可能かを自動算出します。<br/>
                        本システムの利用やパネル設置リストの販売にも対応しておりますので、詳しくは<a style={{color: "inherit", textDecoration: "underline"}} href="mailto:info@tecsiz.co.jp">お問い合わせ</a>ください。
                    </p>
                </div>
            </section>
            <section className="section" id="tech">
                <h2>技術スタック</h2>
                <div>
                    <h3>対応言語・フレームワーク</h3>
                    <p>
                        <strong>言語：</strong>Go / PHP / Ruby / Python / Java / JavaScript / TypeScript<br/>
                        <strong>フレームワーク：</strong>
                        Echo・Gin（Go） / Laravel・CakePHP（PHP） / Ruby on Rails（Ruby） / FastAPI・Django（Python） / Spring Boot（Java） / Vue.js・React・Next.js（JavaScript/TypeScript）
                    </p>

                    <h3>インフラ・クラウド</h3>
                    <p>
                        AWS全般（EC2, Fargate, RDS, S3, Lambda, Cognito など）
                    </p>

                    <h3>得意分野</h3>
                    <p>
                        MVP開発、ゼロイチからの新規プロダクト開発、技術選定、アーキテクチャ設計、少人数高速開発
                    </p>
                </div>
            </section>

            <section className="section" id="recruit">
                <h2>採用情報</h2>
                <p>
                    株式会社テクシズは、急成長中のスタートアップです。
                    少数精鋭のチームで、スピード感を持って価値あるプロダクトを次々と生み出しています。
                    自由と責任を尊重し、技術でビジネスに貢献したい方を歓迎します。
                </p>

                <h3>募集ポジション</h3>
                <ul>
                    <li>フルスタックエンジニア（Go / Python / Next.js）</li>
                    <li>インフラエンジニア（AWS設計・構築）</li>
                    <li>技術顧問・業務委託メンバー</li>
                </ul>

                <h3>働き方</h3>
                <p>フルリモート・フレックスタイム制を採用。副業・兼業も相談可能です。</p>

                <h3>応募方法</h3>
                <p><a style={{color: "inherit"}} href="mailto:info@tecsiz.co.jp">メールにてご応募をお願いいたします。</a></p>
            </section>


            <section className="section" id="about">
                <h2>会社情報</h2>
                <p>株式会社テクシズは、最先端の技術力でお客様のビジネスを支援するシステム開発会社です。</p>

                <div className="margin-top: 2rem;">
                    <p><strong>会社名：</strong>株式会社テクシズ</p>
                    <p><strong>代表者：</strong>堀 靖弘</p>
                    <p><strong>資本金：</strong>300万円</p>
                    <p><strong>事業内容：</strong>システム開発・ITコンサルティング・クラウド導入支援</p>
                </div>
            </section>

            <section className="section" id="contact">
                <h2>お問い合わせ</h2>
                <p>以下のメールアドレスまでご連絡ください。</p>
                <p><a style={{color: "inherit"}} href="mailto:info@tecsiz.co.jp">info@tecsiz.co.jp</a></p>
            </section>
            <footer className="footer">
                &copy; {new Date().getFullYear()} TECSIZ Co., Ltd.
            </footer>
        </>)
}
