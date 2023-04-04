import HomeHeader from "../HomeHeader";
import FormContact from "../FormContact";
import HomeFooter from "../HomeFooter";
import pic10 from "../../assets/picture/pic10.png";
import pic11 from "../../assets/picture/pic11.png";
import pic12 from "../../assets/picture/pic12.png";
import pic13 from "../../assets/picture/pic13.png";

import "./Detail.scss";
import "../HomeResponsiveLaptop.scss";
import "../HomeResponsiveIpad.scss";
import "../HomeResponsivePhone.scss";

const DetailLazer = () => {
    return (
        <div className="detail-web-3d-container">
            <HomeHeader />
            <div className="title-section">Khảo sát hình ảnh nhiệt độ</div>
            <div className="detail-content-container">
                <div className="text-detail">
                    Có thể được thực hiện bằng cách sử dụng UAV (máy bay không người lái) để thu thập dữ liệu và tạo ra các mô hình 3D chính xác với độ phân giải không gian từ 5-10 cm. Sau đó, dữ liệu hình ảnh nhiệt được chồng lên trên các mô hình này, cho phép phân tích chi tiết về sự mất nhiệt và xác định vị trí các khu vực có vấn đề.
                </div>
                <div className="text-detail">
                    Thermography cho phép thực hiện giám sát bằng việc sử dụng UAV ngay cả trong các điều kiện khó khăn về tầm nhìn hoặc trong bóng tối. Khách hàng có thể đặt dịch vụ hình ảnh nhiệt để phát hiện sự mất nhiệt, tìm các khuyết điểm của thiết bị, định vị rò rỉ hoặc các điểm xả nước thải.
                    Để đạt được kết quả thông tin và ổn định nhất, chúng tôi đã phát triển công nghệ ghép ảnh nhiệt chính xác với ảnh hình ảnh thị giác.
                </div>
                <div className="text-detail">
                    Các cuộc khảo sát sử dụng công nghệ mới được thực hiện bằng sự trợ giúp của Geoscan 201 UAV. Máy bay được trang bị máy quét nhiệt trong dải 8-14 mcm (dải tia hồng ngoại dài) và một máy ảnh để chụp ảnh từ không trung đồng thời trong phạm vi nhìn thấy được. Hình ảnh hồng ngoại kết quả được chuyển đổi sang ảnh giả màu, trong đó nhiệt độ thấp tương ứng với màu tối và nhiệt độ cao tương ứng với màu sáng.
                </div>
                <img src={pic10} alt="pic2" style={{ maxWidth: '800px' }} />
                <div className="text-detail">
                    Hình ảnh nhiệt độ có thể được sử dụng thành công để giám sát các mạng lưới sưởi ấm, dưới hoặc dưới mặt đất. Điều này sẽ giúp tăng hiệu quả của mạng lưới sưởi ấm, giảm thiểu sự mất nhiệt và số lượng tai nạn.
                </div>
                <img src={pic11} alt="pic2" style={{ maxWidth: '800px' }} />
                <div className="text-detail">
                    Đánh giá hiệu suất nhiệt của các công trình xây dựng và tìm kiếm các vị trí rò rỉ nhiệt, giúp giảm chi phí sưởi ấm cho các công trình này.
                </div>
                <img src={pic12} alt="pic2" style={{ maxWidth: '800px' }} />
                <div className="text-detail">
                    Tìm kiếm các đối tượng có nhiệt độ cao: các nguồn lửa hoặc nguồn nhiệt tiềm tàng, thiết bị quá nóng - những thứ này không thể nhìn thấy trên ảnh thông thường.
                </div>
                <img src={pic13} alt="pic2" style={{ maxWidth: '800px' }} />
                <div className="text-title">
                    HTK ASIA dịch vụ khảo sát trên không bằng hình ảnh nhiệt độ
                </div>
            </div>
            <FormContact />
            <HomeFooter />
        </div>
    )
}

export default DetailLazer;