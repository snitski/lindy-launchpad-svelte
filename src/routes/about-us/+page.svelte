<script lang='ts'>
    import { Separator } from '@/components/ui/separator';
    import TeamCard from '@/components/ui/team-card';
    import { scrollRef } from 'svelte-scrolling';
</script>
<div class='main-content'>
    <h2>Our Mission</h2>
    <p>
        At Lindenhurst Launchpad, our mission is clear: to educate, empower, and inspire students attending Lindenhurst
        Senior High School or residing in the area. We are a 501(c)(3) organization dedicated to guiding and supporting
        young minds as they explore a world of diverse career and higher education opportunities. Our passion lies in
        creating a bridge between the promising potential of students and the valuable knowledge of Lindenhurst Senior
        High School alumni.
    </p>
    <br />
    <p>
        Founded with a vision to make a positive impact on the lives of students, we firmly believe that education is the
        key to unlocking limitless possibilities. We want to elevate students&#39; education by connecting them with our
        accomplished Lindenhurst Senior High School alumni, who can be an invaluable resource given the fact that they
        walked similar paths as today&#39;s students.
    </p>
    <br />
    <p>
        Through various programs, mentorship initiatives, and educational workshops, Lindenhurst Launchpad aims to equip
        students with the necessary skills, knowledge, and confidence to pursue their dreams. We understand that each
        student&#39;s journey is unique, and we strive to cultivate an inclusive and nurturing environment that fosters growth
        and personal development.
    </p>

    <section id='leadership' use:scrollRef={'leadership'} class='anchor' />
    <h2 class='pt-6'>Leadership</h2>
    <div class='flex flex-col gap-4'>
        <TeamCard fullName='Brooklyn Ratel' role='President, Co-founder' imgSrc='' linkedIn='https://www.linkedin.com/in/brooklynratel/'>
            Brooklyn Ratel is a senior studying biochemistry at Stony Brook University, where passion for mentorship shines through her various
            roles. She balances her studies with leadership in the Phi Delta Epsilon Medical Fraternity (NY Mu), tissue engineering research,
            private tutoring, and Stony Brook University Orchestra rehearsals. In fall of 2025, she will begin her studies in medicine to become
            a physician. Brooklyn's experiences, both academic and personal, have shaped her deep desire to help students discover their strengths
            and ignite their ambitions. While creating a network of alumni and pool of resources for students has been a longtime goal of hers,
            she's most excited to watch students embark on this journey and see how high they'll soar with Lindenhurst Launchpad.
        </TeamCard>
        <Separator />
        <TeamCard fullName='Hailee Shehu' role='Vice President, Co-founder' imgSrc='' linkedIn='https://www.linkedin.com/in/hailee-shehu/'>
            Hailee is a senior studying mechanical engineering at Stony Brook University. She is a member of the Women in Science and
            Engineering (WISE) Honors Program, Tau Beta Pi Engineering Honor Society, and Pi Tau Sigma Mechanical Engineering Honor Society.
            She is also the president of the American Society of Mechanical Engineers Stony Brook University Chapter. In addition, Hailee
            interned for Innoveering LLC, a subsidiary of GE Aerospace, and is currently working as a robotics instructor and a mentor for
            the WISE program. Hailee hopes that Lindenhurst Launchpad will help set Lindenhurst students up for years of success after graduation.
        </TeamCard>
        <Separator />
        <TeamCard fullName='Alexander Snit' role='Secretary, Co-founder' imgSrc='' linkedIn='https://www.linkedin.com/in/alexander-snit/'>
            Alexander is currently pursuing a Master's degree in Computer Science at Stony Brook University, where he previously graduated Magna
            Cum Laude with a Bachelor's degree in Computer Science. Alongside his studies, he is engaged in cybersecurity research on supply chain
            attack detection, working under the mentorship of Michalis Polychronakis. Additionally, Alexander is a Software Engineer at North
            Atlantic Industries, a defense and aerospace company based in Bohemia, NY. His practical experience in the industry adds a valuable
            dimension to his academic pursuits. He strongly believes that Lindenhurst Launchpad will provide the resources and tools necessary for
            Lindenhurst students to excel in their fields.
        </TeamCard>
        <Separator />
        <TeamCard fullName='Connor Colford' role='Treasurer, Co-founder' imgSrc='' linkedIn='https://www.linkedin.com/in/connor-colford-19510b233/'>
            Connor is currently a  Master's student at American University in Washington D.C. pursuing an M.S. in Terrorism and Homeland
            Security Policy. He previously obtained a B.A. in Political Science at American University. He is an Eagle Scout and has served
            in internships at a variety of government institutions, being a firm believer in the importance of service to one's community and
            country. Connor wants Lindenhurst Launchpad to provide meaningful resources and assistance to Lindenhurst students as they chart
            out their next steps on the path to future success.
        </TeamCard>
    </div>

    <section id='mentors' use:scrollRef={'mentors'} class='anchor' />
    <h2 class='pt-6'>Mentors</h2>
    <div class='flex flex-col gap-4'>
        <TeamCard fullName='Brittany VanCise' role='' imgSrc='' linkedIn=''>
            Brittany is currently completing Master's Degree of Physician Associate Studies at Touro University. Upon graduating high school
            She became an EMT-B and shortly after completed a paramedic program at St. John's University. She worked as a 911 paramedic while
            obtaining her Bachelor's Degree in Bioscience. After the completion of her PA program she will be working in the ICU.
        </TeamCard>
        <Separator />
        <TeamCard fullName='Taylor Voorneveld' role='' imgSrc='' linkedIn='https://www.linkedin.com/in/taylor-voorneveld-7537b51b9/'>
            Taylor graduated from CUNY Hunter College with a B.A. in developmental psychology and a minor in music and she has an associate's
            degree from CUNY Lehman College for speech language pathology. She's a lifelong member of Psi Chi, the international psychology
            honor society, and during her time at Hunter, Taylor served as a Student Ambassador and was the principal cellist of the Hunter
            Symphony Orchestra. Most recently, she became certified as a Phlebotomy Technician and is currently working at Catholic Health as
            a central referral liason.
        </TeamCard>
        <Separator />
        <TeamCard fullName='Jack Frischkorn' role='' imgSrc='' linkedIn='https://www.linkedin.com/in/jack-frischkorn-5a77461ba/'>
            Jack Frischkorn is a rising 3rd year law student pursuing a dual JD/MBA degree at Hofstra University, at which he is a staff
            member on the Hofstra Labor & Employment Law Journal, Vol. 43. Jack graduated from the University of Tampa in 2023 with a B.A. in
            Communications and a B.S. in Sport Management. At the University of Tampa, he was the President of the Tau Kappa Epsilon
            Fraternity, as well as Treasurer of the Sport and Entertainment Society and a member ofboth the Honors Program and Student
            Government.
        </TeamCard>
    </div>
</div>