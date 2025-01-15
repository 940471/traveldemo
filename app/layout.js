import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

export const metadata = {
  title: "Travel Explorer",
  description: "Travel, Explore, Enjoy and share you favorite spots!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="header-background">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#6a11cb", stopOpacity: "1" }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#2575fc", stopOpacity: "1" }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              d="M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,69.3C672,43,768,53,864,101.3C960,149,1056,235,1152,240C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <MainHeader></MainHeader>
        {children}
      </body>
    </html>
  );
}
