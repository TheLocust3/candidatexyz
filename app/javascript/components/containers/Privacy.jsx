import $ from 'jquery';
import React from 'react';

import TextContent from '../containers/content/TextContent';
import JoinTeamPanel from '../components/common/JoinTeamPanel';

export default class Privacy extends React.Component {

    componentDidMount() {
        $('.header-image').addClass('header-image-blank');
        $('.header-image').css('background-image', 'url()');
        $('.navbar .link').addClass('inverted-link');
    }

    componentWillUnmount() {
        $('.header-image').removeClass('header-image-blank');
        $('.navbar .link').removeClass('inverted-link');
    }

    render() {
        return (
            <div className='content privacy-blurb'>
                <div className='mdc-typography--display3'><b><TextContent identifier='privacyHeader' /></b></div><br />

                CandidateXYZ for Office has created this privacy notice to explain how we use information that you may provide while visiting our website and to demonstrate our firm commitment to Internet privacy.<br /><br />

                CandidateXYZ for Office may modify this policy from time to time so we encourage you to check this page for updates.<br /><br />

                <b>How We Use Your Information</b><br /><br />

                CandidateXYZ for Office is committed to protecting your privacy online.<br /><br />

                When you register, contribute, sign up to volunteer, or take any other action on our site, we may ask you to give us contact information, including your name, address, telephone number and/or email address. We may obtain information about you from outside sources and add it to or combine it with the information we collect through this site. We use this information to operate this site, send you news and information to you about CandidateXYZ for Office, and to solicit your participation in CandidateXYZ for Office programs, events, and activities, and obtain and confirm your attendance at events. We use your information (including your email address, phone number, or address) to communicate with you for these purposes.<br /><br />

                We will not provide your email address or any of your personal information to any other person or organization, for any purpose except: to CandidateXYZ’s authorized campaign committee, CandidateXYZ for Office; to any other political committee established by CandidateXYZ; to any other organization established and controlled by CandidateXYZ; to websites affiliated with CandidateXYZ; to companies that assist us in maintaining such sites, but only for purposes of providing services to the sites and with the strict requirement that any such company will never itself have the right to contact you for any reason; when we have a good-faith belief release is appropriate to comply with the law (for example, Federal Election Commission reporting or a lawful subpoena), to protect our rights or property, or to protect our supporters from fraudulent, abusive, or unlawful conduct, or if we reasonably believe that an emergency involving immediate danger of death or serious physical injury to any person requires disclosure of communications or justifies disclosure of records without delay.<br /><br />

                If you sign an online petition, you understand that such petition is public information and that we may make the petition, and your name, city, state, and any comments provided in connection therewith publicly available. In addition, we may provide such petitions or compilations thereof, including your comments, name, city, and state to national, state or local leaders, or to the press.<br /><br />

                The site may use social media plugins that let people share actions they take across web. Plugins may share your browsing information with the social media sites even if you do not click on the plugin or are logged out of your social media account.<br /><br />

                <b>How We Protect Information You Provide</b><br /><br />

                CandidateXYZ for Office uses industry standard security measures to protect against the loss, misuse or alteration of the information under our control. Permission to access your information is granted only to you and CandidateXYZ for Office employees or contractors who need to know that information to provide services to you. Although we make good faith efforts to store information collected by this website in a secure operating environment, including environments operated by third parties, we cannot guarantee complete security.<br /><br />

                When you make a contribution through this website, we collect credit card information from you.  That information is used solely for processing your contribution; is not maintained by CandidateXYZ for Office; is transmitted via third-party payment processing provider (and according to the payment processing provider’s security protocols) for processing, and is never disclosed to anyone, for any other purpose other than for processing your contribution, under any circumstances.<br /><br />

                <b>Links to Other Websites</b><br /><br />

                This privacy policy covers this website and its subdomains, and not any third-party sites. These sites link to third-party websites. We are not responsible for the content or privacy policies of these third-party sites. We encourage you to read the privacy policies and review the practices of all websites you visit.<br /><br />

                <b>SPECIAL NOTICE FOR PARENTS:</b><br /><br />

                We want to help you guard your children’s privacy. We encourage you to talk to your children about safe and responsible use of their personal information while using the Internet. CandidateXYZ for Office does not knowingly collect, use or distribute children’s personally identifiable information to any third parties. If you have any reservations, questions or concerns about your child’s access to this site or how information that your child provides is used by us, please contact us.<br /><br />

                <b>Cookies, Advertising, and Data Tracking</b><br /><br />

                A cookie is a piece of data stored on the user’s hard drive containing information about the user.<br /><br />

                The CandidateXYZ for Office website uses a cookie and may use other similar tracking tools for measuring aggregate web statistics, and traffic, and other information. CandidateXYZ for Office will also use cookies to facilitate your online visit by maintaining data that you provide for online activities for your convenience so that you will not need to resubmit certain information.<br /><br />

                We may also use third-party services such as Google Analytics that collect information about you and your website use. This helps us understand traffic patterns and know if there are problems with our site. We may also use tools in emails to track information about our mailings for various reasons. We are not responsible for and do not control how third-party services use your information.<br /><br />

                We may place online advertising with third parties which will be shown on other sites on the Internet. In some cases, those third parties may decide which ads to show you based on your prior visits to the site. At no time will you be personally identified to those third parties, nor will any of the information you share with us be shared with those third party vendors. If you prefer to opt out of the use of these third party cookies on the site, you can do so by visiting the Network Advertising Initiative opt out page.<br /><br />

                We log standard technical information, such as your IP address and the kind of browser you use. We log this information for troubleshooting purposes and to track which pages people visit in order to improve the site. We do not use log files to track a particular individual’s use of the website.<br /><br />

                <b>How to Unsubscribe or Opt Out</b><br /><br />

                You may opt out of receiving future communications by using the unsubscribe procedure specified on the email message or by contacting team@candidatexyz.com.<br />

                <b>How We Notify You About Privacy Policy Changes</b><br /><br />

                We retain the right to amend or otherwise update this Privacy Policy at any time. By using our site, you consent to the collection and use of the information as we have described. If we change our policies and practices, we will post the changes in our Privacy Statement so that you are always aware of them. With this knowledge, you can make an informed decision about whether you wish to provide personal information to us.<br /><br />

                <b>How To Contact Us</b><br /><br />

                Questions regarding this Privacy Policy should be emailed to team@candidatexyz.com<br /><br />

                <i>Updated March 11, 2018</i><br /><br />
            </div>
        );
    }
}
