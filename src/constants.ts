/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Apartment {
  id: number;
  title: string;
  price: string;
  details: string;
}

export interface ProjectSection {
  id: string;
  name: string;
  description: string;
  boundaries?: {
    north: string;
    east: string;
    west: string;
    south: string;
  };
  nearby?: string[];
  listings: Apartment[];
  vtourUrl: string;
  mapUrl: string;
}

export const ECOHOME_DATA: ProjectSection[] = [
  {
    id: "ecohome-1",
    name: "EcoHome 1",
    description: "Ecohome 1 tọa lạc tại ô đất ký hiệu B4-CT1 và B5-CT2 thuộc quy hoạch chi tiết 1/500 khu vực Bắc Cổ Nhuế - Chèm, phường Đông Ngạc, quận Bắc Từ Liêm, Hà Nội.",
    nearby: [
      "Sân bóng đá Đông Ngạc: 2 phút di chuyển",
      "Trường tiểu học Đông Ngạc A: 2 phút di chuyển",
      "Học viện Tài Chính: 10 phút di chuyển",
      "Bệnh viện đa khoa Phương Đông: 12 phút di chuyển",
      "Công viên Hòa Bình: 15 phút di chuyển",
      "Hồ Tây: 20 phút di chuyển",
      "Bãi đá sông Hồng: 20 phút di chuyển"
    ],
    listings: [
      { id: 1, title: "Tòa E4", details: "56m² 2PN 1VS, full nội thất, tầng trung, BC Tây, sổ hồng sang tên ngay, nhà đang ở - xem sau 20h", price: "3.8x tỷ" },
      { id: 2, title: "Tòa E3B", details: "56m² 2PN 1VS, full nội thất, BC Bắc, sổ hồng sang tên ngay, nợ bank 2 tỷ hỗ trợ rút sổ", price: "3.8x tỷ" },
      { id: 3, title: "Tòa E3A", details: "64.5m² 2PN 2VS, tầng trung, full nội thất, BC Bắc, sổ hồng sang tên ngay", price: "4.5x tỷ" },
      { id: 4, title: "Tòa E3B", details: "56m² 2PN 1VS, tầng trung, full nội thất, BC Nam, sổ hồng", price: "3.7x tỷ (Đã bán)" },
      { id: 5, title: "Tòa E3B", details: "56m² 2PN 1VS, tầng trung, nội thất cơ bản, BC…, sổ hồng sang tên ngay", price: "3.9x tỷ" },
      { id: 10, title: "Tòa E3B", details: "56m² 2PN 1VS, tầng thấp, nội thất gắn tường, BC tây, sổ hồng sang tên", price: "3.59x tỷ" },
      { id: 6, title: "Tòa E3B", details: "56m² 2PN 1VS, view nội khu, full nội thất, BC Bắc, sổ hồng sang tên ngay", price: "3.7x tỷ" },
      { id: 7, title: "Tòa E1B", details: "64.5m² 2PN 2VS, view nội khu, full nội thất, BC Nam, sổ hồng sang tên ngay", price: "4.3x tỷ" },
      { id: 8, title: "Tòa E4", details: "36m² 1PN 1VS, căn thương mại, full nội thất, BC Nam, sổ hồng sang tên ngay", price: "2.8x tỷ" },
      { id: 9, title: "Tòa E3B", details: "70m² 2PN 2VS, căn góc tầng trung, 3 điều hòa 1 nóng lạnh, Đông Nam, sổ hồng sang tên ngay", price: "4.5x tỷ" }
    ],
    vtourUrl: "https://files.dandautu.vn/vtours/363/eco-home-1.html?v=1682146911",
    mapUrl: "https://maps.google.com/maps?q=21.08632469177246, 105.78231811523438&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: "ecohome-2",
    name: "EcoHome 2",
    description: "EcoHome 2 được đầu tư xây dựng trên lô đất có ký hiệu B15-CT3 thuộc quy hoạch chi tiết khu vực Bắc Cổ Nhuế - Chèm, tỷ lệ 1/500, phường Đông Ngạc, quận Bắc Từ Liêm, Hà Nội.",
    boundaries: {
      north: "Giáp khu dự án xây dựng công trình hỗn hợp của thành phố",
      east: "Giáp đường Tân Xuân",
      west: "Giáp ô đất xây dựng trường mầm non theo quy hoạch",
      south: "Giáp dự án xây dựng Bệnh viện chuyên khoa mắt Sài Gòn - Hà Nội."
    },
    listings: [
      { id: 1, title: "Ecohome 2 C1A", details: "36m² 1PN 1VS, full nội thất, view thoáng, sổ hồng 2028 sang tên", price: "2.9x tỷ" },
      { id: 1, title: "Ecohome 2 C1A", details: "36m² 1PN 1VS, full nội thất, view thoáng, sổ hồng sang tên", price: "2.8x tỷ (đã bán)" },
      { id: 2, title: "Ecohome 2 C1", details: "36m² 1PN 1VS, view nội khu, nội thất cơ bản, sổ hồng", price: "2.9x tỷ (thương lượng)" }
    ],
    vtourUrl: "https://files.dandautu.vn/vtours/364/eco-home-2.html?v=1682151258",
    mapUrl: "https://maps.google.com/maps?q=21.083669, 105.784468&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: "ecohome-3",
    name: "EcoHome 3",
    description: "Dự án Ecohome 3 tọa lạc tại ô đất ký hiệu B4-CT1 and B5-CT2 thuộc quy hoạch chi tiết 1/500 khu vực Bắc Cổ Nhuế – Chèm, Đông Ngạc, Từ Liêm, Hà Nội.",
    boundaries: {
      north: "Giáp khu dự án xây dựng công trình hỗn hợp của thành phố",
      east: "Giáp đường Tân Xuân",
      west: "Giáp ô đất xây dựng trường mầm non theo quy hoạch",
      south: "Giáp chung cư Ecohome 2"
    },
    listings: [
      { id: 1, title: "Ecohome 3 N05", details: "63m² 2PN 2VS, full nội thất, tầng cao, ban công hướng Tây nội khu, sổ hồng 5/2026 sang tên", price: "4,2x tỷ" },
      { id: 2, title: "Ecohome 3 N04", details: "69m² 3PN 2VS, tầng trung, ban công hướng Đông, nội thất đầy đủ, sổ hồng sang tên ngay, chủ đang ở thiện chí bán", price: "5.3x tỷ" },
      { id: 3, title: "Ecohome 3 Căn 68.3m²", details: "3PN 2VS, full nội thất, tầng cao, ban công hướng Đông, sổ hồng 6/2026 sang tên", price: "5.6x tỷ" },
      { id: 4, title: "Ecohome 3 N04 Căn thương mại", details: "68.3m² 3PN 2VS, full nội thất, tầng cao, ban công hướng Đông", price: "5.8x tỷ" }
    ],
    vtourUrl: "https://files.dandautu.vn/vtours/365/eco-home-3.html?v=1682154487",
    mapUrl: "https://maps.google.com/maps?q=21.084923, 105.784537&t=&z=15&ie=UTF8&iwloc=&output=embed"
  }
];

export const CONTACT_INFO = {
  name: "MR Văn",
  phone: "0923.200.820",
  zalo: "0923.200.820"
};

export const FAQ_DATA = [
  {
    question: "Vì sao nên mua dự án Ecohome?",
    answer: "Môi trường sống xanh, dân trí cao, vị trí đắc địa tại Bắc Từ Liêm, giá cả hợp lý so với thị trường cùng hệ thống tiện ích đồng bộ từ Ciputra."
  },
  {
    question: "Quy hoạch 1/500 là gì?",
    answer: "Là bản đồ chi tiết cụ thể hóa các hạng mục công trình của dự án, đảm bảo tính pháp lý minh bạch và các tiêu chuẩn về quy hoạch xây dựng của nhà nước."
  },
  {
    question: "Vị trí dự án có thuận tiện không?",
    answer: "Nằm tại trung tâm Bắc Cổ Nhuế - Chèm, kết nối trực tiếp với đường Tân Xuân, Phạm Văn Đồng, thuận tiện di chuyển vào trung tâm và đi sân bay Nội Bài."
  },
  {
    question: "Pháp lý các căn hộ hiện nay thế nào?",
    answer: "Đa số các căn hộ tại Ecohome 1-2-3 đã có sổ hồng sang tên ngay. Một số căn NOXH đang trong lộ trình cấp sổ (dự kiến 2026-2028)."
  },
  {
    question: "Tiện ích nội khu gồm những gì?",
    answer: "Hệ thống bể bơi, sân chơi trẻ em, trường học mầm non & liên cấp nội khu, siêu thị tầng trệt, không gian dạo bộ và khuôn viên cây xanh mát mẻ."
  },
  {
    question: "Có hỗ trợ vay ngân hàng không?",
    answer: "Đối với các căn hộ đã có sổ hồng, ngân hàng hỗ trợ vay lên đến 70% giá trị định giá thực tế, thủ tục nhanh gọn và linh hoạt."
  },
  {
    question: "Phí dịch vụ tại Ecohome là bao nhiêu?",
    answer: "Phí dịch vụ tại đây cực kỳ hợp lý (khoảng 3.000đ - 5.000đ/m2), rất phù hợp cho những gia đình trẻ mong muốn môi trường sống chất lượng với chi phí tối ưu."
  },
  {
    question: "Muốn mua nhà hoặc xem nhà trực tiếp thì liên hệ ai?",
    answer: "Quý khách vui lòng liên hệ trực tiếp MR Văn qua số Hotline/Zalo: 0923.200.820 để được hỗ trợ xem nhà 24/7 và tư vấn quỹ căn giá tốt nhất thị trường."
  }
];
