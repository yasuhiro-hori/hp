import { useRef, useState, useEffect } from 'react';

export default function Navbar() {
    const menuRef = useRef<HTMLDivElement>(null);
    const [activePath, setActivePath] = useState('');

    useEffect(() => {
        const handlePathChange = () => {
            const path = window.location.pathname;
            const hash = window.location.hash;

            if (path.startsWith('/services')) {
                setActivePath('/services');
            } else if (path.startsWith('/about')) {
                setActivePath('/about');
            } else if (path.startsWith('/recruit')) {
                setActivePath('/recruit');
            } else if (hash) {
                setActivePath(hash);
            } else if (path === '/') {
                setActivePath('/');
            }
        };

        handlePathChange();
        window.addEventListener('hashchange', handlePathChange);
        window.addEventListener('popstate', handlePathChange);

        // Scroll detection for home page sections
        let observer: IntersectionObserver | null = null;
        if (window.location.pathname === '/') {
            const sections = ['top', 'services'];
            const observerOptions = {
                root: null,
                rootMargin: '-40% 0px -40% 0px',
                threshold: 0,
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
        <header className="bp-nav">
            <nav className="bp-nav-inner">
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <a
                        href="/"
                        style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                    >
                        <div
                            style={{
                                width: 32,
                                height: 32,
                                background: 'var(--bp-ink)',
                                color: 'var(--bp-paper)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                fontSize: 18,
                                fontFamily: 'var(--font-mono)',
                            }}
                        >
                            T
                        </div>
                    </a>
                    <a
                        href="/"
                        style={{ textDecoration: 'none', color: 'var(--bp-ink)' }}
                    >
                        <div
                            style={{
                                fontWeight: 700,
                                fontSize: 14,
                                letterSpacing: '0.06em',
                                fontFamily: 'var(--font-mono)',
                            }}
                        >
                            TECSIZ
                        </div>
                        <div
                            style={{
                                fontSize: 10,
                                color: 'var(--bp-muted)',
                                letterSpacing: '0.15em',
                                marginTop: 2,
                                fontFamily: 'var(--font-mono)',
                            }}
                        >
                            SOFTWARE.DEVELOPMENT.STUDIO
                        </div>
                    </a>
                </div>

                <button className="menu-toggle" onClick={toggleMenu} aria-label="メニュー">
                    ☰
                </button>

                <div
                    ref={menuRef}
                    className="nav-links"
                    id="nav-menu"
                    onClick={() => menuRef.current?.classList.remove('open')}
                >
                    <a
                        href="/services"
                        className={activePath.startsWith('/services') ? 'active' : ''}
                    >
                        services
                    </a>
                    <a
                        href="/recruit"
                        className={activePath.startsWith('/recruit') ? 'active' : ''}
                    >
                        recruit
                    </a>
                    <a
                        href="/about"
                        className={activePath === '/about' ? 'active' : ''}
                    >
                        about
                    </a>
                    <a href="/#contact" className="nav-cta">
                        → contact
                    </a>
                </div>
            </nav>
        </header>
    );
}
