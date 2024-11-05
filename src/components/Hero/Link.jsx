import React from "react";

const Link = () => {
  return (
    // added window-mobile -> mt-4, mobile px-2,py-3 added
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-gray-800 rounded-lg shadow-md mt-4 max-w-full p-2 md:p-4">
      <p className="mb-3 break-words max-w-full">
        या योजनेअंतर्गत आपणास BVG ग्रुपमधील कंपन्यांमध्ये इंटर्नशिप करायची
        असल्यास अर्जदाराने प्रथम महास्वयंमपोर्टलवर{" "}
        <a
          href="https://cmykpy.mahaswayam.gov.in/UserLogin.aspx"
          className="text-blue-600 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://cmykpy.mahaswayam.gov.in/UserLogin.aspx
        </a>
          नोंदणी करणे आवश्यक आहे.
      </p>
      <p className="mb-3">
        नोंदणी केल्यावर कृपया येथे क्लिक करुन
        <a
          href="https://forms.gle/kGxVEuDB4rFwHgKR9"
          className="text-blue-600 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          BVG गुगल फॉर्म भरावा.
        </a>
      </p>
      <p>
        फॉर्म भरल्यावर तुमचे नाव{" "}
        <a
          href="https://forms.gle/kGxVEuDB4rFwHgKR9"
          className="text-blue-600 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          येथे चेक करा.
        </a>
      </p>
    </div>
  );
};

export default Link;