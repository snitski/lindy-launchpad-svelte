<script lang='ts'>
    import { Button } from '@/components/ui/button';
    import * as Card from '@/components/ui/card';
    import { Separator } from '@/components/ui/separator';

    const timeline = [
        {
            date: 'April 10th',
            event: 'Mentee and Mentor information sessions'
        },
        {
            date: 'May 17th',
            event: 'Mentee and Mentor application deadline'
        },
        {
            date: 'May 22nd',
            event: 'Mentee and Mentor match day'
        },
        {
            date: 'June 1st',
            event: 'Start of mentorship program'
        },
        {
            date: 'October 31st',
            event: 'End of mentorship program'
        }
    ];
</script>

<div class='main-content'>
    <h2>Program Details</h2>
    <p>
        Our mentoring program pairs up Lindenhurst High School students and alumni. Our matches are personalized according to 
        the alumni's experience and the student's interest.
    </p>
    <div class='grid md:grid-cols-2 gap-10 my-8'>
        <Card.Root class='flex flex-col'>
            <Card.Header>
                <Card.Title class='py-0'>Students</Card.Title>
            </Card.Header>
            <Card.Content class='grow'>
                <p>
                    You will receive 5 months of mentoring, with one mandatory meeting a month. We encourage you to communicate with 
                    your mentor outside of these meetings as well. Your mentor can help you with questions regarding college applications, 
                    selecting courses, and more.
                </p>
            </Card.Content>
            <Card.Footer class='self-end'>
                <Button target='_blank' href='https://forms.gle/TDaGBWcRi4ZUgMzHA'>Mentee Application</Button>
            </Card.Footer>
        </Card.Root>
        <Card.Root class='flex flex-col'>
            <Card.Header>
                <Card.Title class='py-0'>Alumni</Card.Title>
            </Card.Header>
            <Card.Content class='grow'>
                <p>
                    You must be committed to providing five months of mentoring where you will meet with your mentee at least once a month. 
                    We will help you prepare for the program with workshops to guide you in being the best mentor you can be.
                </p>
            </Card.Content>
            <Card.Footer class='self-end'>
                <Button target='_blank' href='https://forms.gle/7iM7g4CD6jrM65pf7'>Mentor Application</Button>
            </Card.Footer>
        </Card.Root>
    </div>
    <h2>Program Timeline</h2>
    <div class='flex flex-col gap-2'>
        {#each timeline as { date, event }, i}
            <div class='flex flex-col sm:flex-row sm:items-center pb-4 sm:pb-0'>
                <h3 class='min-w-48'>{date}</h3>
                <p>{event}</p>
            </div>
            {#if i < timeline.length - 1}
                <Separator />
            {/if}
        {/each}
    </div>
</div>