import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Doctors = React.lazy(() => import('./views/pages/doctor/Doctor'));
const Patient = React.lazy(() => import('./views/pages/patient/Patient'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home'},
  { path: '/pakistan/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/pakistan/doctors', name: 'Doctors', component: Doctors, exact: true},
  { path: '/pakistan/patient', name: 'Patient', component: Patient, exact: true},
  { path: '/pakistan/base', name: 'Base', component: Cards, exact: true },
  { path: '/pakistan/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/pakistan/base/cards', name: 'Cards', component: Cards },
  { path: '/pakistan/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/pakistan/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/pakistan/base/forms', name: 'Forms', component: BasicForms },
  { path: '/pakistan/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/pakistan/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/pakistan/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/pakistan/base/navs', name: 'Navs', component: Navs },
  { path: '/pakistan/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/pakistan/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/pakistan/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/pakistan/base/switches', name: 'Switches', component: Switches },
  { path: '/pakistan/base/tables', name: 'Tables', component: Tables },
  { path: '/pakistan/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/pakistan/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/pakistan/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/pakistan/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/pakistan/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/pakistan/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/pakistan/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/pakistan/charts', name: 'Charts', component: Charts },
  { path: '/pakistan/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/pakistan/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/pakistan/icons/flags', name: 'Flags', component: Flags },
  { path: '/pakistan/icons/brands', name: 'Brands', component: Brands },
  { path: '/pakistan/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/pakistan/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/pakistan/notifications/badges', name: 'Badges', component: Badges },
  { path: '/pakistan/notifications/modals', name: 'Modals', component: Modals },
  { path: '/pakistan/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/pakistan/widgets', name: 'Widgets', component: Widgets },
  { path: '/pakistan/users', exact: true,  name: 'Users', component: Users },
  { path: '/pakistan/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
