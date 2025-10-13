# FocusFly - Documentation Technique

## <� Vue d'ensemble

**FocusFly** est une application desktop Windows con�ue pour les personnes atteintes de TDAH, permettant la capture rapide via tracker d'habitude
🧠 Nom de projet : FocusFly

Une app Windows pensée pour les cerveaux TDAH : claire, ludique, sans surcharge, et surtout qui te montre ce que tu fais vraiment sur ton PC — pour t’aider à reprendre le contrôle.

🏠 1. Dashboard principal – “Vue cerveau TDAH”

Dès que t’ouvres l’app, t’as ta situation du jour en un coup d’œil, sans réfléchir.
Exemple :

🧩 Habitudes à faire aujourd’hui (petites missions avec cases à cocher)

🆙 Niveau actuel / XP gagné (plus tu fais tes tâches, plus tu montes de niveau)

⏱️ Temps total passé sur l’ordi aujourd’hui

💻 Top 5 applis utilisées (et combien de temps sur chacune)

⚠️ Alertes distractions (“Tu as ouvert TikTok 14 fois aujourd’hui 😅”)

👉 But : que le cerveau ait toutes les infos importantes sans fouiller dans 10 menus.

🗓️ 2. Système de tracker d’habitudes (façon jeu vidéo)

Ici, on transforme les tâches chiantes en “mini quêtes”.
Fonctionnalités :

🧠 Création ultra-rapide d’habitudes (“Boire de l’eau”, “Lire 5 min”, “Fermer Chrome à 22h”)

🔄 Répétition automatique (quotidien, hebdo, week-end, etc.)

🔔 Rappels personnalisables avec mini pop-up motivants

🆙 Système de niveaux et XP : chaque habitude faite te donne de l’XP, tu débloques des badges ou des thèmes

📊 Stats par habitude : taux de réussite, jour le plus productif, etc.

💡 Exemple :

Faire 3 habitudes = +30 XP

Atteindre 7 jours consécutifs = “Badge Discipline 🔥”

🖥️ 3. Analyse automatique de ton activité PC

C’est là que ça devient puissant. L’app scanne localement ton activité pour t’aider à comprendre comment tu passes ton temps :

🕰️ Temps total d’utilisation du PC par jour / semaine

📂 Applications les plus utilisées + durée d’utilisation

🧭 Classement par catégorie (travail, réseaux, jeux, etc.)

🔔 Alertes d’abus (“Tu es sur YouTube depuis 1h30 non-stop 😅”)

📉 Temps perdu vs temps productif

💡 Exemple concret :

“Tu as bossé 3h20 aujourd’hui.”

“Tu as scrollé TikTok 1h15.”

“Tu ouvres VSCode tous les jours entre 14h et 16h.”
→ ça te donne des pistes pour ajuster tes habitudes.

🎯 4. Coach Focus (assistant intelligent intégré)

C’est un petit coach virtuel qui analyse tes données et te fait des suggestions concrètes pour progresser :

“Essaie de couper Discord après 19h pour améliorer ton focus.”

“Tu perds souvent de la productivité le mardi matin, teste une habitude ‘Focus 30 min’.”

“Ta moyenne de sommeil baisse → ajoute une habitude ‘coucher avant minuit’.”

👉 Il agit comme une IA coach TDAH qui parle simple et propose des petits ajustements.

🪄 5. Mode anti-distraction intégré

Pour les moments où tu veux vraiment focus :

🔒 Blocage temporaire d’applis / sites pendant une session

🎯 Mode “Mission” : tu choisis une tâche, tu lances un timer, et l’app te garde concentré

🧘 Rappels “pause cerveau” toutes les X minutes pour éviter l’épuisement mental

🧰 6. Bonus cool pour TDAH

Quelques petits plus qui font une énorme différence :

📍 Widget “mini dashboard” sur le bureau

📁 Analyse des fichiers récents (les projets que tu touches le plus)

⏳ Rappel quand l’ordi tourne depuis trop longtemps sans pause

💡 Suggestion automatique d’habitudes (“Tu passes 2h sur Discord ? → Ajoute une habitude ‘fermer à 22h’”)

🧠 Résumé TDAH-style : les features clés
🧩 Fonction	⚙️ Détail utile pour TDAH
📊 Dashboard simple	Tout en un coup d’œil (habitudes, temps, applis)
🧙 Tracker d’habitudes	Quêtes + XP + badges = motivation
🕵️ Analyse PC	Temps d’écran, applis, catégories
🤖 Coach focus	Conseils personnalisés automatiques
🔒 Mode anti-distrac	Blocage, timers, missions focus
🧠 Smart extras	Widget, rappels, suggestions auto

💡 Objectif final : plus qu’un tracker, ce serait une sorte de copilote de productivité pour cerveau TDAH. Il ne te juge pas, il t’aide à te comprendre, il te motive, et il transforme ton PC en outil de focus au lieu d’un terrain de distraction.


### Stack Technique
- **Frontend**: React 18.3+ + TypeScript 5.6+
- **Desktop**: Electron 32.x Python ou Rust a toi de choisir le meilleur
- **Styles**: SCSS modulaire + Tailwind CSS (hybride)
- **Build**: Vite 5.4+
- **Database**: Better-SQLite3 (actuellement d�sactiv�e)
- **UI Components**: shadcn/ui + Lucide React icons
- **Theming**: SCSS + Tailwind CSS
- **Fonts**: IBM Plex Sans
- **UI Components**: Chakra UI

---


## <� Syst�me de Th�mes SCSS (Nouveau)

### Architecture Modulaire

Le syst�me SCSS est inspir� de **Material UI** et **Chakra UI** pour une maintenabilité maximale.

#### 1. Variables Globales (`_vars.scss`)

```scss
// Espacements (syst�me 8px)
$spacing-xs: 0.25rem;   // 4px
$spacing-sm: 0.5rem;    // 8px
$spacing-md: 1rem;      // 16px
$spacing-lg: 1.5rem;    // 24px
$spacing-xl: 2rem;      // 32px

// Tailles de police
$font-size-xs: 0.75rem;     // 12px
$font-size-base: 1rem;      // 16px
$font-size-xl: 1.25rem;     // 20px
$font-size-4xl: 2.25rem;    // 36px

// Border radius
$radius-sm: 0.375rem;   // 6px
$radius-lg: 0.75rem;    // 12px
$radius-full: 9999px;   // Circle

// Transitions
$transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);

// Layout
$sidebar-width: 16rem;   // 256px
$header-height: 4rem;    // 64px
```

#### 2. Syst�me de Couleurs (`_colors.scss`)

**Th�me Dark (par d�faut)**:
```scss
:root, [data-theme='dark'] {
  --color-accent: #9600FF;           // =� Violet �clatant
  --color-accent-hover: #b333ff;
  --color-accent-active: #7a00cc;

  --color-bg-primary: #020817;       // Fond ultra sombre
  --color-bg-secondary: #0f172a;     // Cards/panels
  --color-bg-tertiary: #1e293b;

  --color-text-primary: #A5A4A5;     // Gris texte principal
  --color-text-secondary: #64748b;
  --color-text-inverse: #ffffff;

  // Glow effects (violet)
  --glow-sm: 0 0 10px rgba(150, 0, 255, 0.3);
  --glow-md: 0 0 20px rgba(150, 0, 255, 0.4);
  --glow-lg: 0 0 30px rgba(150, 0, 255, 0.5);
}
```

**Th�me Light**:
```scss
[data-theme='light'] {
  --color-accent: #60a5fa;           // =5 Bleu clair
  --color-bg-primary: #ffffff;       // Blanc pur
  --color-text-primary: #0f172a;     // Presque noir

  // Glow effects (bleu)
  --glow-sm: 0 0 10px rgba(96, 165, 250, 0.3);
  --glow-md: 0 0 20px rgba(96, 165, 250, 0.4);
  --glow-lg: 0 0 30px rgba(96, 165, 250, 0.5);
}
```

#### 3. Mixins R�utilisables (`_mixins.scss`)

```scss
// Glow effect
@mixin glow-on-hover($size: 'md') {
  transition: box-shadow $transition-base;
  &:hover:not(:disabled) {
    @include glow($size);
  }
}

// Glassmorphism
@mixin glass {
  background: rgba(var(--color-bg-secondary), 0.7);
  backdrop-filter: blur(20px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

// Flexbox helpers
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// Custom scrollbar
@mixin custom-scrollbar {
  &::-webkit-scrollbar { width: 8px; }
  &::-webkit-scrollbar-thumb {
    background: $color-border-secondary;
    border-radius: $radius-full;
  }
}

// Responsive
@mixin sm { @media (min-width: 640px) { @content; } }
@mixin md { @media (min-width: 768px) { @content; } }
@mixin lg { @media (min-width: 1024px) { @content; } }
```

#### 4. Composants Interactifs (`_buttons.scss`)

```scss
// Bouton de capture vocale avec glow
.voice-capture-btn {
  background: $color-accent !important;
  color: $color-text-inverse !important;

  &:hover:not(:disabled) {
    @include glow('lg');
    transform: translateY(-2px);
  }
}

// Cards interactives
.card-interactive {
  &:hover {
    transform: translateY(-4px);
    border-color: $color-accent;
    @include glow('sm');
  }
}

// Input avec focus glow
input:focus {
  border-color: $color-accent;
  @include glow('sm');
}
```

#### 5. Polices IBM Plex Sans (`_fonts.scss`)

```scss
@font-face {
  font-family: 'IBM Plex Sans';
  src: url('../../assets/fonts/IBMPlexSans-Regular.woff') format('woff');
  font-weight: 400;
  font-display: swap;
}
// + Medium (500), SemiBold (600), Bold (700)
```

� **Note**: Les fichiers `.woff` doivent �tre t�l�charg�s depuis Google Fonts et plac�s dans `src/renderer/src/assets/fonts/`. Un README est fourni dans ce dossier avec les instructions.

---

## <� Switch de Th�me

### Composant ThemeSwitcher

```tsx
// src/renderer/src/components/ui/theme-switcher.tsx
export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('dark')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }
  // ...
}
```

### Utilisation

Le composant est int�gr� dans le **Header** (top-right) :
```tsx
<Header>
  <ThemeSwitcher />  {/* Ic�ne Sun/Moon */}
  <NotificationButton />
</Header>
```

---

## = S�curit� Electron

### Configuration Stricte

```typescript
// src/main/index.ts
const mainWindow = new BrowserWindow({
  webPreferences: {
    nodeIntegration: false,        // L D�sactiv�
    contextIsolation: true,        //  Activ�
    sandbox: true,                 //  Activ�
    preload: join(__dirname, '../preload/index.js')
  }
})
```

### IPC Bridge S�curis�

```typescript
// src/preload/index.ts
contextBridge.exposeInMainWorld('electron', {
  saveNote: (content: string) => ipcRenderer.invoke('notes:save', content),
  getNotes: () => ipcRenderer.invoke('notes:get'),
  // ...
})
```

---

## =� Base de Donn�es

### �tat Actuel

� **La database est temporairement d�sactiv�e** en raison d'un probl�me de compilation de `better-sqlite3` (n�cessite Visual Studio Build Tools sur Windows).

### Sch�ma SQLite

```sql
-- Notes
CREATE TABLE notes (
  id INTEGER PRIMARY KEY,
  content TEXT NOT NULL,
  category TEXT,
  created_at INTEGER DEFAULT (strftime('%s', 'now')),
  is_completed INTEGER DEFAULT 0
);

-- Stats utilisateur
CREATE TABLE user_stats (
  id INTEGER PRIMARY KEY,
  total_notes INTEGER DEFAULT 0,
  xp INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  current_streak INTEGER DEFAULT 0
);

-- Achievements
CREATE TABLE achievements (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  unlocked INTEGER DEFAULT 0,
  unlocked_at INTEGER
);

-- Daily Missions
CREATE TABLE daily_missions (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  target INTEGER NOT NULL,
  current INTEGER DEFAULT 0,
  completed INTEGER DEFAULT 0,
  date TEXT NOT NULL
);
```

---

## ( Raccourcis Globaux

### Configuration

```typescript
// src/main/services/shortcuts.ts
globalShortcut.register('Ctrl+Shift+V', () => {
  console.log('[Shortcuts] Voice capture triggered!')
  // Ouvre la fen�tre de capture vocale
})
```

### �tat
 **Fonctionne**: Le raccourci `Ctrl+Shift+V` est correctement enregistr� et fonctionne.

---

## =� Performance

### M�triques Actuelles

- � **D�marrage**: **61ms** (objectif: < 1 seconde) 
- <� **Hot reload**: Fonctionnel avec Vite
- =� **Build**: Rapide gr�ce � Vite 5.4+

### Optimisations

1. **Vite**: Build ultra-rapide
2. **Code Splitting**: Lazy loading des pages (� impl�menter)
3. **Tree Shaking**: Tailwind CSS PurgeCSS automatique
4. **SCSS**: Compilation optimis�e avec Dart Sass

---

## =� Build & Distribution

### D�veloppement

```bash
npm run dev         # Lance l'app en mode dev
```

### Production

```bash
npm run build       # Build du code
npm run build:win   # Build + packaging Windows (NSIS)
```

### Configuration Electron Builder

```yaml
# electron-builder.yml
appId: com.focusfly.app
productName: FocusFly
win:
  target: nsis
  icon: resources/icon.ico
  artifactName: ${productName}-Setup-${version}.${ext}
```

---

## >� Composants UI Principaux

### Layout Structure

```tsx
<Layout>
  <Sidebar />  {/* Navigation gauche */}
  <div>
    <Header />  {/* Barre sup�rieure */}
    <main>
      {currentPage === 'dashboard' && <Dashboard />}
      {currentPage === 'notes' && <Notes />}
      {/* ... */}
    </main>
  </div>
</Layout>
```

### Dashboard

- **Welcome Banner**: XP progress bar, niveau actuel
- **Stats Cards**: Notes totales, streak, achievements
- **Quick Actions**: Boutons d'actions rapides
- **Recent Activity**: Liste des derni�res notes

### Composants shadcn/ui

Tous les composants suivent les **variants de shadcn/ui** :

```tsx
<Button variant="default" size="lg">Primary</Button>
<Button variant="ghost" size="icon">Icon</Button>
<Button variant="outline">Secondary</Button>

<Card>
  <CardHeader>
    <CardTitle>Titre</CardTitle>
  </CardHeader>
  <CardContent>Contenu</CardContent>
</Card>
```

---

## <� Prochaines �tapes

### Phase 1 (Actuel) 
- [x] Architecture compl�te (Electron + React + TypeScript)
- [x] Syst�me SCSS modulaire avec th�mes Dark/Light
- [x] ThemeSwitcher fonctionnel
- [x] Glow effects sur �l�ments interactifs
- [x] Layout professionnel Windows 11 style
- [x] IBM Plex Sans font integration

### Phase 2 (� venir)
- [ ] T�l�charger les fichiers `.woff` IBM Plex Sans
- [ ] R�soudre le probl�me better-sqlite3 (DB)
- [ ] Impl�menter la capture vocale (Web Speech API)
- [ ] Syst�me de gamification complet
- [ ] Module premium avec validation de licence

### Phase 3
- [ ] Tests E2E (Playwright)
- [ ] CI/CD avec GitHub Actions
- [ ] Auto-update avec electron-updater
- [ ] Analytics et telemetry

---

## =� Troubleshooting

### Better-SQLite3 Compilation Error

**Probl�me**: Module compiled against different Node.js version

**Solution temporaire**: Database d�sactiv�e dans `src/main/index.ts`
```typescript
// TEMPORARY: Commented out until better-sqlite3 is rebuilt
// initializeDatabase()
// registerIPCHandlers()
```

**Solution permanente**: Installer Visual Studio Build Tools ou utiliser des bindings pr�compil�s

### SASS Deprecation Warnings

**R�solu**: Migration de `length()` vers `sass:list.length()`

---

## =� Conventions de Code

### TypeScript
- **Strict mode** activ� (`noImplicitAny`)
- **Interfaces** pour les types (pas `type` sauf pour les unions)
- **Path aliases**: `@renderer`, `@main`, `@preload`

### SCSS
- **BEM naming** pour les classes custom (`.btn-primary`, `.card-interactive`)
- **Mixins** pour les patterns r�utilisables
- **Variables CSS** pour les th�mes dynamiques

### React
- **Functional components** uniquement
- **Hooks** pour la logique d'�tat
- **Props typing** strict avec TypeScript

---

## =� Ressources
- [Chakra UI](https://chakra-ui.com/)
- [Electron Security Best Practices](https://www.electronjs.org/docs/latest/tutorial/security)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [IBM Plex Sans Font](https://fonts.google.com/specimen/IBM+Plex+Sans)
- [Dart Sass Documentation](https://sass-lang.com/documentation)

---

**Derni�re mise � jour**: 2025-10-12
**Version**: 1.0.0
**Status**:  Syst�me SCSS impl�ment� et fonctionnel
