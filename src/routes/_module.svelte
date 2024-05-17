<script>
</script>

<div class="app-layout">
  <header>
    <div class="header-title">
      <h2>Header</h2>
    </div>
    <nav>
      <ul class="app-navigation">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/subroute1">Page 1</a>
        </li>
        <li>
          <a href="/subroute2">Page 2</a>
        </li>
      </ul>
    </nav>
  </header>

  <main class="content">
    <slot />
  </main>
</div>

<style>
  .content {
    padding-top: var(--space-5x);
    padding-bottom: var(--space-5x);
    flex: auto;
  }

  .app-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100%;
  }

  .app-navigation li {
    float: left;
    margin-right: 20px;
    padding-bottom: 20px;
  }

  .header-title {
    padding-top: var(--space-2x);
    padding-bottom: var(--space-2x);
    background-color: var(--color-brand-light);
  }

  header h2,
  header nav,
  .content {
    padding-left: var(--space-5x);
    padding-right: var(--space-5x);
  }
</style>
