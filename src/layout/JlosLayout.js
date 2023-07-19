import React from "react";
import { Route, Routes } from "react-router-dom";

import Menu from '../components/layout/Menu'
import Header from '../components/layout/Header'
import routes from '../router/router';


function JlosLayout() {
    return <div className="w-frame wbaseItem-value w-row xxl w-page" wrap="nowrap" level={1} cateid={140} id="f19dabae-13c1-4154-9139-a2217d2a61bc">
        <Menu />
        <div className="w-frame wbaseItem-value w-col" wrap="nowrap" level={2} cateid={140} id="39d357d3-bcc1-4d4f-b887-4ad68c34cee3">
            <Header />
            <Routes>
                {routes.map((prop, key) => {
                    return (
                        <Route
                            path={prop.path}
                            element={prop.component}
                            key={key}
                            exact
                        />
                    );
                })}
            </Routes>
        </div>
    </div>
}
export default JlosLayout;
