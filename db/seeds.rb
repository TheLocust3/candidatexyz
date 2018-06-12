Content.create(content_type: 'text', identifier: 'websiteTitle', content: { text: 'CandidateXYZ' })

# email
Content.create(content_type: 'image', identifier: 'emailHeaderImage', content: { image: 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59933e3e7131a5f7bfb18c09/1518809293655/?format=1500w' })
Content.create(content_type: 'text', identifier: 'emailFooterBlurb', content: { text: '
    A sample footer
' })

# help
Content.create(content_type: 'text', identifier: 'helpSampleText', content: { text: 'Some sample text' })
Post.create(post_type: 'help', url: 'help-sample-long', title: 'Sample Post', body: "
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec condimentum turpis, eu commodo arcu. Phasellus ut nibh urna. Nulla lobortis purus sollicitudin varius malesuada. Fusce in lacus ac massa dapibus mattis. Donec finibus, nisl non dignissim dictum, metus nulla aliquam augue, vitae egestas diam ligula in mi. Donec pretium placerat mauris efficitur tempor. Pellentesque eu enim neque. Fusce laoreet tortor at justo consectetur, in bibendum lectus gravida. Fusce ligula ante, consequat a lorem vitae, pretium laoreet est. Integer ligula dui, eleifend ut ipsum vitae, blandit hendrerit leo. Etiam pharetra orci ut justo volutpat tempor. Pellentesque id augue erat. Quisque in risus mauris. Donec at fermentum turpis.</p>")

# action
Content.create(content_type: 'text', identifier: 'actionHeader', content: { text: 'Take Action.' })
Content.create(content_type: 'text', identifier: 'actionSubtitle', content: { text: 'MAKE A DIFFERENCE' })
Content.create(content_type: 'text', identifier: 'actionBody', content: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa efficitur, laoreet ex malesuada, scelerisque sem. Nam porttitor elit at felis molestie aliquet. Sed id metus massa. Etiam congue magna eget vulputate hendrerit. Proin hendrerit maximus ipsum, ut lobortis sem ultrices et. Integer quis odio egestas, tristique purus sit amet, pretium ante. Pellentesque tincidunt mollis libero non imperdiet.' })
Content.create(content_type: 'text', identifier: 'actionEnding', content: { text: 'Join me.' })

Content.create(content_type: 'image', identifier: 'actionSignature', content: { image: 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/599d08df197aea73adf91e33/1503463674117/seth-moulton-navy.png?format=300w' })

# contact
Content.create(content_type: 'text', identifier: 'contactHeader', content: { text: 'Contact' })
Content.create(content_type: 'text', identifier: 'contactBlurb', content: { text: "Submit your comments, suggestions or feedback for CandidateXYZ’s election campaign here. For inquiries regarding official business, please contact CandidateXYZ' office." })
Content.create(content_type: 'text', identifier: 'contactVisitHeadline', content: { text: 'Contact' })
Content.create(content_type: 'text', identifier: 'contactVisitAddress', content: { text: '11 Beacon St, Boston, MA 02108' })
Content.create(content_type: 'text', identifier: 'contactPOBoxHeadline', content: { text: 'Write' })
Content.create(content_type: 'text', identifier: 'contactPOBoxAddress', content: { text: 'PO Box 1234, Boston, MA 02108' })
Content.create(content_type: 'text', identifier: 'contactCallHeadline', content: { text: 'Call' })
Content.create(content_type: 'text', identifier: 'contactPhoneNumber', content: { text: '123-456-7890' })

# index
Content.create(content_type: 'raw', identifier: 'indexBackground', content: 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59cd9e5032601e2e1011ec17/1506647684440/Seth-headshot-smile.jpg?format=2500w')

    # join card
    Content.create(content_type: 'text', identifier: 'joinCardTitle', content: { text: 'Join CandidateXYZ' })
    Content.create(content_type: 'text', identifier: 'joinCardBlurb', content: { text: 'You should totally sign up' })

Content.create(content_type: 'slideshow', identifier: 'indexSlideshow', content: [ "https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/59b80b5eccc5c57630823222/59b80b5ef43b558af35fdbde/1506485137482/IMG_1527+copy.JPG?format=1000w", "https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/59b80b5eccc5c57630823222/59e773aeb07869e5602d55c0/1508340678954/IMG_1790+copy.JPG?format=1000w", "https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/59b80b5eccc5c57630823222/59b80b7c37c581a69ce50d65/1506485130673/DSC_2874+copy.JPG?format=1000w", "https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/59b80b5eccc5c57630823222/59b80b692994caa2f5fe13f4/1506485127056/140712-0622.jpg?format=1000w", "https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/59b80b5eccc5c57630823222/59cb2374ccc5c5f4ec3125b0/1506485120534/P1070026+copy.JPG?format=1000w" ])
Content.create(content_type: 'text', identifier: 'slideshowBlurb', content: { text: 'CandidateXYZ is working to put people over politics, ensure that every American has the opportunity to succeed, and tackle the towering challenges of today and tomorrow.' })
Content.create(content_type: 'text', identifier: 'slideshowLink', content: { text: 'MEET CANDIDATEXYZ &raquo;' })

    # join team panel
    Content.create(content_type: 'raw', identifier: 'joinTeamBackground', content: 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59c33b9c18b27d0daca27f1e/1503727352927/unspecified-43.jpg?format=2500w')
    Content.create(content_type: 'text', identifier: 'joinTeamPanelTitle', content: { text: 'Join Team CandidateXYZ' })
    Content.create(content_type: 'link', identifier: 'joinTeamPanelDonateLink', content: { text: 'DONATE', url: 'https://secure.actblue.com' })

# media-kit
Content.create(content_type: 'text', identifier: 'mediaKitHeader', content: { text: 'Media Kit' })
Content.create(content_type: 'text', identifier: 'mediaKitPressContactHeadline', content: { text: 'Press Contact' })
Content.create(content_type: 'text', identifier: 'mediaKitPressSecretaryContact', content: { text: '
    A cool person, Press Secretary<br />
    Email: cool@candidatexyz.com' })
Content.create(content_type: 'text', identifier: 'mediaKitBiographyHeadline', content: { text: 'Biography' })
Content.create(content_type: 'text', identifier: 'mediaKitPhotosHeadline', content: { text: 'Photos' })

Content.create(content_type: 'image', identifier: 'mediaKitPhoto1', content: { image: 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59e4f6f5cf81e0df88687f5f/1508340413551/SethMoulton.jpg?format=750w' })
Content.create(content_type: 'image', identifier: 'mediaKitPhoto2', content: { image: 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59e4fbbecf81e0df8868ccbf/1508340405190/Najaf.jpg?format=750w' })
Content.create(content_type: 'image', identifier: 'mediaKitPhoto3', content: { image: 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/5a873053c83025fb2e2ecfb7/1518809178074/20180213+Moulton+%28Robin+Lubbock-WBUR%29.jpg?format=750w' })
Content.create(content_type: 'image', identifier: 'mediaKitPhoto4', content: { image: 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59e507458fd4d22a7ab90652/1508181849020/IMG_0322.jpg?format=750w' })

# meet
Content.create(content_type: 'raw', identifier: 'meetBackground', content: 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59cc78eaf43b551e79ff018c/1506572620446/20141104_0824+Seth+Moulton+copy.jpg?format=2500w')
Content.create(content_type: 'text', identifier: 'meetHeader', content: { text: 'Meet CandidateXYZ.' })

# privacy
Content.create(content_type: 'text', identifier: 'privacyHeader', content: { text: 'Privacy Policy' })
Content.create(content_type: 'text', identifier: 'privacyPolicy', content: { text: '

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
' })

# short-bio
Content.create(content_type: 'text', identifier: 'shortBioHeader', content: { text: 'Abbreviated biography' })
Content.create(content_type: 'text', identifier: 'shortBioBlurb', content: { text: '
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit scelerisque cursus. Morbi laoreet gravida turpis, vel iaculis erat pharetra ac. Sed volutpat elementum elit, vel tincidunt tortor gravida vehicula. Fusce dapibus lacus id ante aliquet elementum. Phasellus finibus felis imperdiet turpis pretium auctor. In hac habitasse platea dictumst. Praesent in arcu vel enim dapibus fermentum. In fringilla urna et elit euismod pharetra. Donec tincidunt, ipsum eget luctus condimentum, odio est accumsan sem, sed vulputate massa nulla sed mauris. Mauris sed nisl diam. Ut aliquet, leo a faucibus rhoncus, felis turpis maximus velit, eget facilisis neque magna pretium ipsum. Nam in quam imperdiet, rutrum dui eu, sagittis nunc.<br /><br />

Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus porta, lorem nec dictum imperdiet, quam mauris feugiat eros, sed mattis orci libero at felis. Suspendisse pulvinar congue dui at molestie. Praesent laoreet lectus eu metus dictum, ac sollicitudin nisl fringilla. Nulla faucibus eleifend dolor, non bibendum lorem ullamcorper eget. Cras venenatis eleifend magna tempor eleifend. Vestibulum aliquet urna in mi lacinia, vitae consectetur erat lacinia. Maecenas congue placerat ligula. Donec cursus lobortis laoreet. Sed tempor, urna sit amet laoreet gravida, ipsum justo sollicitudin odio, sollicitudin scelerisque quam est eu ipsum. Sed id eleifend nisl. Proin scelerisque ornare ex eu egestas. Curabitur sagittis ante et mi volutpat accumsan. Duis ultricies mi sed egestas volutpat. Nulla et sagittis elit, nec consectetur purus. Nunc ullamcorper odio vitae tortor malesuada pretium.<br />' })

# sign-up
Content.create(content_type: 'text', identifier: 'signUpHeader', content: { text: 'Join us!' })
Content.create(content_type: 'text', identifier: 'signUpSubtitle', content: { text: 'How can we reach you?' })

# footer
    # social-media-links
    Content.create(content_type: 'link', identifier: 'facebook', content: { text: 'Facebook', url: 'http://www.facebook.com' })
    Content.create(content_type: 'link', identifier: 'twitter', content: { text: 'Twitter', url: 'http://www.twitter.com' })
    Content.create(content_type: 'link', identifier: 'instagram', content: { text: 'Instagram', url: 'http://www.instagram.com' })
    Content.create(content_type: 'link', identifier: 'youtube', content: { text: 'Youtube', url: 'http://www.youtube.com' })

Content.create(content_type: 'link', identifier: 'footerContact', content: { text: 'Contact', url: '/contact' })
Content.create(content_type: 'link', identifier: 'footerPrivacy', content: { text: 'Privacy', url: '/privacy' })

    # approved-by
    Content.create(content_type: 'text', identifier: 'approvedByBlurb', content: { text: '
        APPROVED BYCANDIDATEXYZ.<br />
        PAID FOR BY CANDIDATEXYZ FOR OFFICE.<br />
        ADDRESS
    ' })

# navbar
Content.create(content_type: 'image', identifier: 'logo', content: { image: 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59933e3e7131a5f7bfb18c09/1518809293655/?format=1500w' })

Content.create(content_type: 'link', identifier: 'navLink1', content: { text: 'Meet CandidateXYZ', url: '/meet' })
Content.create(content_type: 'link', identifier: 'navLink2', content: { text: 'On the Issues', url: '/issues' })
Content.create(content_type: 'link', identifier: 'navLink3', content: { text: 'Take Action', url: '/action' })
Content.create(content_type: 'link', identifier: 'navButton', content: { text: 'Donate', url: 'https://secure.actblue.com' })

Content.create(content_type: 'text', identifier: 'meetCandidate', content: { text: 'Meet CandidateXYZ' })

User.create(email: 'jake.kinsella@gmail.com', password: 'password', admin: true, superuser: true)
User.create(email: 'test@candidatexyz.com', password: 'password', admin: false)

# splashPage
Content.create(content_type: 'raw', identifier: 'splashPageBackground', content: 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59cc37a49f745669f140c067/1506555832105/IMG_0459+copy.jpg?format=2500w')
Content.create(content_type: 'text', identifier: 'splashPageHeadline', content: { text: 'Join CandidateXYZ' })
Content.create(content_type: 'text', identifier: 'splashPageButton', content: { text: 'Go to CandidateXYZ.com' })

# issues

# news
Content.create(content_type: 'text', identifier: 'newsHeader', content: { text: 'News' })

    # news panel
    Content.create(content_type: 'text', identifier: 'newsPanelHeadline', content: { text: 'Latest News' })
    Content.create(content_type: 'text', identifier: 'newsPanelButton', content: { text: 'View All News' })

# volunteer panel
Content.create(content_type: 'text', identifier: 'volunteerPanelHeadline', content: { text: 'Volunteer with us.' })
Content.create(content_type: 'raw', identifier: 'voluneteerHelpOptions', content: 'Data Entry,Make Calls, Door-to-Door Canvassing,Share information and news on social media,Hold Signs/Standouts')

# party
Content.create(content_type: 'text', identifier: 'partyAboutPanelHeadline', content: { text: 'The Reading Democrats' })

Content.create(content_type: 'text', identifier: 'partyJoinPanelHeadline', content: { text: 'Join Us!' })

Content.create(content_type: 'text', identifier: 'partyJoinPanelSubtitle', content: { text: 'You better join us' })

Post.create(post_type: 'party-about-panel', url: 'party-about', title: '', body: "
<p>The Boston Ward 5 Democratic Committee conducts the official business of the Massachusetts Democratic Party in Boston Ward 5, which includes Beacon Hill, Bay Village, Back Bay, and parts of the South End, Chinatown and Fenway.

We advocate for the election of Democrats at the local, state, and national level.

In addition, we support public policies that are important to Boston, to the Commonwealth of Massachusetts, and to the nation. We also help our neighbors stay informed.</p>")

Content.create(content_type: 'text', identifier: 'partyAboutUsHeadline', content: { text: 'About Us' })

Content.create(content_type: 'text', identifier: 'partyEventsHeadline', content: { text: 'Events' })

Post.create(post_type: 'party-events', url: 'party-events-blurb', title: '', body: "
<p>We got lots of events that you should come to!</p>")


Content.create(content_type: 'raw', identifier: 'partyCalendarUrl', content: 'https://calendar.google.com/calendar/embed?src=u037gu187lnt79755tn76hrkos%40group.calendar.google.com&ctz=America%2FNew_York')

Content.create(content_type: 'text', identifier: 'partyGetInvolvedHeadline', content: { text: 'Get Involed' })
Post.create(post_type: 'party-involved', url: 'party-involved-blurb', title: '', body: "
<p>We've got lots of ways for you to get involved with us'!</p>")

Content.create(content_type: 'text', identifier: 'partyVolunteerPanelHeadline', content: { text: 'Volunteer With Us' })
Content.create(content_type: 'text', identifier: 'partyVolunteerPanelSubtitle', content: { text: 'We do cool shit' })

# posts
Post.create(post_type: 'meet', url: 'meet-body', title: '', body: "<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa efficitur, laoreet ex malesuada, scelerisque sem. Nam porttitor elit at felis molestie aliquet. Sed id metus massa. Etiam congue magna eget vulputate hendrerit. Proin hendrerit maximus ipsum, ut lobortis sem ultrices et. Integer quis odio egestas, tristique purus sit amet, pretium ante. Pellentesque tincidunt mollis libero non imperdiet.<br /><br />

    Aliquam cursus sagittis augue, eu volutpat risus iaculis sed. Nulla tempus elementum est et rutrum. Pellentesque sed tempor lectus. Nunc pharetra erat sit amet lectus molestie, ac dignissim lacus fermentum. Aliquam nec tincidunt neque. Cras id sagittis velit, id ornare quam. Vivamus turpis ante, placerat et maximus a, laoreet ac nibh. Mauris semper consequat mi, at sodales est pellentesque sed. Praesent dignissim, ipsum vel porta posuere, nisl eros auctor orci, in ultrices dui enim sed felis. Proin iaculis elementum purus id iaculis. Fusce quis nisi cursus, fringilla ex nec, fringilla lectus. Phasellus ornare fermentum posuere. Nam in mi ornare, efficitur diam ac, scelerisque elit.<br /><br />

    Cras pellentesque tempor vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec elit orci, molestie nec efficitur et, malesuada et enim. In hendrerit eleifend eros et finibus. Nulla facilisi. Aenean auctor eros ut tortor rutrum, sit amet commodo magna posuere. Sed a aliquam risus.<br /><br />

    In eget sem lacus. Etiam tincidunt est a auctor tempus. Vestibulum porta sed justo non scelerisque. Sed est metus, venenatis sit amet lacinia sed, iaculis eu justo. Donec ligula justo, tincidunt eu augue vel, euismod ultrices libero. Aliquam sed cursus dui. Mauris porttitor ac nisi vel elementum. Aenean tempus vehicula velit, eget dictum lectus eleifend id. Donec a quam condimentum, suscipit tortor nec, dapibus neque. Morbi eleifend placerat blandit. Fusce molestie finibus est, et dignissim metus auctor nec. Nullam aliquam, mauris a semper cursus, risus tortor porttitor dui, nec rutrum turpis augue ut libero. Aliquam non neque posuere, vehicula purus tincidunt, pretium tortor. Proin semper ipsum eget nibh varius eleifend. Sed nibh sapien, molestie vel ligula at, interdum condimentum massa. Sed tempor maximus sem, ac malesuada purus efficitur in.<br /><br />

    Praesent ac erat ut lorem iaculis vehicula in vitae tellus. Sed interdum sodales tellus, vel fermentum nisi rhoncus a. Sed velit tellus, tempor hendrerit ligula nec, consequat pretium neque. Proin sed neque augue. Quisque accumsan euismod libero a maximus. Curabitur vitae viverra turpis. Nullam porttitor risus et leo luctus dignissim. Integer vel rutrum massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar dui nunc, sit amet accumsan ante gravida non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sit amet ornare tortor. Nam vel mollis lacus
</p>")

Post.create(post_type: 'issues-page', url: 'issues-blurb', title: 'On the Issues', body: "<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa efficitur, laoreet ex malesuada, scelerisque sem. Nam porttitor elit at felis molestie aliquet. Sed id metus massa. Etiam congue magna eget vulputate hendrerit. Proin hendrerit maximus ipsum, ut lobortis sem ultrices et. Integer quis odio egestas, tristique purus sit amet, pretium ante. Pellentesque tincidunt mollis libero non imperdiet.
Praesent ac erat ut lorem iaculis vehicula in vitae tellus. Sed interdum sodales tellus, vel fermentum nisi rhoncus a. Sed velit tellus, tempor hendrerit ligula nec, consequat pretium neque. Proin sed neque augue. Quisque accumsan euismod libero a maximus. Curabitur vitae viverra turpis. Nullam porttitor risus et leo luctus dignissim. Integer vel rutrum massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar dui nunc, sit amet accumsan ante gravida non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sit amet ornare tortor. Nam vel mollis lacus.
</p>")

Post.create(post_type: 'issues', url: 'income-and-wealth-inequality', title: 'Income and Wealth Inequality', body: "<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa efficitur, laoreet ex malesuada, scelerisque sem. Nam porttitor elit at felis molestie aliquet. Sed id metus massa. Etiam congue magna eget vulputate hendrerit. Proin hendrerit maximus ipsum, ut lobortis sem ultrices et. Integer quis odio egestas, tristique purus sit amet, pretium ante. Pellentesque tincidunt mollis libero non imperdiet.
Praesent ac erat ut lorem iaculis vehicula in vitae tellus. Sed interdum sodales tellus, vel fermentum nisi rhoncus a. Sed velit tellus, tempor hendrerit ligula nec, consequat pretium neque. Proin sed neque augue. Quisque accumsan euismod libero a maximus. Curabitur vitae viverra turpis. Nullam porttitor risus et leo luctus dignissim. Integer vel rutrum massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar dui nunc, sit amet accumsan ante gravida non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sit amet ornare tortor. Nam vel mollis lacus.
</p>")

Post.create(post_type: 'issues', url: 'its-time-to-make-college-tuition-free-and-debt-free', title: "It's Time to Make College Tuition Free and Debt Free", body: "<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa efficitur, laoreet ex malesuada, scelerisque sem. Nam porttitor elit at felis molestie aliquet. Sed id metus massa. Etiam congue magna eget vulputate hendrerit. Proin hendrerit maximus ipsum, ut lobortis sem ultrices et. Integer quis odio egestas, tristique purus sit amet, pretium ante. Pellentesque tincidunt mollis libero non imperdiet.
Praesent ac erat ut lorem iaculis vehicula in vitae tellus. Sed interdum sodales tellus, vel fermentum nisi rhoncus a. Sed velit tellus, tempor hendrerit ligula nec, consequat pretium neque. Proin sed neque augue. Quisque accumsan euismod libero a maximus. Curabitur vitae viverra turpis. Nullam porttitor risus et leo luctus dignissim. Integer vel rutrum massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar dui nunc, sit amet accumsan ante gravida non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sit amet ornare tortor. Nam vel mollis lacus.
<p>")

# default themes
Theme.create(name: 'Material', description: "A modern theme based on Google's Material Design", editable: false, class_name_prefix: 'mdc-', styling: { 'textField': { 'color': '#00427c' }, 'textArea': { 'color': '#00427c' }, 'select': { 'color': '#00427c' } })
Content.create(content_type: 'raw', identifier: 'globalTheme', content: 'Material')

# default panels (pasted from rails console)
Panel.create(name: "Footer", description: "", elements: {"0"=>{"index"=>"0", "uuid"=>"row-5d6a6987-adb4-4d37-a8d4-551d5edc8f81", "type"=>"row", "elements"=>{"0"=>{"index"=>"0", "uuid"=>"cell-791ec571-6191-4568-a5de-9230c61f810b", "type"=>"cell", "elements"=>{"0"=>{"index"=>"0", "uuid"=>"iconButton-4ca6f969-8bc1-4ca8-9bab-408148e09efe", "type"=>"iconButton", "icon"=>"fa-facebook-f", "action"=>"link", "actionData"=>"http://www.facebook.com/", "theme"=>{"color"=>"#ffffff", "fontSize"=>"2em", "colorHover"=>"#cccccc"}, "url"=>"http://www.facebook.com/"}, "1"=>{"index"=>"1", "uuid"=>"iconButton-24dc7132-f08a-4f87-824e-030788c15a38", "type"=>"iconButton", "icon"=>"fa-twitter", "action"=>"link", "actionData"=>"http://www.twitter.com/", "theme"=>{"fontSize"=>"2em", "color"=>"#ffffff", "colorHover"=>"#cccccc"}, "url"=>"http://www.twitter.com/"}, "2"=>{"index"=>"2", "uuid"=>"iconButton-a3002076-c77d-45c2-990d-7d64dc212d3c", "type"=>"iconButton", "icon"=>"fa-instagram", "action"=>"link", "actionData"=>"http://www.instagram.com/", "theme"=>{"fontSize"=>"2em", "color"=>"#ffffff", "colorHover"=>"#cccccc"}, "url"=>"http://www.instagram.com/"}, "3"=>{"index"=>"3", "uuid"=>"iconButton-418ef1e0-3bfe-4446-9ddd-a1d6ce211263", "type"=>"iconButton", "icon"=>"fa-youtube", "action"=>"link", "actionData"=>"http://www.youtube.com/", "theme"=>{"fontSize"=>"2em", "color"=>"#ffffff", "colorHover"=>"#cccccc"}, "url"=>"http://www.youtube.com/"}}, "width"=>"100"}}, "height"=>"10", "heightType"=>"vh"}, "1"=>{"index"=>"1", "uuid"=>"row-75a5e4d0-2505-4a73-83c8-21fc5726d671", "type"=>"row", "height"=>"10", "elements"=>{"0"=>{"index"=>"0", "uuid"=>"cell-cd7b921e-3da2-4013-bc7f-334f447f86d7", "type"=>"cell", "elements"=>{"0"=>{"index"=>"0", "uuid"=>"link-301ccde9-4ac0-4cf3-802b-e4678138ad2b", "type"=>"link", "text"=>"Contact", "url"=>"/contact", "theme"=>{"color"=>"#ffffff", "custom"=>{"textDecoration"=>"none"}, "colorHover"=>"#cccccc"}}, "1"=>{"index"=>"1", "uuid"=>"link-6d58a4af-70e5-4e1e-838d-6739a175e773", "type"=>"link", "text"=>"Privacy", "url"=>"/privacy", "theme"=>{"color"=>"#ffffff", "colorHover"=>"#cccccc", "custom"=>{"textDecoration"=>"none"}}}}, "width"=>"100"}}, "heightType"=>"vh"}, "2"=>{"index"=>"2", "uuid"=>"row-d90b9daa-1afa-496d-a425-4cf0ffdd7ea1", "type"=>"row", "height"=>"10", "elements"=>{"0"=>{"index"=>"0", "uuid"=>"cell-58717838-5139-46df-883f-b932fc5da523", "type"=>"cell", "elements"=>{"0"=>{"index"=>"0", "uuid"=>"link-af953316-c5da-4f0d-b931-acfafc149b1c", "type"=>"link", "text"=>"Staff Login", "url"=>"/sign-in", "theme"=>{"color"=>"#ffffff", "colorHover"=>"#cccccc", "custom"=>{"textDecoration"=>"none"}, "fontSize"=>"18px"}}}, "width"=>"100"}}, "heightType"=>"vh"}, "3"=>{"index"=>"3", "uuid"=>"row-1899644b-4af4-4125-b4a8-975a2f6c4605", "type"=>"row", "height"=>"10", "elements"=>{"0"=>{"index"=>"0", "uuid"=>"cell-a8d3ed39-f122-4d0e-aa87-9b82bb31f163", "type"=>"cell", "elements"=>{"0"=>{"index"=>"0", "uuid"=>"text-6b64b528-6ffc-4a5a-8748-dba7ed1807df", "type"=>"text", "text"=>"<p style=\"text-align:center;\"><span style=\"font-size: 12px;\">APPROVED BYCANDIDATEXYZ.</span></p>\n<p style=\"text-align:center;\"><span style=\"font-size: 12px;\">PAID FOR BY CANDIDATEXYZ FOR OFFICE.</span></p>\n<p style=\"text-align:center;\"><span style=\"font-size: 12px;\">ADDRESS</span></p>\n", "theme"=>{"custom"=>{"border"=>"#ccc solid 1px", "width"=>"250px", "margin"=>"auto"}}}}, "width"=>"100"}}, "heightType"=>"vh"}}, settings: {"height"=>"40", "theme"=>{"backgroundColor"=>"#00427c", "custom"=>{"color"=>"white"}}, "heightType"=>"vh"})
