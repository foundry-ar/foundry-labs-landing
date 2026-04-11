import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          backgroundColor: '#FAFBFC',
          color: '#111',
        }}
      >
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: 600, margin: '0 0 0.5rem' }}>404</h1>
          <p style={{ fontSize: '1.125rem', color: '#666', margin: '0 0 2rem' }}>
            Esta página no existe.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link
              href="/"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#111',
                color: '#fff',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              Ir al inicio
            </Link>
            <Link
              href="/en"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'transparent',
                color: '#111',
                border: '1px solid #ddd',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              Go to homepage
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
