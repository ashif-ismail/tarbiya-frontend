import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { EcommerceComponent } from './components/dashboard/ecommerce/ecommerce.component';
import { AnalyticsComponent } from './components/dashboard/analytics/analytics.component';
import { ProjectManagementComponent } from './components/dashboard/project-management/project-management.component';
import { LmsCoursesComponent } from './components/dashboard/lms-courses/lms-courses.component';
import { CryptoComponent } from './components/dashboard/crypto/crypto.component';
import { HelpDeskComponent } from './components/dashboard/help-desk/help-desk.component';
import { SaasAppComponent } from './components/dashboard/saas-app/saas-app.component';
import { ChatComponent } from './components/apps/chat/chat.component';
import { EmailComponent } from './components/apps/email/email.component';
import { EmailInboxComponent } from './components/apps/email/email-inbox/email-inbox.component';
import { ReadEmailComponent } from './components/apps/email/read-email/read-email.component';
import { ComposeEmailComponent } from './components/apps/email/compose-email/compose-email.component';
import { FileManagerComponent } from './components/apps/file-manager/file-manager.component';
import { MyDriveComponent } from './components/apps/file-manager/my-drive/my-drive.component';
import { FmAssetsComponent } from './components/apps/file-manager/fm-assets/fm-assets.component';
import { FmProjectsComponent } from './components/apps/file-manager/fm-projects/fm-projects.component';
import { FmPersonalComponent } from './components/apps/file-manager/fm-personal/fm-personal.component';
import { FmTemplatesComponent } from './components/apps/file-manager/fm-templates/fm-templates.component';
import { FmDocumentsComponent } from './components/apps/file-manager/fm-documents/fm-documents.component';
import { FmMediaComponent } from './components/apps/file-manager/fm-media/fm-media.component';
import { FmRecentFilesComponent } from './components/apps/file-manager/fm-recent-files/fm-recent-files.component';
import { ToDoListComponent } from './components/apps/to-do-list/to-do-list.component';
import { TaskDetailsComponent } from './components/apps/to-do-list/task-details/task-details.component';
import { CalendarComponent } from './components/apps/calendar/calendar.component';
import { ContactsComponent } from './components/apps/contacts/contacts.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { MembersGridComponent } from './components/contact-list/members-grid/members-grid.component';
import { MembersGrid2Component } from './components/contact-list/members-grid2/members-grid2.component';
import { MembersListComponent } from './components/contact-list/members-list/members-list.component';
import { MemberProfileComponent } from './components/contact-list/member-profile/member-profile.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceDetailsComponent } from './components/invoice/invoice-details/invoice-details.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PProjectsComponent } from './components/projects/p-projects/p-projects.component';
import { PClientsComponent } from './components/projects/p-clients/p-clients.component';
import { PTeamComponent } from './components/projects/p-team/p-team.component';
import { PKanbanBoardComponent } from './components/projects/p-kanban-board/p-kanban-board.component';
import { PTasksComponent } from './components/projects/p-tasks/p-tasks.component';
import { PUsersComponent } from './components/projects/p-users/p-users.component';
import { ProjectCreateComponent } from './components/projects/project-create/project-create.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { LessonPreviewComponent } from './components/courses/lesson-preview/lesson-preview.component';
import { ProductsComponent } from './components/pages/ecommerce-page/products/products.component';
import { ProductDetailsComponent } from './components/pages/ecommerce-page/product-details/product-details.component';
import { CreateProductComponent } from './components/pages/ecommerce-page/create-product/create-product.component';
import { ProductsOrdersComponent } from './components/pages/ecommerce-page/products-orders/products-orders.component';
import { ProductsOrderDetailsComponent } from './components/pages/ecommerce-page/products-order-details/products-order-details.component';
import { ProductsCustomersComponent } from './components/pages/ecommerce-page/products-customers/products-customers.component';
import { ProductsCartComponent } from './components/pages/ecommerce-page/products-cart/products-cart.component';
import { ProductsCheckoutComponent } from './components/pages/ecommerce-page/products-checkout/products-checkout.component';
import { ProductSellersComponent } from './components/pages/ecommerce-page/product-sellers/product-sellers.component';
import { AnalyticsPageComponent } from './components/pages/analytics-page/analytics-page.component';
import { AnalyticsCustomersComponent } from './components/pages/analytics-page/analytics-customers/analytics-customers.component';
import { AnalyticsReportsComponent } from './components/pages/analytics-page/analytics-reports/analytics-reports.component';
import { EcommercePageComponent } from './components/pages/ecommerce-page/ecommerce-page.component';
import { IconsComponent } from './components/pages/icons/icons.component';
import { FlaticonComponent } from './components/pages/icons/flaticon/flaticon.component';
import { RemixiconComponent } from './components/pages/icons/remixicon/remixicon.component';
import { MaterialSymbolsComponent } from './components/pages/icons/material-symbols/material-symbols.component';
import { MaterialIconsComponent } from './components/pages/icons/material-icons/material-icons.component';
import { TablesComponent } from './components/tables/tables.component';
import { BasicTableComponent } from './components/tables/basic-table/basic-table.component';
import { DataTableComponent } from './components/tables/data-table/data-table.component';
import { FormsComponent } from './components/forms/forms.component';
import { BasicFormComponent } from './components/forms/basic-form/basic-form.component';
import { WizardFormComponent } from './components/forms/wizard-form/wizard-form.component';
import { AdvancedFormComponent } from './components/forms/advanced-form/advanced-form.component';
import { EditorsComponent } from './components/forms/editors/editors.component';
import { FileUploaderComponent } from './components/forms/file-uploader/file-uploader.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { SigninSignupComponent } from './components/authentication/signin-signup/signin-signup.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { ConfirmMailComponent } from './components/authentication/confirm-mail/confirm-mail.component';
import { LockScreenComponent } from './components/authentication/lock-screen/lock-screen.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { TimelineComponent } from './components/pages/timeline/timeline.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { SearchComponent } from './components/pages/search/search.component';
import { BlankPageComponent } from './components/pages/blank-page/blank-page.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { InternalErrorComponent } from './components/common/internal-error/internal-error.component';
import { MapsComponent } from './components/pages/maps/maps.component';
import { NotificationsComponent } from './components/pages/notifications/notifications.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { AccountComponent } from './components/pages/account/account.component';
import { SecurityComponent } from './components/pages/security/security.component';
import { ConnectionsComponent } from './components/pages/connections/connections.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ApexchartsComponent } from './components/charts/apexcharts/apexcharts.component';
import { EchartsComponent } from './components/charts/echarts/echarts.component';
import { ChartjsComponent } from './components/charts/chartjs/chartjs.component';
import { UiKitComponent } from './components/ui-kit/ui-kit.component';
import { AlertsComponent } from './components/ui-kit/alerts/alerts.component';
import { AutocompleteComponent } from './components/ui-kit/autocomplete/autocomplete.component';
import { AvatarsComponent } from './components/ui-kit/avatars/avatars.component';
import { AccordionComponent } from './components/ui-kit/accordion/accordion.component';
import { BadgesComponent } from './components/ui-kit/badges/badges.component';
import { BreadcrumbComponent } from './components/ui-kit/breadcrumb/breadcrumb.component';
import { ButtonToggleComponent } from './components/ui-kit/button-toggle/button-toggle.component';
import { ButtonsComponent } from './components/ui-kit/buttons/buttons.component';
import { CardsComponent } from './components/ui-kit/cards/cards.component';
import { CarouselsComponent } from './components/ui-kit/carousels/carousels.component';
import { CheckboxComponent } from './components/ui-kit/checkbox/checkbox.component';
import { ChipsComponent } from './components/ui-kit/chips/chips.component';
import { ColorPickerComponent } from './components/ui-kit/color-picker/color-picker.component';
import { DatepickerComponent } from './components/ui-kit/datepicker/datepicker.component';
import { DialogComponent } from './components/ui-kit/dialog/dialog.component';
import { DividerComponent } from './components/ui-kit/divider/divider.component';
import { DragDropComponent } from './components/ui-kit/drag-drop/drag-drop.component';
import { ExpansionComponent } from './components/ui-kit/expansion/expansion.component';
import { FormFieldComponent } from './components/ui-kit/form-field/form-field.component';
import { GridComponent } from './components/ui-kit/grid/grid.component';
import { ImagesComponent } from './components/ui-kit/images/images.component';
import { InputComponent } from './components/ui-kit/input/input.component';
import { ListComponent } from './components/ui-kit/list/list.component';
import { ListboxComponent } from './components/ui-kit/listbox/listbox.component';
import { MenusComponent } from './components/ui-kit/menus/menus.component';
import { PaginationComponent } from './components/ui-kit/pagination/pagination.component';
import { ProgressBarComponent } from './components/ui-kit/progress-bar/progress-bar.component';
import { RadioComponent } from './components/ui-kit/radio/radio.component';
import { SelectComponent } from './components/ui-kit/select/select.component';
import { SidenavComponent } from './components/ui-kit/sidenav/sidenav.component';
import { SlideToggleComponent } from './components/ui-kit/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/ui-kit/slider/slider.component';
import { SpacingComponent } from './components/ui-kit/spacing/spacing.component';
import { SnackbarComponent } from './components/ui-kit/snackbar/snackbar.component';
import { StepperComponent } from './components/ui-kit/stepper/stepper.component';
import { TableComponent } from './components/ui-kit/table/table.component';
import { TabsComponent } from './components/ui-kit/tabs/tabs.component';
import { ToolbarComponent } from './components/ui-kit/toolbar/toolbar.component';
import { TooltipComponent } from './components/ui-kit/tooltip/tooltip.component';
import { TreeComponent } from './components/ui-kit/tree/tree.component';
import { TypographyComponent } from './components/ui-kit/typography/typography.component';
import { VideosComponent } from './components/ui-kit/videos/videos.component';
import { ManageGroupsComponent } from './components/apps/manage-group/manage-groups.component';
import { ManageTasksComponent } from './components/apps/manage-tasks/manage-tasks.component';
import { ManageCategoriesComponent } from './components/apps/manage-categories/manage-categories.component';
import { ReportsComponent } from './components/apps/user-reports/reports.component';

export const routes: Routes = [
    {path: '', component: ReportsComponent},
    {path: 'analytics', component: AnalyticsComponent},
    {path: 'project-management', component: ProjectManagementComponent},
    {path: 'lms-courses', component: LmsCoursesComponent},
    {path: 'crypto', component: CryptoComponent},
    {path: 'help-desk', component: HelpDeskComponent},
    {path: 'saas-app', component: SaasAppComponent},
    {path: 'chat', component: ChatComponent},
    {
        path: 'email',
        component: EmailComponent,
        children: [
            {path: '', component: EmailInboxComponent},
            {path: 'read', component: ReadEmailComponent},
            {path: 'compose', component: ComposeEmailComponent}
        ]
    },
    {
        path: 'file-manager',
        component: FileManagerComponent,
        children: [
            {path: '', component: ReportsComponent},
            {path: 'assets', component: FmAssetsComponent},
            {path: 'projects', component: FmProjectsComponent},
            {path: 'personal', component: FmPersonalComponent},
            {path: 'templates', component: FmTemplatesComponent},
            {path: 'documents', component: FmDocumentsComponent},
            {path: 'media', component: FmMediaComponent},
            {path: 'recent-files', component: FmRecentFilesComponent}
        ]
    },
    {path: 'manage-members', component: ToDoListComponent},
    {path: 'manage-groups', component: ManageGroupsComponent},
    {path: 'manage-tasks', component: ManageTasksComponent},
    {path: 'manage-categories', component: ManageCategoriesComponent},
    {path: 'task-details', component: TaskDetailsComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'task-entry', component: ContactsComponent},
    {
        path: 'contacts-list',
        component: ContactListComponent,
        children: [
            {path: '', component: MembersGridComponent},
            {path: 'members-grid-2', component: MembersGrid2Component},
            {path: 'members-list', component: MembersListComponent},
            {path: 'member-profile', component: MemberProfileComponent}
        ]
    },
    {path: 'invoice', component: InvoiceComponent},
    {path: 'invoice-details', component: InvoiceDetailsComponent},
    {
        path: 'projects',
        component: ProjectsComponent,
        children: [
            {path: '', component: PProjectsComponent},
            {path: 'clients', component: PClientsComponent},
            {path: 'team', component: PTeamComponent},
            {path: 'kanban-board', component: PKanbanBoardComponent},
            {path: 'tasks', component: PTasksComponent},
            {path: 'users', component: PUsersComponent},
            {path: 'project-create', component: ProjectCreateComponent}
        ]
    },
    {path: 'courses', component: CoursesComponent},
    {path: 'course-details', component: CourseDetailsComponent},
    {path: 'lesson-preview', component: LessonPreviewComponent},
    {
        path: 'analytics-page',
        component: AnalyticsPageComponent,
        children: [
            {path: '', component: AnalyticsCustomersComponent},
            {path: 'reports', component: AnalyticsReportsComponent}
        ]
    },
    {
        path: 'ecommerce-page',
        component: EcommercePageComponent,
        children: [
            {path: '', component: ProductsComponent},
            {path: 'product-details', component: ProductDetailsComponent},
            {path: 'create', component: CreateProductComponent},
            {path: 'orders', component: ProductsOrdersComponent},
            {path: 'order-details', component: ProductsOrderDetailsComponent},
            {path: 'customers', component: ProductsCustomersComponent},
            {path: 'cart', component: ProductsCartComponent},
            {path: 'checkout', component: ProductsCheckoutComponent},
            {path: 'sellers', component: ProductSellersComponent}
        ]
    },
    {
        path: 'icons',
        component: IconsComponent,
        children: [
            {path: '', component: FlaticonComponent},
            {path: 'remixicon', component: RemixiconComponent},
            {path: 'material-symbols', component: MaterialSymbolsComponent},
            {path: 'material', component: MaterialIconsComponent}
        ]
    },
    {
        path: 'ui-kit',
        component: UiKitComponent,
        children: [
            {path: '', component: AlertsComponent},
            {path: 'autocomplete', component: AutocompleteComponent},
            {path: 'avatars', component: AvatarsComponent},
            {path: 'accordion', component: AccordionComponent},
            {path: 'badges', component: BadgesComponent},
            {path: 'breadcrumb', component: BreadcrumbComponent},
            {path: 'button-toggle', component: ButtonToggleComponent},
            {path: 'buttons', component: ButtonsComponent},
            {path: 'cards', component: CardsComponent},
            {path: 'carousels', component: CarouselsComponent},
            {path: 'checkbox', component: CheckboxComponent},
            {path: 'chips', component: ChipsComponent},
            {path: 'color-picker', component: ColorPickerComponent},
            {path: 'datepicker', component: DatepickerComponent},
            {path: 'dialog', component: DialogComponent},
            {path: 'divider', component: DividerComponent},
            {path: 'drag-drop', component: DragDropComponent},
            {path: 'expansion', component: ExpansionComponent},
            {path: 'form-field', component: FormFieldComponent},
            {path: 'grid', component: GridComponent},
            {path: 'images', component: ImagesComponent},
            {path: 'input', component: InputComponent},
            {path: 'list', component: ListComponent},
            {path: 'listbox', component: ListboxComponent},
            {path: 'menus', component: MenusComponent},
            {path: 'pagination', component: PaginationComponent},
            {path: 'progress-bar', component: ProgressBarComponent},
            {path: 'radio', component: RadioComponent},
            {path: 'select', component: SelectComponent},
            {path: 'sidenav', component: SidenavComponent},
            {path: 'slide-toggle', component: SlideToggleComponent},
            {path: 'slider', component: SliderComponent},
            {path: 'spacing', component: SpacingComponent},
            {path: 'snackbar', component: SnackbarComponent},
            {path: 'stepper', component: StepperComponent},
            {path: 'table', component: TableComponent},
            {path: 'tabs', component: TabsComponent},
            {path: 'toolbar', component: ToolbarComponent},
            {path: 'tooltip', component: TooltipComponent},
            {path: 'tree', component: TreeComponent},
            {path: 'typography', component: TypographyComponent},
            {path: 'videos', component: VideosComponent}
        ]
    },
    {
        path: 'tables',
        component: TablesComponent,
        children: [
            {path: '', component: BasicTableComponent},
            {path: 'data', component: DataTableComponent}
        ]
    },
    {
        path: 'charts',
        component: ChartsComponent,
        children: [
            {path: '', component: ApexchartsComponent},
            {path: 'echarts', component: EchartsComponent},
            {path: 'chartjs', component: ChartjsComponent}
        ]
    },
    {
        path: 'forms',
        component: FormsComponent,
        children: [
            {path: '', component: BasicFormComponent},
            {path: 'wizard', component: WizardFormComponent},
            {path: 'advanced', component: AdvancedFormComponent},
            {path: 'editors', component: EditorsComponent},
            {path: 'file-uploader', component: FileUploaderComponent}
        ]
    },
    {
        path: 'authentication',
        component: AuthenticationComponent,
        children: [
            {path: '', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {path: 'forgot-password', component: ForgotPasswordComponent},
            {path: 'reset-password', component: ResetPasswordComponent},
            {path: 'signin-signup', component: SigninSignupComponent},
            {path: 'logout', component: LogoutComponent},
            {path: 'confirm-mail', component: ConfirmMailComponent},
            {path: 'lock-screen', component: LockScreenComponent}
        ]
    },
    {path: 'pricing', component: PricingComponent},
    {path: 'timeline', component: TimelineComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'search', component: SearchComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'blank-page', component: BlankPageComponent},
    {path: 'error-500', component: InternalErrorComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'account', component: AccountComponent},
    {path: 'security', component: SecurityComponent},
    {path: 'connections', component: ConnectionsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];