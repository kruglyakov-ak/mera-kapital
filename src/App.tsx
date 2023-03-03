import { useState } from "react";
import cn from "classnames";
import { StarategieDashboard } from "./features";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const clickThemeButtonHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <main className={cn(theme)}>
      <StarategieDashboard
        theme={theme}
        clickThemeButtonHandler={clickThemeButtonHandler}
      />
    </main>
  );
}

export default App;
