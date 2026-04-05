export default function Page() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "60px", maxWidth: "900px", margin: "0 auto" }}>
      
      <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
        Turn Missed Calls Into Booked Jobs Automatically
      </h1>

      <p style={{ fontSize: "20px", marginBottom: "10px" }}>
        They call once.
      </p>
      <p style={{ fontSize: "20px", marginBottom: "10px" }}>
        You’re busy.
      </p>
      <p style={{ fontSize: "20px", marginBottom: "20px" }}>
        They call the next company.
      </p>

      <p style={{ fontWeight: "bold", fontSize: "22px", marginBottom: "40px" }}>
        We fix that.
      </p>

      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
        You’re Losing Real Money Every Time You Miss a Call
      </h2>

      <ul style={{ fontSize: "18px", lineHeight: "1.8", marginBottom: "40px" }}>
        <li>$500 job</li>
        <li>$1,500 job</li>
        <li>$5,000+ job</li>
      </ul>

      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Pricing
      </h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", flex: "1" }}>
          <h3>Starter</h3>
          <p>$197/month</p>
          <p>Basic missed call response</p>
        </div>

        <div style={{ border: "2px solid black", padding: "20px", borderRadius: "10px", flex: "1" }}>
          <h3>Core (Most Popular)</h3>
          <p>$497/month</p>
          <p>Turn missed calls into booked jobs</p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", flex: "1" }}>
          <h3>Pro</h3>
          <p>$1,497/month</p>
          <p>Full automation + AI answering</p>
        </div>

      </div>

    </main>
  );
}
