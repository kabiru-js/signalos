export default function LandingPage() {
    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#000',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            pointerEvents: 'auto'
        }}>
            <div style={{ textAlign: 'center', maxWidth: '600px', padding: '20px' }}>
                <h1 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '20px' }}>SignalOS</h1>
                <p style={{ fontSize: '1.2rem', color: '#888', marginBottom: '40px' }}>
                    If you can see this, the page is rendering. Please click the button below to test login access.
                </p>

                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <a
                        href="/login"
                        style={{
                            display: 'inline-block',
                            padding: '16px 32px',
                            backgroundColor: '#fff',
                            color: '#000',
                            borderRadius: '12px',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            position: 'relative',
                            zIndex: 10000
                        }}
                    >
                        SIGN IN NOW →
                    </a>
                </div>

                <p style={{ marginTop: '40px', fontSize: '0.8rem', color: '#444' }}>
                    Debug Version 1.1 — Minimal Layout
                </p>
            </div>
        </div>
    );
}
