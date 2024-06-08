import AboutBannerImg from '../assets/banniere_a_propos.png';
import '../styles/_banner.scss';

function AboutBanner() {
  return (
    <div className="banner-container about-img">
      <img src={AboutBannerImg} alt="Bannière page à propos" />
    </div>
  );
}
export default AboutBanner;
