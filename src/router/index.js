import Vue from "vue";
import Router from "vue-router";
import GeneralInformationPage from "../pages/GeneralInformationPage";
import GeneralInformationHistoryPage from "../pages/GeneralInformationHistoryPage";
import AddressObjectsPage from "../pages/AddressObjectsPage";
import WasteTypesPage from "../pages/WasteTypesPage";
import StandardsLimitsPage from "../pages/StandardsLimitsPage";
import TechnologiesPage from "../pages/TechnologiesPage";
import AgreementsPage from "../pages/AgreementsPage";
import WasteMovementPage from "../pages/WasteMovementPage";
import ReportsPage from "../pages/ReportsPage";

import ComponentsLibraryTitleDev from "../dev/ComponentsLibraryTitleDev";
import ComponentsLibraryTextDev from "../dev/ComponentsLibraryTextDev";
import ComponentsLibraryLinkDev from "../dev/ComponentsLibraryLinkDev";
import ComponentsLibraryFormRadioButtonDev from "../dev/ComponentsLibraryFormRadioButtonDev";
import ComponentsLibraryFormTextFieldDev from "../dev/ComponentsLibraryFormTextFieldDev";
import ComponentsLibraryFormSpoilerDev from "../dev/ComponentsLibraryFormSpoilerDev";
import ComponentsLibraryFormCheckboxDev from "../dev/ComponentsLibraryFormCheckboxDev";
import ComponentsLibraryButtonDev from "../dev/ComponentsLibraryButtonDev";
import ComponentsLibraryFormSelectFieldDev from "../dev/ComponentsLibraryFormSelectFieldDev";
import ComponentsLibraryIconDev from "../dev/ComponentsLibraryIconDev";
import ComponentsLibraryFormСontextMenuDev from "../dev/ComponentsLibraryFormСontextMenuDev";
import ComponentsLibraryModalDev from "../dev/ComponentsLibraryModalDev";
import ComponentsLibraryFormDatepickerFieldDev from "../dev/ComponentsLibraryFormDatepickerFieldDev";
import ComponentsLibraryTableDev from "../dev/ComponentsLibraryTableDev";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/general_information"
    },
    {
      path: "/general_information",
      name: "general_information",
      component: GeneralInformationPage
    },
    {
      path: "/general_information/history",
      name: "general_information-history",
      component: GeneralInformationHistoryPage
    },
    {
      path: "/address_objects",
      name: "address_objects",
      component: AddressObjectsPage
    },
    {
      path: "/waste_types",
      name: "waste_types",
      component: WasteTypesPage
    },
    {
      path: "/standards_limits",
      name: "standards_limits",
      component: StandardsLimitsPage
    },
    {
      path: "/technologies",
      name: "technologies",
      component: TechnologiesPage
    },
    {
      path: "/agreements",
      name: "agreements",
      component: AgreementsPage
    },
    {
      path: "/waste_movement",
      name: "waste_movement",
      component: WasteMovementPage
    },
    {
      path: "/reports",
      name: "reports",
      component: ReportsPage
    },
    // dev
    {
      path: "/components_library/title",
      name: "components_library_title",
      component: ComponentsLibraryTitleDev
    },
    {
      path: "/components_library/text",
      name: "components_library_text",
      component: ComponentsLibraryTextDev
    },
    {
      path: "/components_library/link",
      name: "components_library_link",
      component: ComponentsLibraryLinkDev
    },
    {
      path: "/components_library/form-radio",
      name: "components_library_form-radio",
      component: ComponentsLibraryFormRadioButtonDev
    },
    ,
    {
      path: "/components_library/form-input",
      name: "components_library_form-input",
      component: ComponentsLibraryFormTextFieldDev
    },
    {
      path: "/components_library/form-spoiler",
      name: "components_library_form-spoiler",
      component: ComponentsLibraryFormSpoilerDev
    },
    {
      path: "/components_library/form-checkbox",
      name: "components_library_form_checkbox",
      component: ComponentsLibraryFormCheckboxDev
    },
    {
      path: "/components_library/button",
      name: "components_library_button",
      component: ComponentsLibraryButtonDev
    },
    {
      path: "/components_library/form-select-field",
      name: "components_library_form-select-field",
      component: ComponentsLibraryFormSelectFieldDev
    },
    {
      path: "/components_library/icon",
      name: "components_library_icon",
      component: ComponentsLibraryIconDev
    },
    {
      path: "/components_library/context-menu",
      name: "components_library_context-menu",
      component: ComponentsLibraryFormСontextMenuDev
    },
    {
      path: "/components_library/modal",
      name: "components_library_modal",
      component: ComponentsLibraryModalDev
    },
    {
      path: "/components_library/form-datepicker",
      name: "components_library_form-datepicker",
      component: ComponentsLibraryFormDatepickerFieldDev
    },
    {
      path: "/components_library/table",
      name: "components_library_table",
      component: ComponentsLibraryTableDev
    }
  ]
})
