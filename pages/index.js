export default function Home() {
  return (
    <div style={{
      fontFamily: 'sans-serif',
      textAlign: 'center',
      padding: '50px',
      background: '#f4f6f8',
      minHeight: '100vh'
    }}>
      
      {/* Logo */}
      <img 
        src="/upi-logo.png" 
        alt="UPI Logo" 
        style={{ width: '120px', marginBottom: '20px' }}
      />

      {/* Title */}
      <h1 style={{ fontSize: '2.5rem', color: '#333' }}>🚀 NeoPay</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        Fast • Secure • Simple UPI Payments
      </p>

      {/* Payment Button */}
      <button 
        style={{
          background: '#25D366',
          color: 'white',
          padding: '15px 40px',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          fontSize: '1.2rem',
          marginTop: '30px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}
        onClick={() => alert('🔔 Payment Gateway Coming Soon!')}
      >
        💳 Pay Now
      </button>
    </div>
  )
          }
