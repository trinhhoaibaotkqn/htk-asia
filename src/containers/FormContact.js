import { toast } from "react-hot-toast";
import { useState } from "react";
import { useSelector } from "react-redux";
import LanguageUtils from "../utils/LanguageUtil";
import { FormattedMessage } from "react-intl";

const FormContact = () => {
    const language = useSelector(state => state.common.language)
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
                    <div className="header-contact" ><FormattedMessage id="contact.titleSection" /></div>
                    <div className="content-contact">
                        <div className="detail-contact">Whatsapp: +84 963840005</div>
                        <div className="detail-contact"><FormattedMessage id="contact.nation1" />:+84 963840005</div>
                        <div className="detail-contact"><FormattedMessage id="contact.nation2" />: +7 9778003299</div>
                        {/* <div className="detail-contact">Email : +7 (495) 780 14 00 </div> */}
                    </div>
                </div>
                <div className="contact-form">
                    <div className="d-flex justify-content-center">
                        <input onChange={representativeChangeHandler} placeholder={LanguageUtils.getMessageByKey("contact.input1", language)} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <input onChange={companyNameChangeHandler} placeholder={LanguageUtils.getMessageByKey("contact.input2", language)} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <select >
                            <option>--<FormattedMessage id="contact.input3" />--</option>
                            <option><FormattedMessage id="service.title1" /></option>
                            <option><FormattedMessage id="service.title2" /></option>
                            <option><FormattedMessage id="service.title3" /></option>
                            <option><FormattedMessage id="service.title4" /></option>
                            <option><FormattedMessage id="service.title5" /></option>
                            <option><FormattedMessage id="service.title6" /></option>
                            <option><FormattedMessage id="service.title7" /></option>
                            <option><FormattedMessage id="service.title8" /></option>
                            <option><FormattedMessage id="service.title9" /></option>
                            <option><FormattedMessage id="service.title10" /></option>
                            <option><FormattedMessage id="service.title11" /></option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-center">
                        <input placeholder={LanguageUtils.getMessageByKey("contact.input4", language)} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <input onChange={emailChangeHandler} placeholder={LanguageUtils.getMessageByKey("contact.input5", language)} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <input placeholder={LanguageUtils.getMessageByKey("contact.input6", language)} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button onClick={formContactSubmitHandler}><FormattedMessage id="contact.button" /></button>
                    </div>

                </div>
            </div>
            <div className="contact-image">
                <div className="google-map-code">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
                </div>
            </div>
        </div>
    )
}

export default FormContact;