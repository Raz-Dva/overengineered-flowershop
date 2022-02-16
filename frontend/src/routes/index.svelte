<script lang="ts">
    import { Example } from '$lib/graphql/generated'

    $: example = Example({})
</script>

<h1>{$example?.data?.example?.title}</h1>

<p>{$example?.data?.example?.text}</p>
