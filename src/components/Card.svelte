<div class="card">
  <slot />
</div>

<style lang="scss">
  @import '../styles/colors';
  @import '../styles/values';

  .card {
    max-width: 40ch;
    padding: $spacing-xs;
    border: 1pt solid $lightest;
    border-radius: $radius;
    background: $dark;

    /* TODO: this line does not work */
    & > *:last-child {
      margin-bottom: 0;
    }
  }
</style>
