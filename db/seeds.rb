# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Content.create(content_type: 'text', identifier: 'slideshowBlurb', content: 'CandidateXYZ is working to put people over politics, ensure that every American has the opportunity to succeed, and tackle the towering challenges of today and tomorrow.')
Content.create(content_type: 'text', identifier: 'joinCardBlurb', content: 'You should totally sign up')
Content.create(content_type: 'text', identifier: 'joinCardTitle', content: 'Join CandidateXYZ')
Content.create(content_type: 'text', identifier: 'slideshowLink', content: 'MEET CANDIDATEXYZ')
Content.create(content_type: 'text', identifier: 'joinTeamPanelTitle', content: 'Join Team CandidateXYZ &raquo;')
Content.create(content_type: 'text', identifier: 'candidateName', content: 'CandidateXYZ')
Content.create(content_type: 'text', identifier: 'candidateForOffice', content: 'CandidateXYZ for office')
Content.create(content_type: 'text', identifier: 'candidateAddress', content: 'Address')
Content.create(content_type: 'text', identifier: 'takeAction', content: 'Take Action.')
Content.create(content_type: 'text', identifier: 'takeActionSubtitle', content: 'MAKE A DIFFERENCE')
Content.create(content_type: 'text', identifier: 'takeActionBody', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa efficitur, laoreet ex malesuada, scelerisque sem. Nam porttitor elit at felis molestie aliquet. Sed id metus massa. Etiam congue magna eget vulputate hendrerit. Proin hendrerit maximus ipsum, ut lobortis sem ultrices et. Integer quis odio egestas, tristique purus sit amet, pretium ante. Pellentesque tincidunt mollis libero non imperdiet.')
Content.create(content_type: 'text', identifier: 'takeActionEnding', content: 'Join me.')
Content.create(content_type: 'text', identifier: 'meetHeader', content: 'Meet CandidateXYZ.')
Content.create(content_type: 'text', identifier: 'signUpHeader', content: 'Join us!')
Content.create(content_type: 'text', identifier: 'signUpSubtitle', content: 'How can we reach you?')

Content.create(content_type: 'image', identifier: 'logo', content: 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59933e3e7131a5f7bfb18c09/1518809293655/?format=1500w')

Content.create(content_type: 'raw', identifier: 'homeBackground', content: 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59cd9e5032601e2e1011ec17/1506647684440/Seth-headshot-smile.jpg?format=2500w')
Content.create(content_type: 'raw', identifier: 'joinBackground', content: 'https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/t/59c33b9c18b27d0daca27f1e/1503727352927/unspecified-43.jpg?format=2500w')

Content.create(content_type: 'slideshow', identifier: 'homePageSlideshow', content: '["https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/59b80b5eccc5c57630823222/59b80b5ef43b558af35fdbde/1506485137482/IMG_1527+copy.JPG?format=1000w", "https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/59b80b5eccc5c57630823222/59e773aeb07869e5602d55c0/1508340678954/IMG_1790+copy.JPG?format=1000w", "https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/59b80b5eccc5c57630823222/59b80b7c37c581a69ce50d65/1506485130673/DSC_2874+copy.JPG?format=1000w", "https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/59b80b5eccc5c57630823222/59b80b692994caa2f5fe13f4/1506485127056/140712-0622.jpg?format=1000w", "https://static1.squarespace.com/static/598dd363a5790a4026dac8ab/59b80b5eccc5c57630823222/59cb2374ccc5c5f4ec3125b0/1506485120534/P1070026+copy.JPG?format=1000w"]')
