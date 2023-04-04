import HomeHeader from "../HomeHeader";
import FormContact from "../FormContact";
import HomeFooter from "../HomeFooter";
import pic1 from "../../assets/picture/pic1.jpg";
import "./Detail.scss";
import "../HomeResponsiveLaptop.scss";
import "../HomeResponsiveIpad.scss";
import "../HomeResponsivePhone.scss";

const DetailTech3D = () => {
    return (
        <div className="detail-web-3d-container">
            <HomeHeader />
            <div className="title-section">Mô hình 3D của các Địa hình, khu vực</div>
            <div className="detail-content-container">
                <div className="text-detail">
                    Mô hình 3D là một công cụ cần thiết cho quy hoạch đô thị hiệu quả, giúp quản lý thành phố một cách chuyên nghiệp và hiệu quả.
                    Các mô hình 3D có thể được sử dụng như là cơ sở cho một bản sao kỹ thuật số của khu vực đông dân cư, mô tả rõ ràng sự tương tác giữa các quy trình và phần của môi trường đô thị. Nó cho phép phân tích cơ sở hạ tầng một cách toàn diện và điều hành nó dựa trên các quy định hiện có và lợi ích của cư dân.
                </div>
                <img src={pic1} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-detail">
                    Các mô hình 3D địa chính xác có hình ảnh chân thực của môi trường đô thị và tự nhiên được tạo ra trên cơ sở của ảnh chụp từ không trung với một UAV được trang bị một máy ảnh full frame chuyên nghiệp. Sau khi xử lý dữ liệu trong phần mềm Agisoft Metashape Pro, các bức ảnh chụp từ trên cao chính xác, DEM và mô hình 3D được tạo thành.
                </div>
                <div className="text-title">
                    CÁC LĨNH VỰC ỨNG DỤNG XÂY DỰNG VÀ THIẾT KẾ
                </div>
                <li>Mô hình thông tin xây dựng;</li>
                <li>Giám sát công trình xây dựng;</li>
                <li>Phát triển các dự án quy hoạch đô thị và cải thiện 3D (thiết kế hệ thống an ninh).</li>
                <div className="text-title">
                    PHÁT TRIỂN ĐÔ THỊ VÀ QUY HOẠCH ĐẤT ĐAI
                </div>
                <li>Mô hình thông tin đô thị;</li>
                <li>Mô hình hóa các giải pháp chiếu sáng cho thành phố về đêm; </li>
                <li>Kiểm kê đất đai và các công trình xây dựng vốn; </li>
                <li>Tạo ra cadastre 3D; </li>
                <li>Làm cơ sở cho việc tạo ra bản sao kỹ thuật số.</li>
                <div className="text-title">
                    DU LỊCH VÀ VĂN HÓA
                </div>
                <li>Trực quan hóa các đối tượng di sản văn hóa; </li>
                <li>Phát triển các tuyến du lịch ảo.</li>
                <div className="text-title">
                    BẢO VỆ DÂN SỰ VÀ TÌNH HUỐNG KHẨN CẤP
                </div>
                <li>Mô hình hoá các tình huống khẩn cấp;</li>
                <li>Phát triển môi trường đô thị ảo trong quá trình giảng dạy cho nhân viên Bộ Tư pháp và các cơ quan lực lượng khác.</li>
                <div className="text-title">
                    Công nghệ
                </div>
                <div className="text-detail">
                    Khảo sát không gian từ trên cao có thể được thực hiện với một máy ảnh hoặc máy quét laser, cũng như với sự sử dụng cả hai thiết bị, điều này cung cấp chi tiết và tính thực tế cao của một mô hình 3D.
                </div>
            </div>
            <FormContact />
            <HomeFooter />
        </div>
    )
}

export default DetailTech3D;