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
    dropdown: [
      { label: '旅行日記 TravelDiary', href: '/travel-diary' },
      { label: '話燒碳盤查系統 HephaCarbon', href: '/hepha-carbon' },
      { label: '棉棉好朋友 CottonFriend', href: '/cotton-friend' },
      { label: '數據領航員 RAGPilot', href: '/rag-pilot' }
    ]
  },
  {
    label: '合作夥伴',
    dropdown: []
  },
  {
    label: '工作平台',
    dropdown: [
      { label: '扣握貝果 N8N 平台', href: '/n8n/', external: true }
    ]
  },
  {
    label: '聯絡我們',
    href: '/#contact'
  }
]

const activeDropdown = ref<string | null>(null)
const mobileMenuOpen = ref(false)
let closeTimer: ReturnType<typeof setTimeout> | null = null

function openDropdown(label: string) {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  activeDropdown.value = label
}

function toggleDropdown(label: string) {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  activeDropdown.value = activeDropdown.value === label ? null : label
}

function closeDropdown() {
  if (closeTimer) {
    clearTimeout(closeTimer)
  }
  closeTimer = setTimeout(() => {
    activeDropdown.value = null
    closeTimer = null
  }, 150)
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) {
    activeDropdown.value = null
  }
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
  activeDropdown.value = null
}

function scrollToContact() {
  closeDropdown()
  closeMobileMenu()
  const el = document.getElementById('contact')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  } else {
    navigateTo('/#contact')
  }
}
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <NuxtLink to="/" class="navbar-logo" @click="closeDropdown">
        <img src="/apple-touch-icon.png" alt="扣握貝果" class="logo-image" />
        <span class="logo-text">扣握貝果 CodeWorldBagel</span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="navbar-nav desktop-nav">
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
              @mouseenter="openDropdown(item.label)"
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
              @mouseenter="openDropdown(item.label)"
            >
              <template v-if="item.dropdown.length > 0">
                <template v-for="dropdownItem in item.dropdown" :key="dropdownItem.label">
                  <a
                    v-if="dropdownItem.external"
                    :href="dropdownItem.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="dropdown-item"
                    @click="closeDropdown"
                  >
                    {{ dropdownItem.label }}
                    <svg
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
                  <NuxtLink
                    v-else
                    :to="dropdownItem.href"
                    class="dropdown-item"
                    @click="closeDropdown"
                  >
                    {{ dropdownItem.label }}
                  </NuxtLink>
                </template>
              </template>
              <a v-else class="dropdown-item dropdown-contact" href="/#contact" @click.prevent="scrollToContact">歡迎加入</a>
            </div>
          </template>
          <a v-else-if="item.href?.includes('#')" :href="item.href" class="nav-link" @click.prevent="scrollToContact">
            {{ item.label }}
          </a>
          <NuxtLink v-else :to="item.href!" class="nav-link">
            {{ item.label }}
          </NuxtLink>
        </div>
      </nav>

      <!-- Mobile hamburger button -->
      <button class="hamburger-btn" :class="{ open: mobileMenuOpen }" @click="toggleMobileMenu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Mobile menu -->
      <nav v-show="mobileMenuOpen" class="mobile-nav">
        <div v-for="item in navItems" :key="item.label" class="mobile-nav-group">
          <template v-if="item.dropdown">
            <button class="mobile-nav-label" @click="toggleDropdown(item.label)">
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
            <div v-show="activeDropdown === item.label" class="mobile-dropdown">
              <template v-if="item.dropdown.length > 0">
                <a
                  v-for="dropdownItem in item.dropdown"
                  :key="dropdownItem.label"
                  :href="dropdownItem.href"
                  :target="dropdownItem.external ? '_blank' : undefined"
                  :rel="dropdownItem.external ? 'noopener noreferrer' : undefined"
                  class="mobile-dropdown-item"
                  @click="closeMobileMenu"
                >
                  {{ dropdownItem.label }}
                </a>
              </template>
              <a v-else class="mobile-dropdown-item" href="/#contact" @click.prevent="scrollToContact">歡迎加入</a>
            </div>
          </template>
          <template v-else>
            <a v-if="item.href?.includes('#')" :href="item.href" class="mobile-nav-label" @click.prevent="scrollToContact">
              {{ item.label }}
            </a>
            <NuxtLink v-else :to="item.href!" class="mobile-nav-label" @click="closeMobileMenu">
              {{ item.label }}
            </NuxtLink>
          </template>
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
  background-color: rgba(245, 243, 239, 0.95);
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
  white-space: nowrap;
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

/* Hamburger button */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 8px;
  background: none;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
}

.hamburger-btn:hover {
  background-color: var(--color-background-alt);
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-text);
  border-radius: 1px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger-btn.open .hamburger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger-btn.open .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.open .hamburger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile nav */
.mobile-nav {
  display: none;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .hamburger-btn {
    display: flex;
  }

  .mobile-nav {
    display: block;
    position: absolute;
    top: var(--header-height);
    left: 0;
    right: 0;
    background-color: var(--color-background);
    border-bottom: 1px solid var(--color-border);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 8px 16px;
  }

  .mobile-nav-group {
    border-bottom: 1px solid var(--color-border);
  }

  .mobile-nav-group:last-child {
    border-bottom: none;
  }

  .mobile-nav-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 14px 8px;
    font-size: 15px;
    font-weight: 500;
    color: var(--color-text);
    background: none;
    border: none;
    cursor: pointer;
  }

  .mobile-dropdown {
    padding: 0 8px 12px;
  }

  .mobile-dropdown-item {
    display: block;
    padding: 10px 12px;
    font-size: 14px;
    color: var(--color-text-light);
    border-radius: 6px;
    transition: var(--transition);
  }

  .mobile-dropdown-item:hover {
    background-color: var(--color-background-alt);
    color: var(--color-primary-dark);
  }

}
</style>
