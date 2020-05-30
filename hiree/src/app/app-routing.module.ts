<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'employer/:id',
    loadChildren: () => import('./employer-home/employer-home.module').then( m => m.EmployerHomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register-as-employer',
    loadChildren: () => import('./register-as-employer/register-as-employer.module').then( m => m.RegisterAsEmployerPageModule)
  },
  {
    path: 'register-as-employee',
    loadChildren: () => import('./register-as-employee/register-as-employee.module').then( m => m.RegisterAsEmployeePageModule)
  },
  {
    path: 'employee-home',
    loadChildren: () => import('./employee-home/employee-home.module').then( m => m.EmployeeHomePageModule)
  },
  {
    path: 'reg-employer-basic',
    loadChildren: () => import('./register-as-employer/reg-employer-basic/reg-employer-basic.module').then( m => m.RegEmployerBasicPageModule)
  },
  {
    path: 'reg-employee-basic',
    loadChildren: () => import('./register-as-employee/reg-employee-basic/reg-employee-basic.module').then( m => m.RegEmployeeBasicPageModule)
  },
  {
    path: 'requirements-page',
    loadChildren: () => import('./employer-home/requirements-page/requirements-page.module').then( m => m.RequirementsPagePageModule)
  },
  {
    path: 'job-offer',
    loadChildren: () => import('./employer-home/job-offer/job-offer.module').then( m => m.JobOfferPageModule)
  },
  {
    path: 'employee-apply',
    loadChildren: () => import('./employee-home/employee-apply/employee-apply.module').then( m => m.EmployeeApplyPageModule)
  },  {
    path: 'features',
    loadChildren: () => import('./features/features.module').then( m => m.FeaturesPageModule)
  },
=======
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'employer-profile/employer-home',
    children: [
      {
        path: '',
        loadChildren: () => import('./employer-home/employer-home.module').then( m => m.EmployerHomePageModule)
      },
      {
        path: ':eyer_id',
        loadChildren: () => import('./employer-home/details/details.module').then( m => m.DetailsPageModule)
      },
      {
        path: ':eyer_id/job-offer',
        loadChildren: () => import('./employer-home/job-offer/job-offer.module').then( m => m.JobOfferPageModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register-as-employer',
    loadChildren: () => import('./register-as-employer/register-as-employer.module').then( m => m.RegisterAsEmployerPageModule)
  },
  {
    path: 'register-as-employee',
    loadChildren: () => import('./register-as-employee/register-as-employee.module').then( m => m.RegisterAsEmployeePageModule)
  },
  {
    path: 'employee-home',
    children: [
      {
        path: '',
        loadChildren: () => import('./employee-home/employee-home.module').then( m => m.EmployeeHomePageModule)
      },
      {
        path: '/profile',
        loadChildren: () => import('./employee-home/employee-profile/employee-profile.module').then( m => m.EmployeeProfilePageModule)
      },
      {
        path: ':eyee_id',
        loadChildren: () => import('./employee-home/details/details.module').then( m => m.DetailsPageModule)
      },
      {
        path: ':eyee_id/employee-apply',
        loadChildren: () => import('./employee-home/employee-apply/employee-apply.module').then( m => m.EmployeeApplyPageModule)
      }
    ]
  },
  {
    path: 'reg-employer-basic',
    loadChildren: () => import('./register-as-employer/reg-employer-basic/reg-employer-basic.module').then( m => m.RegEmployerBasicPageModule)
  },
  {
    path: 'reg-employee-basic',
    loadChildren: () => import('./register-as-employee/reg-employee-basic/reg-employee-basic.module').then( m => m.RegEmployeeBasicPageModule)
  },
  {
    path: 'employer-profile/requirements-page',
    loadChildren: () => import('./employer-home/requirements-page/requirements-page.module').then( m => m.RequirementsPagePageModule)
  },

  {
    path: 'employer-profile',
    loadChildren: () => import('./employer-home/employer-profile/employer-profile.module').then( m => m.EmployerProfilePageModule)
  },
  
];
>>>>>>> f635d8c0fbde1659218f44466271bb8ab5aa3418

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
