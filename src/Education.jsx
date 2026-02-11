import "./Education.css";

export default function Education() {
  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>

      <div className="education-container">
        {/* Graduation */}
        <div className="education-card">
          <div className="education-icon">🎓</div>
          <h3>B.Sc Computer Science</h3>
          <p className="institution">Shivaji University Kolhapur</p>
          <p className="year">2020 - 2023</p>
          <p className="details">
            Specialized in Computer Science. Learned programming, algorithms, and
            software development fundamentals.
          </p>
        </div>

        {/* Postgraduation */}
        <div className="education-card">
          <div className="education-icon">🎓</div>
          <h3>Master of Computer Application</h3>
          <p className="institution">Savitribai Phule Pune University</p>
          <p className="year">2023 - 2025</p>
          <p className="details">
            Focused on Cloud Computing and DevOps. Completed projects on
            Cloud Computing and DevOps.
          </p>
        </div>
      </div>
    </section>
  );
}
