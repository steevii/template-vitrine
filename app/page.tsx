const color = process.env.NEXT_PUBLIC_SITE_COLOR ?? "#3B82F6";

const services = [
  {
    title: process.env.NEXT_PUBLIC_SERVICE_1_TITLE ?? "Service 1",
    desc: process.env.NEXT_PUBLIC_SERVICE_1_DESC ?? "",
  },
  {
    title: process.env.NEXT_PUBLIC_SERVICE_2_TITLE ?? "Service 2",
    desc: process.env.NEXT_PUBLIC_SERVICE_2_DESC ?? "",
  },
  {
    title: process.env.NEXT_PUBLIC_SERVICE_3_TITLE ?? "Service 3",
    desc: process.env.NEXT_PUBLIC_SERVICE_3_DESC ?? "",
  },
];

export default function Home() {
  return (
    <main style={{ color: "#1a1a1a" }}>
      {/* Header */}
      <header
        style={{
          background: color,
          color: "white",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong style={{ fontSize: "1.25rem" }}>{process.env.NEXT_PUBLIC_SITE_NAME}</strong>
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
          style={{
            color: "white",
            textDecoration: "none",
            border: "2px solid white",
            padding: "0.4rem 1rem",
            borderRadius: "0.5rem",
            fontWeight: 600,
          }}
        >
          Contact
        </a>
      </header>

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "5rem 2rem",
          background: "#f9fafb",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
          {process.env.NEXT_PUBLIC_SITE_TAGLINE}
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            color: "#6b7280",
            maxWidth: "600px",
            margin: "0 auto 2rem",
            lineHeight: 1.6,
          }}
        >
          {process.env.NEXT_PUBLIC_SITE_DESCRIPTION}
        </p>
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
          style={{
            background: color,
            color: "white",
            padding: "0.875rem 2.5rem",
            borderRadius: "0.5rem",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "1rem",
            display: "inline-block",
          }}
        >
          Nous contacter →
        </a>
      </section>

      {/* Services */}
      <section style={{ padding: "4rem 2rem", maxWidth: "960px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.75rem",
            fontWeight: 700,
            marginBottom: "3rem",
          }}
        >
          Nos services
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "1.75rem",
                border: "1px solid #e5e7eb",
                borderRadius: "0.75rem",
                background: "white",
              }}
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  background: color,
                  borderRadius: "0.5rem",
                  marginBottom: "1rem",
                  opacity: 0.9,
                }}
              />
              <h3 style={{ fontWeight: 600, marginBottom: "0.5rem", fontSize: "1.05rem" }}>{s.title}</h3>
              <p style={{ color: "#6b7280", fontSize: "0.9rem", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
          background: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Prêt à démarrer ?</h2>
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
          style={{ color: color, fontSize: "1.125rem", fontWeight: 600, textDecoration: "none" }}
        >
          {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
        </a>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "1.5rem",
          background: "#111827",
          color: "#9ca3af",
          fontSize: "0.875rem",
        }}
      >
        © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_NAME}
      </footer>
    </main>
  );
}
