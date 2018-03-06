import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';

import JoinCard from '../components/common/JoinCard';
import Slideshow from '../components/common/Slideshow';

export default class Meet extends React.Component {

    componentDidMount() {
        $('.header-image').css('background-image', 'url(https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59cc78eaf43b551e79ff018c/1506572620446/20141104_0824+Seth+Moulton+copy.jpg?format=2500w)');
    }

    render() {
        return (
            <div>
                <div className='header-text mdc-typography--display2'><b>Meet CandidateXYZ.</b></div>

                <div className='content'>
                    <div className='about'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa efficitur, laoreet ex malesuada, scelerisque sem. Nam porttitor elit at felis molestie aliquet. Sed id metus massa. Etiam congue magna eget vulputate hendrerit. Proin hendrerit maximus ipsum, ut lobortis sem ultrices et. Integer quis odio egestas, tristique purus sit amet, pretium ante. Pellentesque tincidunt mollis libero non imperdiet.<br /><br />

                        <img className='about-image' src='https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59a07bd137c581d09a024611/1503689691455/20030701+DSC00379+copy.JPG?format=750w' />
                        Aliquam cursus sagittis augue, eu volutpat risus iaculis sed. Nulla tempus elementum est et rutrum. Pellentesque sed tempor lectus. Nunc pharetra erat sit amet lectus molestie, ac dignissim lacus fermentum. Aliquam nec tincidunt neque. Cras id sagittis velit, id ornare quam. Vivamus turpis ante, placerat et maximus a, laoreet ac nibh. Mauris semper consequat mi, at sodales est pellentesque sed. Praesent dignissim, ipsum vel porta posuere, nisl eros auctor orci, in ultrices dui enim sed felis. Proin iaculis elementum purus id iaculis. Fusce quis nisi cursus, fringilla ex nec, fringilla lectus. Phasellus ornare fermentum posuere. Nam in mi ornare, efficitur diam ac, scelerisque elit.<br /><br />

                        Cras pellentesque tempor vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec elit orci, molestie nec efficitur et, malesuada et enim. In hendrerit eleifend eros et finibus. Nulla facilisi. Aenean auctor eros ut tortor rutrum, sit amet commodo magna posuere. Sed a aliquam risus.<br /><br />

                        In eget sem lacus. Etiam tincidunt est a auctor tempus. Vestibulum porta sed justo non scelerisque. Sed est metus, venenatis sit amet lacinia sed, iaculis eu justo. Donec ligula justo, tincidunt eu augue vel, euismod ultrices libero. Aliquam sed cursus dui. Mauris porttitor ac nisi vel elementum. Aenean tempus vehicula velit, eget dictum lectus eleifend id. Donec a quam condimentum, suscipit tortor nec, dapibus neque. Morbi eleifend placerat blandit. Fusce molestie finibus est, et dignissim metus auctor nec. Nullam aliquam, mauris a semper cursus, risus tortor porttitor dui, nec rutrum turpis augue ut libero. Aliquam non neque posuere, vehicula purus tincidunt, pretium tortor. Proin semper ipsum eget nibh varius eleifend. Sed nibh sapien, molestie vel ligula at, interdum condimentum massa. Sed tempor maximus sem, ac malesuada purus efficitur in.<br /><br />

                        Praesent ac erat ut lorem iaculis vehicula in vitae tellus. Sed interdum sodales tellus, vel fermentum nisi rhoncus a. Sed velit tellus, tempor hendrerit ligula nec, consequat pretium neque. Proin sed neque augue. Quisque accumsan euismod libero a maximus. Curabitur vitae viverra turpis. Nullam porttitor risus et leo luctus dignissim. Integer vel rutrum massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar dui nunc, sit amet accumsan ante gravida non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sit amet ornare tortor. Nam vel mollis lacus.<br /><br />
                    </div>
                </div>
            </div>
        );
    }
}
