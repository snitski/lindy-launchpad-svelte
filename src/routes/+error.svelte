<script>
	import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    
    let countdown = 3;
    const interval = setInterval(() => {
        countdown -= 1;
        if (countdown === 0) {
            clearInterval(interval);
            if (browser) goto('/');
        }
    }, 1000);
</script>

<div class='main-content'>
    <h2>Page not found</h2>
    <p>Redirecting back in {countdown}...</p>
</div>