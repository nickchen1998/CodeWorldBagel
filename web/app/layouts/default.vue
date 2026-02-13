<template>
  <div class="layout">
    <NavBar />
    <main class="main-content">
      <slot />
    </main>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <img src="/apple-touch-icon.png" alt="扣握貝果" class="footer-logo" />
            <span class="footer-name">扣握貝果 CodeWorldBagel</span>
          </div>
          <p class="footer-copyright">
            &copy; {{ new Date().getFullYear() }} 扣握貝果. All rights reserved.
            <span class="footer-divider">|</span>
            <a href="mailto:codeworldbagel@gmail.com" class="footer-email">codeworldbagel@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: var(--header-height);
}

.footer {
  background-color: var(--color-background-alt);
  border-top: 1px solid var(--color-border);
  padding: 40px 0;
  margin-top: auto;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-logo {
  width: 32px;
  height: 32px;
  border-radius: 6px;
}

.footer-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
}

.footer-copyright {
  font-size: 14px;
  color: var(--color-text-light);
}

.footer-divider {
  margin: 0 8px;
  opacity: 0.5;
}

.footer-email {
  color: var(--color-text-light);
  text-decoration: none;
  transition: var(--transition);
}

.footer-email:hover {
  color: var(--color-primary);
}
</style>
