import BannerImg from '../assets/banniere_accueil.png';
import '../styles/_banner.scss';

function HomeBanner() {
  return (
    <div className="banner-container">
      <img src={BannerImg} alt="Bannière page d'accueil" />
      <p className="banner-container__text">Chez vous, partout et ailleurs</p>
    </div>
  );
}
export default HomeBanner;
