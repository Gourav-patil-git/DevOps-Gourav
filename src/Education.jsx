import "./Education.css";

export default function Education() {
  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>

      <div className="education-container">
        {/* Graduation */}
        <div className="education-card">
          <div className="education-icon">🎓</div>
          <h3>Bachelor of Technology (B.Tech)</h3>
          <p className="institution">ABC University</p>
          <p className="year">2015 - 2019</p>
          <p className="details">
            Specialized in Computer Science. Learned programming, algorithms, and
            software development fundamentals.
          </p>
        </div>

        {/* Postgraduation */}
        <div className="education-card">
          <div className="education-icon">🎓</div>
          <h3>Master of Science (M.Sc)</h3>
          <p className="institution">XYZ University</p>
          <p className="year">2019 - 2021</p>
          <p className="details">
            Focused on Data Science and Machine Learning. Completed projects on
            AI and big data analytics.
          </p>
        </div>
      </div>
    </section>
  );
}
