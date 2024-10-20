<script lang='ts'>
	import '../app.pcss';

	import { page } from '$app/stores';
	import { fly } from 'svelte/transition'; 
	import { cubicOut } from 'svelte/easing';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as Collapsible from '@/components/ui/collapsible';
	import { Toaster } from "$lib/components/ui/sonner";

	import { InstagramLogo, DiscordLogo, HamburgerMenu } from 'svelte-radix';
	import logo from '$lib/images/full-logo.png';
	import logoWhite from '$lib/images/full-logo-white.png';
	import favicon from '$lib/images/favicon.png';

	const instagramURL = 'https://www.instagram.com/lindylaunchpad';
	const discordURL = '';
</script>

<svelte:head>
	<link rel='preconnect' href='https://fonts.googleapis.com'>
	<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin='anonymous'>
	<link href='https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap' rel='stylesheet'>

	<link rel="icon" href={favicon}>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Lindenhurst Launchpad</title>
	<meta name="description" content="An alumni network laying the foundation for success.">
	<meta name="author" content="Lindenhurst Launchpad">
	<meta name="keywords" content="Lindenhurst, Launchpad, Non-Profit, Scholarship, Mentorship, Program">

	<meta property="og:site_name" content="Lindenhurst Launchpad">
	<meta property="og:title" content="Lindenhurst Launchpad">
	<meta property="og:description" content="An alumni network laying the foundation for success.">
	<meta property="og:image" content={logoWhite}>
</svelte:head>

<nav class='grid grid-cols-3 sticky top-0 w-full bg-background drop-shadow-sm z-50'>
	<img class='max-h-[60px] py-3 mx-3' src={logo} alt='Lindenhurst Launchpad' />
	<div class='hidden md:flex justify-center overflow-visible py-3'>
		<Button variant='ghost' href='/'>Home</Button>
		<Button variant='ghost' href='/about-us'>About Us</Button>
		<Button variant='ghost' href='/events'>Events</Button>
		<!-- <Button variant='ghost' href='/mentorship-program'>Mentorship Program</Button> -->
	</div>
	<div class='md:hidden col-span-2'>
		<Collapsible.Root>
			<Collapsible.Trigger class='w-full flex justify-end'>
				<Button class='mx-3 my-3' size='icon'><HamburgerMenu /></Button>
			</Collapsible.Trigger>
			<Collapsible.Content class='col-start-1 col-span-3 flex flex-col items-end'>
				<Button variant='link' href='/'>Home</Button>
				<Button variant='link' href='/about-us'>About Us</Button>
				<Button variant='link' href='/events'>Events</Button>
				<Button variant='link' href='/mentorship-program'>Mentorship Program</Button>
			</Collapsible.Content>
		</Collapsible.Root>
	</div>
	<Separator class='col-span-3' />
</nav>

<Toaster richColors />

{#key $page.url.pathname}
	<main class='grow' in:fly={{y: 20, duration: 400, delay: 0, easing: cubicOut, opacity: 0}}>
		<slot />
	</main>
{/key}

<footer class='flex flex-col items-center py-10 mt-10 gap-1 text-sm text-center bg-[#F7F7F7]'>
	<Button class='py-0 h-min w-min' variant='link' href='mailto:lindenhurstlaunchpad@gmail.com'>lindenhurstlaunchpad@gmail.com</Button>
	<div>
		<Button size='icon' variant='link' href={instagramURL} target='_blank'><InstagramLogo /></Button>
		{#if discordURL}
		<Button size='icon' variant='link' href={discordURL} target='_blank'><DiscordLogo /></Button>
		{/if}
	</div>
	<p>&copy; 2024 by Lindenhurst Launchpad</p>
</footer>