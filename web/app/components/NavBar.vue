<script setup lang="ts">
interface DropdownItem {
  label: string
  href: string
  external?: boolean
}

interface NavItem {
  label: string
  href?: string
  dropdown?: DropdownItem[]
}

const navItems: NavItem[] = [
  {
    label: '產品列表',
    dropdown: []
  },
  {
    label: '合作夥伴',
    dropdown: [
      { label: '扣握貝果 N8N 平台', href: '/n8n/', external: true }
    ]
  }
]

const activeDropdown = ref<string | null>(null)

function toggleDropdown(label: string) {
  activeDropdown.value = activeDropdown.value === label ? null : label
}

function closeDropdown() {
  activeDropdown.value = null
}
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <NuxtLink to="/" class="navbar-logo" @click="closeDropdown">
        <img src="/apple-touch-icon.png" alt="扣握貝果" class="logo-image" />
        <span class="logo-text">扣握貝果</span>
      </NuxtLink>

      <nav class="navbar-nav">
        <div
          v-for="item in navItems"
          :key="item.label"
          class="nav-item"
          @mouseleave="closeDropdown"
        >
          <template v-if="item.dropdown">
            <button
              class="nav-link dropdown-toggle"
              :class="{ active: activeDropdown === item.label }"
              @mouseenter="toggleDropdown(item.label)"
              @click="toggleDropdown(item.label)"
            >
              {{ item.label }}
              <svg
                class="dropdown-icon"
                :class="{ rotated: activeDropdown === item.label }"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div
              v-show="activeDropdown === item.label"
              class="dropdown-menu"
              @mouseenter="activeDropdown = item.label"
            >
              <template v-if="item.dropdown.length > 0">
                <a
                  v-for="dropdownItem in item.dropdown"
                  :key="dropdownItem.label"
                  :href="dropdownItem.href"
                  :target="dropdownItem.external ? '_blank' : undefined"
                  :rel="dropdownItem.external ? 'noopener noreferrer' : undefined"
                  class="dropdown-item"
                  @click="closeDropdown"
                >
                  {{ dropdownItem.label }}
                  <svg
                    v-if="dropdownItem.external"
                    class="external-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M9 3L3 9M9 3H5M9 3V7"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </template>
              <span v-else class="dropdown-empty">即將推出</span>
            </div>
          </template>
          <NuxtLink v-else :to="item.href!" class="nav-link">
            {{ item.label }}
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-image {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.logo-text {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text);
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 16px;
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text);
  background: none;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-primary-dark);
  background-color: var(--color-background-alt);
}

.dropdown-icon {
  transition: transform 0.2s ease;
}

.dropdown-icon.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  padding: 8px;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  font-size: 14px;
  color: var(--color-text);
  border-radius: 6px;
  transition: var(--transition);
}

.dropdown-item:hover {
  background-color: var(--color-background-alt);
  color: var(--color-primary-dark);
}

.external-icon {
  opacity: 0.5;
}

.dropdown-empty {
  display: block;
  padding: 10px 12px;
  font-size: 14px;
  color: var(--color-text-light);
  font-style: italic;
}
</style>
