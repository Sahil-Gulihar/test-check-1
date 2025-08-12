import "./App.css";

function App() {
  return (
    <div
      className="article-container"
      style={{
        maxWidth: 700,
        margin: "2rem auto",
        padding: "2rem",
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 16px #0001",
      }}
    >
      <header style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: 0 }}>
          The Beauty of Everyday Moments
        </h1>
        <p style={{ color: "#888", marginTop: 8 }}>
          By Jane Doe &middot; August 12, 2025
        </p>
      </header>
      <article style={{color: "#000"}}>
        <section style={{ marginBottom: "1.5rem" }}>
          <h2>Introduction</h2>
          <p>
            In our fast-paced world, it's easy to overlook the simple joys that
            surround us each day. From the warmth of morning sunlight to the
            laughter shared with friends, everyday moments hold a beauty that
            often goes unnoticed.
          </p>
        </section>
        <section style={{ marginBottom: "1.5rem" }}>
          <h2>Finding Joy in Simplicity</h2>
          <p>
            The aroma of freshly brewed coffee, the sound of rain tapping on the
            window, or the comfort of a favorite book—these are the experiences
            that enrich our lives. By slowing down and paying attention, we can
            rediscover the magic in the mundane.
          </p>
          <blockquote
            style={{
              borderLeft: "4px solid #4e8cff",
              paddingLeft: 16,
              color: "#555",
              fontStyle: "italic",
              margin: "1rem 0",
            }}
          >
            "Enjoy the little things, for one day you may look back and realize
            they were the big things."
            <br />
            <span style={{ fontSize: "0.9em", color: "#888" }}>
              — Robert Brault
            </span>
          </blockquote>
        </section>
        <section style={{ marginBottom: "1.5rem" }}>
          <h2>Connecting with Others</h2>
          <p>
            Meaningful connections are often built on small gestures—a smile, a
            kind word, or a shared meal. These moments of connection remind us
            that we are not alone and that joy is multiplied when shared.
          </p>
        </section>
        <section style={{ marginBottom: "1.5rem" }}>
          <h2>Embracing the Present</h2>
          <p>
            Mindfulness teaches us to be present, to savor each moment as it
            comes. Whether it's a walk in the park or a quiet evening at home,
            embracing the present allows us to experience life more fully.
          </p>
        </section>
        <section>
          <h2>Conclusion</h2>
          <p>
            The beauty of everyday moments is always within reach. By
            appreciating the simple things, we cultivate gratitude and find
            happiness in the here and now. Take a moment today to notice
            something beautiful—you might be surprised by what you find.
          </p>
        </section>
      </article>
    </div>
  );
}

export default App;
