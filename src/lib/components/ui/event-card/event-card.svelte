<script lang='ts'>
    export let event: any;

    import { Button } from '@/components/ui/button';
    import * as Card from '@/components/ui/card';

    const eventName = event.summary;
    const date = new Date(event.start.dateTime).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    const time = new Date(event.start.dateTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
    const location = event.location;
    let rsvpURL : string;
    let desc = event.description || '';

    // Remove links from description
    let linkMatches = desc.matchAll(/<a[^>]+?href="([^"]+?)">[^<]+?<\/a>/gi)
    let urls = [] as string[];
    for (let match of linkMatches) {
        urls.push(match[1]);
        desc = desc.replace(match[0], '');
    }

    // Find RSVP link
    if (urls.length > 1) {
        for (let url of urls) {
            if (url.includes('forms.gle') || url.includes('google.com/forms')) {
                rsvpURL = url;
                break;
            }
        }
    }
    else if (urls.length === 1) {
        rsvpURL = urls[0];
    }
    
    // Remove other HTML tags from description
    let doc = new DOMParser().parseFromString(desc, 'text/html');
    desc = doc.body.textContent || '';
</script>

<Card.Root class='flex flex-col max-w-md'>
    <Card.Header>
        <Card.Title class='py-0'>{eventName}</Card.Title>
        <Card.Description>
            <p>{date} at {time}</p>
            {#if location}
                <p>{location}</p>
            {/if}
        </Card.Description>
    </Card.Header>
    {#if desc.length > 0}
        <Card.Content class='grow'>
            <p>{desc}</p>
        </Card.Content>
    {/if}
    {#if rsvpURL}
        <Card.Footer class='flex justify-end'>
            <Button href={rsvpURL} target='_blank' size='lg'>RSVP</Button>
        </Card.Footer>
    {/if}
</Card.Root>