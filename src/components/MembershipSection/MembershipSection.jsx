import "./MembershipSection.css";

function MembershipSection({ memberBenefits }) {
  return (
    <section className="section premium" id="membership">
      <div className="container premium-hero">
        <div>
          <p className="eyebrow">Ứng dụng thực tiễn</p>
          <h2>
            BlindSpot AI TTG được mô tả như công cụ phát hiện lệch nhận thức, không
            phải một AI chỉ trả lời theo quán tính.
          </h2>
        </div>
        <a className="btn btn-light" href="#membership">
          Kết nối tư vấn
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
