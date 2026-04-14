import "./MembershipSection.css";

function MembershipSection({ memberBenefits }) {
  return (
    <section className="section premium" id="membership">
      <div className="container premium-hero">
        <div>
          <p className="eyebrow">Thành viên FS</p>
          <h2>
            Suy nghĩ tốt hơn. Tiến xa hơn trong cuộc sống và sự nghiệp. Tìm đúng
            trọng tâm của bạn.
          </h2>
        </div>
        <a className="btn btn-light" href="#membership">
          Trở thành thành viên
        </a>
      </div>

      <div className="container premium-grid">
        {memberBenefits.map((benefit, index) => (
          <article key={benefit}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{benefit}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MembershipSection;
