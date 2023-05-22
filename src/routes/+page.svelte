<script>
  const team = [
    { name: 'Alex', role: 'Co-President'},
    { name: 'Joey', role: 'Co-President'},
    { name: 'Grace', role: 'Marketing Officer'},
  ];

  const members = [
    'Amanda',
    'Andrew',
    'Bernardo',
    'Billy',
    'Jacob',
    'Jeydin',
    'John',
    'Kevin',
    'Lakshay',
    'Max',
    'Rohan',
    'Taniel',
  ].sort();
</script>

<svelte:head>
  <title>cyber5 — The Cybersecurity Club of CRHS</title>
</svelte:head>

<header>
  <h1>cyber<b>5</b></h1>
</header>

<section>
  <p>The <b>Cybersecurity Club</b> at Cinco Ranch High School.</p>
  <p>We are a group of cybersecurity enthusiasts who practice ethical hacking, host CTFs, and have fun together.</p>

  <a href="/join">Sign up</a>
</section>

<h2>members</h2>

<section>
  <h3><b>The team (2022-23)</b></h3>

  <ul>
    {#each team as { name, role }}
      <li>{name} [{role}]</li>
    {/each}
  </ul>

  <h3><b>Our members</b></h3>

  <ul>
    {#each members as name}
      <li>{name}</li>
    {/each}
  </ul>
</section>

<style lang="scss">
  @import '_scss/fonts';
  @import '_scss/colors';
  @import '_scss/typography';

  ul {
    padding-left: 0;
    list-style: none;
  }

  li {
    @include body;
  }
</style>
