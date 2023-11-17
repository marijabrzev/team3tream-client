import './Footer.scss';
import twitterIcon from '../../assets/icons/Icon-twitter.svg'
import facebookIcon from '../../assets/icons/Icon-facebook.svg'
import instagramIcon from '../../assets/icons/Icon-instagram.svg'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <div className='footer__left__logo'>
          logo/name
        </div>
        <div className='footer__left__text'>
          <p>footer text</p>
          <p>footer text</p>
          <p>footer text</p>
        </div>
        <div className='footer__left__icons'>
          <a href='https://x.com' target='_blank' rel="noreferrer">
            <img className='footer__left__icons__icon' src={twitterIcon} alt='twitter icon'/>
          </a>
          <a href='https://facebook.com' target='_blank' rel="noreferrer">
            <img className='footer__left__icons__icon' src={facebookIcon} alt='facebook icon'/>
          </a>
          <a href='https://instagram.com' target='_blank' rel="noreferrer">
            <img className='footer__left__icons__icon' src={instagramIcon} alt='instagram icon'/>
          </a>
        </div>
      </div>
      <div className='footer__right'>
        <div className='footer__right__heading'>
          <p className='footer__right__heading__text'>footer heading</p>
          <p className='footer__right__heading__text'>footer heading</p>
        </div>
        <div className='footer__right__text'>
          <div>
            <p className='footer__right__text__content'>footer text</p>
            <p className='footer__right__text__content'>footer text</p>
            <p className='footer__right__text__content'>footer text</p>
          </div>
          <div>
            <p>footer text</p>
            <p>footer text</p>
            <p>footer text</p>
          </div>
        </div>
      </div>

    </div>
  )
}
