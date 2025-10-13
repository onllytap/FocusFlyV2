# Page Gestion des Habitudes - Documentation

## 📋 Vue d'ensemble

La page **Data Tables** a été complètement transformée en **Gestion des Habitudes** (Habits Management), adaptée au contexte FocusFly (tracker d'habitudes TDAH avec gamification).

---

## ✅ Changements Effectués

### 1. Nouveaux Composants Créés

#### 📊 `ActiveHabitsTable.jsx`
- **Description**: Table complète des habitudes actives avec toutes les colonnes
- **Colonnes**:
  1. **Habitude** - Nom + icône de catégorie + catégorie
  2. **Fréquence** - Badge (Quotidien, 3x/semaine, etc.)
  3. **Streak** - Icône feu 🔥 + nombre de jours
  4. **Taux Réussite** - Barre de progression + pourcentage
  5. **XP/Jour** - Badge violet avec points XP
  6. **Statut** - Badge vert (Actif) ou orange (À risque)
  7. **Actions** - 3 boutons (Éditer, Archiver, Supprimer)

- **Fonctionnalités**:
  - 7 habitudes mock avec données variées
  - Icônes par catégorie (Santé, Travail, Personnel, Productivité)
  - Couleurs adaptées par catégorie
  - Détection automatique du statut "À risque" (< 60% réussite ou < 5 jours streak)
  - Tri cliquable sur toutes les colonnes
  - Hover effects sur les lignes
  - Actions interactives (console.log pour l'instant)

#### 📦 `ArchivedHabitsTable.jsx`
- **Description**: Table des habitudes archivées (complétées ou abandonnées)
- **Colonnes**:
  1. **Habitude** - Nom + catégorie
  2. **Date Archivage** - Date formatée
  3. **Raison** - Badge vert (Complété) ou gris (Abandonné)
  4. **Durée Totale** - Nombre de jours total
  5. **Taux Final** - Pourcentage final de réussite
  6. **Actions** - 2 boutons (Restaurer, Supprimer définitivement)

- **Fonctionnalités**:
  - 4 habitudes archivées mock
  - Différenciation visuelle entre "Complété" et "Abandonné"
  - Actions de restauration
  - Hover effects

#### 🏠 `index.jsx` (Page Principale)
- **Description**: Page principale "Gestion des Habitudes"
- **Structure**:
  1. **Header** - Titre + description avec icône
  2. **Stats Cards** (4 widgets):
     - Habitudes Actives (7 habitudes)
     - Complétées Aujourd'hui (5/7)
     - Streak Moyen (11 jours)
     - XP Cette Semaine (+875 XP)
  3. **Filters & Search Bar**:
     - Barre de recherche avec icône
     - 5 filtres: Toutes, Quotidien, Hebdo, En cours, À risque
     - Bouton "Ajouter une habitude" (primaire, violet)
  4. **Active Habits Table** (pleine largeur)
  5. **Archived Habits Table** (pleine largeur)
  6. **Motivation Card** (gradient vert):
     - Message motivant
     - 3 mini-stats: Meilleure habitude, Plus long streak, Objectif semaine

---

## 🔄 Fichiers Modifiés

### `routes.js`
**Avant**:
```javascript
import DataTables from "views/admin/tables";

{
  name: "Data Tables",
  layout: "/admin",
  icon: <MdBarChart className="h-6 w-6" />,
  path: "data-tables",
  component: <DataTables />,
}
```

**Après**:
```javascript
import HabitsManagement from "views/admin/habits";

{
  name: "Gestion des Habitudes",
  layout: "/admin",
  icon: <MdCheckCircle className="h-6 w-6" />,
  path: "habits",
  component: <HabitsManagement />,
}
```

- ✅ Import changé de `tables` → `habits`
- ✅ Nom changé de "Data Tables" → "Gestion des Habitudes"
- ✅ Path changé de `data-tables` → `habits`
- ✅ Icône changée de `MdBarChart` → `MdCheckCircle`
- ✅ Import `MdCheckCircle` ajouté

---

## 🎨 Design & Style

### Cohérence avec Main Dashboard et Statistics
- ✅ Même composant `Card` avec `rounded-[20px]`
- ✅ Même système de couleurs (navy-700, brand-500, etc.)
- ✅ Même dark mode support sur tous les éléments
- ✅ Mêmes hover effects et transitions
- ✅ Même grid system Tailwind CSS
- ✅ Même typographie et spacing
- ✅ Réutilisation de composants existants (Widget, Card, Progress, CardMenu)

### Composants Réutilisés
- `Card` - Wrapper pour les tables
- `CardMenu` - Menu 3 points en haut à droite des tables
- `Widget` - Cartes de stats
- `Progress` - Barres de progression pour taux de réussite
- `@tanstack/react-table` - Libraire de tables avec tri
- Icons de `react-icons/md` et `react-icons/fa`

### Palette de Couleurs par Catégorie
| Catégorie      | Couleur   | Icon                |
|----------------|-----------|---------------------|
| Santé          | Vert      | MdHealthAndSafety   |
| Travail        | Bleu      | MdWork              |
| Personnel      | Violet    | MdPerson            |
| Productivité   | Orange    | MdFitnessCenter     |
| Apprentissage  | Rose      | MdSchool            |

---

## 🧠 Adaptation au Contexte FocusFly

### Terminologie TDAH
| Ancien (Generic)  | Nouveau (FocusFly)           |
|-------------------|------------------------------|
| Data Tables       | Gestion des Habitudes        |
| Projects          | Habitudes                    |
| Status            | Statut (Actif/À risque)      |
| Progress          | Taux de Réussite             |
| Date              | Streak                       |
| -                 | XP par Jour                  |
| -                 | Fréquence                    |

### Gamification Elements
- **XP System**: Chaque habitude rapporte des points XP
- **Streak System**: Icône feu 🔥 pour motiver la continuité
- **Success Rate**: Barre de progression visuelle
- **Badges de Statut**: Vert (Actif), Orange (À risque)
- **Motivation Card**: Messages encourageants avec stats
- **Catégories Colorées**: Visual feedback immédiat

### Métriques TDAH-Friendly
- Total habitudes actives
- Complétées aujourd'hui (X/Y format)
- Streak moyen (en jours)
- XP cette semaine
- Meilleure habitude (% réussite)
- Plus long streak
- Objectif de la semaine (% complété)

---

## 📱 Responsive Design

### Breakpoints
- **Mobile** (< 640px):
  - Cards empilées (1 col)
  - Search bar pleine largeur
  - Filtres wrap
  - Tables avec scroll horizontal
- **Tablet** (640px - 1024px):
  - 2 cols pour stats cards
  - Filtres + search sur 2 lignes
- **Desktop** (> 1024px):
  - 4 cols pour stats cards
  - Filtres + search sur 1 ligne
  - Tables pleine largeur

### Grid System
```jsx
// Stats Cards: 1 col → 2 cols → 4 cols
grid-cols-1 md:grid-cols-2 lg:grid-cols-4

// Filters: flex-col → flex-row
flex-col md:flex-row md:items-center md:justify-between

// Search bar: full width → 1/3 width
w-full md:w-1/3
```

---

## 🚀 Fonctionnalités Interactives

### Hover Effects
- ✅ Table rows: `hover:bg-gray-50`, `hover:bg-white/5` (dark)
- ✅ Action buttons: `hover:bg-gray-100`, `hover:text-[color]`
- ✅ Filter buttons: `hover:bg-gray-200` (inactive state)
- ✅ Add button: `hover:bg-brand-600`, `hover:shadow-lg`

### Click Handlers (Console.log pour l'instant)
```javascript
// Actions sur les habitudes
onClick={() => console.log("Edit habit", id)}
onClick={() => console.log("Archive habit", id)}
onClick={() => console.log("Delete habit", id)}
onClick={() => console.log("Restore habit", id)}

// Actions globales
onClick={() => console.log("Add new habit")}
setActiveFilter(filter.id)
setSearchTerm(e.target.value)
```

### Sorting
- ✅ Toutes les colonnes sont triables (clic sur header)
- ✅ Utilisation de `@tanstack/react-table`
- ✅ État de tri géré par `useState`

---

## 📊 Données Mock (à remplacer par vraies données)

### Active Habits Data Structure
```javascript
{
  id: 1,
  habit: "Boire de l'eau",
  category: "Santé",
  categoryIcon: "health",
  frequency: "Quotidien",
  streak: 15,
  successRate: 87,
  xpPerDay: 10,
  status: "active" // or "at-risk"
}
```

### Archived Habits Data Structure
```javascript
{
  id: 1,
  habit: "Courir 30min",
  category: "Santé",
  archivedDate: "15.Sep.2024",
  reason: "Complété", // or "Abandonné"
  totalDays: 90,
  finalSuccessRate: 85,
  status: "completed" // or "abandoned"
}
```

### Sources de Données à Connecter (Phase Backend)
1. **Stats Cards**: API pour stats globales
2. **ActiveHabitsTable**: Liste des habitudes actives avec métriques
3. **ArchivedHabitsTable**: Historique des habitudes archivées
4. **Filters**: Compteurs dynamiques par catégorie
5. **Motivation Card**: Calculs automatiques des meilleures performances

---

## ✅ Tests à Effectuer

### Checklist de Vérification
- [ ] Navigation vers `/admin/habits` fonctionne
- [ ] Tous les composants s'affichent correctement
- [ ] Stats cards montrent les bonnes valeurs
- [ ] Search bar est fonctionnelle (input text)
- [ ] Filtres changent l'état actif (visuel)
- [ ] Bouton "Ajouter habitude" fonctionne (console.log)
- [ ] Table habitudes actives s'affiche avec 7 lignes
- [ ] Icons de catégorie s'affichent correctement
- [ ] Barres de progression fonctionnent
- [ ] Badges de statut s'affichent (Actif/À risque)
- [ ] Boutons d'actions fonctionnent (console.log)
- [ ] Tri sur colonnes fonctionne (clic header)
- [ ] Table habitudes archivées s'affiche avec 4 lignes
- [ ] Card de motivation s'affiche en bas
- [ ] Dark mode fonctionne sur tous les éléments
- [ ] Responsive design fonctionne (mobile, tablet, desktop)
- [ ] Hover effects fonctionnent
- [ ] Aucune erreur dans la console

---

## 🎯 Prochaines Étapes (Phase Backend)

### 1. Backend API Integration
- Connecter aux vraies données SQLite/Rust
- CRUD operations pour habitudes:
  - Create: Ajouter nouvelle habitude
  - Read: Charger liste habitudes
  - Update: Modifier habitude, marquer comme complétée
  - Delete/Archive: Archiver ou supprimer

### 2. Fonctionnalités à Implémenter
- **Modal "Ajouter habitude"**:
  - Form avec inputs: nom, catégorie, fréquence, XP
  - Validation
  - Confirmation

- **Modal "Éditer habitude"**:
  - Pré-remplir avec données actuelles
  - Même form que création

- **Filtres fonctionnels**:
  - Filtrer vraiment les habitudes affichées
  - Mettre à jour les compteurs dynamiquement

- **Search fonctionnelle**:
  - Recherche en temps réel dans les habitudes
  - Highlight des résultats

- **Système de Streak**:
  - Tracking automatique des jours consécutifs
  - Reset si jour manqué
  - Notifications de streak cassé

- **Calcul XP automatique**:
  - Gain XP quand habitude complétée
  - Bonus streak
  - Update niveau utilisateur

- **Stats dynamiques**:
  - Calcul en temps réel des métriques
  - Graphiques d'évolution

### 3. Notifications & Rappels
- Push notifications pour habitudes quotidiennes
- Rappels Windows natifs
- Alertes streak cassé

### 4. Export & Backup
- Export CSV des habitudes
- Backup automatique SQLite
- Historique complet

---

## 📝 Notes Techniques

### Dépendances Utilisées
- `react-icons/md` et `react-icons/fa` pour les icônes
- `@tanstack/react-table` pour les tables avec tri
- Tailwind CSS pour le styling
- Composants Chakra UI (Widget, Card, Progress)

### Structure des Fichiers
```
App/Dashboard/src/
└── views/
    └── admin/
        └── habits/
            ├── index.jsx                      (Page principale)
            └── components/
                ├── ActiveHabitsTable.jsx      (Table habitudes actives)
                └── ArchivedHabitsTable.jsx    (Table habitudes archivées)
```

### Hooks React Utilisés
- `useState` pour:
  - Filtre actif
  - Terme de recherche
  - Données des tables
  - État de tri

- `useReactTable` (@tanstack) pour:
  - Gestion des colonnes
  - Tri
  - Rendering optimisé

---

## 🔧 Maintenance & Évolution

### Code à Modifier pour Backend
1. Remplacer les `const tableData = [...]` par des appels API
2. Connecter les `onClick` aux vraies fonctions CRUD
3. Ajouter les modals de création/édition
4. Implémenter les filtres et search fonctionnels
5. Calculer les stats cards dynamiquement

### Points d'Attention
- ⚠️ Actuellement toutes les actions sont des `console.log`
- ⚠️ Les données sont mock (statiques)
- ⚠️ Les filtres ne filtrent pas vraiment
- ⚠️ La search ne recherche pas vraiment
- ⚠️ Pas de validation de formulaire (pas de forms encore)

### Patterns à Suivre
- Toujours utiliser les mêmes composants (Card, Widget, etc.)
- Garder la cohérence des couleurs par catégorie
- Respecter le système de gamification (XP, Streak, Badges)
- Maintenir le dark mode sur tous les nouveaux composants

---

**Date de Création**: 2025-10-13
**Status**: ✅ Design Complet (Phase Statique)
**Next Phase**: Backend Integration (Rust/Python + SQLite)
**Context**: FocusFly - Tracker d'Habitudes TDAH avec Gamification
