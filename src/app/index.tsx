import { Routing } from "./navigation";
import { withProviders } from "./providers";
import "@i18n";
import "@styles";

const App = (): JSX.Element => {
  return <Routing />;
};

export default withProviders(App);
