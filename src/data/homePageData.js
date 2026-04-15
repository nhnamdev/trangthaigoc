import heroImage from "../../image/image.png";
import blindSpotImage from "../../data/z7723526823422_b15a6750ff1c5ce70bcc788b1adfde01.jpg";
import architectureImage from "../../data/z7723541151043_ede2dfccdb0f4ee7d1d1c22b910753ed.jpg";
import standardImage from "../../data/z7723542211056_d472097c8c692161b221ef5a4a78c5dd.jpg";
import overviewDocx from "../../data/thongtin.docx";
import blindSpotDocx from "../../data/BlindSpot AI TTG-V1.docx";
import industryDocx from "../../data/diemmutrongnganhaitoancau.docx";
import projectPdf from "../../data/Dự ÁN AI TRẠNG THÁI GỐC.pdf";
import rootPdf from "../../data/TRANG THAI GOC_file in.pdf";
import phonePdf from "../../data/0110882072-C26TST8.pdf";

export const navLinks = [
  { href: "#newsletter", label: "Tổng quan" },
  { href: "#sponsor", label: "Tài liệu" },
  { href: "#podcast", label: "Điểm mù AI" },
  { href: "#investor-legal", label: "NHÀ ĐẦU TƯ VÀ PHÁP LÝ" },
];

export const pressLogos = [
  "BlindSpot AI TTG",
  "Chuẩn TTG",
  "QSI Engine",
  "Signal Extraction",
  "Scoring Engine",
];

export const heroContent = {
  title: "BlindSpot AI TRẠNG THÁI GỐC: nền tảng soi ra điểm mù nhận thức",
  description:
    "Được xây dựng từ hệ quy chiếu Trạng Thái Gốc, nền tảng này không tối ưu để chiều theo số đông mà để chỉ ra sự lệch giữa mục tiêu, hành vi và né tránh.",
  image: heroImage,
  imageAlt: "Tài liệu và hình ảnh dự án BlindSpot AI TTG",
  formPlaceholder: "Email để nhận bộ tài liệu",
  formButton: "Nhận tài liệu dự án",
  bonus:
    "Nguồn nội dung được tổng hợp trực tiếp từ thư mục data: hồ sơ dự án, giới thiệu nền tảng, bài viết chuyên đề và bộ tài liệu PDF/DOCX.",
};

export const primaryResource = {
  title: "Tải hồ sơ dự án PDF",
  href: projectPdf,
};

export const blindSpotCard = {
  image: blindSpotImage,
  imageAlt: "Hình ảnh tài liệu về BlindSpot AI TTG",
  quote:
    "Ngành AI không thiếu dữ liệu hay sức mạnh tính toán, mà thiếu một hệ quy chiếu trung lập.",
  description:
    "Từ tài liệu 'Điểm mù trong ngành AI toàn cầu', website này tập trung vào 5 khoảng mù hệ thống mà phần lớn nền tảng AI hiện tại chưa giải quyết.",
  primaryAction: {
    label: "Đọc bài phân tích",
    href: industryDocx,
  },
};

export const podcastPlatforms = [
  "Thiên lệch dữ liệu",
  "Vòng phản hồi ngầm",
  "Hộp đen quyết định",
  "Thiếu chuẩn gốc",
  "Mục tiêu thương mại",
];

export const podcastEpisodes = [
  "AI học từ quá khứ sai lầm của con người và có thể tái sản xuất sai lệch ở quy mô lớn.",
  "Nội dung do AI tạo ra đang quay lại định hình dữ liệu cho thế hệ AI tiếp theo.",
  "Nhiều hệ thống AI mạnh vẫn khó giải thích vì sao đưa ra một kết luận cụ thể.",
  "Mỗi tổ chức tối ưu AI theo hệ giá trị riêng, nhưng chưa có một chuẩn tham chiếu trung lập.",
  "AI thương mại thường được tối ưu để giữ người dùng ở lại, không phải để họ độc lập hơn.",
];

export const bookFeatures = [
  {
    title: "Kiến trúc lõi: QSI → Signal Extraction → Scoring",
    description:
      "BlindSpot AI TTG được mô tả như một hệ phát hiện insight với ba lớp khóa cứng: bộ 20 câu hỏi chuẩn, 5 tín hiệu số hóa và engine đo độ lệch trên TIME, FINANCE, REFLEX.",
    alt: "Sơ đồ kiến trúc hệ thống BlindSpot AI TTG",
    image: architectureImage,
    primaryAction: {
      label: "Mở tài liệu kiến trúc",
      href: blindSpotDocx,
    },
    secondaryAction: {
      label: "Xem PDF dự án",
      href: projectPdf,
    },
  },
  {
    title: "Trạng Thái Gốc: chuẩn neo trung lập cho hệ AI",
    description:
      "Theo tài liệu giới thiệu, TTG không phải câu trả lời mà là hệ quy chiếu giúp đánh giá quyết định mà không bị kéo lệch bởi văn hoá, dữ liệu đông số hay mục tiêu thương mại.",
    alt: "Hình ảnh liên quan đến chuẩn Trạng Thái Gốc",
    image: standardImage,
    primaryAction: {
      label: "Đọc giới thiệu nền tảng",
      href: overviewDocx,
    },
    secondaryAction: {
      label: "Xem tài liệu gốc",
      href: rootPdf,
    },
  },
];

export const memberBenefits = [
  "Phát hiện sai lệch trong tư duy kinh doanh và quyết định chiến lược.",
  "Soi rõ điểm mù trong nhận thức cá nhân trước khi hành vi tiếp tục lặp lại.",
  "Hỗ trợ lãnh đạo nhìn ra mâu thuẫn giữa mục tiêu và cách tổ chức đang vận hành.",
  "Tạo câu hỏi ngược để ép hệ lộ tránh né thay vì chỉ đưa câu trả lời dễ nghe.",
  "Chuẩn hóa dữ liệu nhận thức thành tín hiệu có thể đo và so sánh.",
  "Đóng vai trò backend kiểm chứng cho quá trình thanh tâm của con người.",
  "Neo hệ thống về một chuẩn tham chiếu không lệ thuộc ngành hay quốc gia.",
  "Mở đường cho việc xây app, system, platform và tiến tới standard.",
];

export const investorLegalContent = {
  eyebrow: "Nhà đầu tư và pháp lý",
  title: "Tổng hợp các tệp cốt lõi phục vụ thuyết trình, thẩm định và đối chiếu hồ sơ pháp lý.",
  description:
    "Section này gom những tài liệu đang xuất hiện trong project để nhà đầu tư hoặc bộ phận pháp lý có thể đi thẳng vào hồ sơ cần xem.",
  cards: [
    {
      kicker: "Investor deck",
      title: "Hồ sơ dự án BlindSpot AI TTG",
      description:
        "Bản PDF tổng quan phục vụ cho việc trình bày mô hình, định vị sản phẩm và tầm nhìn phát triển.",
      href: projectPdf,
      cta: "Mở file PDF",
    },
    {
      kicker: "Pháp lý",
      title: "Tài liệu PDF bổ sung",
      description:
        "Tệp PDF hiện có trong data, phù hợp để đối chiếu thông tin phụ trợ cho hồ sơ và thẩm tra nội dung.",
      href: phonePdf,
      cta: "Xem tệp phụ lục",
    },
    {
      kicker: "Reference",
      title: "Tệp gốc Trạng Thái Gốc",
      description:
        "Bản PDF gốc dựa trên hệ quy chiếu TTG, dùng để kiểm tra ngữ cảnh và cấu trúc từ nguyên bản.",
      href: rootPdf,
      cta: "Mở tài liệu gốc",
    },
  ],
};

export const footerMenus = [
  {
    title: "Tài liệu",
    links: [
      { label: "Giới thiệu nền tảng", href: overviewDocx },
      { label: "BlindSpot AI TTG V1", href: blindSpotDocx },
      { label: "Điểm mù ngành AI", href: industryDocx },
    ],
  },
  {
    title: "PDF dự án",
    links: [
      { label: "Dự án AI Trạng Thái Gốc", href: projectPdf },
      { label: "Trạng Thái Gốc file in", href: rootPdf },
      { label: "Tài liệu PDF bổ sung", href: phonePdf },
    ],
  },
  {
    title: "Nội dung chính",
    links: [
      { label: "Tổng quan nền tảng", href: "#newsletter" },
      { label: "5 điểm mù AI", href: "#podcast" },
      { label: "Nhà đầu tư và pháp lý", href: "#investor-legal" },
    ],
  },
  {
    title: "Ứng dụng",
    links: [
      { label: "Kinh doanh", href: "#membership" },
      { label: "Lãnh đạo", href: "#membership" },
      { label: "Phát triển cá nhân", href: "#membership" },
    ],
  },
  {
    title: "Điểm neo",
    links: [
      { label: "TXID_ROOT", href: "#top" },
      { label: "Chuẩn TTG", href: "#articles" },
      { label: "Nhà đầu tư", href: "#investor-legal" },
      { label: "AI Chat hỗ trợ", href: "#top" },
    ],
  },
];
