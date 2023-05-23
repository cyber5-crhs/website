<script lang="ts">
  import Card from '../components/Card.svelte';

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
  <a
      href="https://matrix.to/#/!OAvvLnxtvgCioPvRTp:projectsegfau.lt?via=projectsegfau.lt"
      aria-label="Join the Matrix space"
      >
    <svg
        role="img"
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path d="M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.033.107 1.481.314.448.208.785.582 1.02 1.108.254-.374.6-.706 1.034-.992.434-.287.95-.43 1.546-.43.453 0 .872.056 1.26.167.388.11.716.286.993.53.276.245.489.559.646.951.152.392.23.863.23 1.417v5.728h-2.349V11.52c0-.286-.01-.559-.032-.812a1.755 1.755 0 0 0-.18-.66 1.106 1.106 0 0 0-.438-.448c-.194-.11-.457-.166-.785-.166-.332 0-.6.064-.803.189a1.38 1.38 0 0 0-.48.499 1.946 1.946 0 0 0-.231.696 5.56 5.56 0 0 0-.06.785v4.768h-2.35v-4.8c0-.254-.004-.503-.018-.752a2.074 2.074 0 0 0-.143-.688 1.052 1.052 0 0 0-.415-.503c-.194-.125-.476-.19-.854-.19-.111 0-.259.024-.439.074-.18.051-.36.143-.53.282-.171.138-.319.337-.439.595-.12.259-.18.6-.18 1.02v4.966H5.46V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z"/>
    </svg>
  </a>
</header>

<section>
  <p>The <b>Cybersecurity Club</b> at Cinco Ranch High School.</p>
  <!-- <p>We are a group of cybersecurity enthusiasts who practice ethical hacking, host CTFs and have fun together.</p> -->
  <p>We are a student-led club made up of cybersecurity enthusiasts. We practice ethical hacking, host CTFs, and have fun together!</p>
  <a id="join-btn" href="/join">Ready to join? →</a> <!-- \u2192 -->
</section>

<h2>activities</h2>

<section class="cards">
  <Card>
    <h3>Labs</h3>
    <p>Explore real-world cybersecurity incidents in small, managable lessons.</p>
  </Card>
  <Card>
    <h3>CTFs</h3>
    <p>Compete with other teams in a Jeopardy-style game using your cybersecurity skills.</p>
  </Card>
  <Card>
    <h3>Lorem ipsum</h3>
    <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
  </Card>
</section>

<h2>meetings</h2>

<section>
  <p>We have a meeting every <b>Wednesday</b> in <b>Room 1224</b>.</p>

  <p>We have <b>three types</b> of meetings: labs, social, and <em>(our favorite)</em> CTFs.</p>

  <p>
  More information can be provided by joining the
  <a
      href="https://matrix.to/#/!OAvvLnxtvgCioPvRTp:projectsegfau.lt?via=projectsegfau.lt"
      aria-label="Join the Matrix space"
      >
      Matrix space</a>.
  </p>
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
  @use 'sass:color';

  @import '../styles/typography';
  @import '../styles/values';

  header {
    display: flex;
    justify-content: space-between;

    svg {
      height: scale-font(5);
      fill: white;
    }
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  li {
    @include body;
  }

  #join-btn {
    $fill-color: #D50023;

    display: block;
    width: fit-content;
    padding: .6rem 1rem;
    border-radius: $radius;
    background-color: $fill-color; /* This color fits better than $primary */
    font-family: 'Inter';
    color: $lightest;
    text-decoration: none;

    &:hover {
      background-color: color.scale($fill-color, $lightness: 25%);
    }
  }

  .cards {
    display: grid;
    width: fit-content;
    grid-gap: $spacing-m;
    grid-template-columns: 1fr;

    $breakpoint-sm: 500px;
    $breakpoint-lg: 800px;

    @media (width < $breakpoint-sm) {
      :global(.card) {
        max-width: 100%;
      }
    }

    @media (min-width: $breakpoint-sm) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
