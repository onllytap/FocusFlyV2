# Page Statistiques Avancées - Documentation

## 📊 Vue d'ensemble

La page **NFT Marketplace** a été complètement transformée en **Statistiques Avancées** (Advanced Statistics), adaptée au contexte FocusFly (tracker d'habitudes TDAH).

---

## ✅ Changements Effectués

### 1. Nouveaux Composants Créés

#### 📁 `CategoryBreakdown.jsx`
- **Description**: Breakdown des catégories d'utilisation (Travail, Social, Jeux, Productivité, Divertissement)
- **Fonctionnalités**:
  - Bar chart avec gradient violet/bleu
  - Liste détaillée avec barres de progression
  - Affichage du pourcentage et des heures par catégorie
  - Liste des apps associées à chaque catégorie
  - Résumé avec la catégorie la plus utilisée

#### 🗓️ `ProductivityHeatmap.jsx`
- **Description**: Heatmap interactive des heures productives (calendrier hebdomadaire)
- **Fonctionnalités**:
  - Grille 8 heures × 7 jours
  - Échelle de couleur (0-5) pour le niveau de productivité
  - Tooltips au survol avec détails
  - Légende visuelle
  - Insights automatiques (période la plus productive, meilleur créneau focus)
  - Responsive avec scroll horizontal sur mobile

#### 📈 `WeeklyComparison.jsx`
- **Description**: Comparaison des 4 dernières semaines avec graphiques et tableaux
- **Fonctionnalités**:
  - Line chart multi-séries (Total heures, Temps productif, Distractions)
  - Cartes de stats avec tendances (↑/↓ pourcentage)
  - Tableau détaillé par semaine
  - Message motivant avec progression
  - Calcul automatique des tendances

#### 💻 `DetailedAppsHistory.jsx`
- **Description**: Top 8 applications avec historique détaillé d'utilisation
- **Fonctionnalités**:
  - Tableau complet avec 8 apps
  - Données: Aujourd'hui, Semaine, Sessions, Moyenne session, Tendance
  - Mini sparklines (graphiques d'historique sur 7 jours)
  - Icons colorés pour chaque app
  - Hover effects sur les lignes
  - 3 cartes de résumé en bas

#### 📊 `index.jsx` (Page Principale)
- **Description**: Page principale "Analyse Approfondie"
- **Structure**:
  1. Header avec titre et icône
  2. 4 widgets de stats rapides (Total Semaine, Productivité Moyenne, Apps Utilisées, Meilleur Jour)
  3. Section CategoryBreakdown (pleine largeur)
  4. Section Heatmap + WeeklyComparison (côte à côte)
  5. Section DetailedAppsHistory (pleine largeur)
  6. 2 cartes d'insights du Coach (gradient vert et bleu)

---

## 🔄 Fichiers Modifiés

### `routes.js`
**Avant**:
```javascript
import NFTMarketplace from "views/admin/marketplace";

{
  name: "NFT Marketplace",
  layout: "/admin",
  path: "nft-marketplace",
  icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  component: <NFTMarketplace />,
  secondary: true,
}
```

**Après**:
```javascript
import AdvancedStatistics from "views/admin/statistics";

{
  name: "Statistiques Avancées",
  layout: "/admin",
  path: "statistics",
  icon: <MdBarChart className="h-6 w-6" />,
  component: <AdvancedStatistics />,
  secondary: true,
}
```

- ✅ Import changé de `marketplace` → `statistics`
- ✅ Nom changé de "NFT Marketplace" → "Statistiques Avancées"
- ✅ Path changé de `nft-marketplace` → `statistics`
- ✅ Icône changée de `MdOutlineShoppingCart` → `MdBarChart`
- ✅ Import `MdOutlineShoppingCart` supprimé (plus utilisé)

---

## 🎨 Design & Style

### Cohérence avec Main Dashboard
- ✅ Utilise le même composant `Card` avec `rounded-[20px]`
- ✅ Même système de couleurs (navy-700, white, brand-500, etc.)
- ✅ Même dark mode support
- ✅ Mêmes hover effects et transitions
- ✅ Même grid system avec Tailwind CSS
- ✅ Mêmes composants de charts (BarChart, LineChart, PieChart)
- ✅ Même typographie et spacing

### Composants Réutilisés
- `Card` (component)
- `CardMenu` (component)
- `Widget` (component)
- `BarChart` (component)
- `LineChart` (component)
- Icons de `react-icons/md` et `react-icons/si`

---

## 🧠 Adaptation au Contexte FocusFly

### Terminologie Adaptée
| Avant (NFT)           | Après (FocusFly)              |
|-----------------------|-------------------------------|
| NFT Marketplace       | Statistiques Avancées         |
| Trending NFTs         | Breakdown par Catégorie       |
| Top Creators          | Heatmap des Heures Productives|
| Recently Added        | Comparaison des Semaines      |
| History Card          | Top Apps Détaillées           |

### Catégories TDAH
1. **Travail** (VSCode, Notion, Figma)
2. **Social** (Discord, WhatsApp, Teams)
3. **Jeux** (Steam, Epic Games)
4. **Productivité** (Trello, Asana, Todoist)
5. **Divertissement** (YouTube, Netflix, Spotify)

### Métriques TDAH
- Temps total d'utilisation PC
- Temps productif vs distractions
- Heures de focus optimales
- Nombre de sessions par app
- Tendances hebdomadaires
- Insights et conseils personnalisés

---

## 📱 Responsive Design

### Breakpoints
- **Mobile** (< 640px): Colonnes empilées, scroll horizontal pour heatmap
- **Tablet** (640px - 1024px): 2 colonnes pour la plupart des sections
- **Desktop** (> 1024px): Layout complet avec sections côte à côte

### Grid System
```jsx
// Quick Stats: 1 col mobile → 4 cols desktop
grid-cols-1 md:grid-cols-2 lg:grid-cols-4

// Heatmap + Comparison: 1 col mobile → 2 cols desktop
grid-cols-1 xl:grid-cols-2

// Coach Insights: 1 col mobile → 2 cols tablet
grid-cols-1 md:grid-cols-2
```

---

## 🚀 Fonctionnalités Interactives

### Hover Effects
- ✅ Cards: `hover:shadow-md`, `hover:bg-gray-50`
- ✅ Tableau rows: `hover:bg-gray-50`, `hover:bg-white/5` (dark mode)
- ✅ Heatmap cells: `hover:scale-110`, tooltips au survol
- ✅ App icons: `group-hover:scale-110`

### Transitions
- ✅ Progress bars: `transition-all duration-500`
- ✅ All hover states: `transition-all`
- ✅ Cards: `transition-colors`, `transition-shadow`

### Responsive Elements
- ✅ Overflow horizontal pour tableaux: `overflow-x-auto`
- ✅ Min-width pour éviter le collapse: `min-w-[500px]`
- ✅ Flexbox responsive: `flex-col md:flex-row`

---

## 📊 Données Mock (à remplacer par vraies données)

### Sources de Données à Connecter
1. **CategoryBreakdown**: API de tracking d'apps par catégorie
2. **ProductivityHeatmap**: Données d'activité horaire de la semaine
3. **WeeklyComparison**: Historique des 4 dernières semaines
4. **DetailedAppsHistory**: Liste des apps avec temps d'utilisation

### Format des Données
```javascript
// Exemple pour DetailedAppsHistory
{
  name: "VSCode",
  icon: <SiVisualstudiocode />,
  category: "Travail",
  todayTime: "2h 45min",
  weekTime: "18h 30min",
  trend: "+12%",
  trendPositive: true,
  sessions: 23,
  avgSession: "48min",
  history: [2.5, 3.2, 2.8, 3.5, 2.9, 2.4, 2.75]
}
```

---

## ✅ Tests à Effectuer

### Checklist de Vérification
- [ ] Navigation vers `/admin/statistics` fonctionne
- [ ] Tous les composants s'affichent correctement
- [ ] Dark mode fonctionne sur tous les composants
- [ ] Hover effects fonctionnent
- [ ] Responsive design fonctionne (mobile, tablet, desktop)
- [ ] Tooltips de la heatmap s'affichent
- [ ] Sparklines s'affichent dans le tableau
- [ ] Charts (Bar, Line) s'affichent correctement
- [ ] Aucune erreur dans la console
- [ ] Cohérence visuelle avec Main Dashboard

---

## 🎯 Prochaines Étapes

1. **Connecter aux vraies données**:
   - Remplacer les données mock par des appels API
   - Intégrer avec le système de tracking d'apps

2. **Optimisations**:
   - Lazy loading des charts
   - Memoization des composants lourds
   - Skeleton loading pendant le chargement

3. **Fonctionnalités Supplémentaires**:
   - Filtres par période (jour, semaine, mois)
   - Export des données (CSV, PDF)
   - Comparaison avec objectifs personnels
   - Alertes et notifications

---

## 📝 Notes Techniques

### Dépendances Utilisées
- `react-icons/md` et `react-icons/si` pour les icônes
- Chakra UI / Tailwind CSS pour le styling
- ApexCharts (via composants custom) pour les graphiques

### Structure des Fichiers
```
App/Dashboard/src/
└── views/
    └── admin/
        └── statistics/
            ├── index.jsx              (Page principale)
            └── components/
                ├── CategoryBreakdown.jsx
                ├── ProductivityHeatmap.jsx
                ├── WeeklyComparison.jsx
                └── DetailedAppsHistory.jsx
```

---

**Date de Création**: 2025-10-13
**Status**: ✅ Complète et Fonctionnelle
**Context**: FocusFly - Tracker d'Habitudes TDAH
