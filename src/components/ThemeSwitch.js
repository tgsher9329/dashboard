import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeProvider";

const ThemeSwitch = () => {
const { setTheme, mode } = useContext(ThemeContext);

return (
    <div className="d-flex justify-content-center footer">
        <Button
            checked={mode === "light" ? true : false}
            height={50}
            width={120}
            onClick={setTheme}
        >
        Switch
        </Button>
    </div>
);
};

export default ThemeSwitch;
