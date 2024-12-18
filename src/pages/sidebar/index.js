import React from "react";

export const SideBar = () => {
    return (
        <div className="d-flex flex-column vh-100 w-100 bg-dark text-white p-3" style={{ width: "250px" }}>
            {/* Sidebar Header */}
            <h2 className="text-center mb-4">Hello Adriano!</h2>

            {/* Sidebar Links */}
            <ul className="nav nav-pills flex-column">
                <li className="nav-item mb-2">
                    <a href="#expense" className="nav-link text-white">
                        Expense
                    </a>
                </li>
                <li className="nav-item mb-2">
                    <a href="#analysis" className="nav-link text-white">
                        Analysis
                    </a>
                </li>
            </ul>
        </div>
    );
};
