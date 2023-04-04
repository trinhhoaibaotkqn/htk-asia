import HomeHeader from "../HomeHeader";
import FormContact from "../FormContact";
import HomeFooter from "../HomeFooter";
import pic2 from "../../assets/picture/pic2.png";
import pic3 from "../../assets/picture/pic3.png";
import pic4 from "../../assets/picture/pic4.png";
import pic5 from "../../assets/picture/pic5.png";
import "./Detail.scss";
import "../HomeResponsiveLaptop.scss";
import "../HomeResponsiveIpad.scss";
import "../HomeResponsivePhone.scss";

const DetailWeb3D = () => {
    return (
        <div className="detail-web-3d-container">
            <HomeHeader />
            <div className="title-section">Thiết kế Web 3D</div>
            <div className="detail-content-container">
                <div className="text-detail">
                    Có thể nói không gian đa chiều, 3D hay công nghệ thực tế ảo VR,  hiện nay được con người chú ý và sử dụng ngày càng nhiều trong cách lĩnh vực của đời sống. Những công nghệ 3D này đem lại nhiều góc nhìn mới mẻ, sinh động cho khách hàng và người dùng giúp doanh nghiệp tăng độ nhận diện thương hiệu và sự uy tín. Góp phần một trong số đó là website 3D, những website này không phải quá phổ biến nhưng trong các lĩnh vực phù hợp chúng đem lại hiệu quả kinh doanh vô cùng lớn.
                </div>
                <div className="text-detail">
                    <strong>Website 3D</strong> là một trang web được thiết kế có áp dụng các hình ảnh 3D 360 độ giúp tối ưu góc nhìn của khách hàng, giúp trang web thu hút và sinh động hơn bao giờ hết.
                    Một website 3D thường có 3 phần chính: các mô tĩnh, hoạt hình động và công nghệ trí tuệ nhân tạo AI. Với sự kết hợp của 3 yếu tố này sẽ tạo ra được một trang web 3D đa màu sắc, sống động và chân thực nhất.
                </div>
                <img src={pic2} alt="pic2" />
                <div className="text-detail">
                    Ví dụ:
                    <li>Cửa hàng nội thất</li>
                    <li>Cửa hàng trang sức và đồng hồ cao cấp,</li>
                    <li>Cửa hàng thiết bị âm thanh - hình ảnh Hi-End,</li>
                    <li>Văn phòng bán hàng bất động sản</li>
                    <li>Văn phòng làm việc chung, cho thuê theo giờ và thuê ảo,</li>
                    <li>Cửa hàng nghệ thuật tư nhân,</li>
                    <li>Salon làm đẹp và phòng thí nghiệm hình ảnh của nhà tạo mẫu.</li>
                    <li>….</li>
                </div>
                <div className="text-title">
                    1. Tăng sự tin tưởng vào công ty
                </div>
                <img src={pic3} alt="" />
                <div className="text-detail">
                    Thiết kế văn phòng đáng tin cậy giúp tăng niềm tin của khách hàng, và không gian phòng sống động với nội thất và trang trí sẽ khiến khách truy cập tự nhiên tìm kiếm chi tiết của nội thất, giúp họ tránh xa những cảm giác tiêu cực và căng thẳng có thể tích tụ từ việc truy cập các trang web cạnh tranh trước đó, với nhiều chữ viết, phức tạp
                </div>
                <div className="text-title">
                    2. Tiếp thu thông tin tốt hơn
                </div>
                <img src={pic4} alt="" />
                <div className="text-detail">
                    Không gian 3D khuyến khích sự tập trung. Tỷ lệ chuyển đổi tác động thông tin trên HTK ASIA cao hơn nhiều so với trên trang web thông thường.
                    Thông tin trên HTK ASIA được cung cấp theo cách phân phối hợp lý, giúp khách hàng tiếp cận sản phẩm tốt hơn Thay vì chất đống chữ viết trên các trang web thông thường, HTK ASIA trình bày thông tin dưới hình thức các đối tượng trên tường và giá đỡ.
                    Thực tế đã được xác minh rằng một đoạn video phát trên màn hình TV trong không gian 3D của  HTK ASIA sẽ nhận được sự chú ý của khách truy cập, khác với một đoạn video được chèn vào trang web phẳng, nơi nó sẽ hoặc được pha trộn với thông tin chữ trên trang, hoặc mở trên một trang web riêng biệt và do đó khiến người xem rời khỏi trang web.
                </div>
                <div className="text-title">
                    3.Mong muốn trở lại HTK ASIA sẽ giúp bạn chi tiêu ít hơn cho remarketing
                </div>
                <img src={pic5} alt="" />
                <div className="text-detail">
                    Sau khi trải qua hàng chục trang web, một người khó có thể nhớ được một trong số đó, đó là lý do tại sao hầu hết các trang web phải chi tiêu tiền để thu hút khán giả trở lại thông qua remarketing. Nó ngay lập tức được liên tưởng đến với thực tế và nổi bật với sự khác biệt rõ ràng so với các trang web phẳng gần như giống nhau.
                    HTK ASIA mang đến sản phẩm không gian trang web 3D tương tác với người dùng, cung cấp một trải nghiệm sống động và tương tác với các sản phẩm, thông tin và dịch vụ của công ty, giúp tăng niềm tin và tăng hiệu quả kinh doanh trên Internet. Nó thích hợp cho nhiều loại hoạt động kinh doanh, từ các cửa hàng nội thất, cửa hàng trang sức và đồng hồ cao cấp, đến văn phòng bất động sản, các triển lãm nghệ thuật tư nhân và các studio thiết kế. Sử dụng HTK ASIA, công ty sẽ có thể thu hút được nhiều khách hàng mới và giữ chân được những khách hàng hiện tại.
                </div>
            </div>
            <FormContact />
            <HomeFooter />
        </div>
    )
}

export default DetailWeb3D;