const data = [
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"TigerLaunch"
    ,Link:"http://www.tigerlaunch.com/"
    ,Notes:"TigerLaunch is a national entrepreneurship competition hosted by Princeton University. There are multiple rounds, starting with an application, then regionals, then a final competition at Princeton. 2017 Finals are April 7-8, 2017 - look out for next year."
  },
  {
     Type:"Competitions"
    ,Category:"Competition"
    ,Name:"Cupids Cup"
    ,Link:"http://www.cupidscup.com/"
    ,Notes:"Cupids Cup is run by Kevin Plank, the founder of Under Armour. There is 100k worth of equity free grant money for student entrepreneurs. 2017 Competition opened in Oct 2016 and applications closed Jan 2017 - look out for next year."
  },
  {
     Type:"Competitions"
    ,Category:"Competition"
    ,Name:"Rise of the Rest"
    ,Link:"http://www.riseofrest.com/"
    ,Notes:"Rise of the Rest is run by Steve Case, former co-founder and CEO of AOL. Startups can win 100k investments from Steve Case. No updates about 2017."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"Rice Business Plan Competition"
    ,Link:"http://www.ricebusinessplancompetition.com/"
    ,Notes:"Rice Business Plan competition is the largest startup pitch competition in the country. $1 million + in funding available - however, it is for graduate students."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"Northwestern University Venture Challenge"
    ,Link:"https://nuvc.nuisepic.com/"
    ,Notes:"Northwestern University's pitch competition - over $50k in prizes available in the past and has been open to NU students and alum in past. No updates for 2017 yet but competition usually happens around mid-year. Site is currently down."
  },
  {
     Type:"Competitions"
    ,Category:"Competition"
    ,Name:"Student Startup Madness"
    ,Link:"http://studentstartupmadness.com/"
    ,Notes:"National competition for college startups that ends with a final pitch at SXSW. Finals hosted this year on March 10-14, 2017."
  },
  {
     Type:"Competitions"
    ,Category:"Competition"
    ,Name:"Global Student Entrepreneur Awards"
    ,Link:"http://www.gsea.org"
    ,Notes:"Global Student Entrepreneur Awards is hosted by Entrepreneur Organization (EO), a prominent global entrepreneurship organization. GSEA hosts local competitions in cities all across the world. Each country then has a national final, and then there is a global final."
  },
  {
     Type:"Competitions"
    ,Category:"Competition"
    ,Name:"1776 Cup"
    ,Link:"https://www.1776.vc/challenge-cup/"
    ,Notes:"Worldwide tournament for startups to win prizes and money. Multiple rounds. First round is held at local hubs that work in partnership with 1776. Open to students."
  },
  {
     Type:"Competitions"
    ,Category:"Competition"
    ,Name:"U.Pitch"
    ,Link:"https://futurefounders.com/startup/UPitch/"
    ,Notes:"Pitch competition hosted by Future Founders - $10k in prizes up for grabs. 2017 competition will be November 16, 2017."
  },
  {
     Type:"Competitions"
    ,Category:"Competition"
    ,Name:"Self Employment in the Arts Pitch Competition"
    ,Link:"http://www.selfemploymentinthearts.com/idea-pitch-competition-for-creatives"
    ,Notes:"Pitch competition focused on businesses that have an artistic component."
  },
  {
     Type:"Competitions"
    ,Category:"Competition"
    ,Name:"Dream It. Code It. Win It."
    ,Link:"https://dreamitcodeitwinit.wordpress.com/"
    ,Notes:"Pitch competition with over 80k in prizes. Relatively new. Linked to NYC. Need to program something to be eligible."
  },
  {
     Type:"Competitions"
    ,Category:"Competition"
    ,Name:"Arch Grants"
    ,Link:"http://archgrants.org/"
    ,Notes:"\"$50,000 Global Startup Competition\" Based out of St. Louis. Avenue for city to foster entrepreneurship by offering equity free funding so long as you build your company in St. Louis."
  },
  {
     Type:"Competitions"
    ,Category:"Competition"
    ,Name:"Booth-Yale Education Business Plan Competition"
    ,Link:"http://yaleeducationconference.com/education-business-plan-competition/"
    ,Notes:"Seed funding competition for edtech focused ideas jointly hosted by Booth School of Business and Yale School of Management."
  },
  {
     Type:"Competitions"
    ,Category:"Competition"
    ,Name:"Milken-PennGSE Business Plan Competition"
    ,Link:"http://www.educationcompetition.org/"
    ,Notes:"One of the most prestigious edtech focused pitch competitions offering seed funding for ideas and developed ventures."
  },
  {
     Type:"Competitions"
    ,Category:"Competition"
    ,Name:"MIT Clean Energy Prize"
    ,Link:"http://cep.mit.edu/"
    ,Notes:"CEP is open to any student, anywhere, who has a clean energy startup idea that can change the world. The four categories the competition is focused on include: Generating Energy, Delivering Energy, Improving Energy Usage, and Energy for Developing Economies. Over 225k in total prizes including a 100k grand prize for one team."
  },
  {
     Type:"Competitions"
    ,Category:"Competition"
    ,Name:"NYU Stern New Venture and Social Venture Competitions"
    ,Link:"http://www.stern.nyu.edu/experience-stern/about/departments-centers-initiatives/centers/w-r-Berkley-innovation-lab/entrepreneurship/for-nyu-entrepreneurs/300k-entrepreneurs-challenge"
    ,Notes:"$300k Entrepreneurship competition. At least one team member must have NYU affiliation. Divided into 3 tracks: New Venture Competition, Social Venture Competition, and Technology Venture Competition"
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"MIT 100K"
    ,Link:"http://www.mit100k.org/"
    ,Notes:"Pitch competition hosted by MIT. At least one team member must have MIT affiliation. There are 3 phases and prize money is given in each phase, leaving to the third phase where 100k is awarded."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"Tufts $100K New Ventures Competition"
    ,Link:"http://gordon.tufts.edu/competitions/100k-new-ventures-competition"
    ,Notes:"Pitch competition hosted by Tufts. At least one team member must have Tufts affiliation. Teams must be under 5 people. Deadline in Jan 2017."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"New Ventures Competition"
    ,Link:"http://www.hbs.edu/newventurecompetition/Pages/default.aspx"
    ,Notes:"Pitch competition hosted by Harvard Business School. Two tracks: Business and Social Enterprise. Business must have at least 1 HBS affiliated team member and Social Enterprise teams must be half HBS affiliated."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"Burton D. Morgan Business Plan Competition"
    ,Link:"http://www.purdue.edu/discoverypark/bdmce/competitions/business-plan-competition/index.php"
    ,Notes:"Pitch competition hosted by Purdue University. Team members must be Pursue students. Closed for 2017."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"Schurz Innovation Challenge at Purdue Fall 2017"
    ,Link:"http://www.purdue.edu/discoverypark/bdmce/competitions/schurz-innovation-challenge.php"
    ,Notes:"Pitch competition hosted by Purdue University for Purdue students. Focused on digital media ideas. Teams must be made of Purdue students."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"University of Chicago New Venture Challenge"
    ,Link:"https://research.chicagobooth.edu/nvc"
    ,Notes:"NVC is an accelerator that ends with a pitch competition. There are four tracks: NVC, Social NVC, Global NVC, and College NVC. College NVC is for college students with a requirement that the majority of the team members are undergrads and at least one from Chicago."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"University of Pennsylvania Startup Challenge"
    ,Link:"http://entrepreneurship.wharton.upenn.edu/startup-challenge/"
    ,Notes:"Pitch competition hosted by University of Pennsylvania. Multi-round, structured program. Team leader must be a University of Pennsylvania student. Groups must not have gotten over $100K in institutional funding."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"McGinnis Venture Competition"
    ,Link:"http://www.cmu.edu/swartz-center-for-entrepreneurship/events/mcginnis-venture-competition/"
    ,Notes:"Pitch competition hosted by Carnegie Mellon University. Multi-round, structured program with two virtual rounds and a final live pitch. Over $60k in investments available, 50k of which is towards the graduate student track. Final round in March 2017."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"Carnige Mellon University Venture Challenge"
    ,Link:"http://cmuvc.cmuuea.com/en/"
    ,Notes:"Pitch competition hosted by Carnegie Mellon University. However, open to all undergrads from any university. Must submit executive summary and pitch deck. First round application due in November and final competition in April of year."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"University of Dayton Business Plan Competition"
    ,Link:"http://sbaweb.udayton.edu/udbpc/"
    ,Notes:"Pitch competition hosted by University of Dayton. Three stages. First place prize is $25K. Applications due in October of year."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"Duke Startup Challenge"
    ,Link:"http://www.dukestartupchallenge.org/"
    ,Notes:"Pitch competition hosted by Duke University. Teams compete in three rounds over the course of 11 months. Teams must be made of students affiliated with Duke. Teams get $5k to work on their ventures full time over the summer and compete for $50k in the final round. First rounds due by October of the year."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"University of Oregon New Venture Championship"
    ,Link:"http://nvc.uoregon.edu/"
    ,Notes:"Pitch competition hosted by University of Oregon for graduate students. Teams with less than half undergraduate students may compete. There are 50k of prizes available. First round applications due in November of given year."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"University of California Berkley LAUNCH Competition"
    ,Link:"http://launch.berkeley.edu/"
    ,Notes:"University of California Berkley-affiliated accelerator that leads to a pitch competition with $90k in prize money. Applications due in November of the year."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"Syracuse University Panasci Business Plan Competition"
    ,Link:"http://whitman.syr.edu/programs-and-academics/centers-and-institutes/falcone/for-students/panasci/index.aspx"
    ,Notes:"Pitch competition hosted by Syracuse University. Team leader must be a Syracuse University current student, undergraduate or graduate. Teams must have received under $100k in institutional investments. Applications due in January of the year."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"NYS Business Plan Competition"
    ,Link:"http://cnse.albany.edu/NYSBusinessPlanCompetition.aspx"
    ,Notes:"Pitch competition for New York University school students. 150k in funding and in-kind services. First place prize is $50k."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"Giants Entrepreneurship Challenge"
    ,Link:"https://business.und.edu/undergraduate/school-of-entrepreneurship/entrepreneurship/entrepreneurship-challenge.cfm"
    ,Notes:"Pitch competition hosted by University of North Dakota. Different prize categories available. First round applications due in March of year."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"Baylor New Venture Competition"
    ,Link:"http://www.baylor.edu/business/newventurecompetition/"
    ,Notes:"Pitch competition hosted by Baylor University. Two tracks: Internet and Consumer Technology Companies, and Non-Internet and Consumer Technology Companies. First round applications due in November of year."
  },
  {
     Type:"Competitions"
    ,Category:"Competition"
    ,Name:"Venture Well E-Teams"
    ,Link:"https://venturewell.org/student-grants/"
    ,Notes:"Pitch competition with 3 stages and possibility to win 25K in first two stages and more in third stage. Open to students who attend schools that are Venture Well members (over 100, check site). Students must be working on an invention that addresses a social or environmental problem (e.g. healthcare, clean energy, etc.). Teams must be at least 2 students, either undergraduate or graduate."
  },
  {
     Type:"Competitions"
    ,Category:"Competition"
    ,Name:"Venture Well BMEidea"
    ,Link:"https://venturewell.org/bmeidea/"
    ,Notes:"Opportunity for biomedical engineering students working on early stage research to win up to $10K for idea validation."
  },
  {
     Type:"Competitions"
    ,Category:"Competition"
    ,Name:"LinkedIn ProFinder Contest"
    ,Link:"https://www.linkedin.com/profinder/blog/small-business-contest"
    ,Notes:"Small competition held by LinkedIn to promote their new service. Up to $10K in prizes. Open to people over 18 so college students are eligible."
  },
  {
     Type:"Competitions"
    ,Category:"Competition"
    ,Name:"The Zach Grant"
    ,Link:"https://www.fundera.com/resources/zach-grant"
    ,Notes:"Competition hosted by Fundera. Must submit video answering: Why did you start your own business? Must title video:  Fundera Zach Grant � Your Business Name and email: content@fundera.com once you apply. Due in January of year."
  },
  {
     Type:"Competitions"
    ,Category:"Competition - University"
    ,Name:"Its A Start Competition"
    ,Link:"http://itsastart.ca/2017/"
    ,Notes:"Canadian competition hosted by George Brown College. Focus on gaming."
  },
  {
     Type:"Opportunities"
    ,Category:"Organization"
    ,Name:"Future Founders"
    ,Link:"https://futurefounders.com/"
    ,Notes:"Future Founders is a Chicago-based organization that hosts entrepreneurship competitions and events. Check out their website for their resources and program."
  },
  {
     Type:"Opportunities"
    ,Category:"Fellowship"
    ,Name:"YCombinator Fellowship"
    ,Link:"https://blog.ycombinator.com/fellowship-v2/"
    ,Notes:"Ycombinator is the most prominent accelerator. They recently launched YC Fellowship, which is a smaller remote program that might be of interest to college students who cant commit to the full experience."
  },
  {
     Type:"Opportunities"
    ,Category:"Fellowship"
    ,Name:"Thiel Fellowship"
    ,Link:"http://thielfellowship.org/"
    ,Notes:"The Thiel Fellowship is a 2 year fellowship for students up to age 23 to work on an idea with 100k in funding from Peter Thiel."
  },
  {
     Type:"Opportunities"
    ,Category:"Fellowship"
    ,Name:"Venture for America"
    ,Link:"http://ventureforamerica.org/"
    ,Notes:"Fellowship program that connects recent graduates with jobs at startups. Entrepreneurship equivalent of Teach for America."
  },
  {
     Type:"Opportunities"
    ,Category:"Fellowship"
    ,Name:"KPCB Fellows"
    ,Link:"http://kpcbfellows.com/"
    ,Notes:"1 year fellowship program by KPCB, one of the top Silicon Valley venture firms, to work with their portfolio companies. 3 available tracks: engineering, design and product. Design and product deadlines are in January and engineering in September."
  },
  {
     Type:"Opportunities"
    ,Category:"Funding"
    ,Name:"1517"
    ,Link:"http://www.1517fund.com/"
    ,Notes:"Fund for student entrepreneurs. Offer small amounts of funding for promising ideas + can connect you with relevant people. Also travel to schools for office hours - you can reach out from their site."
  },
  {
     Type:"Opportunities"
    ,Category:"Fellowship"
    ,Name:"MIT Global Entrepreneurship Bootcamp"
    ,Link:"https://bootcamp.mit.edu/entrepreneurship/"
    ,Notes:"Week-long boot camp hosted by MIT. Must apply and be accepted. Program is hosted in a different country every year and people of all ages from all over the world attend. You're also required to take a few courses online before qualifying to attend. Tuition is a few thousand dollars but scholarship and aid is available."
  },
  {
     Type:"Opportunities"
    ,Category:"Organization"
    ,Name:"Major League Hacking"
    ,Link:"https://mlh.io/"
    ,Notes:"\"Major League Hacking (MLH) is the official student hackathon league.\" MLH hosts over 200 hackathons across the country and many have funding for travel reimbursements. Check out the website to find upcoming hackathons."
  },
  {
     Type:"Opportunities"
    ,Category:"Conference"
    ,Name:"Global Engagement Summit"
    ,Link:"http://theges.org/"
    ,Notes:"Global Engagement Summit is hosted by Northwestern University. It is a 4-5 day event where delegates from all across the world come together to attend workshops on building social ventures and non-profits. GES is for start ups with a social focus."
  },
  {
     Type:"Opportunities"
    ,Category:"Conference"
    ,Name:"ThinkChicago"
    ,Link:"http://www.thinkchicago.net/"
    ,Notes:"ThinkChicago is Chicago's program for introducing students and entrepreneurs to Chicago's start up ecosystem. Students get to hear from top Chicago start ups, tour 1871 (co-working facility), and get to attend Lollapalooza."
  },
  {
     Type:"Opportunities"
    ,Category:"Conference"
    ,Name:"Campus 1871"
    ,Link:"https://1871.com/campus1871/"
    ,Notes:"Campus 1871 a weekend-long program for students attending Chicago universities. Students pitch ideas and form teams. At the end of the program, students pitch to judges and can win prizes. 2017 deadline was in Feb 2017."
  },
  {
     Type:"Opportunities"
    ,Category:"Funding"
    ,Name:"Dorm Room Fund"
    ,Link:"http://dormroomfund.com/"
    ,Notes:"\"Student-run venture fund backed by First Round.\" Offer student entrepreneurs funding on friendly terms."
  },
  {
     Type:"Opportunities"
    ,Category:"Organization"
    ,Name:"Midway Ventures"
    ,Link:"http://www.midwayvc.com/"
    ,Notes:"Group based out of University of Chicago that offers student entrepreneurs consulting services if they take you on as a client."
  },
  {
     Type:"Opportunities"
    ,Category:"Fellowship"
    ,Name:"True Entrepreneur Corp"
    ,Link:"https://trueventures.com/tec/"
    ,Notes:"True Ventures host a summer program for up to 12 students to work at one of their portfolio companies."
  },
  {
     Type:"Opportunities"
    ,Category:"Conference"
    ,Name:"Business Today International Conference"
    ,Link:"http://www.businesstoday.org/conferences/42nd-international-conference/"
    ,Notes:"Hosted by Princeton University in NYC over a few days. BT International Conference features a social venture pitch competition available to accepted attendees. Five teams are selected as finalist to pitch at the conference to win $15K."
  },
  {
     Type:"Opportunities"
    ,Category:"Fellowship"
    ,Name:"Coding Bootcamps"
    ,Link:"https://www.switchup.org/"
    ,Notes:"Coding Bootcamps have sprung up in the past few years as a way to learn programming enough to be employed. Lots of mixed opinions on them but they are a viable option for many people. The main takeaways seem to be: you can do it on your own if you're disciplined enough, the value is in being able to work with others, consider the job placements, reputation, costs and instruction style before choosing. This site offers reviews from alums of many different boot camps. The top boot camps seem to be Hack Reactor, Fullstack, AppAcademy, and Dev Bootcamp (just based on a quick skim of the internet, do your own research)."
  },
  {
     Type:"Opportunities"
    ,Category:"Conference"
    ,Name:"Start @ a Startup"
    ,Link:"http://startup.businesstoday.org/"
    ,Notes:"Meet and hear from top engineers at Sequoia backed companies. Must apply and be accepted to this fully paid conference in NYC. 250 Engineers selected each year."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Business Tool"
    ,Name:"Stripe Atlas"
    ,Link:"https://stripe.com/atlas"
    ,Notes:"\"With Stripe Atlas, entrepreneurs can easily incorporate a U.S. company, set up a U.S. bank account, and start accepting payments with Stripe.\""
  },
  {
     Type:"Tools and Resources"
    ,Category:"Community"
    ,Name:"Hackathon Hackers"
    ,Link:"https://www.facebook.com/groups/hackathonhackers/"
    ,Notes:"Facebook group of over 50,000 members interested in Hackathons, computer science, tech and start ups. Mostly high school and college students."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Community"
    ,Name:"Forward Investor"
    ,Link:"https://www.facebook.com/groups/forwardinvestor/"
    ,Notes:"Highly curated and controlled Facebook group focused on sharing finance and markets new, including talk around startups and venture capital. Mostly young people under 25."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Business Tool"
    ,Name:"Business Model Canvas"
    ,Link:"https://strategyzer.com/canvas/business-model-canvas"
    ,Notes:"Business Model Canvas is a way to quickly understand the key components and aspects of any venture."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Community"
    ,Name:"Product Manager HQ"
    ,Link:"https://www.productmanagerhq.com/join-the-community/"
    ,Notes:"Slack Group with almost 2000 product managers and aspiring product managers. Cost $25 to join."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Learn Programming"
    ,Name:"Codeacademy"
    ,Link:"https://www.codecademy.com/"
    ,Notes:"One of the most beginner friendly ways to learn programming. Has greatly improved over the years. Now offers ability to pay for a monthly subscription that gives you access to a mentor via live chat. Useful for people who learn by asking lots of questions."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Learn Programming"
    ,Name:"Michael Hartls Ruby on Rails Tutorial"
    ,Link:"https://www.railstutorial.org/book"
    ,Notes:"One of the best resources to learn Ruby on Rails if you have a bit of prior programming experience with Ruby or another language. The book is available for free online and guides you to building a Twitter clone. Ruby on Rails is a great choice if you're interested in building web apps quickly."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Learn Programming"
    ,Name:"The Coding Train"
    ,Link:"https://www.youtube.com/user/shiffman"
    ,Notes:"Daniel Shiffman might be the most engaging YouTube teacher on the internet! Extremely engaging and fun YouTube videos teaching things like processing, a JavaScript library for visualizations, and other things like how to use an API or learning programming fundamentals."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Learn Programming"
    ,Name:"Ninja Net"
    ,Link:"https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg"
    ,Notes:"Great YouTube channel to learn NodeJs from scratch after learning JavaScript."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Learn Programming"
    ,Name:"LinkedIn Learning / Lynda"
    ,Link:"https://www.linkedin.com/learning/"
    ,Notes:"High quality online courses on all sorts of topics including JavaScript, NodeJs, C, etc. Requires a subscription ($30). Many universities offer students a subscription to Lynda.com so check if your university offers it."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Learn Programming"
    ,Name:"Coursera"
    ,Link:"https://www.coursera.org/"
    ,Notes:"One of the top online course providers. Free to take classes from top universities across the world!"
  },
  {
     Type:"Tools and Resources"
    ,Category:"Learn Programming"
    ,Name:"edX"
    ,Link:"https://www.edx.org/"
    ,Notes:"One of the top online course providers. Free to take classes from top universities across the world!"
  },
  {
     Type:"Tools and Resources"
    ,Category:"Learn Programming"
    ,Name:"Udemy"
    ,Link:"https://www.udemy.com/courses/"
    ,Notes:"Hundred of courses from instructors on all topics. Usually costs money but lots of promos floating on the internet to make courses cheap or free."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Learn Programming"
    ,Name:"Udacity"
    ,Link:"https://www.udacity.com/"
    ,Notes:"Online classes for free. Also offers Nano degrees (e.g. Artificial Intelligence) that offer guaranteed jobs if you complete them."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Learn Programming"
    ,Name:"TreeHouse"
    ,Link:"https://teamtreehouse.com/"
    ,Notes:"Same as LinkedIn Learning. High quality online courses. Some universities offer free subscriptions so check if your university does."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Reference"
    ,Name:"Product Hunt"
    ,Link:"https://www.producthunt.com/"
    ,Notes:"Useful site to stay up to date with new products being released. Very engaged community of builders."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Reference"
    ,Name:"AngelList"
    ,Link:"https://angel.co/"
    ,Notes:"Useful site to learn about specific start ups and find start up jobs."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Reference"
    ,Name:"CrunchBase"
    ,Link:"https://www.crunchbase.com/"
    ,Notes:"Should be your first resource to learn about a specific start up since it tells you basic information like what the company does, the team, founding date and any funding."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Learn Programming"
    ,Name:"Free Code Camp"
    ,Link:"https://www.freecodecamp.com/"
    ,Notes:"Learn JavaScript for free. Learn everything you need to become good enough to get a job in either backend or front end programming. Work on projects for non-profits. Lots of people have had success getting hired as a junior developer after going through Free Code Camp. There are also Free Code Camp groups in many cities where people work together and hold themselves accountable."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Learn Programming"
    ,Name:"JavaScript30"
    ,Link:"https://javascript30.com/"
    ,Notes:"30-Day challenge to program in vanilla JavaScript. Wes Bos is a boss and his tutorials are great."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Business Tool"
    ,Name:"Squarespace Student Discount"
    ,Link:"https://www.squarespace.com/students/"
    ,Notes:"50% off for students. Ends up being $72 if paid annually."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Business Tool"
    ,Name:"Amazon Prime 6 Month Free Trial"
    ,Link:"http://a.co/2Gs9CTF"
    ,Notes:"Amazon Prime 6 month free membership, $49.99 after that. Disclosure: the link is a referral link from my account where I get $10 if anyone signs up! (I imagine most people already know about this though.)"
  },
  {
     Type:"Tools and Resources"
    ,Category:"Blog"
    ,Name:"Marc Andreessen"
    ,Link:"http://blog.pmarca.com/"
    ,Notes:"Archived writings of Marc Andreessen, co-founder of Netscape and partner at Andreessen Horowitz."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Blog"
    ,Name:"Paul Graham"
    ,Link:"http://www.paulgraham.com/articles"
    ,Notes:"One of the founders of YCombinator. His essays are great reading material and reflect a lot of the thinking in Silicon Valley regarding growth, start ups, and tech."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Blog"
    ,Name:"Fred Wilson"
    ,Link:"http://avc.com/"
    ,Notes:"Well known NYC VC who regularly shares his thoughts on all things startups, tech and venture capital."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Blog"
    ,Name:"Sam Altman"
    ,Link:"http://blog.samaltman.com/"
    ,Notes:"President of YCombinator. Shares thoughts on startups and tech."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Blog"
    ,Name:"Mark Suster"
    ,Link:"https://bothsidesofthetable.com/"
    ,Notes:"Prominent entrepreneur turned VC who shares his thoughts."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Reference"
    ,Name:"Breakout List"
    ,Link:"https://breakoutlist.com/"
    ,Notes:"List of companies considered to be on the verge of commercial success. Considered good places to start a career to learn."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Blog"
    ,Name:"Stratechery"
    ,Link:"https://stratechery.com/"
    ,Notes:"Probably the most insightful media and tech strategy content on the internet. Must read for understanding tech trends from a consumer and business model perspective."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Blog"
    ,Name:"The Hustle"
    ,Link:"http://thehustle.co/"
    ,Notes:"Digestible daily news delivered via email. Heavy focus on tech and entrepreneurship."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Blog"
    ,Name:"a16z"
    ,Link:"http://a16z.com/"
    ,Notes:"Thoughts from one of the most prominent venture capital firms in Silicon Valley. Podcast discusses new technologies and trends."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Community"
    ,Name:"FLOW Empowering Students"
    ,Link:"https://www.facebook.com/groups/Flow.makemeflow/"
    ,Notes:"Facebook group filled with young people sharing interesting opportunities. Large portion of group members are based in India but lots of valuable opportunities with like-minded entrepreneurial people."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Business Tool"
    ,Name:"Namecheap Free .me Domain"
    ,Link:"https://nc.me/"
    ,Notes:"Free .me domain from namecheap. Usually given out at hackathons. First year is free, cost money afterwards."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Blog"
    ,Name:"How to Start a Startup"
    ,Link:"http://startupclass.samaltman.com/"
    ,Notes:"Series of 20 online lectures that deliver the gist of the content and advice given to YC participants - taught by people like Paul Graham, Reid Hoffman, etc."
  },
  {
     Type:"Tools and Resources"
    ,Category:"Reference"
    ,Name:"WallStreetOasis"
    ,Link:"http://wallstreetoasis.com/"
    ,Notes:"WallStreetOasis is an online forum for learning about all things related Wall Street and finance. The forum has a lot of information, including discussions on entrepreneurship and venture capital. Note: given the site's audience, there's a big bias towards finance over riskier paths like entrepreneurship."
  },
  {
    Type:"Tools and Resources"
    ,Category:"Reference"
    ,Name:"Mergers and Inquisitions"
    ,Link:"http://www.mergersandinquisitions.com/"
    ,Notes:"Another great resource to learn about finance things mostly but still has interesting information that might be relevant to students interested in venture capital or trying to understand the finances behind starting a venture."
  },
  {
    Type:"Tools and Resources"
    ,Category:"Reference"
    ,Name:"Stanford Entrepreneurial Thought Leaders Seminar"
    ,Link:"http://etl.stanford.edu/"
    ,Notes:"A quality speaker series from Stanford University with talks from famous entrepreneurs and venture capitalists."
  },
  {
    Type:"Tools and Resources"
    ,Category:"Reference"
    ,Name:"Stanford eCorner"
    ,Link:"http://ecorner.stanford.edu/"
    ,Notes:"Stanford University's list of resources for student entrepreneurs - filled with insightful content (videos, articles, podcasts)."
  },
  {
    Type:"Tools and Resources"
    ,Category:"Learn Programming"
    ,Name:"Free Programming Books"
    ,Link:"https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md"
    ,Notes:"Someone compiled a huge list of programming books divided by language."
  },
  {
    Type:"Tools and Resources"
    ,Category:"Learn Programming"
    ,Name:"MIT OpenCourseWare (OCW)"
    ,Link:"https://ocw.mit.edu/"
    ,Notes:"MIT essentially publishes all their courses online - huge set of courses offered at one of the top engineering universities in the world - pretty wild if you think about it. "
  }
]
