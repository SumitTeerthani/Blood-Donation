import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Blood Donation Platform. All rights reserved. | Designed and Developed by the Tri-Tech Innovators.</p>
            </div>
        </footer>
    );
}
