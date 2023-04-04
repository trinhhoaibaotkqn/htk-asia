import { toast } from "react-hot-toast";
import { useState } from "react";



const FormContact = () => {
    const notifyComplete = () => toast.success('Bạn đã gửi thông tin thành công. Vui lòng đợi, chúng tôi sẽ liên lạc với bạn sớm nhất');
    const notifyError = () => toast.error('Vui lòng nhập đầy đủ tên người đại diện, tên công ty, email.');

    const [representativeVal, setRepresnetativeVal] = useState('');
    const [companyNameVal, setCompanyNameVal] = useState('');
    const [emailval, setEmailval] = useState('');

    const representativeChangeHandler = (event) => {
        setRepresnetativeVal(event.target.value);
    }

    const companyNameChangeHandler = (event) => {
        setCompanyNameVal(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmailval(event.target.value);
    }

    const formContactSubmitHandler = () => {
        if (representativeVal === '' || companyNameVal === '' || emailval === '') {
            notifyError();
        } else {
            notifyComplete();
        }
    }
    return (
        <div className="form-contact-container">
            <div className="contact-content">
                <div className="contact-title">
                    <div className="header-contact" >Liên lạc đến chúng tôi</div>
                    <div className="content-contact">
                        <div className="detail-contact">Whatsapp: +84 963840005</div>
                        <div className="detail-contact">Việt Nam :+84 963840005</div>
                        <div className="detail-contact">Nga : +7 9778003299</div>
                        {/* <div className="detail-contact">Email : +7 (495) 780 14 00 </div> */}
                    </div>
                </div>
                <div className="contact-form">
                    <div className="d-flex justify-content-center">
                        <input onChange={representativeChangeHandler} placeholder="Tên người đại diện" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <input onChange={companyNameChangeHandler} placeholder="Tên công ty" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <select placeholder="Loại dịch vụ" >
                            <option>--Loại dịch vụ--</option>
                            <option>Phần mềm bán hàng</option>
                            <option>Phần mềm quản lý doanhn nghiệp toàn diện</option>
                            <option>Hệ thống thanh toán online</option>
                            <option>Phát triển các dự án web</option>
                            <option>Công nghệ tăng tốc trang web AI</option>
                            <option>Phát triển nền tảng 3D/VR MRK.CLOUD</option>
                            <option>Khảo sát trên không và lập bản đồ</option>
                            <option>Phát triển các dịch vụ web SaaS</option>
                            <option>Phát triển trang web 3D</option>
                            <option>Khảo sát hình ảnh nhiệt</option>
                            <option>Mô hình 3D lãnh thổ</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-center">
                        <input placeholder="Điện thoại" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <input onChange={emailChangeHandler} placeholder="Email" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <input placeholder="Thông tin bổ sung" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button onClick={formContactSubmitHandler}>Gửi</button>
                    </div>

                </div>
            </div>
            <div className="contact-image"></div>
        </div>
    )
}

export default FormContact;