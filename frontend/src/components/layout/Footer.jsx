import { Link } from "react-router-dom";
import {
    Sprout,
    Mail,
    Phone,
    MapPin,
    Leaf,
    Wheat,
    TreePine,
    Heart,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-border bg-card">
            <div className="container px-4 py-12 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link
                            to="/"
                            className="flex items-center gap-2"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                                <Sprout className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <span className="text-xl font-bold text-foreground">
                                Farmo{" "}
                                <span className="text-primary">Phile</span>
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            AI-powered agricultural recommendations to help
                            farmers make smarter decisions for better yields and
                            sustainable farming.
                        </p>
                        <div className="flex gap-2">
                            <Leaf className="h-5 w-5 text-primary" />
                            <Wheat className="h-5 w-5 text-primary" />
                            <TreePine className="h-5 w-5 text-primary" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/crop-recommendation"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Crop Recommendation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/yield-prediction"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Yield Prediction
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/crop-rotation"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Crop Rotation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/fertilizer-recommendation"
                                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Fertilizer Recommendation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* About */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">
                            About
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Farmo Phile uses cutting-edge machine learning
                            algorithms to provide accurate crop recommendations,
                            yield predictions, and fertilizer suggestions based
                            on soil and climate data.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y">
                        <h3 className="text-lg font-semibold text-foreground">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="flex space-x-5 mt-4">
                                    <a
                                        href="https://github.com/ChVMKiran/Farmo-Phile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                                        aria-label="Social media link 1"
                                    >
                                        <svg
                                            stroke="#09b51f"
                                            fill="#09b51f"
                                            stroke-width="0"
                                            viewBox="0 0 496 512"
                                            height="25"
                                            width="25"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="https://twitter.com/chvmkiran639"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                                        aria-label="Social media link 2"
                                    >
                                        <svg
                                            stroke="#09b51f"
                                            fill="#09b51f"
                                            stroke-width="0"
                                            viewBox="0 0 512 512"
                                            height="25"
                                            width="25"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/ch-v-m-kiran-596213291/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                                        aria-label="Social media link 3"
                                    >
                                        <svg
                                            stroke="#09b51f"
                                            fill="#09b51f"
                                            stroke-width="0"
                                            viewBox="0 0 448 512"
                                            height="25"
                                            width="25"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="h-5 w-5 text-primary" />
                                +91 8247829971
                            </li>
                            <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                                Farmo Phile, India
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Farmo Phile. All rights
                        reserved.
                    </p>
                    <p className="flex items-center gap-1 text-sm text-muted-foreground">
                        Made with{" "}
                        <Heart className="h-4 w-4 text-red-600 fill-red-600" />{" "}
                        for farmers
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
