import React from "react";
import QrCode from "../../../assets/images/Qr Code.svg";
import googlePlayImage from "../../../assets/images/GooglePlay.svg";
import appStoreImage from "../../../assets/images/download-appstore.svg";

export default function FooterDownload() {
  return (
    <div className="footer-column">
      <h3>Download App</h3>
      <span className="download-app-text">Save $3 with App New User Only</span>
      <div className="download-links">
        <img src={QrCode} alt="Qr-Code" />
        <div className="download-app">
          <img src={googlePlayImage} alt="google-play" />
          <img src={appStoreImage} alt="app-store" />
        </div>
      </div>
    </div>
  );
}
