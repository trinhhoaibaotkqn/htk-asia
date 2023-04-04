import { FormattedMessage } from "react-intl";

const AssociatedCompany = () => {
    return (
        <div id="associated" className="associated-company-container">
            <div className="title-section"><FormattedMessage id="associated.title" /></div>
            <div className="child-content-container">
                <div className="child-content">
                    <div className="title-company">VR Logistic</div>
                    <div className="logo-company com-1"></div>
                    <a href="https://vr-logistic.com/en/" className="button-see-more"><FormattedMessage id="associated.button" /></a>
                </div>
                <div className="child-content">
                    <div className="title-company">GEOSCAN</div>
                    <div className="logo-company com-2"></div>
                    <a href="https://www.geoscan.aero/ru/services/air_laser_scanning" className="button-see-more"><FormattedMessage id="associated.button" /></a>
                </div>
                <div className="child-content">
                    <div className="title-company">T&T Group RUS</div>
                    <div className="logo-company com-3"></div>
                    <a href="https://sbis.ru/contragents/9701134954/771301001" className="button-see-more"><FormattedMessage id="associated.button" /></a>
                </div>
                <div className="child-content">
                    <div className="title-company">Сайт Мэйкерс</div>
                    <div className="logo-company com-4"></div>
                    <a href="https://www.sitemakers.ru/" className="button-see-more"><FormattedMessage id="associated.button" /></a>
                </div>
                <div className="child-content">
                    <div className="title-company">Yandex</div>
                    <div className="logo-company com-5"></div>
                    <div className="button-see-more"><FormattedMessage id="associated.button" /></div>
                </div>
            </div>
        </div>
    )
}

export default AssociatedCompany;