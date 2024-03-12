<script lang='ts'>
    export let data : {calendarPromise: Promise<any>};

    import EventCard from '@/components/ui/event-card';
    import { Skeleton } from '@/components/ui/skeleton';
    import * as Card from '@/components/ui/card';
    import { toast } from 'svelte-sonner';

    data.calendarPromise.catch(() => toast.error('Failed to load upcoming events. Please try again later.'));
</script>

<div class='main-content'>
    <h2>Upcoming Events</h2>
    <div class='grid sm:grid-cols-2 gap-10'>
        {#await data.calendarPromise}
            {#each {length: 4} as _}
                <Card.Root>
                    <Card.Header>
                        <Card.Title class='pt-0 pb-1'><Skeleton class='h-7 w-3/5' /></Card.Title>
                        <Card.Description class='flex flex-col gap-1'>
                            <Skeleton class='h-4 w-1/3' />
                            <Skeleton class='h-4 w-1/3' />
                        </Card.Description>
                    </Card.Header>
                    <Card.Content class='flex flex-col gap-2 grow'>
                        <Skeleton class='h-5' />
                        <Skeleton class='h-5' />
                        <Skeleton class='h-5 w-5/6' />
                        <Skeleton class='h-5 w-2/3' />
                    </Card.Content>
                    <Card.Footer class='flex justify-end'>
                        <Skeleton class='w-24 h-10' />
                    </Card.Footer>
                </Card.Root>
            {/each}
        {:then events}
            {#each events as event}
                {#if event.start.dateTime}
                    <EventCard event={event} />
                {/if}
            {/each}
        {/await}
    </div>
</div>