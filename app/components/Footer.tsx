import React from "react";
import Container from "./Container";
import { MdBedroomParent } from "react-icons/md";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const columns = [
  {
    title: "Support",
    links: ["Help Center", "Safety information", "Cancellation options"],
  },
  {
    title: "Community",
    links: ["Become a host", "Referrals", "Forum"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white mt-20">
      <Container>
        <div className="py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center">
                <MdBedroomParent color="white" size={22} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                renta
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-500 max-w-sm">
              Stays and experiences for every kind of traveler. Book with
              confidence, hosted by people who care.
            </p>
            <div className="mt-4 flex items-center gap-3 text-slate-500">
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-indigo-600 transition"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-indigo-600 transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-indigo-600 transition"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold text-slate-900">
                {col.title}
              </div>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-900 transition"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="py-5 border-t border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Renta. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-900 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-900 transition">
              Terms
            </a>
            <a href="#" className="hover:text-slate-900 transition">
              Sitemap
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
