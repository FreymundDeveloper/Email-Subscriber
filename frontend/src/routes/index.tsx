import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const RoutesCall = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={""} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
};