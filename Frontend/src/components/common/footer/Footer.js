import { Link } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./footer.css";

const Footer = () => {
    const links = [
        { title: "Quick Links", items: ["About", "Contact", "Privacy Policy", "Terms"] },
        { title: "Categories", items: ["Education", "Health", "Agriculture", "Finance"] },
        { title: "Resources", items: ["FAQ", "Blog", "Help Center", "Support"] },
    ];

    return (
        <footer className="font-mono bg-violet-100 border-t-4 border-black">
            <div className="max-w-7xl mx-auto p-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {links.map((section, index) => (
                        <div key={index} className="neu-card bg-white p-6">
                            <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.items.map((item, idx) => (
                                    <li key={idx}>
                                        <a href="#" className="hover:underline">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="neu-card bg-white mt-8 p-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
                            <p>Email: contact@schemeseva.com</p>
                            <p>Phone: +91 1234567890</p>
                        </div>
                        <div className="flex gap-4">
                            {["Twitter", "LinkedIn", "GitHub"].map((platform) => (
                                <button key={platform} className="neu-button px-4 py-2 bg-white hover:bg-violet-200">
                                    {platform}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 text-center space-y-2">
                    <p className="font-bold">
                        © 2024 SchemeSeva. All rights reserved.
                    </p>
                    <Link
                        to="https://www.linkedin.com/in/aman-singh-2026s/"
                        className="inline-flex items-center gap-2 neu-button px-4 py-2 bg-white hover:bg-violet-200"
                    >
                        <span className="font-bold">
                            Developed by DevAman
                        </span>
                        <OpenInNewIcon className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
