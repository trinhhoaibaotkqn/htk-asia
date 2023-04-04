import HomeHeader from "../HomeHeader";
import FormContact from "../FormContact";
import HomeFooter from "../HomeFooter";
import pic14 from "../../assets/picture/pic14.jpg";
import pic15 from "../../assets/picture/pic15.png";
import pic16 from "../../assets/picture/pic16.png";
import pic17 from "../../assets/picture/pic17.png";
import pic18 from "../../assets/picture/pic18.png";
import pic19 from "../../assets/picture/pic19.png";
import pic20 from "../../assets/picture/pic20.png";
import pic21 from "../../assets/picture/pic21.png";
import pic22 from "../../assets/picture/pic22.png";
import pic23 from "../../assets/picture/pic23.png";

import "./Detail.scss";
import "../HomeResponsiveLaptop.scss";
import "../HomeResponsiveIpad.scss";
import "../HomeResponsivePhone.scss";

const DetailUAV = () => {
    return (
        <div className="detail-web-3d-container">
            <HomeHeader />
            <div className="title-section">AERIAL PHOTOGRAPHY</div>
            <div className="detail-content-container">
                <div className="text-detail">
                    Một thuật ngữ thường được sử dụng để chỉ việc chụp ảnh từ không gian bằng máy bay không người lái (UAV) hoặc drone.
                </div>
                <div className="text-detail">
                    Sử dụng UAV để chụp ảnh từ trên cao đã trở nên phổ biến trong nhiều lĩnh vực như quảng cáo, bất động sản, kiểm tra tài sản, địa lý, và các dự án xây dựng. Nhờ vào khả năng di chuyển linh hoạt và khả năng chụp ảnh ở các góc độ khác nhau, UAV có thể cung cấp cho người dùng những hình ảnh đẹp và chi tiết.
                </div>
                <img src={pic14} alt="pic2" style={{ maxWidth: '800px' }} />
                <div className="text-detail">
                    Cung cấp dịch vụ cho aerial photography của các đối tượng theo hướng dẫn và diện tích, cũng như xử lý các vật liệu sau đó để đạt được các kết quả sau đây:
                </div>
                <div className="text-detail">
                    <li>Bản đồ đa chiều (orthophotomap)</li>
                    <li>Đám mây điểm chặt chẽ (dense point cloud)</li>
                    <li>Mô hình độ cao kinh tế (DEM)</li>
                    <li>Mô hình địa hình 3D (3D terrain model).</li>
                </div>
                <div className="text-detail">
                    Aerial photography là dịch vụ được yêu cầu nhiều nhất ở Nga và các nước CIS để thực hiện khảo sát và thu thập dữ liệu. Và đây là lý do tại sao:
                    <li>Chi phí thấp</li>
                    <div>
                        Chi phí chụp ảnh không người lái là một vài lần ít hơn so với chi phí thu thập dữ liệu ảnh vệ tinh, cũng như các phương pháp truyền thống của các cuộc khảo sát địa chất.
                    </div>
                    <li>Độ chính xác cao</li>
                    <div>Sai số RMS của các điểm đặc trưng được cung cấp nhỏ hơn 10 cm. </div>
                    <li>Độ phân giải hình ảnh cao</li>
                    <div>Độ phân giải hình ảnh cao</div>
                    <li>Hoạt động trong điều kiện khó khăn</li>
                    <div>Chụp ảnh từ không gian có thể được thực hiện ở độ mây thấp và trong một phạm vi nhiệt độ rộng: từ -20° đến +40°С. Các tính năng khí động học của máy bay không người lái Geoscan cho phép chúng không bị lệch khỏi đường bay ngay cả trong thời tiết gió.</div>
                    <li>Làm việc trong hệ thống tọa độ yêu cầu</li>
                    <div>Kết quả bay được định vị địa lý, có thể được gán cho hệ thống tọa độ yêu cầu trong quá trình xử lý.</div>
                    <li>Hiệu suất cao</li>
                    <div>Đến vài trăm km vuông có thể được khảo sát mỗi ngày.</div>
                </div>
                <div className="text-detail">Ảnh từ thiết bị máy bay không người lái chia làm  các giai đoạn công tác hiện trường và văn phòng, trong khi tập dữ liệu thu được từ kết quả của công tác văn phòng thay đổi tùy thuộc vào yêu cầu của khách hàng.</div>
                <img src={pic15} alt="pic2" style={{ maxWidth: '500px' }} />
                <li>Thủ tục cấp phép cho việc chụp ảnh từ không gian </li>
                <li>Chụp ảnh từ không gian bằng máy bay không người lái của Geoscan</li>
                <li>Tạo bản đồ đa chiều với tỷ lệ yêu cầu </li>
                <li>Tạo mô hình địa hình số </li>
                <li>Tạo mô hình 3D </li>
                <li>Tạo lớp cơ sở hạ tầng dữ liệu không gian </li>
                <img src={pic16} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-title">Ứng dụng của aerial photography Geodesy</div>
                <div className="text-detail">Việc thu thập dữ liệu không gian chất lượng cao là rất quan trọng để tạo ra các sản phẩm như bản đồ và kế hoạch địa lý. Dữ liệu thu thập được sẽ được xử lý để tạo ra các bản đồ đa chiều và các mô hình số chính xác, phù hợp với đăng ký đất đai, tạo bản đồ và kế hoạch ở tỷ lệ 1:500, 1:1000 và 1:2000. Sử dụng các kỹ thuật chụp ảnh từ không gian và đo đạc địa hình, các chuyến bay được thực hiện để thu thập dữ liệu với độ chính xác cao và độ phân giải tốt. Sau đó, dữ liệu được xử lý bằng các phần mềm phục vụ cho việc tạo ra các bản đồ đa chiều và mô hình số. Các sản phẩm này sẽ được sử dụng để đăng ký đất đai, tạo bản đồ và kế hoạch, đóng góp vào quá trình phát triển đô thị và quản lý tài nguyên đất đai của một khu vực.</div>
                <img src={pic17} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-title">Energy</div>
                <div className="text-detail">Việc theo dõi định kỳ các cơ sở hạ tầng năng lượng cho phép thu được các hình ảnh chi tiết về cột điện, nghiên cứu các khuyết tật trên bộ cách điện và hư hỏng trên cột, xây dựng lại vị trí dây và tình trạng của khu vực được bảo vệ bằng cách sử dụng mô hình 3D. </div>
                <img src={pic18} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-title">Urban planning	</div>
                <div className="text-detail">Tạo mô hình chi tiết của các thành phố và các đối tượng di sản văn hóa riêng lẻ, xác định vi phạm trong đăng ký đất đai và ranh giới thực tế của việc sử dụng đất, thiết kế công trình xây dựng và lập kế hoạch cải tạo trong một môi trường ba chiều.</div>
                <img src={pic19} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-title">Construction</div>
                <div className="text-detail">Theo dõi quá trình xây dựng và theo dõi các thay đổi hoạt động. Tạo mô hình 3D của các tòa nhà đã xây dựng. Cung cấp dữ liệu chính xác về các đặc điểm hình học của các khu vực xây dựng, các công trình xây dựng và cơ sở hạ tầng liên quan.</div>
                <img src={pic20} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-title">Agriculture</div>
                <div className="text-detail">Kiểm kê đất nông nghiệp, tạo ra các bản đồ điện tử của các cánh đồng và đăng ký đất đai. Theo dõi trang thiết bị, tình trạng cây trồng và đất trống, tính toán chỉ số NDVI và các chỉ số khác. Theo dõi các hoạt động kỹ thuật nông nghiệp</div>
                <img src={pic23} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-title">Mine Surveying</div>
                <div className="text-detail">Cung cấp dữ liệu hình học chính xác và cập nhật về bề mặt mỏ đá, khu vực khai thác, mỏ. Kiểm soát độ hoàn thành của việc đào đất, xác định khối lượng sản xuất, tính toán các hoạt động bốc xếp, xác định tổn thất, theo dõi sự ổn định của các bên và đống.</div>
                <img src={pic21} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-title">Thermal Imaging</div>
                <div className="text-detail">Theo dõi hệ thống đường ống nhiệt và mạng truyền thông. Đánh giá hiệu quả của hệ thống đường ống nhiệt, phát hiện vi phạm của lớp cách nhiệt, dấu hiệu của sự ăn mòn, rò rỉ nhiệt, kết quả là giảm chi phí cho công tác giám sát và sửa chữa</div>
                <img src={pic22} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-title">HTK ASIA dịch vụ khảo sát trên không và lập bản đồ </div>
            </div>
            <FormContact />
            <HomeFooter />
        </div>
    )
}
export default DetailUAV;