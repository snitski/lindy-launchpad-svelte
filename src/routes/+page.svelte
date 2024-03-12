<script lang='ts'>
    import { Button } from '@/components/ui/button';
    import GuideIcon from '@/images/guide.svg';
    import SupportIcon from '@/images/support.svg';
    import InspireIcon from '@/images/inspire.svg';
</script>

<div class='h-[75vh] bg-hero bg-no-repeat bg-cover'>
    <div class='h-full px-5 sm:px-14 md:px-28 flex gap-x-28 items-center bg-background bg-opacity-40'>
        <div class='hidden sm:block w-1/2'>
            <h1>Lindenhurst Launchpad</h1>
            <h2 class='italic'>An alumni network laying the foundation for success</h2>
            <div class='flex py-6 gap-8'>
                <Button size='lg' href='/mentorship-program'>Apply Now</Button>
                <Button variant='outline' size='lg' href='/about-us'>Learn More</Button>
            </div>
        </div>
        <div class='sm:hidden block'>
            <h2>Lindenhurst Launchpad</h2>
            <h3 class='italic'>An alumni network laying the foundation for success</h3>
            <div class='flex py-3 gap-4'>
                <Button href='/mentorship-program'>Apply Now</Button>
                <Button variant='outline' href='/about-us'>Learn More</Button>
            </div>
        </div>
    </div>
</div>

<div class='main-content'>
    <h2>Who we are</h2>
    <p>
        Lindenhurst Launchpad provides students in the community with an alumni network who are passionate about 
        helping them succeed in high school and beyond. Navigating the endless opportunities that exist upon high 
        school graduation can be overwhelming, but our alumni are here to help ease that stress for students.
    </p>
    <br />
    <p>
        Our mentorship program connects students with passionate alumni, laying the foundation for success. We're 
        expanding to offer workshops and scholarships, providing even more opportunities for our community's young 
        minds to thrive.
    </p>
    <br />
    <div class='grid sm:grid-cols-3 grid-cols-1 gap-10'>
        <div class='text-center'>
            <img src={GuideIcon} alt='Guide Icon' />
            <h3 class='py-0'>Guide</h3>
            <p>One-on-one support from Lindenhurst alumni who have walked in your shoes.</p>
        </div>
        <div class='text-center'>
            <img src={InspireIcon} alt='Inspire Icon' />
            <h3 class='py-0'>Inspire</h3>
            <p>Engaging workshops to showcase various potential careers.</p>
        </div>
        <div class='text-center'>
            <img src={SupportIcon} alt='Support Icon' />
            <h3 class='py-0'>Support</h3>
            <p>Raise funds to support Lindenhurst students’ career aspirations.</p>
        </div>
    </div>
</div>