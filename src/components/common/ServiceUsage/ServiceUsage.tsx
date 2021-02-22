import React from 'react';
import './ServiceUsage.scss';

const ServiceUsage: React.FC = () => {
  return (
    <nav className="service-usage__list">
      <span className="service-usage__item">Terms of Service</span>
      <span className="service-usage__item">Privacy Policy</span>
      <span className="service-usage__item">Cookie Policy</span>
      <span className="service-usage__item">Ads info</span>
      <span className="service-usage__item">More ···</span>
      <span className="service-usage__item">© 2021 Twitter, Inc.</span>
    </nav>
  );
};

export default ServiceUsage;
