import React from 'react';
import { Link } from 'react-scroll';
import { 
  Accessibility, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Accessibility className="w-8 h-8 mr-2 text-primary-400" />
              <span className="text-xl font-bold">Rohini Venture</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering Persons with Disabilities through meaningful employment opportunities and supportive work environments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Achievements', 'Partners', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Inclusive Hiring',
                'Customized Job Matching',
                'Accessible Training',
                'Workplace Accommodations',
                'Diversity Consulting',
                'Inclusive Onboarding'
              ].map((service) => (
                <li key={service} className="text-gray-400 hover:text-primary-400 transition-colors">
                  <a href="#">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">9359123713 and 9860401545</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">akshaysarode@rohiniventure.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  C5, Aboli Building, HDFC Colony, Chinchwad 411019
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rohini Venture. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-primary-400 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-primary-400 text-sm">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;