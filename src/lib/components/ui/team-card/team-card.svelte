<script lang='ts'>
    export let fullName: string;
    export let role: string;
    export let imgSrc: string;
    export let linkedIn: string;

    import { Button } from '@/components/ui/button';
	import { Separator } from '@/components/ui/separator';
    import { LinkedinLogo } from 'svelte-radix';
</script>

<div class='md:flex gap-10'>
    <div class='md:min-w-60'>
        {#if linkedIn}
            <Button
                class='text-3xl font-serif p-0 underline'
                variant='link'
                target='_blank'
                href={linkedIn}
            >
                {fullName}
                <LinkedinLogo size='14' class='self-end ml-1' />
            </Button>
        {:else}
            <h3 class='text-3xl font-serif p-0 text-primary'>{fullName}</h3>
        {/if}
        <p>{role}</p>
    </div>
    <Separator class='md:hidden w-1/3 my-2' />
    <p>
        <slot />
    </p>
</div>