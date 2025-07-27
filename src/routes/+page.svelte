<script lang='ts'>
    import { Button } from '@/components/ui/button';
    import * as Card from '@/components/ui/card';
    import NewsletterForm from '@/components/ui/newsletter-form';
    import InstaEmbed from '@/components/ui/insta-embed';
    import type { PageData } from './$types';

    import GuideIcon from '@/images/guide.svg';
    import SupportIcon from '@/images/support.svg';
    import InspireIcon from '@/images/inspire.svg';

    import heroImage from '@/images/hero.jpg';

    export let data: PageData;
</script>

<svelte:head>
    <link rel='preload' as='image' href={heroImage} />
</svelte:head>

<div class='flex min-h-[75vh] bg-hero bg-no-repeat bg-cover'>
    <div class='flex flex-col p-5 sm:p-14 md:p-28 md:flex-row gap-x-28 items-center bg-background bg-opacity-40'>
        <div class='hidden md:block w-1/2'>
            <h1>Lindenhurst Launchpad</h1>
            <h2 class='italic'>An alumni network laying the foundation for success</h2>
            <div class='flex py-6 gap-8'>
                <Button size='lg' href='https://forms.gle/byDGAB4tGE1aHmrW9'>Get Involved</Button>
                <Button variant='outline' size='lg' href='/about-us'>Learn More</Button>
            </div>
        </div>
        <div class='md:hidden block'>
            <h2>Lindenhurst Launchpad</h2>
            <h3 class='italic'>An alumni network laying the foundation for success</h3>
            <div class='flex py-3 gap-4'>
                <Button href='https://forms.gle/byDGAB4tGE1aHmrW9'>Get Involved</Button>
                <Button variant='outline' href='/about-us'>Learn More</Button>
            </div>
        </div>
        <div class='flex justify-center md:w-1/2'>
            <Card.Root class='min-w-52'>
                <Card.Header class='pb-3'><h3 class='py-0'>Join our Newsletter!</h3></Card.Header>
                <Card.Content>
                    <NewsletterForm data={data.form} />
                </Card.Content>
            </Card.Root>
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
    <h2>Our Instagram</h2>
    <div class='flex justify-center'>
        <InstaEmbed />
    </div>
</div>
