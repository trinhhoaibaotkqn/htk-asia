import HomePage from "./containers/HomePage";
import { IntlProvider } from "react-intl";
import LanguageUtils from "./utils/LanguageUtil";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DetailManager from "./containers/detailBusiness/DetailManager";
import DetailWeb3D from "./containers/detailBusiness/DetailWeb3D";
import DetailTech3D from "./containers/detailBusiness/DetailTech3D";
import DetailUAV from "./containers/detailBusiness/DetailUAV";
import DetailLazer from "./containers/detailBusiness/DetailLazer";
import TermOfUse from "./containers/detailBusiness/TermOfUse";
import PrivacyPolicy from "./containers/detailBusiness/PrivacyPolicy";

function App() {
  const messages = LanguageUtils.getFlattenedMessages();
  const language = useSelector((state) => state.common.language);

  return (
    <IntlProvider locale={language} messages={messages[language]} defaultLocale="vi">
      <div className="app-container">
        <div className="app-content">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/business-management" element={<DetailManager />} />
              <Route exact path="/web-3d" element={<DetailWeb3D />} />
              <Route exact path="/technology-3d" element={<DetailTech3D />} />
              <Route exact path="/uav" element={<DetailUAV />} />
              <Route exact path="/laser" element={<DetailLazer />} />
              <Route exact path="/term-of-use" element={<TermOfUse />} />
              <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;
