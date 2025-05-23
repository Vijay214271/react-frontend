import React from 'react';
import styles from './Features.module.scss';

const Features = () => {
  const featuresData = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#FFF8ED"/>
          <path d="M16.8333 20.1666L21 16L16.8333 11.8333" stroke="#FFBD59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 20.1666L15.1667 16L11 11.8333" stroke="#FFBD59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Ready to Go Algos',
      description: 'We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.',
      row: 1,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#FFF8ED"/>
          <g clipPath="url(#clip0_2008_2013)">
            <path d="M16 7.66669L24.3334 13.0834V18.9167L16 24.3334L7.66669 18.9167V13.0834L16 7.66669Z" stroke="#FFBD59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 24.3334V18.9167" stroke="#FFBD59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24.3334 13.0833L16 18.9166L7.66669 13.0833" stroke="#FFBD59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.66669 18.9166L16 13.0833L24.3334 18.9166" stroke="#FFBD59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 7.66669V13.0834" stroke="#FFBD59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_2008_2013">
              <rect width="20" height="20" fill="white" transform="translate(6 6)"/>
            </clipPath>
          </defs>
        </svg>
      ),
      title: 'Internal capability building',
      description: 'We production all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.',
      row: 1,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#FFF8ED"/>
          <path d="M16 12.6666C20.1421 12.6666 23.5 11.5473 23.5 10.1666C23.5 8.78591 20.1421 7.66663 16 7.66663C11.8579 7.66663 8.5 8.78591 8.5 10.1666C8.5 11.5473 11.8579 12.6666 16 12.6666Z" stroke="#FFBD59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23.5 16C23.5 17.3833 20.1667 18.5 16 18.5C11.8333 18.5 8.5 17.3833 8.5 16" stroke="#FFBD59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 10.1666V21.8333C8.5 23.2166 11.8333 24.3333 16 24.3333C20.1667 24.3333 23.5 23.2166 23.5 21.8333V10.1666" stroke="#FFBD59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Multi-source data',
      description: 'Our solutions work with old, new, or incomplete datasets in different formats, and from varied sources.',
      row: 2,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#FFF8ED"/>
          <path d="M22.6667 11.8334H9.33335C8.41288 11.8334 7.66669 12.5796 7.66669 13.5V21.8334C7.66669 22.7538 8.41288 23.5 9.33335 23.5H22.6667C23.5872 23.5 24.3334 22.7538 24.3334 21.8334V13.5C24.3334 12.5796 23.5872 11.8334 22.6667 11.8334Z" stroke="#FFBD59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.3334 23.5V10.1667C19.3334 9.72464 19.1578 9.30072 18.8452 8.98816C18.5326 8.67559 18.1087 8.5 17.6667 8.5H14.3334C13.8913 8.5 13.4674 8.67559 13.1548 8.98816C12.8423 9.30072 12.6667 9.72464 12.6667 10.1667V23.5" stroke="#FFBD59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Stakeholder alignment',
      description: 'No black boxes. Stakeholders understand the \'how\', \'so what\', and \'now what\', leading to clear decision-making trade offs.',
      row: 2,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#FFF8ED"/>
          <g clipPath="url(#clip0_2008_2013)">
            <path d="M16 7.66669L24.3334 13.0834V18.9167L16 24.3334L7.66669 18.9167V13.0834L16 7.66669Z" stroke="#FFBD59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 24.3334V18.9167" stroke="#FFBD59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24.3334 13.0833L16 18.9166L7.66669 13.0833" stroke="#FFBD59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.66669 18.9166L16 13.0833L24.3334 18.9166" stroke="#FFBD59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 7.66669V13.0834" stroke="#FFBD59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_2008_2013">
              <rect width="20" height="20" fill="white" transform="translate(6 6)"/>
            </clipPath>
          </defs>
        </svg>
      ),
      title: 'Continuous engagement',
      description: 'We engage in the long-term to enhance, course-correct, and adopt new models to continuously refine your work.',
      row: 2,
    },
  ];

  const row1Features = featuresData.filter(f => f.row === 1);
  const row2Features = featuresData.filter(f => f.row === 2);

  return (
    <section className={styles.features}>
      <div className={styles.timeline}>
        {/* Top row features */}
        <div className={`${styles.featureRow} ${styles.row1}`}>
          {row1Features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Connecting line with dots */}
        <div className={styles.connector}>
          {/* White background bar */}
          <div className={styles.whiteBar}></div>
          
          {/* Green progress bar */}
          <div className={styles.greenBar}></div>
          
          {/* Special first dot with white background */}
          <div className={styles.specialDot} style={{ left: '5%' }}>
            <svg className={styles.whiteDotBg} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_2008_2018)">
                <circle cx="15" cy="15" r="8" fill="#EAF8F1"/>
              </g>
              <defs>
                <filter id="filter0_d_2008_2018" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="2"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2008_2018"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2008_2018" result="shape"/>
                </filter>
              </defs>
            </svg>
            <svg className={styles.greenDotCenter} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="5" fill="#41C185"/>
            </svg>
          </div>
          
          {/* Regular green dots */}
          <div className={styles.greenDot} style={{ left: '25%' }}></div>
          <div className={styles.greenDot} style={{ left: '50%' }}></div>
          <div className={styles.greenDot} style={{ left: '75%' }}></div>
          <div className={styles.greenDot} style={{ left: '93%' }}></div>
        </div>

        {/* Bottom row features */}
        <div className={`${styles.featureRow} ${styles.row2}`}>
          {row2Features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;