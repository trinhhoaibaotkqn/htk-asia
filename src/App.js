import HomePage from "./containers/HomePage";
import { IntlProvider } from "react-intl";
import LanguageUtils from "./utils/LanguageUtil";
import { useSelector } from "react-redux";

function App() {
  const messages = LanguageUtils.getFlattenedMessages();
  const language = useSelector((state) => state.common.language);

  return (
    <IntlProvider locale={language} messages={messages[language]} defaultLocale="vi">
      <div className="app-container">
        <div className="app-content">
          <HomePage />
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;
