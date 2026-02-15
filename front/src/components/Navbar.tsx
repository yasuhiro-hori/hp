import { useRef } from 'react';

export default function Navbar() {
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        menuRef.current?.classList.toggle('open');
    };

    return (
        <header>
            <nav className="nav-container">
                <div>
                    <a href="#top" className="logo">
                        TECSIZ
                    </a>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <div
                    ref={menuRef}
                    className="nav-links"
                    id="nav-menu"
                    onClick={() => menuRef.current?.classList.remove('open')}
                >
                    <a href="#services">サービス</a>
                    <a href="#products">プロダクト</a>
                    <a href="#tech">技術スタック</a>
                    <a href="#recruit">採用情報</a>
                    <a href="#about">会社概要</a>
                    <a href="#contact" className="nav-cta">
                        お問い合わせ
                    </a>
                </div>
            </nav>
        </header>
    );
}
