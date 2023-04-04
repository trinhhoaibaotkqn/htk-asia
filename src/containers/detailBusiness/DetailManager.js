import HomeHeader from "../HomeHeader";
import FormContact from "../FormContact";
import HomeFooter from "../HomeFooter";
import pic6 from "../../assets/picture/pic6.png";
import pic7 from "../../assets/picture/pic7.png";
import pic8 from "../../assets/picture/pic8.png";
import pic9 from "../../assets/picture/pic9.png";
import "./Detail.scss";
import "../HomeResponsiveLaptop.scss";
import "../HomeResponsiveIpad.scss";
import "../HomeResponsivePhone.scss";

const DetailManager = () => {
    return (
        <div className="detail-web-3d-container">
            <HomeHeader />
            <div className="title-section">Thiết kế phần mềm quản lý doanh nghiệp toàn diện</div>
            <div className="detail-content-container">
                <div className="text-detail">
                    Công nghiệp 4.0 không chỉ là đầu tư vào công nghệ và công cụ mới để cải thiện hiệu quả sản xuất—mà còn là cách mạng hóa cách toàn bộ doanh nghiệp của bạn vận hành và phát triển. Bắt kịp thời đại công nghệ 4.0, HTK ASIA cho ra phần mềm ERP giúp các chủ doanh nghiệp Việt Nam tại nước ngoài quản lý nhà hàng, quán ăn, kho,… tối ưu hóa chi phí lợi nhuận, tiết kiệm thời gian
                </div>
                <img src={pic6} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-detail">
                    Hệ thống ERP bao gồm các ứng dụng và công cụ giúp tất cả các lĩnh vực trong doanh nghiệp của bạn giao tiếp với nhau theo cách hiệu quả hơn. Hệ thống ERP tích hợp tất cả các lĩnh vực của một doanh nghiệp vào một hệ thống thông tin toàn diện. Ví dụ: Nhân viên phụ trách lập kế hoạch và lập lịch trình có quyền truy cập vào cùng một dữ liệu với nhân viên phụ trách quản lý tài chính cho nhu cầu cụ thể của họ. Tất cả dữ liệu có sẵn trong thời gian thực, cho phép người lao động đưa ra các quyết định kinh doanh nhanh hơn, đúng đắn hơn. Với các hệ thống ERP, tất cả các chức năng kinh doanh quan trọng—ước tính, sản xuất, tài chính, nhân sự, tiếp thị, bán hàng, mua hàng—có chung một nguồn thông tin cập nhật mới nhất. Các hệ thống hoạch định nguồn lực doanh nghiệp giúp hợp lý hóa việc thu thập, lưu trữ và sử dụng dữ liệu của tổ chức bạn.
                </div>
                <div className="text-title">
                    1. Quản lý kho hàng & xuất hóa đơn bằng mã vạch, mã QR
                </div>
                <div className="text-detail">
                    Quản lý chặt chẽ quy trình nhập hàng, hàng tồn với công cụ xuất hóa đơn bằng mã vạch, mã QR, tiết kiệm thời gian  & chi phí của chủ doanh nghiệp. Tìm được sản phẩm, hàng hóa, xuất hóa đơn chưa bao giờ đơn giản hơn thế
                </div>
                <div className="text-title">
                    2. Quản lý hiệu quả & tăng doanh thu
                </div>
                <img src={pic7} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-detail">
                    Toàn bộ thông tin của doanh nghiệp đều được lưu trữ và đồng bộ hóa trên một nền tảng của phần mềm, đảm bảo tính đồng nhất. Nhờ đó, các thao tác thông tin của từng bộ phận cũng trở nên dễ dàng hơn. Bên cạnh đó, hệ thống phần mềm còn báo cáo về tài chính, lợi nhuận bằn đồ thị trực quan giúp doanh nghiệp có điều chỉnh phù hợp để tránh những rủi ro.
                </div>
                <div className="text-title">
                    3. Quản lý toàn diện hệ thống
                </div>
                <img src={pic8} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-detail">
                    Hỗ trợ phần mềm lên kế hoạch thực hiện xây dựng HTK ASIA toàn công ty cho cấp quản lý và quản lý toàn diện cho doanh nghiệp đa lĩnh vực, nhiều công ty con, phòng ban dễ dàng công bố mục tiêu đến các đơn vị và bộ phận khác. Bên cạnh đó, người quản lý có thể dễ dàng theo dõi tiến trình công việc và đánh giá năng suất của toàn bộ nhân viên thông qua phần mềm.
                </div>
                <div className="text-title">
                    4. Giảm bớt chi phí quản lý, điều hành
                </div>
                <img src={pic9} alt="pic2" style={{ maxWidth: '500px' }} />
                <div className="text-detail">
                    Phần mềm có các công cụ quản trị giúp doanh nghiệp tự động hóa quá trình chấm công, tính lương, lên kế hoạch,… Nhờ đó công ty có thể giảm bớt nhân lực trong quá trình quản lý, điều hành nhưng vẫn đảm bảo đem lại hiệu quả công việc cũng như năng suất cao.
                </div>
                <div className="text-detail">
                    Với phần mềm ERP hiệu quả có sẵn, chủ sở hữu và lãnh đạo doanh nghiệp có thể tự động hóa và đơn giản hóa các công việc hậu bị tẻ nhạt, giúp người lao động trở nên hiệu quả hơn và thành công trong vai trò của họ và có cái nhìn trong thời gian thực về công việc bên trong của hoạt động.
                    HTK ASIA vẫn luôn tiếp tục phát triển tính năng mới và cải thiện phần mềm hiện tại để đảm bảo luôn đáp ứng được nhu cầu chung của khách hàng hiện tại và tương lai.
                    Kết quả là nhiều chức năng mà khách hàng yêu cầu đã có mặt và triển khai trong phần mềm. Mặc dù phần mềm được phát triển sẵn, người dùng vẫn có thể tùy chỉnh để cá nhân hóa giao diện menu của mình và các mẫu biểu báo cáo để đáp ứng nhu cầu công việc tốt hơn.
                    Quản lý phần mềm ERP của HTK ASIA đảm bảo cung cấp đủ các tính năng cần thiết cho mọi loại hình doanh nghiệp đang có mặt trên thị trường. Ngoài ra chúng tôi có cung cấp dịch vụ nâng cao cho phần mềm quản lý doanh nghiệp như thiết kế giao diện theo yêu cầu, đặt tên Brand của doanh nghiệp theo yêu cầu,…

                </div>
                <div className="text-title">
                    HTK ASIA dịch vụ thiết kế phần mềm quản lý doanh nghiệp toàn diện
                </div>
            </div>
            <FormContact />
            <HomeFooter />
        </div>
    )
}

export default DetailManager;