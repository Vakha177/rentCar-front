import './Footer.css'
import logogo from '../../image/logogo.png'
import insta from '../../image/insta.svg'
import telega from '../../image/telega.svg'
import whats from '../../image/whats.svg'
import appstore from '../../image/appstore.png'
import facebob from '../../image/facebob.svg'

const Footer = () => {
    return (
        <div className='foot'>
            <div className='footer-content'>
                <div className='footLogo'>
                <img src={logogo}/>
                </div>
                <div className='icons'>
                <img className='teleg' src={telega}/>
                <img className='inst' src={insta}/>
                <img className='what' src={whats}/>
                <img className='face' src={facebob}/>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.494275552809!2d45.68981417615955!3d43.32484507111957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4051d13abc103637%3A0x8601f7fff1cac51f!2zSW50b2NvZGUgQ29kaW5nIEJvb3RjYW1wIOKAkyDRiNC60L7Qu9CwINC_0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1706461349619!5m2!1sru!2sru"></iframe>
                </div>
                <div className='descrip'>
                <h1>About sus</h1>
                <ul>
                <li>Contacts</li>
                <li>Mobile</li>
                <li>Blog</li>
                <li>FAQ</li>
                <img className='app' src={appstore} />
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer