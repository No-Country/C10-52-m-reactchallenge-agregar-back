import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-sky text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between py-4 px-5">
        <div className="mb-4 md:mb-0 ">
          <h4 className="font-bold text-lg mb-2">Get In Touch</h4>
          <ul>
            <li className="mt-2">10 Oxford Street, Some City, DE. E1 1EC</li>
            <li className="mt-2">the-office@caredental.com</li>
            <li className="mt-2">+44 987 654 321</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold text-lg mb-2">Social Media</h4>
          <ul>
            <li className="mt-2">See bellow where you can find us</li>
            <li className="mt-2"> </li>
            <li className="mt-2">Enlace 3</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Useful Links</h4>
          <ul>
            <li className="mt-2">Vaccancies</li>
            <li className="mt-2">Join Care Dental</li>
            <li className="mt-2">FAQ</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;