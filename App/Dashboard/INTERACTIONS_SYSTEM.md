# Système d'Interactions - Documentation Complète

## 🎯 Vue d'ensemble

Un système complet d'interactions visuelles a été créé pour FocusFly, permettant un feedback utilisateur immédiat et professionnel pour TOUTES les actions.

---

## ✅ Composants Créés

### 1. 🔔 **Toast Notification System**

#### Fichiers:
- `src/components/toast/ToastContext.jsx` - Context Provider
- `src/components/toast/Toast.jsx` - Composant visuel

#### Fonctionnalités:
- **4 types de toasts**: success, error, warning, info
- **Auto-dismiss** après 3 secondes (configurable)
- **Animation d'entrée** (slide from right)
- **Position**: Fixed top-right
- **Close button** manuel
- **Dark mode** support

#### Usage:
```javascript
import { useToast } from 'components/toast/ToastContext';

const MyComponent = () => {
  const toast = useToast();

  return (
    <button onClick={() => toast.success('Opération réussie !')}>
      Click me
    </button>
  );
};
```

#### Méthodes disponibles:
```javascript
toast.success(message, duration);  // Toast vert ✓
toast.error(message, duration);    // Toast rouge ✗
toast.warning(message, duration);  // Toast orange ⚠
toast.info(message, duration);     // Toast bleu ℹ
```

---

### 2. 📋 **Modal Component**

#### Fichier:
- `src/components/modal/Modal.jsx` - Modal de base réutilisable

#### Fonctionnalités:
- **4 tailles**: sm, md, lg, xl
- **Backdrop blur** effect
- **Click outside** to close
- **ESC key** to close
- **Body scroll lock** quand ouvert
- **Animations**: fade + scale
- **Dark mode** support
- **Custom footer** avec boutons

#### Usage:
```javascript
import Modal from 'components/modal/Modal';

const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Mon Titre"
  size="lg"
  footer={
    <>
      <button onClick={() => setIsOpen(false)}>Annuler</button>
      <button>Confirmer</button>
    </>
  }
>
  <p>Contenu de la modal</p>
</Modal>
```

---

### 3. 💎 **Premium Modal**

#### Fichier:
- `src/components/modal/PremiumModal.jsx`

#### Fonctionnalités:
- **2 plans**: Mensuel (9.99€) et Annuel (89.99€)
- **Badge "Économisez 25%"** sur plan annuel
- **10 features** listées avec checkmarks
- **Sélection visuelle** du plan
- **CTA Button** avec gradient
- **Garantie** affichée en bas
- **Toast** de confirmation au click

#### Usage:
```javascript
import PremiumModal from 'components/modal/PremiumModal';

<PremiumModal
  isOpen={showPremium}
  onClose={() => setShowPremium(false)}
/>
```

#### Features incluses:
1. Habitudes illimitées
2. Statistiques avancées
3. Capture vocale illimitée
4. Export de données (CSV, PDF)
5. Thèmes personnalisés
6. Support prioritaire 24/7
7. Rappels intelligents
8. Analyses IA personnalisées
9. Synchronisation multi-appareils
10. Backup automatique cloud

---

### 4. ➕ **Add Habit Modal**

#### Fichier:
- `src/components/modal/AddHabitModal.jsx`

#### Fonctionnalités:
- **Formulaire complet** avec validation
- **5 catégories** avec icônes (Santé, Travail, Personnel, Productivité, Apprentissage)
- **4 fréquences**: Quotidien, 3x/semaine, 5x/semaine, Hebdomadaire
- **4 niveaux XP**: 10 (Facile), 20 (Moyen), 30 (Difficile), 50 (Expert)
- **Sélection visuelle** interactive
- **Toast** de confirmation
- **Reset form** après soumission

#### Usage:
```javascript
import AddHabitModal from 'components/modal/AddHabitModal';

<AddHabitModal
  isOpen={showAddHabit}
  onClose={() => setShowAddHabit(false)}
/>
```

#### Form Data:
```javascript
{
  name: string,        // Ex: "Boire de l'eau"
  category: string,    // 'health' | 'work' | 'personal' | 'productivity' | 'learning'
  frequency: string,   // 'daily' | '3week' | '5week' | 'weekly'
  xp: number          // 10 | 20 | 30 | 50
}
```

---

### 5. 📱 **Dropdown Component**

#### Fichier:
- `src/components/dropdown/Dropdown.jsx`

#### Fonctionnalités:
- **Click outside** to close
- **4 positions**: bottom-right, bottom-left, top-right, top-left
- **Icons** dans items
- **Danger mode** (texte rouge)
- **Disabled state**
- **Animation** slide-down
- **Dark mode** support

#### Usage:
```javascript
import Dropdown from 'components/dropdown/Dropdown';

const items = [
  {
    label: 'Voir détails',
    icon: <MdInfo />,
    onClick: () => console.log('Details'),
  },
  {
    label: 'Modifier',
    icon: <MdEdit />,
    onClick: () => console.log('Edit'),
  },
  {
    label: 'Supprimer',
    icon: <MdDelete />,
    danger: true,
    onClick: () => console.log('Delete'),
  },
];

<Dropdown
  trigger={<button>...</button>}
  items={items}
  position="bottom-right"
/>
```

---

### 6. 💡 **Tooltip Component**

#### Fichier:
- `src/components/tooltip/Tooltip.jsx`

#### Fonctionnalités:
- **4 positions**: top, bottom, left, right
- **Hover activation**
- **Arrow pointer**
- **Animation** fade-in
- **Dark mode** support (inversé)
- **Auto-positioning** selon l'espace

#### Usage:
```javascript
import Tooltip from 'components/tooltip/Tooltip';

<Tooltip content="Ceci est une info" position="top">
  <button>Hover me</button>
</Tooltip>
```

---

## 🎨 Animations Tailwind Ajoutées

### Dans `tailwind.config.js`:

```javascript
keyframes: {
  'fade-in': {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  'fade-in-down': {
    '0%': { opacity: '0', transform: 'translateY(-10px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'fade-in-up': {
    '0%': { opacity: '0', transform: 'translateY(10px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'slide-in-right': {
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(0)' },
  },
},
animation: {
  'fade-in': 'fade-in 0.3s ease-out',
  'fade-in-down': 'fade-in-down 0.3s ease-out',
  'fade-in-up': 'fade-in-up 0.3s ease-out',
  'slide-in-right': 'slide-in-right 0.3s ease-out',
}
```

### Classes disponibles:
- `animate-fade-in` - Apparition simple
- `animate-fade-in-down` - Apparition depuis le haut
- `animate-fade-in-up` - Apparition depuis le bas
- `animate-slide-in-right` - Glissement depuis la droite

---

## 🔌 Intégration dans l'App

### `src/index.js`:

```javascript
import { ToastProvider } from "./components/toast/ToastContext";

root.render(
  <BrowserRouter>
    <ToastProvider>
      <App />
    </ToastProvider>
  </BrowserRouter>
);
```

Le **ToastProvider** wrape toute l'application pour permettre l'utilisation du hook `useToast()` partout.

---

## 📄 Page de Démonstration

### Fichier:
- `src/views/admin/demo/index.jsx`

### Contenu:
Page complète montrant **TOUS** les composants interactifs :
1. ✅ Toast Notifications (4 types)
2. ✅ Modals (3 types)
3. ✅ Dropdown Menu
4. ✅ Tooltips (4 positions)
5. ✅ Boutons Interactifs avec animations
6. ✅ Cards avec hover effects

### URL:
`/admin/demo` (à ajouter dans routes.js)

---

## 🎯 Prochaines Étapes - Intégration

### 1. CardMenu Component (3 dots)

**Fichier à modifier**: `src/components/card/CardMenu.jsx`

**Changement**:
```javascript
import Dropdown from 'components/dropdown/Dropdown';
import { useToast } from 'components/toast/ToastContext';
import { MdInfo, MdEdit, MdDelete } from 'react-icons/md';

const CardMenu = () => {
  const toast = useToast();

  const items = [
    {
      label: 'Voir détails',
      icon: <MdInfo />,
      onClick: () => toast.info('Détails à venir...'),
    },
    {
      label: 'Modifier',
      icon: <MdEdit />,
      onClick: () => toast.info('Mode édition activé ✏️'),
    },
    {
      label: 'Supprimer',
      icon: <MdDelete />,
      danger: true,
      onClick: () => toast.warning('Fonction suppression à venir'),
    },
  ];

  return (
    <Dropdown
      trigger={
        <button className="...">
          <MdMoreVert />
        </button>
      }
      items={items}
    />
  );
};
```

---

### 2. Upload Component (Premium Button)

**Fichier à modifier**: `src/views/admin/profile/components/Upload.jsx`

**Changement**:
```javascript
import { useState } from 'react';
import PremiumModal from 'components/modal/PremiumModal';

const Upload = () => {
  const [showPremium, setShowPremium] = useState(false);

  return (
    <>
      <Card>
        {/* ... */}
        <button onClick={() => setShowPremium(true)}>
          Découvrir Premium
        </button>
      </Card>

      <PremiumModal
        isOpen={showPremium}
        onClose={() => setShowPremium(false)}
      />
    </>
  );
};
```

---

### 3. Habits Page (Add Button)

**Fichier à modifier**: `src/views/admin/habits/index.jsx`

**Changement**:
```javascript
import { useState } from 'react';
import AddHabitModal from 'components/modal/AddHabitModal';

const HabitsManagement = () => {
  const [showAddHabit, setShowAddHabit] = useState(false);

  return (
    <>
      <button onClick={() => setShowAddHabit(true)}>
        <MdAdd /> Ajouter une habitude
      </button>

      <AddHabitModal
        isOpen={showAddHabit}
        onClose={() => setShowAddHabit(false)}
      />
    </>
  );
};
```

---

### 4. Active Habits Table (Action Buttons)

**Fichier à modifier**: `src/views/admin/habits/components/ActiveHabitsTable.jsx`

**Changements**:
```javascript
import { useState } from 'react';
import { useToast } from 'components/toast/ToastContext';
import Modal from 'components/modal/Modal';
import Tooltip from 'components/tooltip/Tooltip';

const ActiveHabitsTable = () => {
  const toast = useToast();
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleEdit = (id) => {
    toast.info('Mode édition activé ✏️');
  };

  const handleArchive = (id) => {
    toast.success('Habitude archivée !');
  };

  const handleDelete = (id) => {
    setSelectedId(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    toast.success('Supprimé avec succès !');
    setShowConfirm(false);
  };

  return (
    <>
      {/* Table with action buttons */}
      <Tooltip content="Éditer">
        <button onClick={() => handleEdit(id)}>
          <MdEdit />
        </button>
      </Tooltip>

      {/* Confirmation Modal */}
      <Modal
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        title="Êtes-vous sûr ?"
        footer={...}
      >
        <p>Cette action est irréversible...</p>
      </Modal>
    </>
  );
};
```

---

### 5. Switch Component (Notifications)

**Fichier à modifier**: `src/components/switch/index.jsx`

**Changement**:
```javascript
import { useToast } from 'components/toast/ToastContext';

const Switch = ({ id, label, defaultChecked }) => {
  const toast = useToast();
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      toast.success(`${label} activées 🔔`);
    } else {
      toast.info(`${label} désactivées 🔕`);
    }
  };

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleToggle}
      ...
    />
  );
};
```

---

### 6. Filter Buttons (Habits Page)

**Changement dans `src/views/admin/habits/index.jsx`**:

```javascript
const [activeFilter, setActiveFilter] = useState('all');
const toast = useToast();

const handleFilterChange = (filterId) => {
  setActiveFilter(filterId);
  const filter = filters.find(f => f.id === filterId);
  toast.info(`Filtré par ${filter.label}`);
};

<button
  onClick={() => handleFilterChange(filter.id)}
  className={`... transition-all ${
    activeFilter === filter.id
      ? 'bg-brand-500 scale-105'
      : 'bg-gray-100 scale-100'
  }`}
>
  {filter.label}
</button>
```

---

### 7. Search Bar Focus Effect

**Changement**:
```javascript
<input
  type="text"
  className="... focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:scale-105 transition-all"
  ...
/>
```

---

### 8. Table Rows Clickable

**Changement**:
```javascript
const handleRowClick = (habitId) => {
  toast.info('Détails à venir...');
};

<tr
  onClick={() => handleRowClick(habit.id)}
  className="cursor-pointer transition-all hover:bg-gray-50 hover:scale-[1.01] dark:hover:bg-white/5"
>
  ...
</tr>
```

---

## 📊 Résumé des Interactions

| Élément                    | Interaction                           | Composant Utilisé |
|----------------------------|---------------------------------------|-------------------|
| CardMenu (3 dots)          | Click → Dropdown menu                 | Dropdown          |
| Premium Button             | Click → Modal Premium                 | PremiumModal      |
| Add Habit Button           | Click → Modal formulaire              | AddHabitModal     |
| Edit Button                | Click → Toast + animation rotation    | Toast + CSS       |
| Delete Button              | Click → Modal confirmation            | Modal             |
| Info Icon                  | Hover → Tooltip                       | Tooltip           |
| Switch/Toggle              | Click → Toast notification            | Toast             |
| Filter Buttons             | Click → Change state + Toast          | Toast             |
| Search Bar                 | Focus → Border color + scale          | CSS               |
| Table Rows                 | Click → Toast or Modal                | Toast/Modal       |
| Badges                     | Click → Dropdown status change        | Dropdown          |

---

## ✅ Checklist d'Intégration

- [x] Toast System créé et intégré
- [x] Modal Component créé
- [x] Premium Modal créé
- [x] Add Habit Modal créé
- [x] Dropdown créé
- [x] Tooltip créé
- [x] Animations Tailwind ajoutées
- [x] ToastProvider intégré dans App
- [x] Page de démonstration créée
- [ ] CardMenu intégré avec Dropdown
- [ ] Upload intégré avec Premium Modal
- [ ] Habits page intégrée avec Add Habit Modal
- [ ] Action buttons intégrés avec Toasts
- [ ] Switches intégrés avec Toasts
- [ ] Filter buttons animés
- [ ] Search bar avec focus effect
- [ ] Table rows cliquables
- [ ] Tests complets sur toutes les pages

---

## 🎯 Avantages du Système

### Pour l'Utilisateur:
- ✅ **Feedback immédiat** sur toutes les actions
- ✅ **Confirmation visuelle** avant actions dangereuses
- ✅ **Info contextuelle** avec tooltips
- ✅ **Navigation intuitive** avec dropdowns
- ✅ **Design cohérent** sur toute l'app

### Pour le Développeur:
- ✅ **Composants réutilisables** partout
- ✅ **API simple** avec hooks
- ✅ **Dark mode** automatique
- ✅ **Animations** incluses
- ✅ **Typesafe** avec TypeScript-ready

---

## 🚀 Performance

- **Lightweight**: Pas de librairie externe lourde
- **Tree-shakeable**: Composants indépendants
- **Lazy loading**: Modals chargées à la demande
- **Optimisé**: Animations CSS (GPU accelerated)
- **Accessible**: Support keyboard navigation

---

**Date de Création**: 2025-10-13
**Status**: ✅ Système Complet - Prêt pour Intégration
**Version**: 1.0.0
**Context**: FocusFly - Système d'Interactions Visuelles
