import { useRef, useState, useEffect } from 'react';

export default function Navbar() {
    const menuRef = useRef<HTMLDivElement>(null);
    const [activePath, setActivePath] = useState('');

    useEffect(() => {
        const handlePathChange = () => {
            const path = window.location.pathname;
            const hash = window.location.hash;

            if (path.startsWith('/products')) {
                setActivePath('/products');
            } else if (path.startsWith('/about')) {
                setActivePath('/about');
            } else if (path.startsWith('/recruit')) {
                setActivePath('/recruit');
            } else if (hash) {
                setActivePath(hash);
            } else if (path === '/') {
                setActivePath(hash || '#top');
            }
        };

        handlePathChange();
        window.addEventListener('hashchange', handlePathChange);
        window.addEventListener('popstate', handlePathChange);

        // Scroll detection for home page sections
        let observer: IntersectionObserver | null = null;
        if (window.location.pathname === '/') {
            const sections = ['top'];
            const observerOptions = {
                root: null,
                rootMargin: '-40% 0px -40% 0px',
                threshold: 0
            };

            observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        setActivePath(`#${id}`);
                    }
                });
            }, observerOptions);

            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (el) observer?.observe(el);
            });
        }

        return () => {
            window.removeEventListener('hashchange', handlePathChange);
            window.removeEventListener('popstate', handlePathChange);
            observer?.disconnect();
        };
    }, []);

    const toggleMenu = () => {
        menuRef.current?.classList.toggle('open');
    };

    return (
        <header>
            <nav className="nav-container">
                <div>
                    <a href="/#top" className="logo">
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
                    <a href="/recruit" className={activePath.startsWith('/recruit') || activePath === '#recruit' ? 'active' : ''}>採用情報</a>
                    <a href="/products" className={activePath.startsWith('/products') || activePath === '/products' ? 'active' : ''}>プロダクト</a>
                    <a href="/about" className={activePath === '/about' ? 'active' : ''}>会社概要</a>
                    <a href="/#contact" className="nav-cta">
                        お問い合わせ
                    </a>
                </div>
            </nav>
        </header>
    );
}
